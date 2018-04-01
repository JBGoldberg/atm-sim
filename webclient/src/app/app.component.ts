import { Component } from '@angular/core';

@Component({
  selector: 'atm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  amount = 123;

  onKeyboardPress($signal: number): void {

    console.log("Signal:", $signal)
  
  }
}
