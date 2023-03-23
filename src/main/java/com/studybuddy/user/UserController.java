package com.studybuddy.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class UserController {
    private UserRepo userRepo;

    @Autowired
    public UserController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @PostMapping("/register")
    public User register(@Valid @RequestBody RegisterUser registration) {
        if (!registration.getPassword1().equals(registration.getPassword2()) || userRepo.existsByUserName(registration.getUsername())) {
            return null;
        }
        User user = new User(registration.getUsername(), registration.getPassword1());
        return userRepo.save(user);
    }
}
