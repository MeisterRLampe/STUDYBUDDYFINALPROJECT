package com.studybuddy.post;

import com.studybuddy.user.User;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Entity
@NoArgsConstructor
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String title;
    private String content;
    private LocalDateTime timestamp;

    @ManyToOne
    private User user;

    public Post(String title, String content, LocalDateTime timestamp, User user) {
        this.title = title;
        this.content = content;
        this.timestamp = timestamp;
        this.user = user;
    }
}
