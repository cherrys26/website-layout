import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  leftTemp: any = [];
  rightTemp: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMain();
  }

  getMain() {
    return this.http.get('http://localhost:4400/main')
      .subscribe(main => {
        this.leftTemp = main['left']
        this.rightTemp = main['right']
      })
  }

}
