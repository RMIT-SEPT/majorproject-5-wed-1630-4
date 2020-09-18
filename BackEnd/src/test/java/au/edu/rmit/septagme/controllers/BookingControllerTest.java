package au.edu.rmit.septagme.controllers;

import au.edu.rmit.septagme.models.Booking;
import au.edu.rmit.septagme.models.UserEntity;
import au.edu.rmit.septagme.repositories.BookingRepository;
import au.edu.rmit.septagme.repositories.UserRepository;
import org.junit.BeforeClass;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@ExtendWith(SpringExtension.class)
@AutoConfigureMockMvc
public class BookingControllerTest {

//    @Autowired
//    private TestRestTemplate restTemplate;
//
//    @LocalServerPort
//    private int port;
//
//    private String getRootUrl(){
//        return "http://localhost:" + port;
//    }

    @Autowired
    private MockMvc mvc;

    @Autowired
    private WebApplicationContext wac;

    private Booking booking;

    @Autowired
    private BookingController bookingrepo;


    private int i = 0;

    @BeforeClass
    public void setup() {
        this.mvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
    }

//    @BeforeEach
//    public void setupBeforeEachTest(){
//        this.booking = new Booking("user"+i, ""+i);
//        ++i;
//    }

    @Test
    public  void contextLoads(){

    }

//    @Test
//    public

    //test of booking to see if all bookings in data returns
    @Test
    public void testReturnAllBookings() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/bookings/7")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

    }

//    @Test
//    public void testCreateBooking(){
//        this.booking.setCustomer(1);
//        booking.setEmployee(2);
//        booking.setService(2);
//        booking.setTime_slot("1000");
//
//    }

//    testing to see if create booking method works. returns null pointer exception.
//    @Test
//    public void testCreateBooking1(){
//    booking.setCustomer(1);
//    booking.setEmployee("employee");
//    booking.setService("plumbing");
//    booking.setTime_slot("tuesday");
//    }

//    @Test
//    public void testgetBookingById() throws Exception {
//        bc.getBookingById((long) 1);
//    }

//     b.setCustomer(booking.getCustomer());
//        b.setTime_slot(booking.getTime_slot());
//        b.setService(booking.getService());
//        b.setEmployee(booking.getEmployee());


}
