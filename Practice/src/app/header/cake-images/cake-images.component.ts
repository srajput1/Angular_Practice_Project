import { Component, OnInit } from '@angular/core';
import { cakeDetails } from 'src/app/cakeDetails.model';

@Component({
  selector: 'app-cake-images',
  templateUrl: './cake-images.component.html',
  styleUrls: ['./cake-images.component.css']
})
export class CakeImagesComponent implements OnInit {
  cakeImage: cakeDetails[] =[
    new cakeDetails('/cake/030.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
