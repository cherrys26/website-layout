import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {

  leftMiddleOne: any = [];
  leftMiddleTwo: any = [];
  rightMiddleOne: any = [];
  rightMiddleTwo: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMiddle()
  }

  getMiddle() {
    return this.http.get('http://localhost:4400/middle')
      .subscribe(middle => {
        console.log(middle['left'][0]);
        this.leftMiddleOne = middle['left'][0];
        this.leftMiddleTwo = middle['left'][1];
        this.rightMiddleOne = middle['right'][0];
        this.rightMiddleTwo = middle['right'][1];
      })
  }

}
