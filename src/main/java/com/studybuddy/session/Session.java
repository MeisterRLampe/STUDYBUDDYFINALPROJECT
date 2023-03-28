package com.studybuddy.session;

import com.studybuddy.user.User;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.UUID;

@Entity
@NoArgsConstructor
@Data
public class Session {
    @Id
    private String id = UUID.randomUUID().toString();
    @ManyToOne
    private User user;
    private Instant expiresAt;

    public Session(User user, Instant expiresAt) {
        this.user = user;
        this.expiresAt = expiresAt;
    }
}
