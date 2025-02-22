import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CacheBooking } from '../../models/cache-booking-model';
import { MongoDecimalPipe } from '../../pipes/mongo-decimal.pipe';
import { AlertService } from '../../services/alert/alert.service';
import { BookingService } from '../../services/booking/booking.service';
import { CacheBookingService } from '../../services/cache/cache-booking.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CurrencyPipe, MongoDecimalPipe],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  cacheDatas: CacheBooking;
  isOneDate = false;

  constructor(
    private cacheBookingService: CacheBookingService,
    private router: Router,
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private alertService: AlertService
  ) {
    this.cacheDatas = this.cacheBookingService.getDataCache();
    if (!this.cacheDatas.room._id) {
      // biome-ignore lint/complexity/useLiteralKeys: <explanation>
      this.router.navigate(['/reservations', this.route.snapshot.params['id']]);
    }
    if (!this.cacheDatas.selectDate[1]) this.isOneDate = true;
  }

  book() {
    this.bookingService
      .createBooking({
        customer: '',
        hotel: this.cacheDatas.room._id,
        room: this.cacheDatas.room._id,
        checkInDate: this.cacheDatas.selectDate[0].toISOString(),
        checkoutDate: this.cacheDatas.selectDate[1]
          ? this.cacheDatas.selectDate[1].toISOString()
          : this.cacheDatas.selectDate[0].toISOString(),
        totalPrice: this.cacheDatas.totalPrice,
        status: 'pending',
      })
      .subscribe({
        next: (response) => {
          this.cacheBookingService.clearDataCache();
          this.alertService.addAlert({
            severity: 'success',
            summary: 'Booking completed successfully',
            detail: '',
          });
          this.router.navigate(['/home']);
        },
        error: (error) => {
          this.alertService.addAlert({
            severity: 'error',
            summary: `${error.error.message}`,
            detail: '',
          });
          // biome-ignore lint/complexity/useLiteralKeys: <explanation>
          this.router.navigate(['/reservations', this.route.snapshot.params['id']]);
        },
      });
  }
}
