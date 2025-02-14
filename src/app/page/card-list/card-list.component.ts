import {
    Component
} from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import type { HotelCard } from '../../models/hotel.card.model';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  cardList: HotelCard[];

  constructor(private dataService: MockDataService) {
    this.cardList = this.dataService.getHotelsCards();
  }
}
