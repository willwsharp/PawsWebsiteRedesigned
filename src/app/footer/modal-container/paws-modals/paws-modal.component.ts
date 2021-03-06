import { Component, Input, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PawsModalService } from './paws-modal.service';
import { PawsModal } from './paws-modal.model';
import { PawsModalType } from './paws-modal-type.enum';

@Component({
    moduleId: module.id,
    selector: 'paws-modal',
    templateUrl: 'paws-modal.component.html'
})
export class PawsModalComponent {
    public modal: PawsModal;

    public isBaseModal: boolean;

    constructor(private modalDataService: PawsModalService,
                public dialogRef: MatDialogRef<PawsModalComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit(): void {
        let modalTitle = this.data.modalName;

        this.modal = this.modalDataService.getModal(modalTitle);
        this.isBaseModal = (this.modal.type === PawsModalType.BASE) ? true : false;
    }
}