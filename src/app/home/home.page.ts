import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userAnswer:number;
  answerString:string;
  randomNumber = -1;
  trueNumber:boolean = false;

  

  generateRandomNumber = () => {

    this.randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) ;
    console.log(this.randomNumber);
    this.trueNumber = false;
    return this.answerString="Your number has been generated between 1 and 100.";

  }

  compareNumbers = (userAnswer) => {

    if(userAnswer == this.randomNumber){
      this.trueNumber = true;
      return this.answerString="Congratulations!! You have guess the number!";
      

    }

    if(userAnswer < this.randomNumber){
      this.trueNumber = false;
      return this.answerString="Your number is less than the number I thought. Try it again.";

    }

    if(userAnswer > this.randomNumber){
      this.trueNumber = false;
      return this.answerString="Your number is greater than the number I thought. Try it again.";

    }
    
  }

  constructor() {}

}
