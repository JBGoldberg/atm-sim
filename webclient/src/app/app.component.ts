import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { AtmService } from './atm.service';
import { ErrorComponent } from './error/error.component';
import { DispenserComponent } from './dispenser/dispenser.component';

@Component({
  selector: 'atm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  amount: number = 0;

  constructor(
    private atmService: AtmService,
    private modalService: NgbModal
  ) { }

  onKeyboardPress(signal: number): void {

    switch (signal) {
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

    this.atmService.withdraw(this.amount).subscribe(
      _result => {
        this.modalService.open(DispenserComponent)
          .componentInstance.withdraw = _result
        this.amount = 0

      },
      _error => {
        switch (_error.error.exception) {
          case 'NoteUnavailableException':
            this.modalService.open(ErrorComponent)
              .componentInstance.message = 'There is no notes in the ATM to fullfil your request!'
            break;

          case 'InvalidArgumentException':
            this.modalService.open(ErrorComponent)
              .componentInstance.message = "The amount requested isn't valid."
            break;

          default:
            this.modalService.open(ErrorComponent)
              .componentInstance.message = 'General error. Please contact the technical team.'
        }
      }
    )
  }
}


