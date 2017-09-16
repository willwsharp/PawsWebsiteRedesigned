import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RootComponent } from './root.component';

import { PanelService } from './panel/panel.service';
import { ScrollService } from './custom-scroll/scroll.service';
import { ModalDataService } from './modals/modal-data.service';

import { PanelList } from './panel/panel-list.component';
import { PanelComponent } from './panel/panel.component';
import { NavBarComponent } from './navbar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modals/modal.component';


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
        ModalComponent
    ],
    providers: [PanelService,
        ScrollService,
        ModalDataService],
    bootstrap: [RootComponent],
})
export class AppModule { }
