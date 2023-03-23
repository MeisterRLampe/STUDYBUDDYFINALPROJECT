package com.studybuddy.habitTracker;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@Entity
public class HabitTracker {

    @Id
    private Long id;
    @OneToMany
    List<Habit> habits = new ArrayList<>();


}
