import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HotelCard } from '../../models/hotel.card.model';
import { OrderModel } from '../../models/order.hotel.model';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  constructor(private http: HttpClient) {}

  getAllHotels(): Observable<HotelCard[]> {
    return this.http.get<HotelCard[]>(`${environment.apiUrl}/hotels`);
  }

  getHotelById(id: string): Observable<HotelCard> {
    return this.http.get<HotelCard>(`${environment.apiUrl}/hotels/${id}`);
  }

  getAllHotelsWithPagination(
    page: number,
    limit: number,
  ): Observable<HotelCard[]> {
    return this.http.get<HotelCard[]>(`${environment.apiUrl}/hotels`, {
      params: { page, limit },
    });
  }

  getAllHotelWithSort(
    sortFactor: string,
    order: OrderModel,
  ): Observable<HotelCard[]> {
    return this.http.get<HotelCard[]>(`${environment.apiUrl}/hotels/sorted`, {
      params: { sortFactor, order },
    });
  }

  getHotelByName(name: string): Observable<HotelCard[]> {
    return this.http.get<HotelCard[]>(
      `${environment.apiUrl}/hotels/search/name/${name}`,
    );
  }
}
