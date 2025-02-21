import { Component, Input } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { Booking } from '../../../models/booking.model';

@Component({
  selector: 'app-dataview',
  standalone: true,
  imports: [DataViewModule],
  templateUrl: './dataview.component.html',
  styleUrl: './dataview.component.css'
})
export class DataviewComponent {
  @Input() bookingsData!: Booking[]
}
