import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pomodoro-timer',
  templateUrl: './pomodoro-timer.component.html',
  styleUrls: ['./pomodoro-timer.component.css']
})
export class PomodoroTimerComponent implements OnInit{
  minutes: number =25;
  seconds: number =0;

  timer: any

  isStop: boolean = true;
  buttonLabel: string ="Start!"




  ngOnInit(): void {

    this.isStop = !this.isStop;
    if(this.isStop){
      clearInterval(this.timer);
      this.buttonLabel ="Resume";
    }else{
      this.timer =setInterval(()=>{
        this.ticks();
      },1000);
      this.buttonLabel ="Pause"
    }

  }

  private ticks() {
    if(this.seconds>0){
      this.seconds--;
    }else if (this.minutes >0){
      this.minutes--;
      this.seconds =59;
    }else{
      clearInterval(this.timer)
    }
  }
}
