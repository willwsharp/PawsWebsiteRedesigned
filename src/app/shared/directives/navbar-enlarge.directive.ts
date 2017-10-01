import { Directive, Renderer2, ElementRef, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({
  selector: '[pawsNavbarEnlarge]'
})
export class NavbarEnlargeDirective {

  constructor(private renderer: Renderer2,
    private elem: ElementRef,
    @Inject(DOCUMENT) private document: Document) { }

  @HostListener("window:scroll")
  onScroll() {
    const collapseOffset = 50;

    let currentOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (currentOffset > collapseOffset) {
      this.renderer.addClass(this.elem.nativeElement, 'top-nav-collapse');
    } else {
      this.renderer.removeClass(this.elem.nativeElement, 'top-nav-collapse');
    }
  }

}
