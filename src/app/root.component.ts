import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'root-component',
  template:
  `
    <nav-bar></nav-bar>
    <panel-list>Loading...</panel-list>
    <footer-component></footer-component>
  `
})
export class RootComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
