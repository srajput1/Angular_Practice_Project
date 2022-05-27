import { Component, OnInit } from '@angular/core';
import { cakeDetails } from '../cakeDetails.model';
import { cakeItem } from '../cakeItem.model';
import { CakeListService } from '../services/cake-list.service';
import { CakeServiceService } from '../services/cake-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  cakeItems:cakeItem[] =[];
  cakeImage: cakeDetails[] =[];
  constructor(private cakeList: CakeListService,
              private cakeService:CakeServiceService) { 
    this.cakeItems = cakeList.getCakeList();
    this.cakeImage =this.cakeService.getCakeDetails();          
  }
    

  ngOnInit() {
    
  }

}
