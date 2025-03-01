import { CommonModule, CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HotelCard } from '../../models/hotel.card.model';
import { RoomCard } from '../../models/room.model';
import { MongoDecimalPipe } from '../../pipes/mongo-decimal.pipe';
import { AlertService } from '../../services/alert/alert.service';
import { HotelService } from '../../services/hotel/hotel.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MongoDecimalPipe, CurrencyPipe],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() roomCard!: RoomCard;
  hotelData?: HotelCard;
  currentIndex = 0;
  currentImage!: string;

  constructor(
    private hotelService: HotelService,
    private alertService: AlertService,
  ) {}
  ngOnInit(): void {
    this.currentImage = this.roomCard.images[0];
    this.hotelService.getHotelById(this.roomCard.hotel).subscribe({
      next: (response) => {
        this.hotelData = response;
      },
      error: (error) =>
        this.alertService.addAlert({
          severity: 'error',
          summary: `${error.status} ${error.statusText}`,
          detail: 'An error occurred while loading rooms.',
        }),
    });
  }

  changeImage(index: number) {
    this.currentIndex = index;
    if (index >= this.roomCard.images.length) {
      this.currentImage = this.roomCard.images[0];
    } else {
      this.currentImage = this.roomCard.images[index];
    }
  }
}
