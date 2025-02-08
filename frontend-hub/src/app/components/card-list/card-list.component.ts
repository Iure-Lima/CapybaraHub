import { Component, Input, type OnChanges, type SimpleChanges } from '@angular/core';
import type { HotelCard } from '../../models/hotel.card.model';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent implements OnChanges{
  @Input() cardsList: HotelCard[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    // biome-ignore lint/complexity/useLiteralKeys: <explanation>
    if(changes['cardsList']){
      console.log(this.cardsList)
    }
  }

}
