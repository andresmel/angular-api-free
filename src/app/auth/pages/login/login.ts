import { Loading } from './../../../shared/loading/loading';
import { Component, inject, signal } from '@angular/core';
import { Form } from "../../components/form/form";
import { LoginServcie } from '../../services/loginServcie';
import { userStore } from '../../../core/store/userStore';
import { userAuth } from '../../../core/models/user.model';
import {ToastrService} from 'ngx-toastr';
import { Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [Form, Loading,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})


export class Login {
  private _toast=inject(ToastrService);
  private _loginService=inject(LoginServcie);
  private _user=userStore;
  private _route=inject(Router);
  pageLoad=signal(false);
  title:string="Sing in";


  login(event:any){
     this.pageLoad.set(!this.pageLoad());
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
        this.pageLoad.set(!this.pageLoad());
      },
      error:(err)=>{
        console.log(err)
        this._toast.error("error de usuario");
        this.pageLoad.set(!this.pageLoad());
      },
      complete:()=>{
        this.pageLoad.set(!this.pageLoad());
      }
     })

  }
}



