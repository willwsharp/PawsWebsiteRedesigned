import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { PanelList } from './panel-list/panel-list.component';
import { Panel } from './panel/panel.component';
import { NavigationBar } from './nav/nav-bar.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,    
    ],
    declarations: [
        PanelList,
        Panel,
        NavigationBar
    ],
    providers: [/* TODO: Providers go here */],
    bootstrap: [NavigationBar, PanelList],
})
export class AppModule { }
