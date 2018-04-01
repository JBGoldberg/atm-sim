import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'atm-dispenser',
  templateUrl: './dispenser.component.html',
  styleUrls: ['./dispenser.component.css']
})
export class DispenserComponent implements OnInit {

  withdraw: any;

  constructor(public modalActive: NgbActiveModal) {}

  ngOnInit() {
  }

  onClose() {
    console.log(this.withdraw.money["notes-10"]);
    this.modalActive.close();
  }

  hasNote(value: number) {
    return true;
  }

}
