package au.edu.rmit.septagme.models;

import au.edu.rmit.septagme.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@RunWith(SpringRunner.class)
@Transactional
class UserEntityTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    void whenSaved_thenFindsByName() {
        userRepository.save(new UserEntity("user1", "user1", "123123"));

        // look for created user
        UserEntity user = userRepository.findByName("user1");
        assertThat(user).isNotNull();

        //delete created user
//        userRepository.delete(user);
//        //check if still exists
//        assertThat(userRepository.findByName("user1")).isNull();
    }
}