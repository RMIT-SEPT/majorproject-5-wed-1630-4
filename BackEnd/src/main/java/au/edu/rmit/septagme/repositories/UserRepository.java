package au.edu.rmit.septagme.repositories;

import au.edu.rmit.septagme.models.UserEntity;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserEntity, Integer> {
    UserEntity findByUsername(String username);
}
