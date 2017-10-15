import { Directive, Inject, Renderer2, ElementRef, HostListener, DoCheck, Output, EventEmitter, Input } from '@angular/core';
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

  //input property to be used to determine when we should not work
  @Input('disableWhen') isDisabled: boolean = false;


  constructor( @Inject(DOCUMENT) private document: Document,
    private el: ElementRef,
    private renderer2: Renderer2) { }

  public ngDoCheck(): void {
    if (!this.isDoneLoading) {
      this.collectIds();
    }
  }

  @HostListener("window:scroll", ['$event'])
  onwindowScroll() {
    if (!this.isDisabled) {
      this.elements.forEach((elem, index) => {
        let top = elem.destination.getBoundingClientRect().top;
        if (top >= 0 && top <= 100) {
          this.newActiveTab.emit(index);
          return;
        }
      });
    }
  }

  private collectIds(): void {
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
