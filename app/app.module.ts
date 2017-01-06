import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { RootComponent } from './root-component';
import { PanelService } from './panel-service/panel.service';
import { PanelListComponent } from './panel-list-component/panel-list.component';
import { PanelDetailsComponent } from './panel-details-component/panel-details.component';
import { PanelComponent } from './panel-component/panel.component';
import { NavBarComponent } from './nav-bar-component/nav-bar.component';
import { FooterComponent } from './footer-component/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                component: PanelListComponent
            },
            {
                path: ":name/more-details",
                component: PanelDetailsComponent
            }
        ])
    ],
    declarations: [
        RootComponent,
        PanelListComponent,
        PanelDetailsComponent,
        PanelComponent,
        NavBarComponent,
        FooterComponent
    ],
    providers: [PanelService],
    bootstrap: [RootComponent],
})
export class AppModule { }
