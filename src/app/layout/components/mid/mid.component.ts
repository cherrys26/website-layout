import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mid',
  templateUrl: './mid.component.html',
  styleUrls: ['./mid.component.scss']
})
export class MidComponent implements OnInit {

  leftTemp: any = [];
  rightTemp: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMid()
  }

  getMid() {
    return this.http.get('http://localhost:4400/mid')
      .subscribe(mid => {
        this.leftTemp = mid['left']
        this.rightTemp = mid['right']

      })
  }

}
