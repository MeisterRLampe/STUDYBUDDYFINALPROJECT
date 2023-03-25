package com.studybuddy.user;

import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@NoArgsConstructor
public class AdminController {
    private UserRepo userRepo;

    @Autowired
    public AdminController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @GetMapping("/userlist")
    public List<User> showAdminPage() {
        return (List<User>) userRepo.findAll();
    }

    @PostMapping("/userlist")
    public List<User> refreshAdminPage(@RequestBody List<User> users) {
        userRepo.saveAll(users);
        return users;
    }

    @GetMapping("/user/{id}")
    public User editUser(@PathVariable long id) {
        return userRepo.findById(id).orElse(null);
    }

    @PutMapping("/user/{id}")
    public User setAdmin(@PathVariable long id) {
        User user = userRepo.findById(id).orElse(null);
        if (user != null) {
            user.setAdmin(!user.isAdmin());
            userRepo.save(user);
        }
        return user;
    }
}
