import { Routes } from '@angular/router'

import {HomeMain} from  './home/home.component'
import { EventDetailComponent }  from './events-detail/event.detail.component'
import { CreateEventComponent } from './create/create.event.component'
import { Error404Component } from './errors/404.component'
import { EventRouterActivator } from './events-detail/event.router.activator.service'
import {  EventListResolverService} from './home/event.list.resolver.service'

export  const  appRoutes:Routes = [
    { path: 'events/new',component:CreateEventComponent,canDeactivate:['canDeactivatedCreateEvent']},
    { path: 'events', component:HomeMain},
    { path: 'events/:id',component:EventDetailComponent,canActivate:[EventRouterActivator]},
   {path: '404', component:Error404Component},
   { path: '', redirectTo:'/events', pathMatch:'full'},
   {path:'user', loadChildren:'app/user/user.module#UserModule'}
]