import {
  Component
} from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { RoomCard } from '../../models/room.model';
import { RoomService } from '../../services/room/room.service';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  roomList!: RoomCard[];

  constructor(private room: RoomService) {
    this.room.getAllRooms().subscribe({
      next: (response) =>{
        this.roomList = response.data;
      },
      error: (error) => console.error('Error:', error)
    })
  }
}
