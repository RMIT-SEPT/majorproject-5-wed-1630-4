package au.edu.rmit.septagme.controllers;

import au.edu.rmit.septagme.models.Booking;
import au.edu.rmit.septagme.models.UserEntity;
import au.edu.rmit.septagme.models.helpers.BookingStatus;
import au.edu.rmit.septagme.repositories.BookingRepository;
import au.edu.rmit.septagme.serializers.BookingSerializer;
import au.edu.rmit.septagme.services.UserEntityDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import au.edu.rmit.septagme.configurations.JwtTokenUtil;
import au.edu.rmit.septagme.models.JwtRequest;
import au.edu.rmit.septagme.models.JwtResponse;
import au.edu.rmit.septagme.models.Service;
import au.edu.rmit.septagme.models.UserEntity;

import java.sql.Timestamp;
import java.util.*;

@RestController
public class BookingController {

    @Autowired
    BookingRepository bookings;
    
    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserEntityDetailsService userDetailsService;

    //get selected details of all bookings
    @GetMapping(value = "/bookings/index")
    public ResponseEntity getBookings() {

        Iterable<Booking> booking = bookings.findAll();
       
        ArrayList<HashMap> bookingsObject= new ArrayList<HashMap>();
        for(Booking b: booking){
            HashMap<String, String> individualMap = new HashMap<>();
        	 
        	 individualMap.put("id", b.getId().toString());
             individualMap.put("service", b.getService().getName());
             individualMap.put("dateTime", b.getTime_slot());
             individualMap.put("description", b.getService().getDescription());
             individualMap.put("worker", b.getEmployee().getUsername());
             individualMap.put("status", b.getStatus().toString());
             
             bookingsObject.add(individualMap);
        }
        

        return new ResponseEntity(bookingsObject, HttpStatus.OK);
    }

    //Getting booking by id
    @RequestMapping(value = "/bookings/{id}", method = RequestMethod.GET)
    public ResponseEntity<BookingSerializer> getBookingById(@PathVariable("id") Long id)
        throws Exception {
    	
        Optional<Booking> booking = bookings.findById(id);

        if (booking.isPresent()) {
            return ResponseEntity.ok().body(new BookingSerializer(booking.get()));
        }
        return new ResponseEntity("This Booking does not exist.", HttpStatus.NOT_FOUND);
        }

    //logged in users make booking
    @PostMapping(value = "/bookings/make")
    public ResponseEntity addBooking(@RequestBody Booking booking, @RequestHeader(required = false, value = "Authorization") String jwt) throws Exception {
        HashMap<String, String> map = new HashMap<>();
        Optional<Booking> makeBooking = bookings.findById(booking.getId());
        
        if (makeBooking.isPresent()) {
        	if(makeBooking.get().getCustomer()!=null) {
        		 map.put("status", "unsucessful");
        		 map.put("errors", "booking unavilable");
                 return new ResponseEntity(map, HttpStatus.BAD_REQUEST);
        	}
        }

        // no jwt provided
        if (jwt == null){
            map.put("status", "not logged in");
            return new ResponseEntity(map, HttpStatus.BAD_REQUEST);
        }
        // delete Bearer part
        jwt = jwt.substring(7);

        String username = jwtTokenUtil.getUsernameFromToken(jwt);
        UserEntity user = this.userDetailsService.loadUserByUsername(username);
        
        // validate jwt and make booking if user is valid
        if (jwtTokenUtil.validateToken(jwt, user)){
        	booking.setCustomer(user);
        	booking.setStatus(BookingStatus.BOOKED);
        	bookings.save(booking);
        	
            map.put("status", "Successful");

            return new ResponseEntity(map, HttpStatus.OK);

        }

        // expired jwt
        map.put("status", "not logged in");
        return new ResponseEntity(map, HttpStatus.BAD_REQUEST);
    }
    
    //cancel code under 48 hour
    @PostMapping(value = "/bookings/cancel")
    public ResponseEntity cancelBooking(@RequestBody Booking booking, @RequestHeader(required = false, value = "Authorization") String jwt) throws Exception {
        Optional<Booking> bookingToCancel = bookings.findById(booking.getId());
        
        //find booking with id
        if (!bookingToCancel.isPresent()) {
            return new ResponseEntity("Booking ID does not exist", HttpStatus.NOT_FOUND);
            
        //check if booking is booked
        }else if(bookingToCancel.get().getCustomer()==null) {
            return new ResponseEntity("No booking to cancel", HttpStatus.NOT_FOUND);
        }else if (bookingToCancel.isPresent()){
//        	
        	//get time stamps of current time and booking time
        	long timeString = Long.parseLong(bookingToCancel.get().getTime_slot());
            Timestamp bookingTime = new Timestamp(timeString);
            Timestamp currentTime = new Timestamp(System.currentTimeMillis());
            //compare the time
            long differenceInMilliseconds = bookingTime.getTime() - currentTime.getTime();
    		int differenceInSeconds = (int) differenceInMilliseconds / 1000;
    		int hours = differenceInSeconds / 3600;
    		
//    		less than 48 hours reject else accept
    		if(hours<48) {
                return new ResponseEntity("Less than 48 hours: Unable to cancel", HttpStatus.NOT_MODIFIED);
    		}else {
    			bookingToCancel.get().setCustomer(null);
    			bookingToCancel.get().setStatus(BookingStatus.CANCELLED);
            	bookings.save(bookingToCancel.get());
    	        return new ResponseEntity("Delete Sucessful.", HttpStatus.OK);

    		}
        }
       
        //unknown errors
        return new ResponseEntity("Delete Unsucessful.", HttpStatus.BAD_REQUEST);
    }

    //deleting booking record
    @DeleteMapping(value = "/bookings/delete/{id}")
    public ResponseEntity deleteBooking(@PathVariable("id") Long id) {
        Optional<Booking> booking = bookings.findById(id);

        if (booking == null) {
            return new ResponseEntity(" Booking ID does not exist", HttpStatus.NOT_FOUND);
        }
        bookings.deleteById(id);
        return new ResponseEntity("Booking deleted successfully.", HttpStatus.OK);
    }

}