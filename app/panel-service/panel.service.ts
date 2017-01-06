import { Injectable } from '@angular/core';
import { Panel } from '../panel/panel';

@Injectable()
export class PanelService {
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

    createPanels(): Panel[] {
        let panels: Panel[] = [
            {
                title: 'About',
                cssId: 'about',
                summary: this._genericSummary
            },
            {
                title: 'Services',
                cssId: 'services',
                summary: this._genericSummary
            },
            {
                title: 'Resources',
                cssId: 'resources',
                summary: this._genericSummary
            }
        ];

        return panels;
    }

}