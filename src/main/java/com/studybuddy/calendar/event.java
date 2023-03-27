package com.studybuddy.calendar;

import com.studybuddy.user.Userx;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class event {
    @Id
    private Long id;
    private String title;
    private String message;
    private String timestamp;
    @ManyToOne
    private Userx user;

}
