import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { CommonService } from "src/app/services/common.service";
import { EventEmitterService } from "src/app/services/event-emitter.service";
import { APP_EVENTS } from "src/assets/config/AppEvents";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() cardData: any;
  coursedetails: any;

  constructor(
    private eventEmitterService: EventEmitterService,
    private commonService: CommonService,
    private authService: AuthService,
    private router:Router
  ) {}
  ngOnInit(): void {}

  bookDemo(course: any) {
    if (!this.authService.currentUser) {
      this.authService.signInwithGoogle();
    }
    this.commonService.setSelectedCourse(course);
    this.eventEmitterService.emit({
      type: APP_EVENTS.SHOW_DEMO_POPUP,
      data: {
        display: true,
      },
    });
    
  }
  details(){
    console.log('message')
    // alert('Message')
    this.router.navigate(['/coursedetails']);
  }
 
}
function coursedetails(message: any, string: any) {
  throw new Error("Function not implemented.");
}