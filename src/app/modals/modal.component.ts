import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalDataService } from "./modal-data.service";

@Component({
    moduleId: module.id,
    selector: 'modal',
    templateUrl: 'modal.component.html'
})
export class ModalComponent {
    @Input() modalName: string;

    modalTitle: string = '';
    modalText: string = '';

    closeResult: string;

    constructor(private modalDataService: ModalDataService,
                private ngbModalService: NgbModal) {}

    ngOnInit(): void {
        this.modalText = this.modalDataService.getModalText(this.modalName);
        this.modalTitle = this.modalDataService.getModalTitle(this.modalName);
    }

    open(content) {
        this.ngbModalService.open(content);
    }
}