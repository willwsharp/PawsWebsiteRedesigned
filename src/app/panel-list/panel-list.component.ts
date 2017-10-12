import { Component, OnInit } from '@angular/core';
import { PanelService } from './panel.service';

@Component({
    moduleId: module.id,
    selector: 'panel-list',
    templateUrl: 'panel-list.component.html',
    styleUrls: [
        './panel-list.component.css'
    ]
})
export class PanelList implements OnInit {

    ngOnInit(): void {
    }
    
    constructor(private panelService: PanelService) { }

}