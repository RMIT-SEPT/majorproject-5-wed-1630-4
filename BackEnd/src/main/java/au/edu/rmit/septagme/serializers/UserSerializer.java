package au.edu.rmit.septagme.serializers;

import au.edu.rmit.septagme.models.UserEntity;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserSerializer implements Serializable {
    private long id;
    private String name;
    private String username;

    public UserSerializer(UserEntity user){
        this.id = user.getId();
        this.name = user.getName();
        this.username = user.getUsername();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
