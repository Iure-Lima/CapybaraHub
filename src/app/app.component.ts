import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MockDataService } from './services/mock-data.service';
import { CardListComponent } from './components/card-list/card-list.component';
import type { HotelCard } from './models/hotel.card.model';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CardListComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  cardList: HotelCard[];

  constructor(private dataService: MockDataService) {
    this.cardList = this.dataService.getHotelsCards();
  }
}
