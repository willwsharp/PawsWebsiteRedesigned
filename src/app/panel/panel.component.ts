import { Component, Input, OnInit } from '@angular/core';
import { Panel } from '../panel/panel.model';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'panel-component',
    templateUrl: 'panel.component.html'
})

export class PanelComponent implements OnInit {
    @Input() shouldHaveSeparator: boolean = true;
    @Input() panel: Panel;

    panelSummary: string;
    panelMoreDetails: string;
    moreDetailsToggled: boolean = false;
    hasMoreDetails: boolean = false;

    ngOnInit(): void {
        this.panelSummary = this.panel.summary;
        if (this.panel.moreDetails) {
            this.hasMoreDetails = true;
        }
        this.panelMoreDetails = this.panel.moreDetails;
    }

    toggleMoreDetails(): void {
        this.moreDetailsToggled = !this.moreDetailsToggled;
    }

}