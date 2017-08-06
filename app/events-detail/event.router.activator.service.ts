import {Router,ActivatedRouteSnapshot,RouterStateSnapshot, CanActivate } from '@angular/router'
import { Injectable } from '@angular/core'

import { EventService } from '../home/shared/event.service'

@Injectable()
export class EventRouterActivator implements CanActivate{
    constructor(private router: Router, private eventSerive:EventService) {

    }

     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
        const eventExist =  !! this.eventSerive.getEvent(+route.params['id'])
         
         if(!eventExist)
              this.router.navigate(['/404'])
          return  eventExist;
    }
}