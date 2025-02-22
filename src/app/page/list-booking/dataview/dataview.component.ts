import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataViewModule } from 'primeng/dataview';
import { Booking } from '../../../models/booking.model';
import { AlertService } from '../../../services/alert/alert.service';
import { BookingService } from '../../../services/booking/booking.service';
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
  @Output() bookingUpdateList = new EventEmitter<string>();

  constructor(private roomService: RoomService, private alertService: AlertService,private confirmationService: ConfirmationService, private bookingService: BookingService){}
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

  showConfirm(event: Event, id: string) {
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
          this.bookingService.cancelBooking(id).subscribe({
            next: (response) => {
              //Adicionar aqui um alerta para quando o booking foi criado com sucesso. Usar o alertService
              console.log(response)
              this.bookingUpdateList.emit("cancelled");
            },
            error: (error) => {
              //Adicionar aqui um alerta para quando o tivemos algum erro booking. Usar o alertService
              console.log(error)
            }
          });
        },
        reject: () => {
            this.alertService.addAlert({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
  }
}
