import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { RegisterComponent} from "../register/register.component";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  message: string = '';
  confirmPassword: string = '';
  showLoginForm: boolean = true;

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

  register(): void {
    this.userService.register(this.username, this.password, this.confirmPassword).subscribe(
      data => {
        this.message = 'Registrierung erfolgreich! Sie werden weitergeleitet..';
        this.router.navigate(['/']);
      },
      error => {
        this.message = 'Registrierung fehlgeschlagen!';
      }
    );
  }



}
