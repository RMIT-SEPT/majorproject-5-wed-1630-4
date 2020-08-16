package au.edu.rmit.septagme.repositories;

import au.edu.rmit.septagme.models.UserEntity;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

//@ComponentScan({ "au.edu.rmit.septagme.repositories" })
@Repository
public interface UserRepository extends CrudRepository<UserEntity, Integer> {
    UserEntity findByUsername(String username);
    UserEntity findByName(String name);
}
