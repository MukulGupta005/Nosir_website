import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { APP_EVENTS } from "src/assets/config/AppEvents";
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor( private formBuilder: FormBuilder,
    private eventEmitterService : EventEmitterService) { }
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
  // {
  //   class : "fa fa-phone",
  //   topText : "Phone",
  //   bottomText : "8126139270",
  // }
]

contactUsForm : any
submitClicked = false
  ngOnInit(): void {
    this.initializeForm()
  }


initializeForm(){
  this.contactUsForm = this.formBuilder.group({
    name : ['', Validators.required],
    email : ['', Validators.required],
    msg : ['', Validators.required]
  })
}
  submit(){
  this.submitClicked = true

  if(this.contactUsForm.valid){
  this.toaster('Message sent successfully')
  }
  this.submitClicked = false
  this.contactUsForm.reset()
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
