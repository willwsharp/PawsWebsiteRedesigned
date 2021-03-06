import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root.component';
import { FormsModule } from '@angular/forms';


import { Ng2PageScrollModule, PageScrollService } from 'ng2-page-scroll';


import { NavBarComponent } from './navbar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ModalContainerComponent } from './footer/modal-container/modal-container.component'


import { NavbarEnlargeDirective } from './shared/directives/navbar-enlarge.directive';
import { ScrollSpyDirective } from './shared/directives/scroll-spy.directive';

import { NgMaterialBaseModule } from './ng-material-base/ng-material-base.module';
import { PawsModalComponent } from './footer/modal-container/paws-modals/paws-modal.component';
import { PawsModalService } from './footer/modal-container/paws-modals/paws-modal.service';
import { PanelList } from './panel-list/panel-list.component';
import { AboutPanelComponent } from './panel-list/panels/about-panel/about-panel.component';
import { ServicesPanelComponent } from './panel-list/panels/services-panel/services-panel.component';
import { ResourcesPanelComponent } from './panel-list/panels/resources-panel/resources-panel.component';
import { PanelService } from './panel-list/panel.service';
import { PawsScrollTo } from './shared/directives/paws-mat-tab-scroll-to.directive';
import { PawsAnimateOnScroll } from './shared/directives/paws-animate-on-scroll.directive';
import { MobileNavbarComponent } from './navbar/mobile-navbar/mobile-navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppUtil } from './shared/services/app-util.service';

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
        NavBarComponent,
        FooterComponent,
        NavbarEnlargeDirective,
        ScrollSpyDirective,
        PawsAnimateOnScroll,
        PawsScrollTo,
        ModalContainerComponent,
        PawsModalComponent,
        AboutPanelComponent,
        ServicesPanelComponent,
        ResourcesPanelComponent,
        MobileNavbarComponent,
        SideNavComponent
    ],
    providers: [
        PanelService,
        PawsModalService,
        PageScrollService,
        AppUtil
    ],
    bootstrap: [RootComponent],
    entryComponents: [
        PawsModalComponent,
        SideNavComponent
    ]
})
export class AppModule { }
