import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, keyframes } from '@angular/animations'

@Component({
  selector: 'app-testemonials',
  templateUrl: './testemonials.component.html',
  styleUrls: ['./testemonials.component.scss'],
  animations: [trigger('fadeSlideGrowKeyframe', [
    transition(':enter', [
      style({ opacity: 0, transform: 'scale(0.5) translateY(50px)' }),
      animate(
        '500ms',
        keyframes([
          style({ opacity: 1, offset: 0.3 }),
          style({ transform: 'translateY(0)', offset: 0.6 }),
          style({ transform: 'scale(1)', offset: 1 }),
        ])
      ),
    ])
  ])
  ],
})
export class TestemonialsComponent implements OnInit {

  lastTest: any = []
  leftTestOne: any = []
  rightTestOne: any = []
  leftTestTwo: any = []
  rightTestTwo: any = []

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

}
