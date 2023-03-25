package com.studybuddy.calendar;

import org.springframework.data.repository.CrudRepository;

public interface EventRepo extends CrudRepository<event, Long> {
}
