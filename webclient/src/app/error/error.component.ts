import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'atm-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  message: string = 'An error was happen. :('

  constructor(public modalActive: NgbActiveModal) { }

  ngOnInit() { }

  onClose() {
    this.modalActive.close();
  }

}