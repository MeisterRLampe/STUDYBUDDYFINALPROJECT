import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit(): void {
  }

  login(): void {
    this.userService.login(this.username, this.password).subscribe(
      data => {
        localStorage.setItem('token', data.id);
        localStorage.setItem('isAdmin', data.user.admin);
        localStorage.setItem('username', this.username);
        this.message = 'Login erfolgreich! Sie werden weitergeleitet..';
        this.router.navigate(['/']);

      },
      error => {
        this.message = `Login fehlgeschlagen! Username oder Password falsch!`;
      }
    );
  }
}
