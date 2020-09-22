package au.edu.rmit.septagme.serializers;

import au.edu.rmit.septagme.models.EmployeeShift;
import au.edu.rmit.septagme.models.UserEntity;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class EmployeeShiftSerializer implements Serializable {
    private long id;
    private String day;
    private String fromTime;
    private String toTime;

    public EmployeeShiftSerializer(EmployeeShift employeeShift){
        this.id = employeeShift.getId();
        this.day = employeeShift.getDay();
        this.fromTime = employeeShift.getFromTime();
        this.toTime = employeeShift.getToTime();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getFromTime() {
        return fromTime;
    }

    public void setFromTime(String fromTime) {
        this.fromTime = fromTime;
    }

    public String getToTime() {
        return toTime;
    }

    public void setToTime(String toTime) {
        this.toTime = toTime;
    }
}
