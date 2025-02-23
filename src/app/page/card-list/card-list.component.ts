import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { CardComponent } from '../../components/card/card.component';
import { RoomCard } from '../../models/room.model';
import { AlertService } from '../../services/alert/alert.service';
import { RoomService } from '../../services/room/room.service';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent, DataViewModule],
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  roomList!: RoomCard[];

  constructor(
    private roomService: RoomService,
    private alertService: AlertService,
  ) {
    this.roomService.getAllRooms();
    this.roomService.roomObservable.subscribe((room) => {
      if (room) {
        this.roomList = room;
      }
    });
  }
}
