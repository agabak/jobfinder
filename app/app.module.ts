import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule,ReactiveFormsModule} from '@angular/forms'

import {
   HomeMain,
   EventThumbnailComponent,
   EventService,
   ToastrService,
   EventListResolverService
} from './home/index'

import { uTanzaniaAppComponent } from './utanzania-app.component'
import { NavBarComponent} from './nav/navbar.component'
import { EventDetailComponent } from './events-detail/event.detail.component'
import { appRoutes } from './route'
import { CreateEventComponent } from './create/create.event.component'
import { Error404Component } from './errors/404.component'
import { EventRouterActivator } from './events-detail/event.router.activator.service'
import { AuthService } from './user/auth.service'



@NgModule({
    imports:[BrowserModule,
             FormsModule,
             ReactiveFormsModule,
             RouterModule.forRoot(appRoutes)],
    declarations:[uTanzaniaAppComponent,
                  HomeMain,EventThumbnailComponent,
                  NavBarComponent,EventDetailComponent,
                  CreateEventComponent,
                  Error404Component],
    providers:[EventService,
               ToastrService,
               EventRouterActivator,
                EventListResolverService,
                AuthService,
               {
                   provide:'canDeactivatedCreateEvent',
                   useValue:checkDirtyState
               }],
    bootstrap:[uTanzaniaAppComponent]
})

export class AppModule{
}

function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty){
      return window.confirm('You have not saved this event, do you really  want  to  cancel')
  }
  return true
}