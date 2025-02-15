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

  getAllRooms() : Observable<RoomCard[]> {
    return this.http.get<RoomCard[]>(`${environment.apiUrl}/rooms`)
  }

  getRoomById(id: string): Observable<RoomCard>{
    return this.http.get<RoomCard>(`${environment.apiUrl}/rooms/${id}`)
  }
}
