import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'core-component',
  template:
  `
    <router-outlet></router-outlet>
    <footer-component></footer-component>
  `
})
export class RootComponent implements OnInit {

  ngOnInit(): void {
    //This is called after the component is loaded,
    //it is a global function found in scrolling-nav.js
    initSmoothScroll();
  }
}
