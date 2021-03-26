import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testemonials',
  templateUrl: './testemonials.component.html',
  styleUrls: ['./testemonials.component.scss']
})
export class TestemonialsComponent implements OnInit {

  test: any = []
  test2: any = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTestemonials();
  }

  getTestemonials() {
    this.http.get('http://localhost:4400/testemonials')
      .subscribe(data => {
        this.test = data[0]['testemonialOne'][0]['left'];
        this.test2 = data[0]['testemonialOne'][1]['right'];
        console.log(this.test)
        console.log(this.test2)
        console.log(data[1]);
        console.log(data[1]);
      })
  }

}
