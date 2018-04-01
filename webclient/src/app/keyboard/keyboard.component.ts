import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'atm-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  @Output() onEvent = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  onClick(key: number): void {
    // Number signal
    this.onEvent.emit(key)
  }

  onClear(): void {
    // Reset signal
    this.onEvent.emit(-2)
  }

  onWithdraw(): void {
    // Withdraw signal
    this.onEvent.emit(-1)
  }

}