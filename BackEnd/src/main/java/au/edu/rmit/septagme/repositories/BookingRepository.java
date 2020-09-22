package au.edu.rmit.septagme.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import au.edu.rmit.septagme.models.Booking;

import au.edu.rmit.septagme.models.Booking;
import au.edu.rmit.septagme.models.Service;
import au.edu.rmit.septagme.models.UserEntity;

@Repository
public interface BookingRepository extends CrudRepository<Booking, Long> {

}