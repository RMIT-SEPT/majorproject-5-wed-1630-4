package au.edu.rmit.septagme.controllers;

import au.edu.rmit.septagme.models.Booking;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@ExtendWith(SpringExtension.class)
@AutoConfigureMockMvc
public class BookingControllerTest {


    @Autowired
    private MockMvc mvc;

    @Autowired
    private WebApplicationContext wac;

    private Booking booking;

    @Autowired
    private BookingController bookingrepo;


    @Test
    public  void contextLoads(){

    }

    //Test of booking id 7
    @Test
    public void testReturnBookings() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/bookings/7")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

    }

    //testing booking 4
    @Test
    public void testReturnBookings4() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/bookings/4" +
                "")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

    }

    @Test
    public void testReturnBookings100() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/bookings/100" +
                "")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());

    }


    @Test
    public void testReturnAllBookings2() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/bookings/index" +
                "")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

    }


    @Test
    public void testDeleteBooking1() throws Exception {
        this.bookingrepo.deleteBooking((long) 1);
        mvc.perform(MockMvcRequestBuilders.get("/bookings/1" +
                "")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());

    }


    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
