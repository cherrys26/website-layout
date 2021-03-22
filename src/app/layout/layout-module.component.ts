import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-module',
  template: `
    <app-toolbar></app-toolbar>
    <app-main></app-main>
  `,
  styles: [
  ]
})
export class LayoutModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
