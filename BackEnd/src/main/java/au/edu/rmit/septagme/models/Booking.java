package au.edu.rmit.septagme.models;

import au.edu.rmit.septagme.models.helpers.BookingStatus;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

// TODO add validations

@Entity
//@Table(name = "booking")
@EntityListeners(AuditingEntityListener.class)
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="employee_id")
    private UserEntity employee;

    @ManyToOne
    @JoinColumn(name="customer_id")
    private UserEntity customer;

    @ManyToOne
    @JoinColumn(name="service_id")
    private Service service;

    private String time_slot;

    private BookingStatus status;

    public Booking() {
    }

    public Booking(UserEntity employee, UserEntity customer, Service service, String time_slot) {
        this.employee = employee;
        this.customer = customer;
        this.service = service;
        this.time_slot = time_slot;
        this.status = BookingStatus.PENDING;
    }

    public UserEntity getEmployee() {
        return employee;
    }

    public void setEmployee(UserEntity employee) {
        this.employee = employee;
    }

    public UserEntity getCustomer() {
        return customer;
    }

    public void setCustomer(UserEntity customer) {
        this.customer = customer;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    public String getTime_slot() {
        return time_slot;
    }

    public void setTime_slot(String time_slot) {
        this.time_slot = time_slot;
    }

    public BookingStatus getStatus() {
        return status;
    }

    public void setStatus(BookingStatus status) {
        this.status = status;
    }

    public Long getId() {
        return id; }
}
