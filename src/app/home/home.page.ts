import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userAnswer:number;
  answerString:string;
  randomNumber;

  generateRandomNumber = () => {

    this.randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) ;
    console.log(this.randomNumber);

    return this.answerString="Your number has been generated between 1 and 100."

  }

  compareNumbers = (userAnswer) => {

    if(userAnswer == this.randomNumber){

      return this.answerString="Congratulations!! You have guess the number!";

    }

    if(userAnswer < this.randomNumber){
      return this.answerString="Your number is less than the number I thought.";

    }

    if(userAnswer > this.randomNumber){
      return this.answerString="Your number is greater than the number I thought.";

    }
    
  }

  constructor() {}

}
