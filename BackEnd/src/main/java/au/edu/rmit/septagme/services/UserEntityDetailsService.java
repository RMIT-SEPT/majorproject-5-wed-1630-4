package au.edu.rmit.septagme.services;

import au.edu.rmit.septagme.models.UserEntity;
import au.edu.rmit.septagme.repositories.UserRepository;
import au.edu.rmit.septagme.models.UserModelDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserEntityDetailsService implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {

        Optional<UserEntity> user = userRepository.findByUsername(s);



        user.orElseThrow(() -> new UsernameNotFoundException("Not found: " + s));


        System.out.println(user.map(UserModelDetails::new).get().getAuthorities());
        return user.map(UserModelDetails::new).get();
    }
}
