package au.edu.rmit.septagme.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.List;

// TODO add validations

@Entity
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @OneToMany(mappedBy = "service")
    private List<UserEntity> employees;

    @OneToOne(mappedBy = "service_owned")
    private UserEntity owner;

    @OneToMany(mappedBy = "service")
    private List<WorkingTime> working_times;

    public Service() {
    }

    public Service(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Service(String name, String description, List<UserEntity> employees, List<WorkingTime> working_times) {
        this.name = name;
        this.description = description;
        this.employees = employees;
        this.working_times = working_times;
    }

    public Long getId() {
        return id;
    }

    public UserEntity getOwner() {
        return owner;
    }

    public void setOwner(UserEntity owner) {
        this.owner = owner;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<UserEntity> getEmployees() {
        return employees;
    }

    public void setEmployees(List<UserEntity> employees) {
        this.employees = employees;
    }

    public List<WorkingTime> getWorking_times() {
        return working_times;
    }

    public void setWorking_times(List<WorkingTime> working_times) {
        this.working_times = working_times;
    }
}
