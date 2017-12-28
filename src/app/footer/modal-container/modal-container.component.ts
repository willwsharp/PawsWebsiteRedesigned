import { Component } from '@angular/core';

import { MatDialog } from '@angular/material';
import { PawsModalComponent } from './paws-modals/paws-modal.component';

@Component({
  selector: 'paws-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent {

  constructor(private matDialog: MatDialog) { }

  openDialog(dialogName: string): void {
    let dialogRef;
    if (dialogName) {
      dialogRef = this.matDialog.open(PawsModalComponent, {
        height: 'auto',
        width: 'auto',
        data: { modalName: dialogName }
      })
    }
  }
}
