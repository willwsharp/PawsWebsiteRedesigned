import { Component, OnInit } from '@angular/core';
import { AppUtil } from '../shared/services/app-util.service';

@Component({
    moduleId: module.id,
    selector: 'footer-component',
    templateUrl: 'footer.component.html',
    styleUrls: [
        './footer.component.css'
    ]
})
export class FooterComponent {
    
    constructor(public appUtil: AppUtil) { }
}