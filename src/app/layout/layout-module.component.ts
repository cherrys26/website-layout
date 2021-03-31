import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-module',
  template: `
    <app-toolbar></app-toolbar>
    <app-top></app-top>
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

  @HostListener('window: scroll', ['$event']) onScroll(event) {
    const window = event.path[1]
    const height = window.scrollY

    console.log(height);

    if (height < 1500) {
      document.querySelector("body").style.backgroundColor = "#fcefed";
      document.querySelector("body").style.color = "#4b4747";
    }
    if (height > 1500) {
      document.querySelector("body").style.backgroundColor = "#ffe5d9";
      document.querySelector("body").style.color = "#4c4441";

    }
    if (height > 3200) {
      document.querySelector("body").style.backgroundColor = "#ffe3d6";
      document.querySelector("body").style.color = "#4c4440";

    }
    if (height > 5600) {
      document.querySelector("body").style.backgroundColor = "#fff3eb";
      document.querySelector("body").style.color = "#4b4747";

    }

  }


}
