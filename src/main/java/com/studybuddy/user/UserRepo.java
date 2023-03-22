package com.studybuddy.user;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepo extends CrudRepository<User, Long> {

    boolean existsByUserName(String userName);

    Optional<User> findByUserNameAndPassword(String username, String password);
}
