import { Component, OnInit } from '@angular/core';
import { CakeServiceService } from 'src/app/services/cake-service.service';
import { cakeDetails } from 'src/app/cakeDetails.model';

@Component({
  selector: 'app-cake-images',
  templateUrl: './cake-images.component.html',
  styleUrls: ['./cake-images.component.css']
})
export class CakeImagesComponent implements OnInit {
  cakeImage: cakeDetails[] =[];
  constructor(private cakeservice:CakeServiceService) { }

  ngOnInit() {
    this.cakeImage = this.cakeservice.getCakeDetails();
  }

}
