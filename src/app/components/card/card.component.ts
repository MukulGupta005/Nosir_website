import { Component, Input, OnInit } from "@angular/core";
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

  constructor(private eventEmitterService: EventEmitterService,
    private commonService: CommonService) {}
  ngOnInit(): void {}

  bookDemo(course: any) {
    this.commonService.setSelectedCourse(course);
    this.eventEmitterService.emit({
      type: APP_EVENTS.SHOW_DEMO_POPUP,
      data: {
        display: true,
      },
    });
  }
}
