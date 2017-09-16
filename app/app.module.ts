import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RootComponent } from './root-component';

import { PanelService } from './panel-service/panel.service';
import { ScrollService } from './scroll-service/scroll.service';
import { ModalDataService } from './modal-data-service/modal-data.service';

import { PanelList } from './panel-list/panel-list.component';
import { PanelComponent } from './panel-component/panel.component';
import { NavBarComponent } from './nav-bar-component/nav-bar.component';
import { FooterComponent } from './footer-component/footer.component';
import { DisclaimerModalComponent } from './modal-components/disclaimer-modal-component/disclaimer-modal.component';


// TODO: modularise this app
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
    ],
    declarations: [
        RootComponent,
        PanelList,
        PanelComponent,
        NavBarComponent,
        FooterComponent,
        DisclaimerModalComponent
    ],
    providers: [PanelService,
        ScrollService,
        ModalDataService],
    bootstrap: [RootComponent],
})
export class AppModule { }
