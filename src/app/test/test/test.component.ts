import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  animations: [
    trigger('parentAnimation', [
      transition('void => *', [
        query('.child', style({ opacity: 0 })),
        query('.child', stagger('500ms', [
          animate('100ms .1s ease-out', style({ opacity: 1 }))
        ]))
      ]),
      transition('* => void', [
        query('.child', style({ opacity: 1 })),
        query('.child', stagger('500ms', [
          animate('100ms .1s ease-out', style({ opacity: 0.2 }))
        ]))
      ])
    ])
  ]
})
export class TestComponent implements OnInit {
  public showAddButton: boolean = true;
  public visible: boolean = true;

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

    if (currentScrollHeight > 150) {
      this.visible = true

    } else {
      this.visible = false
    }
    if (currentScrollHeight > 300) {
      this.visible = false

    }
  }
}
