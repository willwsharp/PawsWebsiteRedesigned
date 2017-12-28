import { Directive, Renderer2, ElementRef, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';

@Directive({
  selector: '[pawsNavbarEnlarge]'
})
export class NavbarEnlargeDirective implements OnInit {

  private isModalOpen: boolean;

  constructor(private renderer: Renderer2,
    private elem: ElementRef,
    @Inject(DOCUMENT) private document: Document,
    private matDialog: MatDialog) { }


  ngOnInit() {
    this.matDialog.afterOpen.subscribe(() => {
      this.isModalOpen = true;
    })

    this.matDialog.afterAllClosed.subscribe(() => {
      this.isModalOpen = false;
    })
  }

  @HostListener("window:scroll")
  onScroll() {
    const collapseOffset = 50;
    let currentOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let onMobileDevice = window.innerWidth < 765;

    // don't do anything with the navbar if a modal is open or we're on a mobile device
    if (!this.isModalOpen && !onMobileDevice) {
      if (currentOffset > collapseOffset) {
        this.renderer.addClass(this.elem.nativeElement, 'navbar-reduced');
      } else {
        this.renderer.removeClass(this.elem.nativeElement, 'navbar-reduced');
      }
    }
  }

}
