import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {LearnerHubComponent} from "./learner-hub/learner-hub.component";
import {RoadmapComponent} from "./roadmap/roadmap.component";
import {PomodoroTimerComponent} from "./pomodoro-timer/pomodoro-timer.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserListComponent} from './admin/user-list/user-list.component';
import {HabittrackerComponent} from "./habittracker/habittracker.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ReportissueComponent} from "./reportissue/reportissue.component";


const routes: Routes = [
  {path: "", component: WelcomePageComponent},
  {path: "hub", component: LearnerHubComponent},
  {path: "roadmap", component: RoadmapComponent},
  {path: "timer", component: PomodoroTimerComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: "calendar", component: CalendarComponent},
  {path: 'userlist', component: UserListComponent},
  {path: 'habitTracker', component: HabittrackerComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'report', component: ReportissueComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
