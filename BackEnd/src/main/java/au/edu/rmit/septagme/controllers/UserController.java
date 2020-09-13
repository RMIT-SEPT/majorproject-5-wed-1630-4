package au.edu.rmit.septagme.controllers;

import au.edu.rmit.septagme.models.UserEntity;
import au.edu.rmit.septagme.repositories.UserRepository;
import au.edu.rmit.septagme.serializers.UserSerializer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.sql.SQLIntegrityConstraintViolationException;

@RestController
public class UserController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @PostMapping(
            value = "/signup", consumes = "application/json", produces = "application/json")
    public ResponseEntity<UserSerializer> createUser(@Valid @RequestBody UserEntity user){


        // encode password
        final String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        try {
            if (userRepository.findByUsername(user.getUsername()) != null){
                throw new  SQLIntegrityConstraintViolationException("Username already exists");
            }
        }catch (SQLIntegrityConstraintViolationException e){
            return new ResponseEntity("{ \"errors\": \"Username already exists\"}", HttpStatus.BAD_REQUEST);
        }catch(Exception e) {
            return new ResponseEntity("{ \"errors\": \"Something went wrong\"}", HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return new ResponseEntity(new UserSerializer(userRepository.save(user)), HttpStatus.CREATED);

        // return user & res code 201

    }
}
