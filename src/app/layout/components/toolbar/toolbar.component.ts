import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  toolbar: any = [];
  toolbarProducts: any = [];

  flag: boolean = false;

  catchEvent(event) {
    this.flag = true
    console.log(event)
  }

  hide(event) {
    this.flag = false;
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getToolbar()

  }

  getToolbar() {
    return this.http.get('http://localhost:4400/toolbar')
      .subscribe(data => {
        console.log(data),
          this.toolbar = data
        this.toolbarProducts = console.log(data[0]['products'])
        this.toolbarProducts = data[0]['products']
      }
      )
  }

}
