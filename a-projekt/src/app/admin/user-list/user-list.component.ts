import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.adminService.getUserList().subscribe(users => {
      this.users = users;
    });
  }

  toggleUserRole(user: User): void {
    this.adminService.toggleUserRole(user.userID).subscribe(updatedUser => {
      user.admin = updatedUser.admin;
    });
  }
}
