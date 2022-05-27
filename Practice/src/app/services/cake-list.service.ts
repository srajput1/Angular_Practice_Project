import { Injectable } from '@angular/core';
import { cakeItem } from '../cakeItem.model';

@Injectable({
  providedIn: 'root'
})
export class CakeListService {
  private cakelsts: cakeItem [] =[
    new cakeItem  ('Black current','This is a Chocolet cake'),
    new cakeItem  ('Pink current','This is a Pink cake')
  ];
  public getCakeList(){
    return this.cakelsts.slice();
  }
  constructor() { }
}
