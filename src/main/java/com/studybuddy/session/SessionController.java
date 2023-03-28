package com.studybuddy.session;

import com.studybuddy.user.User;
import com.studybuddy.user.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class SessionController {
    private UserRepo userRepo;
    private SessionRepo sessionRepo;

    @Autowired
    public SessionController(UserRepo userRepo, SessionRepo sessionRepo) {
        this.userRepo = userRepo;
        this.sessionRepo = sessionRepo;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        Optional<User> userOpt = userRepo.findByUserNameAndPassword(user.getUserName(), user.getPassword());
        if (userOpt.isPresent()) {
            Session session = new Session(userOpt.get(), Instant.now().plusSeconds(7 * 24 * 60 * 60));
            sessionRepo.save(session);
            return ResponseEntity.ok(session);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Falscher Benutzername oder Passwort");
    }
/*
    @PostMapping("/login")
    public Session loginUser(@RequestBody User user) {
        Optional<User> userOpt = userRepo.findByUserNameAndPassword(user.getUserName(), user.getPassword());
        if (userOpt.isPresent()) {
            Session session = new Session(userOpt.get(), Instant.now().plusSeconds(7 * 24 * 60 * 60));
            sessionRepo.save(session);
            return session;
        }
        return null;
    }

 */

    @PostMapping("/logout")
    public void logout(@RequestParam("sessionId") String sessionId) {
        Optional<Session> optionalSession = sessionRepo.findByIdAndExpiresAtAfter(sessionId, Instant.now());
        optionalSession.ifPresent(session -> sessionRepo.delete(session));
    }
}
