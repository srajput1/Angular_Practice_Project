import { Injectable } from '@angular/core';
import { cakeDetails } from '../app/cakeDetails.model';

@Injectable({
  providedIn: 'root'
})
export class CakeServiceService {
  private cakeImage: cakeDetails[] =[
    new cakeDetails('../../assets/030.jpg'),
    new cakeDetails('../../assets/71x0no3astc21.webp'),
    new cakeDetails('../../assets/900_755567gfsP_christmas-wedding-cake.jpg'),
    new cakeDetails('../../assets/1200px-Wedding_cake_with_pillar_supports,_2009.jpg'),
    new cakeDetails('../../assets/Glamorous-Wedding-Cake.jpg'),
    new cakeDetails('../../assets/Heartsweet.webp')
  ];

  getCakeDetails(){
    return this.cakeImage.slice();
  }
  constructor() { }
}
