package au.edu.rmit.septagme.controllers;

import au.edu.rmit.septagme.models.UserEntity;
import au.edu.rmit.septagme.repositories.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.util.NestedServletException;

import java.sql.SQLException;
import java.util.Random;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private WebApplicationContext wac;

    private UserEntity user;

    @Autowired
    private UserRepository userRepository;

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

    @Test
    void unsuccessfulCustomerSignUpMissingName() throws Exception {
        this.user.setName(null);
        mvc.perform(MockMvcRequestBuilders.post("/signup")
                .content(asJsonString(user))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

    @Test
    void unsuccessfulCustomerSignUpMissingUsername() throws Exception {
        this.user.setUsername(null);
        mvc.perform(MockMvcRequestBuilders.post("/signup")
                .content(asJsonString(user))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

    @Test
    void unsuccessfulCustomerSignUpExceedsMaxLengthUsername() throws Exception {
        this.user.setUsername("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
        mvc.perform(MockMvcRequestBuilders.post("/signup")
                .content(asJsonString(user))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

    @Test
    void unsuccessfulCustomerSignUpMinLengthUsername() throws Exception {
        this.user.setUsername("mmm");
        mvc.perform(MockMvcRequestBuilders.post("/signup")
                .content(asJsonString(user))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

    @Test
    void unsuccessfulCustomerSignUpMissingPassword() throws Exception {
        this.user.setPassword(null);
        mvc.perform(MockMvcRequestBuilders.post("/signup")
                .content(asJsonString(user))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

    @Test
    void unsuccessfulCustomerSignUpMinPassword() throws Exception {
        this.user.setPassword("12345");
        mvc.perform(MockMvcRequestBuilders.post("/signup")
                .content(asJsonString(user))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

//    @Test//(expected = Exception.class)
//    public void unsuccessfulCustomerSignUpDuplicateUsernames() throws Exception, DataIntegrityViolationException {
//        mvc.perform(MockMvcRequestBuilders.post("/signup")
//                .content(asJsonString(user))
//                .contentType(MediaType.APPLICATION_JSON)
//                .accept(MediaType.APPLICATION_JSON));
//        try {
//            mvc.perform(MockMvcRequestBuilders.post("/signup")
//                    .content(asJsonString(user))
//                    .contentType(MediaType.APPLICATION_JSON)
//                    .accept(MediaType.APPLICATION_JSON));
//        } catch(Exception ex){
//            assertNotNull(ex);
//        }
//
//    }

    @Test
    public void successfulCustomerSignUp() throws Exception {

        Random ran = new Random();
        int rand = ran.nextInt();

        this.user = new UserEntity("user"+rand, "customer"+rand, "123123");

        mvc.perform(MockMvcRequestBuilders.post("/signup")
                .content(asJsonString(user))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated());
        userRepository.delete(user);

    }

    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}