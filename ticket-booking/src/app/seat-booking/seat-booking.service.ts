import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeatBookingService {
  private apiUrl = '/api/seats';

  constructor(private http: HttpClient) {}

  getSeats(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  bookSeats(numSeats: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/book`, { numSeats });
  }
}
