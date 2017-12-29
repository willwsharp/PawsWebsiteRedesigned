import { Component, Input } from "@angular/core";


@Component({
    selector: 'paws-about-panel',
    templateUrl: './about-panel.component.html',
    styleUrls: [
        './about-panel.component.css'
    ]
})
export class AboutPanelComponent {
    @Input() shouldHaveSeparator: boolean;
}