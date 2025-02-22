package au.edu.rmit.septagme.services;

import au.edu.rmit.septagme.models.UserEntity;
import au.edu.rmit.septagme.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserEntityDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserEntity loadUserByUsername(String s) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByUsername(s);
        if(user == null) new UsernameNotFoundException("Not found: " + s);

        return user;
    }
    
    public void updateUserDetails(String username, UserEntity userUpdates) {
    	UserEntity user = userRepository.findByUsername(username); 
    	user.setUsername(userUpdates.getUsername());
    	user.setPhone(userUpdates.getPhone());
    	user.setAddress(userUpdates.getAddress());
    	userRepository.save(user);
    }
}
