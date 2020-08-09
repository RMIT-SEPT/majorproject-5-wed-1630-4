package au.edu.rmit.septagme.models;

import au.edu.rmit.septagme.models.helpers.UserRole;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

// TODO add validations

@Entity
public class UserEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String username;

    private String password;

    private String address;

    private String phone;

    private UserRole role = UserRole.CUSTOMER;

    @OneToMany(mappedBy = "customer")
    private List<Booking> bookings_customers;

    @OneToMany( mappedBy = "employee")
    private List<Booking> bookings_employees;

    @ManyToOne
    @JoinColumn(name="service_id")
    private Service service;

    public UserEntity(String name, String username, String password) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.role = UserRole.WORKER;
        this.bookings_customers = null;
        this.bookings_employees = new ArrayList<Booking>();
    }

    public UserEntity(String name, String username, String password, String address, String phone) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.address = address;
        this.phone = phone;
        this.bookings_employees = null;
        this.bookings_customers = new ArrayList<Booking>();
    }

    public UserEntity() {
    }

//    public UserEntity(UserEntity userEntity) {
//
//    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role.toString();
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public List<Booking> getBookings_customers() {
        return bookings_customers;
    }

    // TODO add to array
    public void setBookings_customers(List<Booking> bookings_customers) {
        if (this.role != UserRole.CUSTOMER) return ;
        this.bookings_customers = bookings_customers;
    }

    public List<Booking> getBookings_employees() {
        return bookings_employees;
    }

    // TODO add to array
    public void setBookings_employees(List<Booking> bookings_employees) {
        if (this.role != UserRole.WORKER) return ;
        this.bookings_employees = bookings_employees;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        if (this.role != UserRole.WORKER||this.role != UserRole.ADMIN) return ;
        this.service = service;
    }


    public String getPassword() {
        return "null";
    }

    public String getUsername() {
        return "null";
    }

    public boolean isActive() {
        return true;
    }
}
