package au.edu.rmit.septagme.models;

import au.edu.rmit.septagme.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureDataJpa;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
//@SpringBootTest
@AutoConfigureDataJpa
//@AutoConfigureMockMvc
@DataJpaTest
@TestPropertySource(properties = {
        "spring.jpa.hibernate.ddl-auto=validate"
})
class UserEntityTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    void whenSaved_thenFindsByName() {
        userRepository.save(new UserEntity("user1", "user1", "123123"));
        assertThat(userRepository.findByName("user1")).isNotNull();
    }
}