import { Component, Input } from '@angular/core';
import { HotelCard } from '../../models/hotel.card.model';
import { RoomCard } from '../../models/room.model';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() roomCard?: RoomCard;
  hotelData?: HotelCard

  constructor(private service: MockDataService){}
}
