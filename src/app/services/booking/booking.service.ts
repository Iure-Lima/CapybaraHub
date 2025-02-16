import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Booking } from '../../models/booking.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  createBooking(data:Booking): Observable<any> {
    return this.http.post(`${environment.apiUrl}/bookings`, {
      headers: { 'Authorization': `Bearer ${this.authService.getToken()}` },
      body: data
    });
  }
}
