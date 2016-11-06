import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'panel-list',
    template: 
    `
        <panel 
            [slave]="'I am the master!'">
        </panel>
    `
})
export class PanelList {

    constructor() { }

}