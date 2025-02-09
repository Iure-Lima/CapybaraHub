import { Component, Input, OnInit } from '@angular/core';
import type { HotelCard } from '../../models/hotel.card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() card?: HotelCard;
}
