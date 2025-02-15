import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HotelCard } from '../../models/hotel.card.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  getAllHotels():Observable<HotelCard[]>{
    return this.http.get<HotelCard[]>(`${environment.apiUrl}/hotels`)
  }

  getHotelById(id: string): Observable<HotelCard>{
    return this.http.get<HotelCard>(`${environment.apiUrl}/hotels/${id}`)
  }
}
