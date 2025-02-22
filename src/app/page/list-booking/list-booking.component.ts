import { Component, DoCheck, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TabViewChangeEvent, TabViewModule } from 'primeng/tabview';
import { Booking, BookingStatus } from '../../models/booking.model';
import { AlertService } from '../../services/alert/alert.service';
import { AuthService } from '../../services/auth/auth.service';
import { BookingService } from '../../services/booking/booking.service';
import { DataviewComponent } from "./dataview/dataview.component";


@Component({
  selector: 'app-list-booking',
  standalone: true,
  imports: [TabViewModule, DataviewComponent],
  providers: [BookingService],
  templateUrl: './list-booking.component.html',
  styleUrl: './list-booking.component.css'
})
export class ListBookingComponent implements DoCheck, OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService, private router: Router, private authService: AuthService, private alertService: AlertService){}
  ngOnInit(): void {
    this.getBookingsWithStatus("pending")
  }
  ngDoCheck(): void {
    if (!this.authService.getToken()) this.router.navigate(["/home"])
  }

  tabViewChange(event: TabViewChangeEvent){
    this.getBookingsWithStatus(event.index === 0 ? 'pending' : event.index === 1 ? 'confirmed' : event.index === 2 ? 'completed' : "cancelled");

  }

  getBookingsWithStatus(status: BookingStatus){
    this.bookingService.getBookings(status).subscribe({
      next: (response) => {
        this.bookings = response;
      },
      error: (error) => this.alertService.addAlert({
        severity: 'error',
        summary: `${error.error.message}`,
        detail: ''
      })
    })
  }


}
