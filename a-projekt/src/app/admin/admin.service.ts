import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiBaseUrl = 'http://localhost:8083/api';

  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiBaseUrl}/userlist`);
  }

  updateUserList(users: User[]): Observable<User[]> {
    return this.http.post<User[]>(`${this.apiBaseUrl}/userlist`, users);
  }

  toggleUserRole(id: number): Observable<User> {
    return this.http.put<User>(`${this.apiBaseUrl}/user/${id}`, {});
  }
}
