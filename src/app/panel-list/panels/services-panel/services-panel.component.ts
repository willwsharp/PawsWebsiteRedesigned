import { Component, Input } from "@angular/core";


@Component({
    selector: 'paws-services-panel',
    templateUrl: './services-panel.component.html'
})
export class ServicesPanelComponent {
    @Input() shouldHaveSeparator: boolean;
}