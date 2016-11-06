import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { PanelList } from './panel-list/panel-list.component';
import { Panel } from './panel/panel.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,    
    ],
    declarations: [
        PanelList,
        Panel
    ],
    providers: [/* TODO: Providers go here */],
    bootstrap: [PanelList],
})
export class AppModule { }
