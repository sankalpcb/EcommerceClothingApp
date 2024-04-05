package org.example.Model;


import jakarta.persistence.*;
import lombok.Data;

@Entity

@Data

@Table(name = "ecommerce_user")
public class User {
    @Column(name = "user_id")

    @Id
    @GeneratedValue
    private int Id;
    @Column(name = "user_name")
    private String userName;
    @Column(name = "user_email")
    private String email;
    @Column(name = "password1")
    private String password1;
    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword1() {
        return password1;
    }

    public void setPassword1(String password1) {
        this.password1 = password1;
    }





}