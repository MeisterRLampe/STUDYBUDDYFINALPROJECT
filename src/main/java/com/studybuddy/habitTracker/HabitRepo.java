package com.studybuddy.habitTracker;

import org.springframework.data.repository.CrudRepository;


import java.util.List;

public interface HabitRepo extends CrudRepository<Habit, Long> {

    /*
    List<Habit> findByUserId(String id);

     */
}
