import { Component, Input, OnInit } from '@angular/core';
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

    constructor(private modalDataService: ModalDataService) { }

    ngOnInit(): void {
        this.modalText = this.modalDataService.getModalText(this.modalName);
        this.modalTitle = this.modalDataService.getModalTitle(this.modalName);
    }
}