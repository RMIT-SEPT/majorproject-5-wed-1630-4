package au.edu.rmit.septagme.controllers;

import au.edu.rmit.septagme.models.UserEntity;
import au.edu.rmit.septagme.repositories.UserRepository;
import au.edu.rmit.septagme.serializers.UserSerializer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class UserController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @PostMapping(
            value = "/signup", consumes = "application/json", produces = "application/json")
    public ResponseEntity<UserSerializer> createUser(@Valid @RequestBody UserEntity user) {

        // encode password
        final String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        // return user & res code 201
        return new ResponseEntity(new UserSerializer(userRepository.save(user)), HttpStatus.CREATED);
    }
}
