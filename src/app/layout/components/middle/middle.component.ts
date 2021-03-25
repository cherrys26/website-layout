import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

// declare const window: any;

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
    console.log(currentScrollHeight);

    if (currentScrollHeight > 600) {
      this.showTitle = false;
      this.showFirst = false;
      document.getElementById("titleAni").style.display = 'block';
      document.getElementById("firstAni").style.display = 'block';
      console.log('should NOT show button');
    } else if (currentScrollHeight < 300) {
      this.showTitle = true;
      this.showFirst = true;
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
      console.log('should show button');
    }
    if (currentScrollHeight > 800) {
      this.showSecond = false;
      document.getElementById("secondAni").style.display = 'block';
      console.log('should NOT show button');
    }
    if (currentScrollHeight > 1200) {
      this.showThird = false;
      document.getElementById("thirdAni").style.display = 'block';
      console.log('should NOT show button');
    }
    if (currentScrollHeight > 1400) {
      this.showFourth = false;
      document.getElementById("fourthAni").style.display = 'block';
      console.log('should NOT show button');
    }
    if (currentScrollHeight > 1650) {
      this.showAll = false;
      document.getElementById("allAni").style.display = 'block';
      console.log('should NOT show button');
    }
  }

  // @HostListener("window:scroll", [])
  // onWindowScroll() {

  //   const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   console.log(number)
  //   if (number < 400) {
  //     document.getElementById("titleAni").style.display = "none";
  //     document.getElementById("firstAni").style.display = "none";
  //     document.getElementById("secondAni").style.display = "none";
  //     document.getElementById("thirdAni").style.display = "none";
  //     document.getElementById("fourthAni").style.display = "none";
  //     document.getElementById("allAni").style.display = "none";
  //   }
  //   else if (number > 435 && number < 445) {
  //     document.getElementById("titleAni").style.display = "block";
  //     document.getElementById("titleAni").animate([
  //       { transform: 'translateY(25%)', opacity: 0 },
  //       { transform: 'translateY(0)', opacity: 1 }
  //     ], {
  //       duration: 500,
  //     });
  //     document.getElementById("firstAni").style.display = "block";
  //     document.getElementById("firstAni").animate([
  //       { transform: 'translateY(25%)', opacity: 0 },
  //       { transform: 'translateY(0)', opacity: 1 }
  //     ], {
  //       duration: 500,
  //     });
  //   }
  //   else if (number > 455 && number < 500) {
  //     document.getElementById("secondAni").style.display = "block";
  //     document.getElementById("secondAni").animate([
  //       { transform: 'translateY(25%)', opacity: 0 },
  //       { transform: 'translateY(0)', opacity: 1 }
  //     ], {
  //       duration: 500,
  //     });
  //   }
  //   else if (number > 1000 && number < 1020) {
  //     document.getElementById("thirdAni").style.display = "block";
  //     document.getElementById("thirdAni").animate([
  //       { transform: 'translateY(25%)', opacity: 0 },
  //       { transform: 'translateY(0)', opacity: 1 }
  //     ], {
  //       duration: 500,
  //     });
  //   }
  //   else if (number > 1250 && number < 1275) {
  //     document.getElementById("fourthAni").style.display = "block";
  //     document.getElementById("fourthAni").animate([
  //       { transform: 'translateY(25%)', opacity: 0 },
  //       { transform: 'translateY(0)', opacity: 1 }
  //     ], {
  //       duration: 500,
  //     });
  //   }
  //   else if (number > 1495 && number < 1510) {
  //     document.getElementById("allAni").style.display = "block";
  //     document.getElementById("allAni").animate([
  //       { transform: 'translateY(25%)', opacity: 0 },
  //       { transform: 'translateY(0)', opacity: 1 }
  //     ], {
  //       duration: 500,
  //     });
  //   }


  // }

}
