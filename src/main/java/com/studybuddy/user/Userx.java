package com.studybuddy.user;


import com.studybuddy.habitTracker.Habit;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@Getter
@Setter
public class Userx {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long userID;
    private String userName;


    private String password;
    private boolean isAdmin;


    public Userx(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }
    @ManyToMany
    private List<Habit> habits = new ArrayList<>();
}
