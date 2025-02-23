import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { RoomCard } from '../../models/room.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private roomSubjects = new BehaviorSubject<RoomCard[]>([]);
  roomObservable = this.roomSubjects.asObservable();

  constructor(private http: HttpClient) {}

  getAllRooms() {
    this.http.get<{data: RoomCard[]}>(`${environment.apiUrl}/rooms`).subscribe({
      next: (response) => {
        this.roomSubjects.next(response.data);
      },
      error: (error) => {
        console.error('Error fetching rooms:', error);
      },
    })
  }

  getByNumber(number: number){
    this.http.get<{rooms:RoomCard[]}>(`${environment.apiUrl}/rooms`, {params:{number}}).subscribe({
      next: (response) => {
        this.roomSubjects.next(response.rooms);
      },
      error: (error) => {
        console.error('Error fetching rooms by number:', error);
      },
    })
  }

  getRoomById(id: string): Observable<RoomCard> {
    return this.http.get<RoomCard>(`${environment.apiUrl}/rooms/${id}`);
  }
}
