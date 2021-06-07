import { Component, OnDestroy, OnInit } from '@angular/core';
import { APP_EVENTS } from 'src/assets/config/AppEvents';
import { EventData, EventEmitterService } from './services/event-emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit{
  subscription: any;
  displayDemoPopUp : boolean = false;
  constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
    this.subscription = this.eventEmitterService.subscribe((event: EventData)=>{
      this.handleAppEvents(event);
    });
  }

  handleAppEvents(event: EventData){
  switch(event.type){
    case APP_EVENTS.SHOW_DEMO_POPUP :
      this.displayDemoPopUp = event.data.display;
  }
  }

  ngOnDestroy(){
   this.subscription.unsubscribe(); 
  }
}
