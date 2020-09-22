package au.edu.rmit.septagme.models;

import org.apache.catalina.User;

import javax.persistence.*;

// TODO add validations
// TODO construct regex for date or find a way to convert from string to date obj

@Entity
public class EmployeeShift {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name="user_id")
    private UserEntity user;

    private String day;

    private String fromTime;

    private String toTime;

    public EmployeeShift() {
    }

    public EmployeeShift(UserEntity user, String day, String fromTime, String toTime) {
        this.user = user;
        this.day = day;
        this.fromTime = fromTime;
        this.toTime = toTime;
    }

    public EmployeeShift(String day, String fromTime, String toTime) {
        this.day = day;
        this.fromTime = fromTime;
        this.toTime = toTime;
    }

    public Long getId() {
        return id;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
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
