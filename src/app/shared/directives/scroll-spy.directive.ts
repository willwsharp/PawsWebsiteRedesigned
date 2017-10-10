import { Directive, Inject, Renderer2, ElementRef, HostListener, DoCheck } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({
  selector: '[pawsScrollSpy]'
})
export class ScrollSpyDirective implements DoCheck {

  private elements = [];
  private currentActiveLink;
  private isDoneLoading: boolean = false;


  constructor( @Inject(DOCUMENT) private document: Document,
    private el: ElementRef,
    private renderer2: Renderer2) { }

  public ngDoCheck(): void {
    this.collectIds();
  }

  @HostListener("window:scroll", ['$event'])
  onwindowScroll() {
    this.elements.forEach((elem) => {
      let top = elem.destination.getBoundingClientRect().top;
      if (top >= 0 && top <= 100) {
        this.resetCurrentLink();
        this.setActiveLink(elem.link);
        return;
      }
    });
  }

  private resetCurrentLink(): void {
    if (!this.currentActiveLink) {
      return;
    }

    this.renderer2.removeClass(this.currentActiveLink.parentElement, 'active');
  }

  private setActiveLink(elem): void {
    this.currentActiveLink = elem;
    this.renderer2.addClass(this.currentActiveLink.parentElement, 'active');
  }


  private collectIds(): void {
    if (!this.isDoneLoading) {

      if (this.elements.length >= 4) {
        this.isDoneLoading = true;
      }

      let elements: ElementRef[] = this.el.nativeElement.querySelectorAll('a');

      if (!this.currentActiveLink) {
        this.currentActiveLink = elements[0];
      }

      elements.forEach(elem => {
        let id = ScrollSpyDirective.getId(elem);
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

  private static getId(elem): string {
    let href: string = elem.getAttribute('href');

    if (!href) {
      return null;
    }

    return href.replace('#', '');
  }

}
