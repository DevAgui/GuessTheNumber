import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  opportunities = 3;
  answer = false;
  randomNumber;

  generateRandomNumber = () => {

    this.randomNumber = Math.floor(Math.random() * (1000 - 1 + 1)) ;
    console.log(this.randomNumber);

  }

  compareNumbers = (answer) => {

    if(answer == this.randomNumber){

      return this.answer = true;

    } else{
      this.opportunities--;
      
      return this.answer= false;
    }
    
  }

  constructor() {}

}
