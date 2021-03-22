import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-module',
  template: `
    <app-toolbar></app-toolbar>
    <app-top></app-top>
  `,
  styles: [
  ]
})
export class LayoutModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
