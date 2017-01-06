import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Panel } from '../panel/panel';
import { PanelService } from '../panel-service/panel.service';



@Component({
    moduleId: module.id,
    selector: 'panel-more-details',
    templateUrl: 'panel-more-details.component.html'
})
export class PanelDetailsComponent implements OnInit {

    panel: Panel;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private panelService : PanelService
    ) { }

    ngOnInit() {
        let panelName = this.route.snapshot.params['name'];

        this.panel = this.panelService.getPanel(panelName);
    }
    
}