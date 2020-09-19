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

    //get all created bookings in the database
    @GetMapping(value = "/bookings/index")
    public ResponseEntity getAllBookings() {
        Iterable<Booking> booking = bookings.findAll();

        return new ResponseEntity(booking, HttpStatus.OK);
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

    //attempt 1 at booking to see if we can just save current bookings
    @PostMapping(value = "/bookings/create")
    public ResponseEntity createBooking(@RequestBody Booking booking){
        Booking b = new Booking();
        b.setCustomer(booking.getCustomer());
        b.setTime_slot(booking.getTime_slot());
        b.setService(booking.getService());
        b.setEmployee(booking.getEmployee());
        bookings.save(b);
        return new ResponseEntity(b, HttpStatus.CREATED);
    }

    //deleting code without 48 hour parameter
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