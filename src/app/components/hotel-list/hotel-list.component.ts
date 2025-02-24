import { Component } from '@angular/core';
import { HotelCardComponent } from "./hotel-card/hotel-card.component";

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [HotelCardComponent],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css'
})
export class HotelListComponent {

}
