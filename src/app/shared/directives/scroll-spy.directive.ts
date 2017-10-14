import { Directive, Inject, Renderer2, ElementRef, HostListener, DoCheck, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({
  selector: '[pawsScrollSpy]',
  outputs: ['newActiveTab']
})
export class ScrollSpyDirective implements DoCheck {

  private elements = [];
  private currentActiveLink;
  private isDoneLoading: boolean = false;

  private currentTabIndex: number = 0;

  @Output() newActiveTab: EventEmitter<number> = new EventEmitter<number>();


  constructor( @Inject(DOCUMENT) private document: Document,
    private el: ElementRef,
    private renderer2: Renderer2) {}

  public ngDoCheck(): void {
    this.collectIds();
  }

  @HostListener("window:scroll", ['$event'])
  onwindowScroll() {
    this.elements.forEach((elem, index) => {
      let top = elem.destination.getBoundingClientRect().top;
      if (top >= 0 && top <= 100) {
        //this.resetCurrentLink();
        //this.setActiveLink(elem.link);
        this.newActiveTab.emit(index);
        return;
      }
    });
  }

  private resetCurrentLink(): void {
    if (!this.currentActiveLink) {
      return;
    }

    this.renderer2.removeClass(this.currentActiveLink, 'mat-tab-label-active');
  }

  private setActiveLink(elem): void {
    this.currentActiveLink = elem;
    this.renderer2.addClass(this.currentActiveLink, 'mat-tab-label-active');
  }


  private collectIds(): void {
    if (!this.isDoneLoading) {

      if (this.elements.length >= 4) {
        this.isDoneLoading = true;
      }

      let elements: ElementRef[] = this.el.nativeElement.querySelectorAll('div.mat-tab-label');

      if (!this.currentActiveLink) {
        this.currentActiveLink = elements[0];
      }

      elements.forEach(elem => {
        let id = ScrollSpyDirective.createId(elem);
        if (id) {
          let destination = this.resolveDestination(id);

          if (destination) {
            let isUnique = this.elements.some((element) => {
              return element.id === id;
            });

            if (!isUnique) {
              this.elements.push({
                id: id,
                link: elem,
                destination: destination
              });
            }
          }
        }
      });
    }
  }


  private resolveDestination(id: string) {
    let destination = this.document.getElementById(id);

    if (!destination) {
      return null;
    }

    return destination;
  }

  //for the time being, I am constrained to using the label for the mat-tab until I find
  //a more custom way of setting the target... this will have to do
  private static createId(elem: any): string {
    let label: string = elem.innerText;
    if (!label) {
      return null;
    }
    
    return label.replace('#', '').toLowerCase();
  }

}
