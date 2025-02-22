import { Injectable } from '@angular/core';
import { CacheBooking } from '../../models/cache-booking-model';

@Injectable({
  providedIn: 'root',
})
export class CacheBookingService {
  private dataCache: CacheBooking = {
    room: {
      _id: '',
      hotel: '',
      roomTypeId: '',
      pricePerNight: 0,
      roomNumber: 0,
      status: 'Available',
      images: [],
      rating: 0,
      name: '',
    },
    selectDate: [],
    guest: '',
    totalPrice: '',
    totalNights: 0,
    totalPriceWithNights: 0,
  };

  setDataCache(data: CacheBooking) {
    this.dataCache = data;
  }

  getDataCache(): CacheBooking {
    return this.dataCache;
  }

  clearDataCache() {
    this.dataCache = {
      room: {
        _id: '',
        hotel: '',
        roomTypeId: '',
        pricePerNight: 0,
        roomNumber: 0,
        status: 'Available',
        images: [],
        rating: 0,
        name: '',
      },
      selectDate: [],
      guest: '',
      totalPrice: '',
      totalNights: 0,
      totalPriceWithNights: 0,
    };
  }
}
