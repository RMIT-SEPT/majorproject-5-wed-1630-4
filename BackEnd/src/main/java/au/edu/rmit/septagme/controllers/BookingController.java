package au.edu.rmit.septagme.controllers;

import au.edu.rmit.septagme.models.Booking;
import au.edu.rmit.septagme.repositories.BookingRepository;


import au.edu.rmit.septagme.serializers.BookingSerializer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
//@RequestMapping(value = "/bookings")
public class BookingController {
    @Autowired
    BookingRepository bookings;

//    //booking arraylist
//    @RequestMapping(method = RequestMethod.GET)
//    public Iterable<Booking> index(Model model) {
//        Iterable<Booking> booking = bookings.findAll();
////       /* UserEntity customer = getId(customer);
////        List<Booking> bookings = new ArrayList(<booking>);
////        Iterator<Booking> it = ((CrudRepository<Booking, Integer>) bookings).findAll().iterator();
////        while(it.hasNext()){
////            Booking book = it.next();
////            if(book.Booking.getId()==customer.getId()){
////                bookings.add(book);
////            }
////        }
////        model.addAttribute("bookings", bookings);
////        */
////        System.out.println(booking);
//        return booking;
//    }

    @PostMapping(
            value = "/bookings", consumes = "application/json", produces = "application/json")
    public ResponseEntity<BookingSerializer> createBooking(@Valid @RequestBody Booking booking) {
        bookings.findAll();
        // return booking
        return new ResponseEntity(new BookingSerializer(bookings.save(booking)), HttpStatus.CREATED);

    }

}