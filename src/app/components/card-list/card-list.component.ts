import {
  Component,
  Input,
  type OnChanges,
  type SimpleChanges,
} from '@angular/core';
import type { HotelCard } from '../../models/hotel.card.model';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  @Input() cardsList: HotelCard[] = [];
}
