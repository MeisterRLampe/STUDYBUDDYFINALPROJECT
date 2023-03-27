package com.studybuddy.session;

import com.studybuddy.user.Userx;
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
    private Userx user;
    private Instant expiresAt;

    public Session(Userx user, Instant expiresAt) {
        this.user = user;
        this.expiresAt = expiresAt;
    }
}
