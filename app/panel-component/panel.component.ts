import { Component, Input, OnInit } from '@angular/core';
import { Panel } from '../panel/panel';

@Component({
    moduleId: module.id,
    selector: 'panel-component',
    templateUrl: 'panel.component.html'
})

export class PanelComponent implements OnInit {
    @Input() shouldHaveSeparator: boolean = true;
    @Input() panel: Panel;

    fullPanelTxt: string;
    moreDetailsToggled: boolean = false;
    constructor() { }

    ngOnInit(): void {
        //This is called after the component is loaded,
        //it is a global function found in scrolling-nav.js
        initSmoothScroll();

        this.fullPanelTxt = this.panel.summary;
    }

    toggleMoreDetails(): void {
        if (this.moreDetailsToggled) {
            this.fullPanelTxt = this.panel.moreDetails;
        } else {
            this.fullPanelTxt += this.panel.moreDetails;
        }

        this.moreDetailsToggled = !this.moreDetailsToggled;
    }

}