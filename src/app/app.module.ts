import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RootComponent } from './root.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { Ng2PageScrollModule, PageScrollService } from 'ng2-page-scroll';

import { PanelService } from './panel/panel.service';
import { ModalDataService } from './modals/modal-data.service';
import { FAQModalService } from './modals/FAQ-modal/FAQ-modal.service';

import { PanelList } from './panel/panel-list.component';
import { PanelComponent } from './panel/panel.component';
import { NavBarComponent } from './navbar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modals/modal.component';
import { FAQModalComponent } from "./modals/FAQ-modal/FAQ-modal.component";
import { NavbarEnlargeDirective } from './shared/directives/navbar-enlarge.directive';
import { ScrollSpyDirective } from './shared/directives/scroll-spy.directive';


// TODO: modularise this app
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        NgbModule.forRoot(),
        Ng2PageScrollModule
    ],
    declarations: [
        RootComponent,
        PanelList,
        PanelComponent,
        NavBarComponent,
        FooterComponent,
        ModalComponent,
        FAQModalComponent,
        NavbarEnlargeDirective,
        ScrollSpyDirective
    ],
    providers: [
        PanelService,
        ModalDataService,
        PageScrollService,
        FAQModalService],
    bootstrap: [RootComponent],
})
export class AppModule { }
