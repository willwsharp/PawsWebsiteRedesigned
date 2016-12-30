import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RootComponent } from './root-component';
import { PanelService } from './panel-service/panel.service';
import { PanelList } from './panel-list/panel-list.component';
import { PanelComponent } from './panel-component/panel.component';
import { NavBarComponent } from './nav-bar-component/nav-bar.component';
import { FooterComponent } from './footer-component/footer.component';

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
        FooterComponent
    ],
    providers: [PanelService],
    bootstrap: [RootComponent],
})
export class AppModule { }
