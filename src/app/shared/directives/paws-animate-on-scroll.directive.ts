import { Directive, Input, OnInit, HostListener, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[pawsAnimateOnScroll]'
})
export class PawsAnimateOnScroll implements OnInit {

    private alreadyAnimated: boolean = false;

    @Input() fadeFrom: 'right' | 'left' | 'top' | 'bottom';

    constructor(private elem: ElementRef,
                private renderer: Renderer2) {}

    ngOnInit() {
        let directionPrefix = '';
        switch(this.fadeFrom) {
            case 'right':
            directionPrefix = 'right';
            break;
            case 'left':
            directionPrefix = 'left';
            break;
            case 'top':
            directionPrefix = 'top';
            break;
            case 'bottom':
            directionPrefix = 'bottom';
            break;
        }
        this.renderer.addClass(this.elem.nativeElement, 'fade-from-'+directionPrefix);
        if (this.shouldAnimate()) {
            this.animate();
        }
    }

    public shouldAnimate(): boolean {
        let result: boolean = false;

        let boundary = this.elem.nativeElement.getBoundingClientRect();

        let top = boundary.top;
        let bottom = boundary.bottom;
        let height = boundary.height;

        let isPartiallyVisible = ((top >= 0) && (bottom <= (window.innerHeight - 50)));

        if (isPartiallyVisible) {
            result = true;
        }

        return result;
    }

    public animate(): void {
        this.renderer.addClass(this.elem.nativeElement, 'scroll-animated');
        this.alreadyAnimated = true;
    }


    @HostListener("window:scroll", ['$event'])
    onwindowScroll(): void {
        if (!this.alreadyAnimated && this.shouldAnimate()) {
            this.animate();
        }
    }

}