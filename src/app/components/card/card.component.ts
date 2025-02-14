import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HotelCard } from '../../models/hotel.card.model';
import { RoomCard } from '../../models/room.model';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() roomCard!: RoomCard;
  hotelData?: HotelCard
  currentIndex = 0;
  currentImage!: string;

  constructor(private service: MockDataService){}
  ngOnInit(): void {
    this.currentImage = this.roomCard.images[0];
    this.hotelData = this.service.getHotelById(this.roomCard._id)
  }

  changeImage(index:number){
    this.currentIndex = index;
    if (index >= this.roomCard.images.length)
    {
      this.currentImage = this.roomCard.images[0];
    }else{
      this.currentImage = this.roomCard.images[index];
    }

  }
}
