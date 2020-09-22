package au.edu.rmit.septagme.controllers;

import au.edu.rmit.septagme.configurations.JwtTokenUtil;
import au.edu.rmit.septagme.models.EmployeeShift;
import au.edu.rmit.septagme.models.UserEntity;
import au.edu.rmit.septagme.models.helpers.UserRole;
import au.edu.rmit.septagme.repositories.EmployeeShiftRepository;
import au.edu.rmit.septagme.repositories.UserRepository;
import au.edu.rmit.septagme.serializers.EmployeeSerializer;
import au.edu.rmit.septagme.serializers.EmployeeShiftSerializer;
import au.edu.rmit.septagme.serializers.UserSerializer;
import au.edu.rmit.septagme.services.UserEntityDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
public class AdminController {


    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserEntityDetailsService userDetailsService;

    private UserEntity admin;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmployeeShiftRepository employeeShiftRepository;

    // assign work times to workers
    @PostMapping(
            value = "/employees/{id}/work_times", consumes = "application/json", produces = "application/json")
    public ResponseEntity<EmployeeShiftSerializer> addWorkTimesToEmployee(@Valid @PathVariable(value="id") Long id,
                                                                 @RequestHeader(required = true, value = "Authorization") String jwt,
                                                                 @RequestBody EmployeeShift[] employeeShifts){

        // checking whos assigning work times
        boolean isAdmin = isAdmin(jwt);

        if (!isAdmin){
            return new ResponseEntity("UNAUTHORIZED", HttpStatus.UNAUTHORIZED);
        }

        // get employee by id from url
        UserEntity emp = findEmployee(id);

        //checking provided id in url is worker
        if (emp == null || emp.getRole() != UserRole.WORKER){
            return new ResponseEntity("{\"errors\": \"Employee not provided!\"}", HttpStatus.UNAUTHORIZED);
        }

        //checking worker works for a service and the owner of service is his manger
        if (emp.getService() == null || emp.getService().getOwner() != this.admin){
            return new ResponseEntity("{\"errors\": \"Employee not working in your service!\"}", HttpStatus.UNAUTHORIZED);
        }

        HashMap<String, List<EmployeeShiftSerializer>> map = new HashMap<>();
        List<EmployeeShiftSerializer> employeeShiftsList = new ArrayList<EmployeeShiftSerializer>();
        map.put("work times", employeeShiftsList);

        // save working times
        for (EmployeeShift employeeShift: employeeShifts) {
            employeeShift.setUser(emp);
            if (employeeShiftRepository.save(employeeShift) != null){
                employeeShiftsList.add(new EmployeeShiftSerializer(employeeShift));
            }
        }
        return new ResponseEntity(map, HttpStatus.CREATED);
    }

    // assign work times to workers
    @GetMapping(
            value = "/employees", consumes = "application/json", produces = "application/json")
    public ResponseEntity<UserSerializer> getEmployees(@RequestHeader(required = true, value = "Authorization") String jwt){

        // checking for is current user an admin
        boolean isAdmin = isAdmin(jwt);

        if (!isAdmin){
            return new ResponseEntity("UNAUTHORIZED", HttpStatus.UNAUTHORIZED);
        }

        if (admin.getService_owned() == null){
            return new ResponseEntity("{\"errors\": \"You don not have a service!\"}", HttpStatus.UNAUTHORIZED);
        }

        List<EmployeeSerializer> users = new ArrayList<EmployeeSerializer>();
        for (UserEntity user:
             userRepository.findAllByService(this.admin.getService_owned())) {
            users.add(new EmployeeSerializer(user));
        }
        return new ResponseEntity(users, HttpStatus.OK);
    }

    private boolean isAdmin(String jwt){
        // no jwt provided
        if (jwt == null){
            return false;
        }
        // delete Bearer part
        jwt = jwt.substring(7);

        String username = jwtTokenUtil.getUsernameFromToken(jwt);
        this.admin = this.userDetailsService.loadUserByUsername(username);

        return this.admin.getRole() == UserRole.ADMIN;
    }

    private UserEntity findEmployee(Long id){
        Optional<UserEntity> emp = userRepository.findById(id);
        if (emp.isPresent()){
            return emp.get();
        }
        return null;
    }
}
