import { Component, Input } from '@angular/core';
import { Panel } from '../panel/panel';

@Component({
    moduleId: module.id,
    selector: 'panel-component',
    templateUrl: 'panel.component.html'
})

export class PanelComponent {
    @Input() shouldHaveSeparator: boolean = true;
    @Input() panel : Panel;
    constructor() {}

}