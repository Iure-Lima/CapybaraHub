import { CommonModule, NgClass } from '@angular/common';
import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ImageModule } from 'primeng/image';
import { HotelCard } from '../../models/hotel.card.model';
import { RoomCard } from '../../models/room.model';
import { MongoDecimalPipe } from '../../pipes/mongo-decimal.pipe';
import { AlertService } from '../../services/alert/alert.service';
import { CacheBookingService } from '../../services/cache/cache-booking.service';
import { HotelService } from '../../services/hotel/hotel.service';
import { RoomService } from '../../services/room/room.service';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [
    CalendarModule,
    FormsModule,
    DropdownModule,
    FloatLabelModule,
    NgClass,
    ImageModule,
    MongoDecimalPipe,
    CommonModule,
  ],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css',
})
export class ReservationsComponent implements DoCheck, OnInit {
  @Input() selectedDates: Date[] = [];
  guestOptions: string[] = ['1 Guest', '2 Guest'];
  selectedGuests!: string;
  totalPriceWithNights = 0;
  totalPrice = 0;
  totalNights = 0;
  minDate: Date = new Date();
  disabledDates: Date[] = []; //Aqui mais vai entrar os dados referentes as datas com agendamento

  room!: RoomCard
  hotel!: HotelCard

  constructor(
    private roomService: RoomService,
    private hotelService: HotelService,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private router: Router,
    private cacheBookingService: CacheBookingService,
  ) {
    // biome-ignore lint/complexity/useLiteralKeys: <explanation>
    this.roomService.getRoomById(this.route.snapshot.params['id']).subscribe({
      next: (response) => {
        this.room = response;
        this.totalPrice = Number(this.room.pricePerNight);

        //Vai definir o hotel quando a requisição do room for um sucesso
        this.hotelService.getHotelById(this.room.hotel).subscribe({
          next: (response) => {
            this.hotel = response;
          },
          error: (error) => {
            this.alertService.addAlert({
              severity: 'error',
              summary: 'Error while reading the hotel',
              detail: '',
            });
            this.router.navigate(['/home']);
          },
        });
      },
      error: (error) => {
        this.alertService.addAlert({
          severity: 'error',
          summary: 'Error while reading the room',
          detail: '',
        });
        this.router.navigate(['/home']);
      },
    });
  }
  ngOnInit(): void {
    this.minDate = new Date(this.minDate);
    this.minDate.setDate(this.minDate.getDate() + 1);
  }
  ngDoCheck(): void {
    const price =
      typeof this.room.pricePerNight === 'object' &&
      this.room.pricePerNight !== null &&
      '$numberDecimal' in this.room.pricePerNight
        ? Number.parseFloat(this.room.pricePerNight.$numberDecimal)
        : Number(this.room.pricePerNight);

    if (!(this.selectedDates.length < 2)) {
      if (this.selectedDates[0] && this.selectedDates[1]) {
        this.totalNights = this.getNumberOfDays(
          this.selectedDates[0],
          this.selectedDates[1],
        );
        this.totalPriceWithNights = Number(price) * this.totalNights;
      } else {
        this.totalNights = 1;
        this.totalPriceWithNights = Number(price);
      }
    }
    this.totalPrice = this.totalPriceWithNights + 185;
  }

  getNumberOfDays(startDate: Date, endDate: Date): number {
    return Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) + 1,
    );
  }

  book() {
    if (this.selectedGuests && this.selectedDates.length > 0) {
      this.cacheBookingService.setDataCache({
        room: this.room,
        selectDate: this.selectedDates,
        guest: this.selectedGuests,
        totalPrice: this.totalPrice.toString(),
        totalNights: this.totalNights,
        totalPriceWithNights: this.totalPriceWithNights,
      });
      this.router.navigate(['/booking', this.room._id]);
    } else {
      this.alertService.addAlert({
        severity: 'error',
        summary: 'Error while booking',
        detail: 'Please select a guest and at least two dates',
      });
    }
  }
}
