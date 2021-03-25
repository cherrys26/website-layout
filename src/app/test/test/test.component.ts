import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public showAddButton: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    const window = event.path[1];
    const currentScrollHeight = window.scrollY;
    console.log(currentScrollHeight);

    if (currentScrollHeight > 50) {
      this.showAddButton = false;
      console.log('should NOT show button');
    } else {
      this.showAddButton = true;
      console.log('should show button');
    }
  }
}
