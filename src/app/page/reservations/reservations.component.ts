import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { HotelCard } from '../../models/hotel.card.model';
import { RoomCard } from '../../models/room.model';
import { AlertService } from '../../services/alert/alert.service';
import { HotelService } from '../../services/hotel/hotel.service';
import { RoomService } from '../../services/room/room.service';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CalendarModule, FormsModule, DropdownModule, FloatLabelModule],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent {
  selectedDates: Date[] = []
  guestOptions: string[] = ["Teste","Teste2"]
  selectedGuests!:string;
  disabledDates: Date[] = []; //Aqui mais vai entrar os dados referentes as datas com agendamento
  today: Date = new Date();

  room!: RoomCard;
  hotel!: HotelCard;

  constructor(private roomService: RoomService, private hotelService: HotelService, private route : ActivatedRoute, private alertService: AlertService, private router: Router){
    // biome-ignore lint/complexity/useLiteralKeys: <explanation>
    this.roomService.getRoomById(this.route.snapshot.params['id']).subscribe({
      next: (response) => {
        this.room = response;

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

}
