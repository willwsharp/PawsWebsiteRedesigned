import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root.component';
import { FormsModule } from '@angular/forms';


import { Ng2PageScrollModule, PageScrollService } from 'ng2-page-scroll';

import { PanelService } from './panel/panel.service';

import { PanelList } from './panel/panel-list.component';
import { PanelComponent } from './panel/panel.component';
import { NavBarComponent } from './navbar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ModalContainerComponent } from './footer/modal-container/modal-container.component'


import { NavbarEnlargeDirective } from './shared/directives/navbar-enlarge.directive';
import { ScrollSpyDirective } from './shared/directives/scroll-spy.directive';

import { NgMaterialBaseModule } from './ng-material-base/ng-material-base.module';
import { PawsModalComponent } from './footer/modal-container/paws-modals/paws-modal.component';
import { PawsModalService } from './footer/modal-container/paws-modals/paws-modal.service';

// TODO: modularise this app
@NgModule({
    imports: [
        BrowserModule,
        Ng2PageScrollModule,
        NgMaterialBaseModule,
        FormsModule
    ],
    declarations: [
        RootComponent,
        PanelList,
        PanelComponent,
        NavBarComponent,
        FooterComponent,
        NavbarEnlargeDirective,
        ScrollSpyDirective,
        ModalContainerComponent,
        PawsModalComponent
    ],
    providers: [
        PanelService,
        PawsModalService,
        PageScrollService],
    bootstrap: [RootComponent],
    entryComponents: [
        PawsModalComponent
    ]
})
export class AppModule { }
