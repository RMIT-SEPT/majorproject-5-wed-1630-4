package au.edu.rmit.septagme.controllers;

import au.edu.rmit.septagme.models.Booking;
import au.edu.rmit.septagme.repositories.BookingRepository;


import au.edu.rmit.septagme.serializers.BookingSerializer;
import com.sun.xml.bind.v2.model.core.ID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.Optional;

@RestController
//@RequestMapping(value = "/bookings")
public class BookingController {
    @Autowired
    BookingRepository bookings;

    //booking arraylist reveal all
//    @GetMapping("/bookings")
//    @RequestMapping(method = RequestMethod.GET)
//    public Iterable<Booking> index() {
//        Iterable<Booking> booking = bookings.findAll();
//        return booking;
//    }

    //Getting booking by id
    //throws exception if id cannot be found
//    @GetMapping("/bookings/{id}")
    @RequestMapping(path = "/bookings/{id}", method = RequestMethod.GET)
    public ResponseEntity<BookingSerializer> getBookingById(@PathVariable("id") Long id)
        throws Exception {
        Optional<Booking> booking = bookings.findById(id);
        //System.out.println(booking.get().getEmployee().getName());
        if (booking.isPresent()) {
            return ResponseEntity.ok().body(new BookingSerializer(booking.get()));
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

    //attempt 1 at booking to see if we can just save current bookings
    @PostMapping("/bookings")
    public Booking createBooking(@Valid @RequestBody Booking booking){
        return  bookings.save(booking);
 //       return  new ResponseEntity(b, HttpStatus.OK);

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