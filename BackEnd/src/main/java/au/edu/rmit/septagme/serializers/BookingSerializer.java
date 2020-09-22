package au.edu.rmit.septagme.serializers;

import au.edu.rmit.septagme.models.Booking;
import au.edu.rmit.septagme.models.Service;
import au.edu.rmit.septagme.models.UserEntity;
import au.edu.rmit.septagme.models.helpers.BookingStatus;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;

@JsonInclude(JsonInclude.Include.ALWAYS)
public class BookingSerializer implements Serializable {
    private UserEntity customer;
    private long id;
    private String time_slot;
    private UserEntity employee;
    private Service service;
    private BookingStatus status;


    public BookingSerializer(Booking booking) {
        this.customer = booking.getCustomer();
        this.id = booking.getId();
        this.time_slot = booking.getTime_slot();
        this.employee = booking.getEmployee();
        this.service = booking.getService();
        this.status = booking.getStatus();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public UserEntity getCustomer() {
        return customer;
    }

    public void setCustomer(UserEntity customer) {
        this.customer = customer;
    }


    public UserEntity getEmployee() {
        return employee;
    }

    public void setEmployee(UserEntity employee) {
        this.employee = employee;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    public BookingStatus getStatus() {
        return status;
    }

    public void setStatus(BookingStatus status) {
        this.status = status;
    }

    public String getTime_slot() {
        return time_slot;
    }

    public void setTime_slot(String time_slot) {
        this.time_slot = time_slot;
    }
}