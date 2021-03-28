import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, } from '@angular/animations';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('close', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      // ...
      transition('* => *', [
        animate('1s', keyframes([
          style({ opacity: 0.1, offset: 0.1 }),
          style({ opacity: 0.6, offset: 0.2 }),
          style({ opacity: 1, offset: 0.5 }),
          style({ opacity: 0.2, offset: 0.7 })
        ]))
      ])
    ])
  ]
})
export class TestComponent implements OnInit {
  public showAddButton: boolean = true;
  public height: boolean = true;
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

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

    if (currentScrollHeight <= 100) {
      this.height = true
      
    } else {
      this.height = false
    }
  }
}
