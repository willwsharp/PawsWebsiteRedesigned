import { Component, Input } from "@angular/core";


@Component({
    selector: 'paws-about-panel',
    templateUrl: './about-panel.component.html'
})
export class AboutPanelComponent {
    @Input() shouldHaveSeparator: boolean;
}