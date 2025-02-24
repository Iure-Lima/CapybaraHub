import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { HotelCard } from '../../models/hotel.card.model';
import { HotelCardComponent } from "./hotel-card/hotel-card.component";

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [HotelCardComponent,CarouselModule],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css'
})
export class HotelListComponent {
  hotels: HotelCard[] = [];
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  responsiveOptions: any[] | undefined;
}
