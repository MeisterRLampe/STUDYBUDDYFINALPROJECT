import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { LearnerHubComponent } from './learner-hub/learner-hub.component';
import {HttpClientModule} from "@angular/common/http";
import { PomodoroTimerComponent } from './pomodoro-timer/pomodoro-timer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from "@angular/forms";
import { CalendarComponent } from './calendar/calendar.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import { AdminModule } from './admin/admin.module';
import { HabittrackerComponent } from './habittracker/habittracker.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavbarComponent,
    RoadmapComponent,
    LearnerHubComponent,
    PomodoroTimerComponent,
    LoginComponent,
    RegisterComponent,
    CalendarComponent,
    HabittrackerComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
