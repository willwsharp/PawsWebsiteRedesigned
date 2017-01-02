import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'core-component',
  template:
  `
    <nav-bar></nav-bar>
    <panel-list>Loading...</panel-list>
    <footer-component></footer-component>
    <router-outlet></router-outlet>
  `
})
export class RootComponent implements OnInit {

  ngOnInit(): void {
    //This is called after the component is loaded,
    //it is a global function found in scrolling-nav.js
    initSmoothScroll();
  }
}
