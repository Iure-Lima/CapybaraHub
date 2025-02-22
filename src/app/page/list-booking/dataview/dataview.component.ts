import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataViewModule } from 'primeng/dataview';
import { Booking } from '../../../models/booking.model';
import { AlertService } from '../../../services/alert/alert.service';
import { RoomService } from '../../../services/room/room.service';

@Component({
  selector: 'app-dataview',
  standalone: true,
  imports: [DataViewModule, CommonModule,ConfirmDialogModule, ButtonModule],
  providers: [ConfirmationService],
  templateUrl: './dataview.component.html',
  styleUrl: './dataview.component.css'
})
export class DataviewComponent implements OnChanges{
  @Input() bookingsData!: Booking[]
  roomImageCache: { [key: string]: string } = {};
  roomNameCache: { [key: string]: string } = {};

  constructor(private roomService: RoomService, private alertService: AlertService,private confirmationService: ConfirmationService){}
  ngOnChanges(changes: SimpleChanges): void {
    // biome-ignore lint/complexity/useLiteralKeys: <explanation>
    if(changes["bookingsData"].isFirstChange() || changes["bookingsData"]){
      this.preloadRoomDetails();
    }
  }


  preloadRoomDetails(): void {
    // biome-ignore lint/complexity/noForEach: <explanation>
    this.bookingsData.forEach((booking) => {
      const roomId = booking.room;
      if (!this.roomImageCache[roomId] && !this.roomNameCache[roomId]) {
        this.roomService.getRoomById(roomId).subscribe({
          next: (response) => {
            this.roomImageCache[roomId] = response.images[0];
            this.roomNameCache[roomId] = response.name;
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

  showConfirm(event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Do you want to Cancel this booking?',
        header: 'Cancel Booking',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"none",
        rejectIcon:"none",

        accept: () => {
            this.alertService.addAlert({ severity: 'info', summary: 'Confirmed', detail: 'Booking cancelled' });
        },
        reject: () => {
            this.alertService.addAlert({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
}
}
