import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {LearnerHubComponent} from "./learner-hub/learner-hub.component";
import {RoadmapComponent} from "./roadmap/roadmap.component";
import {PomodoroTimerComponent} from "./pomodoro-timer/pomodoro-timer.component";
import {CalendarComponent} from "./calendar/calendar.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "", component: WelcomePageComponent},
  {path: "hub", component: LearnerHubComponent},
  {path: "roadmap", component: RoadmapComponent},
  {path:"timer",component: PomodoroTimerComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:"calendar", component: CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
