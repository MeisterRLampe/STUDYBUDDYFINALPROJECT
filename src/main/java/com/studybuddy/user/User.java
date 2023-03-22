package com.studybuddy.user;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long userID;
    private String userName;


    private String password;
    private boolean isAdmin;


    public User(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }
}
