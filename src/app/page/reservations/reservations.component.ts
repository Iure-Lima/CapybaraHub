import { NgClass } from '@angular/common';
import { Component, DoCheck, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { HotelCard } from '../../models/hotel.card.model';
import { RoomCard } from '../../models/room.model';
import { AlertService } from '../../services/alert/alert.service';
import { CacheBookingService } from '../../services/cache/cache-booking.service';
import { HotelService } from '../../services/hotel/hotel.service';
import { RoomService } from '../../services/room/room.service';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CalendarModule, FormsModule, DropdownModule, FloatLabelModule, NgClass],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent implements DoCheck {
  @Input() selectedDates: Date[] = []
  guestOptions: string[] = ["1 Guest","2 Guest"]
  selectedGuests!:string;
  totalPriceWithNights = 0
  totalPrice = 0;
  totalNights = 0;
  disabledDates: Date[] = []; //Aqui mais vai entrar os dados referentes as datas com agendamento
  today: Date = new Date();

  //Tanto room quanto hotel iniciam com propriedades vazias, para evitar erros
  room: RoomCard = {
    _id: '',
    hotel: '',
    roomTypeId: '',
    pricePerNight: '',
    roomNumber: 0,
    status: 'Available',
    images: [],
    rating: 0
  };
  hotel: HotelCard = {
    _id: '',
    name: '',
    email: '',
    phone: '',
    rating: 0,
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      number: 0,
      postalCode: ''
    },
    image: ''
  };

  constructor(private roomService: RoomService, private hotelService: HotelService, private route : ActivatedRoute, private alertService: AlertService, private router: Router, private cacheBookingService: CacheBookingService){
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
              detail: ''
            })
            this.router.navigate(['/home'])
          }
        })
      },
      error: (error) => {
        this.alertService.addAlert({
          severity: 'error',
          summary: 'Error while reading the room',
          detail: ''
        })
        this.router.navigate(['/home'])
      }
    })
  }
  ngDoCheck(): void {
    if (!(this.selectedDates.length < 2)) {
      if (this.selectedDates[0] && this.selectedDates[1]){
        this.totalNights = this.getNumberOfDays(this.selectedDates[0], this.selectedDates[1]);
        this.totalPriceWithNights = Number(this.room.pricePerNight) * this.totalNights;
      }else{
        this.totalNights = 1;
        this.totalPriceWithNights = Number(this.room.pricePerNight);
      }
    }
    this.totalPrice = this.totalPriceWithNights + 185
  }

  getNumberOfDays(startDate: Date, endDate: Date): number {
    return Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) + 1);
  }

  book(){
    if (this.selectedGuests && this.selectedDates.length > 0){
      this.cacheBookingService.setDataCache({
        room: this.room,
        selectDate: this.selectedDates,
        guest: this.selectedGuests,
        totalPrice: this.totalPrice.toString(),
        totalNights: this.totalNights,
        totalPriceWithNights: this.totalPriceWithNights
      })
      this.router.navigate(['/booking', this.room._id])
    }else{
      this.alertService.addAlert({
        severity: 'error',
        summary: 'Error while booking',
        detail: 'Please select a guest and at least two dates'
      })
    }

  }

}
