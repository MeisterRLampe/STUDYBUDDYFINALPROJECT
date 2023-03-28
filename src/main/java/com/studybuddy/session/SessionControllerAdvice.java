package com.studybuddy.session;

import com.studybuddy.user.Userx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.time.Instant;
import java.util.Optional;

@ControllerAdvice
public class SessionControllerAdvice {
    private SessionRepo sessionRepo;

    @Autowired
    public SessionControllerAdvice(SessionRepo sessionRepo) {
        this.sessionRepo = sessionRepo;
    }

    @ModelAttribute("sessionUser")
    public Userx sessionUser(@CookieValue(value = "sessionId", defaultValue = "") String sessionId) {
        if (!sessionId.isEmpty()) {
            Optional<Session> sessionOpt = sessionRepo.findByIdAndExpiresAtAfter(sessionId, Instant.now());
            if (sessionOpt.isPresent()) {
                Session session = sessionOpt.get();
                session.setExpiresAt(Instant.now().plusSeconds(7 * 24 * 60 * 60));
                sessionRepo.save(session);
                return session.getUser();
            }
        }
        return null;
    }
}
