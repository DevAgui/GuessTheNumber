import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  opportunities = 3;
  answer;

  generateRandomNumber = () => {

    return Math.floor(Math.random() * (1000 - 1 + 1)) 
  }

  compareNumbers = () => {

    if(this.answer == this.generateRandomNumber){
      return 
    }
  }

  constructor() {}

}
