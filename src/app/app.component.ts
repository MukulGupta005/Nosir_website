import { Component, OnDestroy, OnInit } from '@angular/core';
import { APP_EVENTS } from 'src/assets/config/AppEvents';
import { AuthService } from './services/auth.service';
import { EventData, EventEmitterService } from './services/event-emitter.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit{
  subscription: any;
  displayDemoPopUp : boolean = false;
  showtoaster = false
  toasterMsg = ""
  constructor(private eventEmitterService: EventEmitterService,
    private authService : AuthService, ) { }

  ngOnInit(): void {
    this.subscription = this.eventEmitterService.subscribe((event: EventData)=>{
      this.handleAppEvents(event);
    });
    this.authService.fetchCurrentSignedInUser()
  }

  handleAppEvents(event: EventData){
  switch(event.type){
    case APP_EVENTS.SHOW_DEMO_POPUP :
      this.displayDemoPopUp = event.data.display;
      break
    case APP_EVENTS.SHOW_TOASTER :
      this.showtoaster = true
      this.toasterMsg = event.data.msg
      setTimeout(()=>{
      this.showtoaster = false
      }, 3000)
      break
  }
  }

  ngOnDestroy(){
   this.subscription.unsubscribe(); 
  }
}
