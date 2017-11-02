import { Component, Input } from "@angular/core";


@Component({
    selector: 'paws-services-panel',
    templateUrl: './services-panel.component.html',
    styleUrls: ['./services-panel.component.css']
})
export class ServicesPanelComponent {
    @Input() shouldHaveSeparator: boolean;
}