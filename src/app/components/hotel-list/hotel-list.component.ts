import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { HotelCard } from '../../models/hotel.card.model';
import { HotelCardComponent } from "./hotel-card/hotel-card.component";

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [HotelCardComponent,CarouselModule],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css'
})
export class HotelListComponent {
  hotelsList: HotelCard[] = [];

  constructor(){
    this.hotelsList = [{
      _id: '1',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '2',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '3',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '1',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '2',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '3',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '1',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '2',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '3',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '1',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '2',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '3',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '1',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '2',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '3',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '1',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '2',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '3',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '1',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '2',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    },{
      _id: '3',
      name: '',
      email: '',
      phone: '',
      rating: 0,
      address: {
        street: '',
        number: 0,
        postalCode: '',
        city: '',
        state: '',
        country: ''
      },
      image: ''
    }]
  }
}
