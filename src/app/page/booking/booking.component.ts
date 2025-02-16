import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CacheBooking } from '../../models/cache-booking-model';
import { AlertService } from '../../services/alert/alert.service';
import { BookingService } from '../../services/booking/booking.service';
import { CacheBookingService } from '../../services/cache/cache-booking.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  cacheDatas: CacheBooking
  isOneDate = false

  constructor(private cacheBookingService: CacheBookingService, private router: Router, private route: ActivatedRoute, private bookingService: BookingService, private alertService: AlertService){
    this.cacheDatas = this.cacheBookingService.getDataCache()
    if (!this.cacheDatas.room._id){
      // biome-ignore lint/complexity/useLiteralKeys: <explanation>
      this.router.navigate(['/reservations', this.route.snapshot.params['id']])
    }
    if (!this.cacheDatas.selectDate[1]) this.isOneDate = true;
  }

  book(){
    this.bookingService.createBooking({
      customerId: '',
      hotelId: this.cacheDatas.room._id,
      roomId: this.cacheDatas.room._id,
      checkInDate: this.cacheDatas.selectDate[0],
      checkOutDate: this.cacheDatas.selectDate[1] ? this.cacheDatas.selectDate[1] : this.cacheDatas.selectDate[0],
      totalPrice: this.cacheDatas.totalPrice,
      status: 'pending'
    }).subscribe({
      next: (response) => {
        this.cacheBookingService.clearDataCache()
        this.router.navigate(['/reservations'])
      },
      error: (error) => this.alertService.addAlert({
        severity: 'error',
        summary: 'Error while booking the room',
        detail: ''
      })
    })
  }

}
