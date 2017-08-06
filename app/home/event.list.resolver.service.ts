import { Injectable } from '@angular/core'
import { Resolve }  from '@angular/router'

import { EventService } from './shared/event.service'

@Injectable()
export class EventListResolverService implements Resolve<any>{
    constructor(private eventService: EventService) {
    }
      resolve() {  
       this.eventService.getEvents().subscribe(events => events)
    }
}