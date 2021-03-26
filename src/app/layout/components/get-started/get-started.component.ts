import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  constructor() { }

  ngOnInit(): void {
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Please enter your email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
