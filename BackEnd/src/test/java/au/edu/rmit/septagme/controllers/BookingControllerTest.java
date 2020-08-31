package au.edu.rmit.septagme.controllers;

import au.edu.rmit.septagme.models.UserEntity;
import au.edu.rmit.septagme.repositories.BookingRepository;
import au.edu.rmit.septagme.repositories.UserRepository;
import org.junit.BeforeClass;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
public class BookingControllerTest {
    @Autowired
    private MockMvc mvc;

    @Autowired
    private WebApplicationContext wac;

    private UserEntity user;

    @Autowired
    private BookingRepository bookingRepository;

    private int i = 0;

    @BeforeClass
    public void setup() {
        this.mvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
    }

    @BeforeEach
    public void setupBeforeEachTest(){
        this.user = new UserEntity("user"+i, "customer"+i, "123123");
        ++i;
    }

}
