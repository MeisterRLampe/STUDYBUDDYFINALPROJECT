package com.studybuddy.habitTracker;

import com.studybuddy.user.User;
import com.studybuddy.user.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HabitTrackerController {
    private HabitRepo habitRepo;
    private UserRepo userRepo;



    @Autowired
    public HabitTrackerController(HabitRepo habitRepo,UserRepo userRepo) {
        this.habitRepo = habitRepo;
        this.userRepo = userRepo;


    }

    /*
        @GetMapping("/habitTracker/{id)")
        public List<Habit> habitTracker(@PathVariable String id) {
            return habitRepo.findByUserId(id);
        }


     */
    @GetMapping("/habits/test1")
    public List<Habit> addTestData() {
        User user = new User("minh1","minh1");
        Habit habit1 = new Habit("essen");
        Habit habit2 = new Habit("lernen");
        user.getHabits().add(habit1);
        user.getHabits().add(habit2);

        userRepo.save(user);
        habitRepo.save(habit1);
        habitRepo.save(habit2);

        return userRepo.findById(user.getUserID()).get().getHabits();

    }
    @GetMapping("/habits/test2")
    public User getTestUser() {
        User user = new User("minh1","minh1");
        Habit habit1 = new Habit("essen");
        Habit habit2 = new Habit("lernen");
        user.getHabits().add(habit1);
        user.getHabits().add(habit2);

        habitRepo.save(habit1);
        habitRepo.save(habit2);
        userRepo.save(user);


        return userRepo.findById((long)1).get();

    }
    @GetMapping("/habits/test3")
    public User getTestUser2() {


        return userRepo.findById((long)1).get();

    }


    @GetMapping("/habits/{userId}")
    public List<Habit> getHabitsByUser(@PathVariable long userId) {
        User user = userRepo.findById(userId).get();
        return user.getHabits();
    }

    public Habit saveHabit(@RequestBody Habit habit) {

        return habitRepo.save(habit);
    }
    @DeleteMapping("/habits/{id}")
    public void deleteHabit(@PathVariable long id) {
        Habit habit = habitRepo.findById(id).orElse(null);
        if (habit != null) {
            habitRepo.delete(habit);
        }
    }


}
