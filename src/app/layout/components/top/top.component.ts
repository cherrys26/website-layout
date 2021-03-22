import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  leftTemp: any = [];
  rightTemp: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTop();
  }

  getTop() {
    return this.http.get('http://localhost:4400/top')
      .subscribe(top => {
        this.leftTemp = top['left']
        this.rightTemp = top['right']
      })
  }

}
