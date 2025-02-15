import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { RoomCard } from '../../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  getAllRooms() : Observable<any> {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    return this.http.get<any>(`${environment.apiUrl}/rooms`)
  }

  getRoomById(id: string): Observable<RoomCard>{
    return this.http.get<RoomCard>(`${environment.apiUrl}/rooms/${id}`)
  }
}
