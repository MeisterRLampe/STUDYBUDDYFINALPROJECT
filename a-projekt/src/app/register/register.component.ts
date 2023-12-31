import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  message: string = '';

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit(): void {
  }

  register(): void {
    this.userService.register(this.username, this.password, this.confirmPassword).subscribe(
      data => {
        this.message = 'Registrierung erfolgreich! Sie werden weitergeleitet..';
        this.router.navigate(['/login']);
      },
      error => {
        this.message = 'Registrierung fehlgeschlagen!';
      }
    );
  }
}
