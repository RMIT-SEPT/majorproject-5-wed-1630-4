package au.edu.rmit.septagme.models;

import javax.persistence.*;

// TODO add validations
// TODO construct regex for date or find a way to convert from string to date obj

@Entity
public class WorkingTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="service_id")
    private Service service;

    private String day;

    private String time;

    public WorkingTime() {
    }

    public WorkingTime(Service service, String day, String time) {
        this.service = service;
        this.day = day;
        this.time = time;
    }

    public WorkingTime(String day, String time) {
        this.day = day;
        this.time = time;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
