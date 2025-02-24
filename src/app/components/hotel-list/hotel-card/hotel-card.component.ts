import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { HotelCard } from '../../../models/hotel.card.model';


@Component({
  selector: 'app-hotel-card',
  standalone: true,
  imports: [AvatarModule],
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.css'
})
export class HotelCardComponent {
  @Input() hotel!: HotelCard;

  constructor(private router: Router){}

  navigateToHotel(){
    this.router.navigate(['/hotel-detail', this.hotel._id]);
  }

}
