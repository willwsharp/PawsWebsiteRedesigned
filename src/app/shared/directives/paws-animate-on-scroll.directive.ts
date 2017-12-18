import { Directive, Input, OnInit, HostListener, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[pawsAnimateOnScroll]'
})
export class PawsAnimateOnScroll implements OnInit {

    private alreadyAnimated: boolean = false;

    @Input() fadeFrom: 'right' | 'left' | 'top' | 'bottom' = 'right';
    @Input() trigger: 'partial' | 'full' = 'full';

    constructor(private elem: ElementRef,
                private renderer: Renderer2) {}

    ngOnInit() {
        this.renderer.addClass(this.elem.nativeElement, 'fade-from-' + this.fadeFrom);
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

        let isFullyVisible = ((top >= 0) && (bottom <= (window.innerHeight + 125)));
        
        if (this.trigger === 'partial' && 
            (((height/2) + window.innerHeight >= bottom))) {
            result = true;
        } else if (this.trigger === 'full' && 
            ((top >= 0) && (bottom <= (window.innerHeight - 50)))) {
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