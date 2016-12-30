import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'core-component',
    template: `
          <nav-bar></nav-bar>
          <panel-list>Loading...</panel-list>
          <footer-component></footer-component>
        `
})
export class RootComponent { }
