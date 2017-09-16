import { Component, Input } from '@angular/core';
import { ModalDataService } from "../../modal-data-service/modal-data.service";

@Component({
    moduleId: module.id,
    selector: 'disclaimer-modal',
    templateUrl: 'disclaimer-modal.component.html'
})
export class DisclaimerModalComponent {
    @Input() modalName: string;


    private modalText: string = '';
    private modalTitle: string ='';

    constructor(private modalDataService: ModalDataService) {
        this.modalName = modalDataService.getModalTitle(this.modalName);
    }
}