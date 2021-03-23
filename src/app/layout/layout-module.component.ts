import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-module',
  template: `
    <app-toolbar></app-toolbar>
    <app-top></app-top>
    <app-mid></app-mid>
    <app-middle></app-middle>
  `,
  styles: [
  ]
})
export class LayoutModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
