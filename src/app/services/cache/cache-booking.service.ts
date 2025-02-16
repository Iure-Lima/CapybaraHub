import { Injectable } from '@angular/core';
import { CacheBooking } from '../../models/cache-booking-model';

@Injectable({
  providedIn: 'root'
})
export class CacheBookingService {
  private dataCache: CacheBooking | null = null;

  setDataCache(data: CacheBooking){
    this.dataCache = data;
  }

  getDataCache(): CacheBooking | null {
    return this.dataCache;
  }

  clearDataCache(){
    this.dataCache = null;
  }
}
