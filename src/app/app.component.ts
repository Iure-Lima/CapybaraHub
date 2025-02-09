import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
// biome-ignore lint/style/useImportType: <explanation>
import { MockDataService } from './services/mock-data.service';
import { CardListComponent } from "./components/card-list/card-list.component";
import type { HotelCard } from './models/hotel.card.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CardListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  cardList: HotelCard[];

  constructor(private dataService:MockDataService){
    this.cardList = this.dataService.getHotelsCards();
  }
}
