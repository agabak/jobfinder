import { Component,OnInit } from '@angular/core'
import { ActivatedRoute} from '@angular/router'

import { EventService } from '../home/shared/event.service'
@Component({
    templateUrl:'app/events-detail/event.detail.component.html'
})

export class EventDetailComponent implements OnInit {

    event:any
    constructor(private eventService:EventService, private route:ActivatedRoute){}
    ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }
}