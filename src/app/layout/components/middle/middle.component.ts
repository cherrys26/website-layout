import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {
  public showTitle: boolean = true;
  public showFirst: boolean = true;
  public showSecond: boolean = true;
  public showThird: boolean = true;
  public showFourth: boolean = true;
  public showAll: boolean = true;

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

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    const window = event.path[1];
    const currentScrollHeight = window.scrollY;
    console.log(currentScrollHeight)

    if (currentScrollHeight > 1375) {
      this.showTitle = false;
      this.showFirst = false;
      document.getElementById("titleAni").style.display = 'block';
      document.getElementById("firstAni").style.display = 'block';
    } else if (currentScrollHeight < 300) {
      this.showTitle = true; this.showFirst = true;
      this.showSecond = true;
      this.showThird = true;
      this.showFourth = true;
      this.showAll = true;
      document.getElementById("titleAni").style.display = 'none';
      document.getElementById("firstAni").style.display = 'none';
      document.getElementById("secondAni").style.display = 'none';
      document.getElementById("thirdAni").style.display = 'none';
      document.getElementById("fourthAni").style.display = 'none';
      document.getElementById("allAni").style.display = 'none';
    }
    if (currentScrollHeight > 1550) {
      this.showSecond = false;
      document.getElementById("secondAni").style.display = 'block';
    }
    if (currentScrollHeight > 2000) {
      this.showThird = false;
      document.getElementById("thirdAni").style.display = 'block';
    }
    if (currentScrollHeight > 2150) {
      this.showFourth = false;
      document.getElementById("fourthAni").style.display = 'block';
    }
    if (currentScrollHeight > 2550) {
      this.showAll = false;
      document.getElementById("allAni").style.display = 'block';
    }
  }

}
