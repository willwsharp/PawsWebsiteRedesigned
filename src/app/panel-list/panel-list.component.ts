import { Component, OnInit } from '@angular/core';
import { PanelService } from './panel.service';
import { AppUtil } from '../shared/services/app-util.service';

@Component({
    moduleId: module.id,
    selector: 'panel-list',
    templateUrl: 'panel-list.component.html',
    styleUrls: [
        './panel-list.component.css'
    ]
})
export class PanelList{
    constructor(private panelService: PanelService,
                public appUtil: AppUtil) { }
}