import { Component, AfterViewInit, Output, Renderer2, ElementRef, Inject, ViewEncapsulation } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
    moduleId: module.id,
    selector: 'nav-bar',
    templateUrl: 'nav-bar.component.html',
    styleUrls: [
        './nav-bar.component.css'
    ],
    encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements AfterViewInit {
    //set image min-height in pixels, should have this hard-coded somewhere else
    public minImgHeight: number = 96;

    public currentTabIndex: number = 0;

    //stores whether the click-triggered scroll has finished or not.
    public currentlyScrolling: boolean = false;

    ngAfterViewInit() {
        // ng2-page-scroll configuration
        // can't use elementRef.nativeElement.offsetHeight 
        // because it changes for some reason
        PageScrollConfig.defaultScrollOffset = this.minImgHeight;
        PageScrollConfig.defaultDuration = 700;
        PageScrollConfig.defaultEasingLogic = {
            ease: (t: number, b: number, c: number, d: number): number => {
                // easeInOutExpo easing provided from https://github.com/Nolanus/ng2-page-scroll
                // willwsharp did not write this logic
                if (t === 0) return b;
                if (t === d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        }
    }

    public changeCurrentTabIndex(newIndex: number) : void {
        this.currentTabIndex = newIndex;
    }
}