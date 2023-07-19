import { Component } from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user:User={
    name:'',
    username:'',
    password:''
  }
  errorMessage!:string;

  constructor(private userservice:UserService,
              private router:Router) {
  }

   public register(){
    this.userservice.register(this.user)
      .subscribe(
        {
          next: (data)=>console.log(data),
          error: (err)=>this.errorMessage='User Name is already existed!',
          complete:()=>this.router.navigateByUrl('/login')
        }
      );
  }
}
