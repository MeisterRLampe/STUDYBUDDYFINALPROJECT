package habitTracker;

import org.springframework.data.repository.CrudRepository;
import org.springframework.security.core.userdetails.User;

import java.util.List;

public interface HabitRepo extends CrudRepository<Habit, Long> {

    List<User> findByUser(User user);
}
