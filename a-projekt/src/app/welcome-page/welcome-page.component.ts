import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent  {

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getUsername(): string {
    // @ts-ignore
    return localStorage.getItem('username');
  }

}

