package au.edu.rmit.septagme.repositories;


@Repository
public interface BookingRepository extends CrudRepository<UserEntity, Integer> {
    UserEntity findByUsername(String username);
    UserEntity findByName(String name);
    BookingEntity findByService(Service service);
    BookingEntity findByDate(String time_slot);
    EmployeeEntity findbyWorker(Worker worker)
}