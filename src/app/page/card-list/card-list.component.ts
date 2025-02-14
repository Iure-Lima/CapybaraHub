import {
  Component
} from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { RoomCard } from '../../models/room.model';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  roomList!: RoomCard[];

  constructor(private dataService: MockDataService) {
    this.roomList = this.dataService.getRooms()
  }
}
