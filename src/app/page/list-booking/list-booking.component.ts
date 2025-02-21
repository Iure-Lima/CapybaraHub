import { Component } from '@angular/core';

import { TabViewModule } from 'primeng/tabview';
import { Booking } from '../../models/booking.model';
import { DataviewComponent } from "./dataview/dataview.component";


@Component({
  selector: 'app-list-booking',
  standalone: true,
  imports: [TabViewModule, DataviewComponent],
  templateUrl: './list-booking.component.html',
  styleUrl: './list-booking.component.css'
})
export class ListBookingComponent {
  bookings:Booking[] = [
    {
      customer: "Charlie",
      hotel: "Mountain Lodge",
      room: "67b00327cc7e5fd3752c5751",
      checkInDate: "2024-03-04",
      checkoutDate: "2024-03-14",
      totalPrice: "$726",
      status: "completed"
    },
    {
      customer: "Julia",
      hotel: "Mountain Lodge",
      room: "67aff7b3017ceb6d0b5f80e3",
      checkInDate: "2024-04-08",
      checkoutDate: "2024-04-16",
      totalPrice: "$1807",
      status: "completed"
    },
    {
      customer: "Ethan",
      hotel: "Ocean View",
      room: "67aff7b3017ceb6d0b5f80e3",
      checkInDate: "2024-04-03",
      checkoutDate: "2024-04-04",
      totalPrice: "$1180",
      status: "cancelled"
    },
    {
      customer: "Alice",
      hotel: "City Lights Hotel",
      room: "67aff7b3017ceb6d0b5f80e3",
      checkInDate: "2024-04-15",
      checkoutDate: "2024-04-27",
      totalPrice: "$1617",
      status: "cancelled"
    },
    {
      customer: "Hannah",
      hotel: "Sunrise Inn",
      room: "67aff7b3017ceb6d0b5f80e3",
      checkInDate: "2024-03-18",
      checkoutDate: "2024-03-27",
      totalPrice: "$567",
      status: "completed"
    },
    {
      customer: "George",
      hotel: "Ocean View",
      room: "67aff7b3017ceb6d0b5f80e3",
      checkInDate: "2024-03-25",
      checkoutDate: "2024-04-05",
      totalPrice: "$1045",
      status: "completed"
    },
    {
      customer: "Julia",
      hotel: "Forest Retreat",
      room: "67aff7b3017ceb6d0b5f80e3",
      checkInDate: "2024-04-06",
      checkoutDate: "2024-04-09",
      totalPrice: "$506",
      status: "pending"
    },
    {
      customer: "Ian",
      hotel: "Mountain Lodge",
      room: "67aff7b3017ceb6d0b5f80e3",
      checkInDate: "2024-04-14",
      checkoutDate: "2024-04-15",
      totalPrice: "$258",
      status: "cancelled"
    },
    {
      customer: "Julia",
      hotel: "Forest Retreat",
      room: "67aff7b3017ceb6d0b5f80e3",
      checkInDate: "2024-04-28",
      checkoutDate: "2024-05-08",
      totalPrice: "$1110",
      status: "cancelled"
    },
    {
      customer: "Ian",
      hotel: "Mountain Lodge",
      room: "67aff7b3017ceb6d0b5f80e3",
      checkInDate: "2024-03-20",
      checkoutDate: "2024-03-31",
      totalPrice: "$650",
      status: "completed"
    },
    {
      customer: "Julia",
      hotel: "Sunrise Inn",
      room: "67aff7b3017ceb6d0b5f80e3",
      checkInDate: "2024-05-03",
      checkoutDate: "2024-05-04",
      totalPrice: "$782",
      status: "pending"
    },
    {
      customer: "Julia",
      hotel: "City Lights Hotel",
      room: "67aff7b3017ceb6d0b5f80e3",
      checkInDate: "2024-05-22",
      checkoutDate: "2024-05-28",
      totalPrice: "$447",
      status: "completed"
    },
    {
      customer: "George",
      hotel: "Forest Retreat",
      room: "67aff7b3017ceb6d0b5f80e3",
      checkInDate: "2024-05-21",
      checkoutDate: "2024-05-27",
      totalPrice: "$348",
      status: "completed"
    },
    {
      customer: "Fiona",
      hotel: "Mountain Lodge",
      room: "67aff7b3017ceb6d0b5f80e3",
      checkInDate: "2024-05-17",
      checkoutDate: "2024-05-21",
      totalPrice: "$1963",
      status: "cancelled"
    },
    {
      customer: "Bob",
      hotel: "Forest Retreat",
      room: "67aff7b3017ceb6d0b5f80e3",
      checkInDate: "2024-05-19",
      checkoutDate: "2024-05-27",
      totalPrice: "$1326",
      status: "cancelled"
    },
    {
      customer: "Diana",
      hotel: "Mountain Lodge",
      room: "67aff7b3017ceb6d0b5f80e3",
      checkInDate: "2024-04-02",
      checkoutDate: "2024-04-14",
      totalPrice: "$1599",
      status: "pending"
    },
    {
      customer: "Diana",
      hotel: "Sunrise Inn",
      room: "67aff7b3017ceb6d0b5f80e3",
      checkInDate: "2024-04-18",
      checkoutDate: "2024-04-28",
      totalPrice: "$1631",
      status: "confirmed"
    },
    {
      customer: "George",
      hotel: "Mountain Lodge",
      room: "67b00327cc7e5fd3752c5751",
      checkInDate: "2024-03-05",
      checkoutDate: "2024-03-15",
      totalPrice: "$851",
      status: "completed"
    },
    {
      customer: "Hannah",
      hotel: "Ocean View",
      room: "67b00327cc7e5fd3752c5751",
      checkInDate: "2024-05-13",
      checkoutDate: "2024-05-24",
      totalPrice: "$520",
      status: "confirmed"
    },
    {
      customer: "Julia",
      hotel: "Sunrise Inn",
      room: "67b00327cc7e5fd3752c5751",
      checkInDate: "2024-03-09",
      checkoutDate: "2024-03-23",
      totalPrice: "$650",
      status: "pending"
    }
  ];

}
