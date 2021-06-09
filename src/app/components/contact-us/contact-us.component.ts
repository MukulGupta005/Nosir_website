import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }
modes = [
  {
    class : "fa fa-phone",
    topText : "Phone",
    bottomText : "8126139270",
  },
  {
    class : "fa fa-envelope",
    topText : "Email",
    bottomText : "nishaposwal321@gmail.com",
  },
  {
    class : "fa fa-phone",
    topText : "Phone",
    bottomText : "8126139270",
  }
]
  ngOnInit(): void {
  }

}
