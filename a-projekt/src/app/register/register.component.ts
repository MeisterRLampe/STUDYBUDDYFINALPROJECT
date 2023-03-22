import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';

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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.userService.register(this.username, this.password, this.confirmPassword).subscribe(
      data => {
        this.message = 'Registrierung erfolgreich!';
      },
      error => {
        this.message = 'Registrierung fehlgeschlagen!';
      }
    );
  }
}
