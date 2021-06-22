import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  isBackgroundWhite = false;
  navs = [
    {
      id : 0,
      name : "Home",
    },
    {
      id : 1,
      name : "Courses",
    },
    {
      id : 3,
      name : "Course on Demand",
    },
    {
      id : 2,
      name : "Contact Us",
    }
  ]
  ngOnInit(): void {
 
  }

 
  @HostListener("window:scroll", []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;

          if(verticalOffset != 0){
          this.isBackgroundWhite = true;
          } else{
            this.isBackgroundWhite = false;
          }
}

}
