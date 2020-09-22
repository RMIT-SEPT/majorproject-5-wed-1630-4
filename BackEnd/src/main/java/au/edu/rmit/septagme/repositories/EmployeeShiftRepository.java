package au.edu.rmit.septagme.repositories;

import au.edu.rmit.septagme.models.EmployeeShift;
import au.edu.rmit.septagme.models.UserEntity;
import org.springframework.data.repository.CrudRepository;

//@Repository
public interface EmployeeShiftRepository extends CrudRepository<EmployeeShift, Long> {
}
