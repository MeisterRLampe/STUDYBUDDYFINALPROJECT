import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pomodoro-timer',
  templateUrl: './pomodoro-timer.component.html',
  styleUrls: ['./pomodoro-timer.component.css']
})
export class PomodoroTimerComponent implements OnInit {
  minutes: number = 25;
  seconds: number = 0;
  cycles: number = 0;

  timer: any;
  isStop: boolean = true;
  buttonLabel: string = "Start!";

  ngOnInit(): void {
    // Der Code zum Starten des Timers wird aus dieser Funktion entfernt
  }

  // Funktion zum Starten des Timers
  startTimer() {
    this.timer = setInterval(() => {
      this.ticks();
    }, 1000);
  }

  // Counting seconds and minutes backwards
  ticks() {
    if (this.seconds > 0) {
      this.seconds--;
    } else if (this.minutes > 0) {
      this.minutes--;
      this.seconds = 59;
    } else {
      clearInterval(this.timer);
      this.countCycles();
    }
  }

  // stop function / reset function
  stop() {
    if (this.buttonLabel === "Stop") {
      this.resetTimer();
    } else {
      this.buttonLabel = "Stop";
    }
    clearInterval(this.timer);
  }

  // play function
  play() {
    this.isStop = !this.isStop;
    if (this.isStop) {
      clearInterval(this.timer);
      this.buttonLabel = "Resume";
    } else {
      this.startTimer();
      this.buttonLabel = "Pause";
    }
  }

  // Funktion zum Zählen der Durchgänge
  countCycles() {
    this.cycles++;
  }

  // Funktion zum Zurücksetzen des Timers
  resetTimer() {
    this.minutes = 25;
    this.seconds = 0;
    this.cycles = 0;
    this.buttonLabel = "Start!";
  }

  // Funktion zum Setzen der Timer-Zeit
  setTime(minutes: number, seconds: number) {
    this.minutes = minutes;
    this.seconds = seconds;
  }
}




