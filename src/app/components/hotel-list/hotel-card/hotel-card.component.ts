import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';


@Component({
  selector: 'app-hotel-card',
  standalone: true,
  imports: [AvatarModule],
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.css'
})
export class HotelCardComponent {

}
