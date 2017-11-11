import { Directive, Renderer2, ElementRef, HostListener, Inject, OnInit, DoCheck, Output, EventEmitter, Input } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';

@Directive({
  selector: '[pawsScrollTo]'
})
export class PawsScrollTo implements DoCheck {

  private elements = [];
  private nowScrolling: boolean = false;
  private hasScrollFinished: EventEmitter<boolean> = new EventEmitter();

  @Input('querySelector') querySelector: string = 'div';

  @Output() nowScrollingEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(private renderer: Renderer2,
    private elem: ElementRef,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any) { }

  ngDoCheck() {
    if (this.elements.length < 4) {
      this.collectTabElements();
    }
  }

  private collectTabElements() {
    this.elements = this.elem.nativeElement.querySelectorAll(this.querySelector);
    //this is super janky... but it does work... take that angular material 2 team!
    this.elements.forEach((elem) => {
      this.renderer.listen(elem, "click", (event) => {
        let dest: string = '#' + elem.innerText.toLowerCase();
        let pageScrollInstance: PageScrollInstance = 
        PageScrollInstance.newInstance({
          document: this.document, 
          scrollTarget: dest,
          pageScrollOffset: 79,
          pageScrollFinishListener: this.hasScrollFinished
        });

        this.hasScrollFinished.subscribe((scrollComplete) => {
          if (!scrollComplete) {
            console.warn('Scroll did not complete');
          }
          this.nowScrollingEvent.emit(false);
        })
        
        this.nowScrollingEvent.emit(true);
        this.pageScrollService.start(pageScrollInstance);
      })
    })
  }
}
