package au.edu.rmit.septagme.serializers;

import au.edu.rmit.septagme.models.EmployeeShift;
import au.edu.rmit.septagme.models.UserEntity;

import java.util.ArrayList;
import java.util.List;

public class EmployeeSerializer extends UserSerializer{

    private List<EmployeeShiftSerializer> shifts;

    public EmployeeSerializer(UserEntity user) {
        super(user);
        this.shifts = new ArrayList<>();
        for (EmployeeShift employeeShift :
                user.getEmployeeShifts())
            this.shifts.add(new EmployeeShiftSerializer(employeeShift));
    }

    public List<EmployeeShiftSerializer> getEmployeeShifts() {
        return shifts;
    }
}
