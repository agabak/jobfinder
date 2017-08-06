import { Component ,OnInit} from '@angular/core'
import { FormControl, FormGroup,Validators } from '@angular/forms'
import { Router} from '@angular/router'

import { AuthService } from  './auth.service'

@Component({
  templateUrl:'app/user/profile.component.html',
  styles:[
       `em {float:right; color:#E05C65; padding-left:10px;}
       .error input {background-color:#E3C3C5;}`
   ]
})
export class ProfileComponent implements OnInit {
  constructor(private route:Router, private auth:AuthService){}
  profileForm:FormGroup
  private firstName:FormControl
  private lastName:FormControl

  ngOnInit(): void {
    //create form controls
     this.firstName = new FormControl(this.auth.currentUser.firstName,[Validators.required,Validators.pattern('[a-zA-Z].*')]);
     this.lastName = new FormControl (this.auth.currentUser.lastName,[Validators.required,Validators.pattern('[a-zA-Z].*')]);

    // add form controls to form groups
    this.profileForm = new FormGroup({
         firstName:this.firstName,
         lastName:this.lastName
      })
     }

     updateProfile(formValues){
       if(this.profileForm.valid){
       this.auth.updateProfile(formValues.firstName,formValues.lastName)
         this.route.navigate(['events']);
       }
     }

     cancel(){
       this.route.navigate(['events']);
     }

     validateFirstName(){
       return  this.firstName.valid || this.firstName.untouched
     }

     validateLastName(){
       return this.lastName.valid || this.lastName.untouched
     }
}