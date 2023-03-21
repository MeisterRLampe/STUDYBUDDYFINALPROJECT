package habitTracker;

import org.springframework.data.repository.CrudRepository;

public interface HabitTrackerRepo extends CrudRepository <HabitTracker,Long> {
}
