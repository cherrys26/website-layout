import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  test: any = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getFooter()
  }

  getFooter() {
    this.http.get('http://localhost:4400/footer')
      .subscribe(footer => {
        console.log(footer);
        this.test = footer

      }
      )
  }

}
