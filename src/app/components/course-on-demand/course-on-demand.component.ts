import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EventEmitterService } from "src/app/services/event-emitter.service";
import { APP_EVENTS } from "src/assets/config/AppEvents";

@Component({
  selector: "app-course-on-demand",
  templateUrl: "./course-on-demand.component.html",
  styleUrls: ["./course-on-demand.component.scss"],
})
export class CourseOnDemandComponent implements OnInit {
  courseDetailForm: any;
  submitIsClicked = false;
  constructor(
    private formBuilder: FormBuilder,
    private eventEmitterService: EventEmitterService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.courseDetailForm = this.formBuilder.group({
      phone: ["", Validators.required],
      details: ["", Validators.required],
    });
  }

  submit() {
    this.submitIsClicked = true;

    if (this.courseDetailForm.valid) {
      this.toaster("Course On Demand details Sent Successfully",)
      this.submitIsClicked = false;
      this.courseDetailForm.reset();
    }
  }

  toaster(msg : String){
    this.eventEmitterService.emit({
      type : APP_EVENTS.SHOW_TOASTER,
       data : {
         msg 
       }
      
    });
  }
}
