import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-module',
  template: `
    <app-toolbar></app-toolbar>
    <app-top></app-top>
    <app-mid></app-mid>
    <app-middle></app-middle>
    <app-testemonials></app-testemonials>
    <app-get-started></app-get-started>
    <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class LayoutModuleComponent implements OnInit {

  public showTitle: boolean = true;
  public showFirst: boolean = true;
  public showSecond: boolean = true;
  public showThird: boolean = true;
  public showFourth: boolean = true;
  public showAll: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }


}
