import { Component } from '@angular/core';
import { CacheBooking } from '../../models/cache-booking-model';
import { CacheBookingService } from '../../services/cache/cache-booking.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  cacheDatas!: CacheBooking | null

  constructor(private cacheBookingService: CacheBookingService){
    this.cacheDatas = this.cacheBookingService.getDataCache()
  }

}
