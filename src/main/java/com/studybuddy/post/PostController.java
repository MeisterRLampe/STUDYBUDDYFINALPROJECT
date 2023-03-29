package com.studybuddy.post;

import com.studybuddy.user.User;
import com.studybuddy.user.UserRepo;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api")
@NoArgsConstructor
public class PostController {

    private PostRepository postRepo;
    private UserRepo userRepo;

    @Autowired
    public PostController(PostRepository postRepo, UserRepo userRepo) {
        this.postRepo = postRepo;
        this.userRepo = userRepo;
    }

    @PostMapping("/posts")
    public Post createPost(@RequestBody Post post, Principal principal) {
        String username = principal != null ? principal.getName() : null;
        User user = userRepo.findByUserName(username);
        post.setUser(user);
        return postRepo.save(post);
    }

    @GetMapping("/posts")
    public List<Post> getAllPosts() {
        return (List<Post>) postRepo.findAll();
    }
}
