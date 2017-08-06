import { Component,OnInit } from  '@angular/core'

import { EventService } from './shared/event.service'
import {ToastrService}  from './common/toastr.service'

@Component({
    selector:'home-main',
    template:`
         <div>
          <h1>Upacomming Angular2  Events </h1>
           <hr />
           <div class="well hoverwell thumbnail">
              <div class ="row">
                <div class="col-md-5" *ngFor="let event of events">
                 <event-thumbnail [event]="event" (click)="handleThumbnailClick(event.name)"></event-thumbnail>
                </div>
              </div>
           </div>
         </div>
     `
})

export class HomeMain implements OnInit {
   events:any
  constructor(private eventService:EventService, private toastr:ToastrService ){
     
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName,'success');
  }

  ngOnInit(){
   this.eventService.getEvents().subscribe(events => {this.events = events})
  }
}