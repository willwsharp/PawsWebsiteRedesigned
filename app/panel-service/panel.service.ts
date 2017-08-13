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
                summary: `
                Ms. Woodward received her law degree from the Washington & Lee University School of Law in Lexington,
                Virginia. She received a B.A. from Williams College in Williamstown, Massachusetts, 
                and prior to that, she received an A.A. from Hartford College for Women in Hartford, 
                Connecticut. She was admitted to the Virginia State Bar in 1980. In 2012, she had the 
                honor of being appointed the Assistant Commissioner of Accounts for Fauquier County. 
                Ms. Woodward and her husband have lived in Fauquier County for almost thirty years.            
                `,
                moreDetails: 
                `
                Since moving to the county, she has been active in many community groups. Some 
                of the groups with which she has been involved include the following: 
                <ul>
                    <li>Altrusa International, Inc. [International service organization]</li>
                    <li>Fauquier Health Foundation</li>
                    <li>Piedmont Symphony Orchestra</li>
                    <li>Safe & SANE Task Force</li>
                    <li>SAVVI</li>
                    <li>Blue Ridge Dance Theatre</li>
                    <li>Fauquier Community Action Committee (local Head Start agency)</li>
                    <li>Fauquier County Bar Association</li>
                    <li>Fauquier County Chamber of Commerce</li>
                    <li>Fauquier Courthouse NSDAR</li>
                    <li>Literacy Volunteers of Fauquier County</li>
                    <li>Warrenton Presbyterian Church</li>
                </ul>
                `
            },
            {
                title: 'Services',
                cssId: 'services',
                summary: 
                `
                Ms. Woodward is engaged in a general practice of law. Her areas of practice include:
                <ul>
                    <li>Estate Planning</li>
                    <li>Estate Administration</li>
                    <li>Real Estate matters including sales, purchases and refinances</li>
                    <li>Real Estate Partition Actions</li>
                    <li>Guardianships and Conservatorships</li>
                    <li>Creation of corporations, limited liability companies, partnerships and other business matters</li>
                </ul>

                For Business, Lititgation, and Family Law contact <a href="http://www.csadlawyers.com/" target="_blank">Culin, Sharp, Autry & Day</a>
                `
            },
            {
                title: 'Resources',
                cssId: 'resources',
                summary: this._genericSummary,
                moreDetails: this._genericSummary
            }
        ];

        return panels;
    }

}