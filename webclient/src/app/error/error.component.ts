import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'atm-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  message: string = 'An error was happen. :('

  constructor( public modalActive: NgbActiveModal ) { }

  ngOnInit() {
    console.log("Modal:")
  }

  onClose() {
    this.modalActive.close();
  }

}


// export class OkCancelDialogComponent implements OnInit {

//   proceed: boolean;
//   message: string = 'Please define message when calling the DIALOG';
//   title: string = 'Please define title when calling the DIALOG';

//   showYesNoControl = false;
//   showOkControl = false;

//   constructor(
//     public dialogRef: MatDialogRef<OkCancelDialogComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any
//   ) { }

//   ngOnInit() {
//     this.message = this.data.message;
//     this.title = this.data.title;

//     switch (this.data.dialog_type) {

//       case 'ok-dialog':
//         this.showOkControl = true;
//         break;

//       case 'yes-no-dialog':
//       default:
//         this.showYesNoControl = true;
//     }

//   }

//   chooseProceed() {
//     this.dialogRef.close(true);
//   }

//   chooseCancel() {
//     this.dialogRef.close(false);
//   }

// }