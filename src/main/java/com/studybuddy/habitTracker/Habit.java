package com.studybuddy.habitTracker;

import com.studybuddy.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class Habit {
    private String Habit;
    private String description;
    private boolean monday;
    private boolean tuesday;
    private boolean wednesday;
    private boolean thursday;
    private boolean friday;
    private boolean saturday;
    private boolean sunday;
    @Id
    private Long id;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


}