import { Component } from '@angular/core';

import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-list-booking',
  standalone: true,
  imports: [TabViewModule],
  templateUrl: './list-booking.component.html',
  styleUrl: './list-booking.component.css'
})
export class ListBookingComponent {

}
