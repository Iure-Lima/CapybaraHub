import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HotelCard } from '../../models/hotel.card.model';
import { RoomCard } from '../../models/room.model';
import { HotelService } from '../../services/hotel/hotel.service';

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

  constructor(private hotelService: HotelService){}
  ngOnInit(): void {
    this.currentImage = this.roomCard.images[0];
    this.hotelService.getHotelById(this.roomCard._id).subscribe({
      next: (response) => {
        this.hotelData = response;
      },
      error: (error) => console.error('Error:', error)
    })
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
