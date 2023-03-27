import { TestBed } from '@angular/core/testing';

import { HabitTrackerService } from './habit-tracker.service';

describe('HabitTrackerService', () => {
  let service: HabitTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
