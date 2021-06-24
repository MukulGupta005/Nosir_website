import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Event } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { CommonService } from "src/app/services/common.service";
import {
  EventData,
  EventEmitterService,
} from "src/app/services/event-emitter.service";
import { APP_EVENTS } from "src/assets/config/AppEvents";

@Component({
  selector: "app-demo-popup",
  templateUrl: "./demo-popup.component.html",
  styleUrls: ["./demo-popup.component.scss"],
})
export class DemoPopupComponent implements OnInit, OnDestroy {
  subscription: any;
  selectedcourse: any;
  bookDemoForm: any;
  submitClicked: boolean = false;
  isLoggedIn = false;
  constructor(
    private commonService: CommonService,
    private eventEmitterService: EventEmitterService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.initializeDemoForm();
    this.selectedcourse = this.commonService.getSelectedCourse();
    this.subscription = this.eventEmitterService.subscribe((event: EventData) =>
      this.handleAppEvents(event)
    );

    if (this.authService.getCurrentUser()) {
      this.isLoggedIn = true;
    }
    this.authService.isLoggedIn.subscribe((data) => {
      this.isLoggedIn = data;
      console.log("logged in", data);
    });
  }

  handleAppEvents(event: EventData) {}

  initializeDemoForm() {
    this.bookDemoForm = this.formBuilder.group({
      phoneNumber: ["", Validators.required],
      date: ["", Validators.required],
    });
  }

  submit() {
    this.submitClicked = true;
    if (this.bookDemoForm.valid) {
      this.toaster("Demo booked successfully");
      let payload = {
        ...this.bookDemoForm.value,
        name: this.authService.getCurrentUser().displayName,
        email: this.authService.getCurrentUser().email,
        courseDetails: this.selectedcourse,
      };
      console.log(payload);
      this.close();
    }
  }

  close() {
    this.eventEmitterService.emit({
      type: APP_EVENTS.SHOW_DEMO_POPUP,
      data: {
        display: false,
      },
    });
  }

  toaster(msg: String) {
    this.eventEmitterService.emit({
      type: APP_EVENTS.SHOW_TOASTER,
      data: {
        msg,
      },
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
