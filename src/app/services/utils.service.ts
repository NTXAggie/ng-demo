import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  genRandomGreenColor(): any {
    return `rgb(${Math.floor(Math.random() * 210)}, 255, ${Math.floor(Math.random() * 210)})`;
  }
  getKeyByValue(object: any, value: any): any {
    return Object.keys(object).find(key => object[key] === value);
  }
}
