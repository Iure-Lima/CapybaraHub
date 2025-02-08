import { Injectable } from '@angular/core';
import type { HotelCard } from '../models/hotel.card.model';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private mockData: HotelCard[] = [];

  constructor() {
    const imagesURLs: string[] = ["https://www.motor24.pt/files/2020/01/1-Hotel_Easy-Resize.com_.jpg","https://static01.nyt.com/images/2013/10/20/travel/20CHECKIN1/20CHECKIN1-superJumbo.jpg?quality=90&auto=webp","https://s2.glbimg.com/gLLc4h8Y5RW33RouIiNFAkkzghI=/smart/e.glbimg.com/og/ed/f/original/2019/12/13/hotel-rio-piscina-hilton-barra.jpg","https://www.buzztrip.com.br/wp-content/uploads/2021/02/tivoli-mofarrej-sao-paulo-piscina.jpg","https://www.dicasdeviagem.com/wp-content/uploads/2019/08/melhores-hoteis-buenos-aires-fourseason.jpg","https://spcity.com.br/wp-content/uploads/2017/01/skye_unique6-1300x700.jpg"];

    for (let i = 0; i < imagesURLs.length; i++){
      this.mockData.push({
        id: 1,
        name: 'Hotel Conchitas',
        rating: 5,
        image: imagesURLs[i],
        location: { street: 'Jardines de Santa Monica', city: 'Coroico', state: 'La Paz', country: 'Bolivia' }
      })
    }
  }

  getHotelsCards(): HotelCard[] {
    return this.mockData;
  }
}
