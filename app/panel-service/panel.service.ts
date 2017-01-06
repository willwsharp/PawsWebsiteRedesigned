import { Injectable } from '@angular/core';
import { Panel } from '../panel/panel';

@Injectable()
export class PanelService {

    private _panels : Panel[];
    private _genericSummary: string =
    `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin diam
    at erat consectetur, placerat tristique lacus commodo. Nunc sed augue at odio fermentum suscipit. Etiam
    et sapien eros. Maecenas pulvinar iaculis velit, in varius sem bibendum in. Cras accumsan massa enim,
    in pretium ante sollicitudin nec. Morbi nunc purus, condimentum ut metus eget, dapibus pharetra eros.
    Morbi faucibus arcu vel diam rutrum commodo. Nam mi sapien, laoreet et egestas ac, pellentesque nec erat.
    Vivamus suscipit auctor molestie. Quisque et tincidunt elit. Nullam lorem tellus, mollis sit amet rutrum
    sed, egestas a magna. Integer venenatis varius felis, quis iaculis augue efficitur sed. Nullam orci mi,
    tristique eget mi non, fermentum egestas nisi. Vivamus eget nisi risus.
    `;

    getPanels() : Panel[] {
        if (!this._panels) {
            this.createPanels();
        }
        return this._panels;
    }

    getPanel(name : string) : Panel {
        return this._panels.find(panel => panel.name === name);
    }

    /**
     * Creates the panels initially... TODO: do this in a better way
     */
    private createPanels(): void {
        let panels: Panel[] = [
            {
                name: 'About',
                cssId: 'about',
                summary: this._genericSummary,
                path: 'About/more-details'
            },
            {
                name: 'Services',
                cssId: 'services',
                summary: this._genericSummary,
                path: 'Services/more-details'
            },
            {
                name: 'Resources',
                cssId: 'resources',
                summary: this._genericSummary,
                path: 'Resources/more-details'
            }
        ];

        this._panels = panels;
    }



}