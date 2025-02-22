import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Booking, BookingStatus } from '../../models/booking.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  createBooking(data:Booking): Observable<any> {
    const userId = this.authService.getUserId();
    if (userId) {
      data.customer = userId;
    }
    return this.http.post(`${environment.apiUrl}/bookings`, data, {
      headers: {
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Content-Type': 'application/json'
      }
    });
  }
  getBookings(status: BookingStatus): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${environment.apiUrl}/bookings`, {params:{status}, headers:{
      'Authorization': `Bearer ${this.authService.getToken()}`,
      'Content-Type': 'application/json'
    }});
  }
}
