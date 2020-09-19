package au.edu.rmit.septagme.controllers;

import au.edu.rmit.septagme.models.Booking;
import au.edu.rmit.septagme.repositories.BookingRepository;


import au.edu.rmit.septagme.serializers.BookingSerializer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class BookingController {
    @Autowired
    BookingRepository bookings;

//    booking arraylist reveal all
//    @GetMapping("/bookings/index")
//    @RequestMapping(method = RequestMethod.GET)
    @GetMapping(value = "/bookings/index")
    public Iterable<Booking> index() {
        Iterable<Booking> booking = bookings.findAll();
        return booking;
    }

//    @GetMapping("/bookings/index")
//    public ResponseEntity getAllBookings() {
//        Iterable<Booking> booking = bookings.findAll();
//        return ResponseEntity(booking, HttpStatus.OK);
//    }

//
//    @RequestMapping(value = "/bookings/display", method = RequestMethod.GET)
//    public ResponseEntity<BookingSerializer> displayBooking(){
//        Iterable<Booking> allBookings = bookings.findAll();
//        if (allBookings==null){
//            return new ResponseEntity("No Bookings Exists", HttpStatus.NOT_FOUND);
//        }
//
//        return ResponseEntity.ok().body(new BookingSerializer((Booking) allBookings.iterator()));
//    }

    //Getting booking by id
    //throws exception if id cannot be found
//    @GetMapping("/bookings/{id}")
    @RequestMapping(value = "/bookings/{id}", method = RequestMethod.GET)
    public ResponseEntity<BookingSerializer> getBookingById(@PathVariable("id") Long id)
        throws Exception {
        Optional<Booking> booking = bookings.findById(id);
   //     System.out.println(booking.get().getEmployee().getName());
        if (booking.isPresent()) {
            return ResponseEntity.ok().body(new BookingSerializer(booking.get()));
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

    //attempt 1 at booking to see if we can just save current bookings
    @PostMapping(value = "/bookings/create")
    public ResponseEntity createBooking(@RequestBody Booking booking){
        Booking b = new Booking();
        b.setCustomer(booking.getCustomer());
        b.setTime_slot(booking.getTime_slot());
        b.setService(booking.getService());
        b.setEmployee(booking.getEmployee());
        bookings.save(b);
        return new ResponseEntity(b, HttpStatus.OK);
    }

    //deleting code without 48 hour parameter
    @DeleteMapping(value = "/booking/delete/{id}")
    public Object deleteBooking(@PathVariable("id") Long id) throws Exception{
        Optional<Booking> booking = bookings.findById(id);

        if (booking.isPresent()) {
            bookings.delete(booking.get());
            Map<String, Boolean> response = new HashMap<>();
            response.put("deleted",Boolean.TRUE);
            return response;
        }
        return "No booking found";
    }

    //attempt 2 at booking method trying to add booking
//    @PostMapping(path="/booking")
//    public ResponseEntity addBooking(@RequestBody Booking booking){
////        Booking b = new Booking();
////
////        b.setCustomer(booking.getCustomer());
////        b.setTime_slot(booking.getTime_slot());
////        b.setService(booking.getService());
////        b.setEmployee(booking.getEmployee());
//        //need to save to user repsoityory, who ever is logged in
//        return  new ResponseEntity(b, HttpStatus.OK);
//    }

}