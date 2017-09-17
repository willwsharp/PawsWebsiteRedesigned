import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RootComponent } from './root.component';

import { PanelService } from './panel/panel.service';
import { ScrollService } from './custom-scroll/scroll.service';
import { ModalDataService } from './modals/modal-data.service';
import { FAQModalService } from './modals/FAQ-modal/FAQ-modal.service';

import { PanelList } from './panel/panel-list.component';
import { PanelComponent } from './panel/panel.component';
import { NavBarComponent } from './navbar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modals/modal.component';
import { FAQModalComponent } from "./modals/FAQ-modal/FAQ-modal.component";


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
        ModalComponent,
        FAQModalComponent
    ],
    providers: [
        PanelService,
        ScrollService,
        ModalDataService,
        FAQModalService],
    bootstrap: [RootComponent],
})
export class AppModule { }
