import { Component, OnInit } from '@angular/core';
import { cakeDetails } from 'src/app/cakeDetails.model';

@Component({
  selector: 'app-cake-images',
  templateUrl: './cake-images.component.html',
  styleUrls: ['./cake-images.component.css']
})
export class CakeImagesComponent implements OnInit {
  cakeImage: cakeDetails[] =[
    new cakeDetails('../../assets/030.jpg'),
    new cakeDetails('../../assets/71x0no3astc21.webp'),
    new cakeDetails('../../assets/900_755567gfsP_christmas-wedding-cake.jpg'),
    new cakeDetails('../../assets/1200px-Wedding_cake_with_pillar_supports,_2009.jpg'),
    new cakeDetails('../../assets/Glamorous-Wedding-Cake.jpg'),
    new cakeDetails('../../assets/Heartsweet.webp')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
