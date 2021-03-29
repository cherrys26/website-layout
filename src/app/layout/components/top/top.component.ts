import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  topTemp: any = [];
  botTemp: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTop();
  }

  getTop() {
    return this.http.get('http://localhost:4400/top')
      .subscribe(top => {
        this.topTemp = top['first']
        this.botTemp = top['second']
      })
  }

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    const window = event.path[1];
    const currentScrollHeight = window.scrollY;

    if (currentScrollHeight < 380) {
      document.getElementById("topFade").style.opacity = "1"
    }
    else if (currentScrollHeight > 380) {
      document.getElementById("topFade").style.opacity = "0.7"
    }
    else if (currentScrollHeight >= 480) {
      document.getElementById("topFade").style.opacity = "0.1"
    }

    if (currentScrollHeight < 500) {
      document.getElementById("bottomFade").style.opacity = "0"
    }
    if (currentScrollHeight > 500) {
      document.getElementById("bottomFade").style.opacity = "0.2"
    }
    if (currentScrollHeight >= 650) {
      document.getElementById("bottomFade").style.opacity = "0.7"
    }
    if (currentScrollHeight >= 850) {
      document.getElementById("bottomFade").style.opacity = "1"
    }
  }

}

