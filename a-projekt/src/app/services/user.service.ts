import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiBaseUrl = 'http://localhost:8083/api';

  constructor(private http: HttpClient) { }

  register(username: string, password: string, confirmPassword: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      username: username,
      password1: password,
      password2: confirmPassword
    };

    return this.http.post(`${this.apiBaseUrl}/register`, body, { headers: headers });
  }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      username: username,
      password: password
    };

    return this.http.post(`${this.apiBaseUrl}/login`, body, { headers: headers });
  }


  logout(sessionId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const params = {
      sessionId: sessionId
    };

    return this.http.post(`${this.apiBaseUrl}/logout`, null, { headers: headers, params: params });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getCurrentUsername(): string | null {
    return localStorage.getItem('username');
  }

}
