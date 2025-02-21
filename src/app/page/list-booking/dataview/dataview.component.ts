import { Component, Input, OnInit } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { Booking } from '../../../models/booking.model';
import { AlertService } from '../../../services/alert/alert.service';
import { RoomService } from '../../../services/room/room.service';

@Component({
  selector: 'app-dataview',
  standalone: true,
  imports: [DataViewModule],
  templateUrl: './dataview.component.html',
  styleUrl: './dataview.component.css'
})
export class DataviewComponent implements OnInit{
  @Input() bookingsData!: Booking[]
  roomImageCache: { [key: string]: string } = {};
  roomNameCache: { [key: string]: string } = {};

  constructor(private roomService: RoomService, private alertService: AlertService){}

  ngOnInit(): void {
    this.preloadRoomDetails();
  }

  preloadRoomDetails(): void {
    // biome-ignore lint/complexity/noForEach: <explanation>
    this.bookingsData.forEach((booking) => {
      const roomId = booking.room;
      if (!this.roomImageCache[roomId] && !this.roomNameCache[roomId]) {
        this.roomService.getRoomById(roomId).subscribe({
          next: (response) => {
            this.roomImageCache[roomId] = response.images[0];
            this.roomNameCache[roomId] = response.roomNumber.toString();
          },
          error: (error) => {
            this.alertService.addAlert({
              severity: 'error',
              summary: 'Error while fetching room details',
              detail: ''
            });
          }
        });
      }
    });
  }

  getRoomImage(roomId: string): string {
    return this.roomImageCache[roomId];
  }

  getRoomName(roomId: string): string {
    return this.roomNameCache[roomId];
  }
}
