import {Component, OnInit} from '@angular/core';
import {HabitService} from "../services/habit-tracker.service";
import {Habit} from "./habit";


@Component({
  selector: 'app-habittracker',
  templateUrl: './habittracker.component.html',
  styleUrls: ['./habittracker.component.css']
})
export class HabittrackerComponent implements OnInit{
  habits : Habit [];
  constructor(private habitService : HabitService) {
    this.habits = [];
  }

  ngOnInit() {
    this.habitService.getHabitsByUser(1).subscribe(habits => {
      this.habits = habits;
    })
  }

}
