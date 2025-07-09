import { Component, inject } from '@angular/core';
import { Header } from "../../shared/header/header";
import { Form } from "../../components/form/form";
import { LoginServcie } from '../../services/loginServcie';
import { userStore } from '../../../core/store/userStore';
import { userAuth } from '../../../core/models/user.model';
import {ToastrService} from 'ngx-toastr';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [Header, Form],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})


export class Login {
  private _toast=inject(ToastrService);
  private _loginService=inject(LoginServcie);
  private _user=userStore;
  private _route=inject(Router);


  login(event:any){
     userAuth.username=event.username;
     this._loginService.login(event).subscribe({
      next:(data)=>{
        console.log(data)
        if(data?.token){
           userAuth.token=data.token;
           this._user.setUser(userAuth);
           sessionStorage.setItem("user", JSON.stringify(userAuth));
           this._toast.success("Login successful");
           this._route.navigate(["dashboard"]);
        }
      },
      error:(err)=>{
        console.log(err)
        this._toast.error("error de usuario");
      }
     })

  }
}



