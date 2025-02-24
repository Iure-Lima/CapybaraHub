import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { HotelCard } from '../../models/hotel.card.model';
import { HotelService } from '../../services/hotel/hotel.service';
import { HotelCardComponent } from "./hotel-card/hotel-card.component";

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [HotelCardComponent,CarouselModule],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css'
})
export class HotelListComponent {
  hotelsList: HotelCard[] = [];

  constructor(private hotelService: HotelService){
    this.hotelService.getAllHotels().subscribe({
      next: (response) => {
        this.hotelsList = response.data
      },
      error: (error) => console.error(error)
    });
  }
}
