package com.studybuddy.user;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepo extends CrudRepository<Userx, Long> {

    boolean existsByUserName(String userName);

    Optional<Userx> findByUserNameAndPassword(String username, String password);


}
