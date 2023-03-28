import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habit } from '../habittracker/habit';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  private baseUrl = '/habits';

  constructor(private http: HttpClient) {}



  getHabitsByUser(userId: number): Observable<Habit[]> {
    return this.http.get<Habit[]>(`${this.baseUrl}/${userId}`);
  }

  createHabit(habit: Habit): Observable<Habit> {
    return this.http.post<Habit>(`${this.baseUrl}/add`, habit);
  }

  deleteHabit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
