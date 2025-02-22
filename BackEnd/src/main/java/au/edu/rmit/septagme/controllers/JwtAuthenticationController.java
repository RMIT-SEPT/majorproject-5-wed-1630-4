package au.edu.rmit.septagme.controllers;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import au.edu.rmit.septagme.configurations.JwtTokenUtil;
import au.edu.rmit.septagme.models.JwtRequest;
import au.edu.rmit.septagme.models.JwtResponse;
import au.edu.rmit.septagme.models.UserEntity;
import au.edu.rmit.septagme.services.UserEntityDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin
public class JwtAuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserEntityDetailsService userDetailsService;


    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@Valid @RequestBody JwtRequest authenticationRequest) throws Exception {
        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        final UserEntity user = userDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());
        final String token = jwtTokenUtil.generateToken(user);
        return ResponseEntity.ok(new JwtResponse(token));
    }

    @RequestMapping(value = "/isLoggedIn", method = RequestMethod.GET)
    public Map<String, String> checkLoggedInUser(@RequestHeader(required = false, value = "Authorization") String jwt) throws Exception {
        HashMap<String, String> map = new HashMap<>();

        // no jwt provided
        if (jwt == null){
            map.put("status", "not logged in");
            return map;
        }
        // delete Bearer part
        jwt = jwt.substring(7);

        if (jwtTokenUtil.isTokenExpired(jwt)){
            map.put("status", "not logged in");
            return map;
        }

        String username = jwtTokenUtil.getUsernameFromToken(jwt);
        UserEntity user = this.userDetailsService.loadUserByUsername(username);

        // validate jwt
        Boolean isLoggedIn = jwtTokenUtil.validateToken(jwt, user);

        if (isLoggedIn){
            map.put("status", "logged in");
            map.put("role", user.getRole().name());
            return map;
        }

        // expired jwt
        map.put("status", "not logged in");
        return map;
    }
    
    @RequestMapping(value = "/profile", method = RequestMethod.GET)
    public Map<String, String> getProfile(@RequestHeader(required = false, value = "Authorization") String jwt) throws Exception {
        HashMap<String, String> map = new HashMap<>();

        // no jwt provided
        if (jwt == null){
            map.put("status", "not logged in");
            return map;
        }
        // delete Bearer part
        jwt = jwt.substring(7);

        String username = jwtTokenUtil.getUsernameFromToken(jwt);
        UserEntity user = this.userDetailsService.loadUserByUsername(username);

        // validate jwt
        Boolean isLoggedIn = jwtTokenUtil.validateToken(jwt, user);

        if (isLoggedIn){
            map.put("status", "logged in");
            map.put("role", user.getRole().name());
            map.put("username", user.getUsername());
            map.put("phone", user.getPhone());
            map.put("address", user.getAddress());
            return map;
        }

        // expired jwt
        map.put("status", "not logged in");
        return map;
    }

    //update user profile
    @PostMapping(value = "/profileEdit")
    public ResponseEntity updateProfile(@RequestBody UserEntity userUpdates, @RequestHeader(required = false, value = "Authorization") String jwt) throws Exception {
        HashMap<String, String> map = new HashMap<>();

        // no jwt provided
        if (jwt == null){
            map.put("status", "not logged in");
            return new ResponseEntity(map, HttpStatus.BAD_REQUEST);
        }
        // delete Bearer part
        jwt = jwt.substring(7);

        String username = jwtTokenUtil.getUsernameFromToken(jwt);
        UserEntity user = this.userDetailsService.loadUserByUsername(username);

        // validate jwt
        Boolean isLoggedIn = jwtTokenUtil.validateToken(jwt, user);

        if (isLoggedIn){
        	user.setUsername(userUpdates.getUsername());
        	user.setPhone(userUpdates.getPhone());
        	user.setAddress(userUpdates.getAddress());
        	
        	this.userDetailsService.updateUserDetails(username, user);
            map.put("status", "Updated");
            map.put("role", user.getRole().name());

            return new ResponseEntity(map, HttpStatus.OK);
        }

        // expired jwt
        map.put("status", "not logged in");
        return new ResponseEntity(map, HttpStatus.BAD_REQUEST);
    }


    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}