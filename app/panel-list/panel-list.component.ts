import { Component, OnInit } from '@angular/core';
import { NavigationBar } from '../nav/nav-bar.component';

@Component({
    moduleId: module.id,
    selector: 'panel-list',
    templateUrl: 'panel-list.component.html'
})
export class PanelList implements OnInit {

    ngOnInit() {
        //This is called after the component is loaded,
        //it is a global function found in scrolling-nav.js
        initSmoothScroll();
    }
    
    constructor() { }

}