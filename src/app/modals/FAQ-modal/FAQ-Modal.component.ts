import { Component, Input, OnInit } from '@angular/core';

import { FAQModalService } from './FAQ-modal.service';
import { FAQPanel } from './FAQPanel';

@Component({
    moduleId: module.id,
    selector: 'FAQ-modal',
    templateUrl: 'FAQ-modal.component.html'
})
export class FAQModalComponent {

    private faqPanels: FAQPanel[];
    constructor(private faqModalService: FAQModalService) {}

    ngOnInit(): void {
        this.faqPanels = this.faqModalService.getFAQPanels();
    }

    getFAQPanels() : FAQPanel[] {
        return this.faqPanels;
    }
}