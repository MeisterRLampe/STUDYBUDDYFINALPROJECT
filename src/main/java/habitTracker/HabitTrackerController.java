package habitTracker;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HabitTrackerController {
    private HabitRepo habitRepo;
/**
    @GetMapping("/habitTracker")
    public List<Habit> habitTracker(){
        return (List<Habit>) habitRepo.findByUser();
    }
    */
}
