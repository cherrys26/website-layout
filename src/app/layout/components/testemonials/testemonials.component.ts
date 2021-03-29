import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-testemonials',
  templateUrl: './testemonials.component.html',
  styleUrls: ['./testemonials.component.scss'],
  animations: [
    trigger('parentAnimation', [
      transition('void => *', [
        query('.child', style({ opacity: 0 })),
        query('.child', stagger('150ms', [
          animate('100ms .1s ease-out', style({ opacity: 1 }))
        ]))
      ]),
      transition('* => void', [
        query('.child', style({ opacity: 1 })),
        query('.child', stagger('50ms', [
          animate('100ms .1s ease-out', style({ opacity: 0 }))
        ]))
      ])
    ])
  ]
})
export class TestemonialsComponent implements OnInit {

  lastTest: any = []
  leftTestOne: any = []
  rightTestOne: any = []
  leftTestTwo: any = []
  rightTestTwo: any = []
  public visible: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTestemonials();
  }

  getTestemonials() {
    this.http.get('http://localhost:4400/testemonials')
      .subscribe(data => {
        this.leftTestOne = data[0]['testemonialOne'][0]['left'];
        this.rightTestOne = data[0]['testemonialOne'][1]['right'];
        this.leftTestTwo = data[1]['testemonialTwo'][0]['left'];
        this.rightTestTwo = data[1]['testemonialTwo'][1]['right'];
        this.lastTest = data[2]['testemonialThree'];
      })
  }

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    const window = event.path[1];
    const currentScrollHeight = window.scrollY;

    if (currentScrollHeight > 4650) {
      this.visible = true

    } else {
      this.visible = false
    }
  }
}
