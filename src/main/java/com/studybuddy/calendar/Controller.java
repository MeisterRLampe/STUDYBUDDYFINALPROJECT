package com.studybuddy.calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    private EventRepo eventRepo;

    @Autowired
    public Controller(EventRepo eventRepo) {
        this.eventRepo = eventRepo;
    }
}
