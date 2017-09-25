import { Component, OnInit } from '@angular/core';
import { Panel } from '../panel/panel.model';
import { PanelService } from './panel.service';

@Component({
    moduleId: module.id,
    selector: 'panel-list',
    templateUrl: 'panel-list.component.html'
})
export class PanelList implements OnInit {

    private _panels: Panel[];
    ngOnInit(): void {
        this.createPanels();
    }
    
    constructor(private panelService: PanelService) { }

    private createPanels() : void {
        this._panels = this.panelService.createPanels();
    }

    public getPanelList() : Panel[] {
        return this._panels;
    }

}