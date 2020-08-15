package au.edu.rmit.septagme;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;

@SpringBootTest
@ComponentScan({ "au.edu.rmit.septagme.repositories" })
class SeptAgmeApplicationTests {

    @Test
    void contextLoads() {
    }

}
