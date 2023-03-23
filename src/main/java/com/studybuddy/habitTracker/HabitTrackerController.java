package com.studybuddy.habitTracker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HabitTrackerController {
    private HabitRepo habitRepo;

    HabitTrackerService habitTrackerService;
    @Autowired
    public HabitTrackerController (HabitRepo habitRepo, HabitTrackerService htService){
        this.habitRepo= habitRepo;
        this.habitTrackerService = htService;

    }
    /*@GetMapping("/habitTracker/{id)")
    public List<Habit> habitTracker(@PathVariable String id){
        return  habitRepo.findByUserId(id);
    }*/

    @GetMapping("/createUser")
    public String createUser (){
        for (int i = 0; i < 10; i++) {
            System.out.println("User added" + i);
        }
        return "Test data created";
    }



}
