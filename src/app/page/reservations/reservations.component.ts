import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';

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
  disabledDates: Date[] = [new Date()];
  today: Date = new Date();

}
