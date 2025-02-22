package au.edu.rmit.septagme;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
@ComponentScan(basePackages = {"au.edu.rmit.septagme.services", "au.edu.rmit.septagme.models",
                "au.edu.rmit.septagme.controllers", "au.edu.rmit.septagme.repositories",
                "au.edu.rmit.septagme.configurations"})
@EnableJpaRepositories("au.edu.rmit.septagme.repositories")

public class SeptAgmeApplication {


    public static void main(final String[] args) {
        SpringApplication.run(SeptAgmeApplication.class, args);
    }

}
