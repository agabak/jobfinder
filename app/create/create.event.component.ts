import {Component} from '@angular/core'
import { Router } from '@angular/router'

import { EventService } from '../home/shared/event.service'

@Component({
    templateUrl:'app/create/create.event.component.html',
     styles:[
       `em {float:right; color:#E05C65; padding-left:10px;}
       .error input {background-color:#E3C3C5;}`
   ]
})

export class CreateEventComponent{
    isDirty:boolean = true;
    constructor(private router:Router, private eventService:EventService){ }

    saveEvent(formValues){
      this.eventService.saveEvent(formValues);
      this.isDirty = false;
      this.router.navigate(['/events'])
    }

    cancel(){
        console.log('its  called')
        this.router.navigate(['/events'])
    }
}