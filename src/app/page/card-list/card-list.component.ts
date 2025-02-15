import {
  Component
} from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { RoomCard } from '../../models/room.model';
import { AlertService } from '../../services/alert/alert.service';
import { RoomService } from '../../services/room/room.service';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  roomList!: RoomCard[];

  constructor(private room: RoomService, private alertService: AlertService) {
    this.room.getAllRooms().subscribe({
      next: (response) =>{
        this.roomList = response.data;
      },
      error: (error) => this.alertService.addAlert({severity: 'error', summary:`${error.status} ${error.statusText}`,detail:"An error occurred while loading rooms."})
    })
  }
}
