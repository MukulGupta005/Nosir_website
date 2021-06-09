import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
socialMedia = [
  {
    name : "facebook",
    link : "https://www.facebook.com/nosirdotin",
    class : "fa fa-facebook"
  },
  {
    icon : "instagram",
    link : "https://instagram.com/nosir.in?utm_medium=copy_link",
    class : "fa fa-instagram"
  },
  {
    icon : "twitter",
    link : "https://www.linkedin.com/company/nosir/about/?viewAsMember=true",
    class : "fa fa-twitter",
  },
  {
    icon : "linkedin",
    link : "https://www.linkedin.com/company/nosir/about/?viewAsMember=true",
    class : "fa fa-linkedin",
  }
]
  ngOnInit(): void {
  }

}
