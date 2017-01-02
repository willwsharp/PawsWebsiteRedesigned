import { Component, OnInit } from '@angular/core';
import { Panel } from '../panel/panel';
import { PanelService } from '../panel-service/panel.service';

import { RouterModule } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'panel-list',
    templateUrl: 'panel-list.component.html'
})
export class PanelListComponent implements OnInit {

    private _panels: Panel[];
    ngOnInit(): void {
        this.createPanels();
    }
    
    constructor(private panelService: PanelService) { }
    private createPanels() : void {
        this._panels = this.panelService.getPanels();
    }

    public getPanelList() : Panel[] {
        return this._panels;
    }

}