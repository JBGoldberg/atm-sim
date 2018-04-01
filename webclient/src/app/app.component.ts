import { Component } from '@angular/core';

import { AtmService } from './atm.service';

@Component({
  selector: 'atm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  amount: number = 0;

  constructor( private atmService: AtmService ) { }

  onKeyboardPress(signal: number): void {

    switch(signal) {
      case -2:
      this.amount = 0;
      break;

      case -1:
      this.onProcess();
      break;

      default:
      this.amount = parseInt(`${this.amount}${signal}`);
    }
  }

  onProcess() {
    console.log("Process!!!", this.atmService)
    this.atmService.withdraw(this.amount).subscribe( _result => {

      console.log("Result:", _result)
  
    })

   
  }
}
