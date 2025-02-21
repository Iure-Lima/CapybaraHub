import { Component, Input, OnInit } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { Booking } from '../../../models/booking.model';
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
  roomImages: { [key: string]: string } = {};

  constructor(private roomService: RoomService){}

  ngOnInit(): void {
    this.preloadRoomDetails();
  }

  preloadRoomDetails(): void {
    // biome-ignore lint/complexity/noForEach: <explanation>
    this.bookingsData.forEach((booking) => {
      const roomId = booking.room;
      if (!this.roomImages[roomId]) {
        this.roomService.getRoomById(roomId).subscribe({
          next: (response) => {
            this.roomImages[roomId] = response.images[0];
          },
          error: (error) => {
            console.error(`Erro ao obter detalhes do quarto ${roomId}:`, error);
            this.roomImages[roomId] = 'path/to/default-image.jpg';
          }
        });
      }
    });
  }

  getRoomImage(roomId: string): string {
    return this.roomImages[roomId];
  }
}
