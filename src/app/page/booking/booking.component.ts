import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  cacheDatas: CacheBooking
  isOneDate = false

  constructor(private cacheBookingService: CacheBookingService, private router: Router, private route: ActivatedRoute){
    this.cacheDatas = this.cacheBookingService.getDataCache()
    if (!this.cacheDatas.room._id){
      // biome-ignore lint/complexity/useLiteralKeys: <explanation>
      this.router.navigate(['/reservations', this.route.snapshot.params['id']])
    }
    if (!this.cacheDatas.selectDate[1]) this.isOneDate = true;
  }

}
