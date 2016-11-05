import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { BaseParallaxDisplay } from './ParallaxDisplay/base-parallax-display.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,    
    ],
    declarations: [BaseParallaxDisplay],
    providers: [/* TODO: Providers go here */],
    bootstrap: [BaseParallaxDisplay],
})
export class AppModule { }
