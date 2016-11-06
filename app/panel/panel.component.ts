import { Component, Input } from '@angular/core';

import { PanelDetails  } from './panel-details';
@Component({
    moduleId: module.id,
    selector: 'panel',
    templateUrl: 'panel.component.html'
})
export class Panel {

    @Input() slave: string;

    constructor() { 


    }

}