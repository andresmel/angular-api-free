import { Loading } from './../../../shared/loading/loading';
import { Component, inject, signal } from '@angular/core';
import { Form } from "../../components/form/form";
import { AuthServcie } from '../../services/authServcie';
import { userStore } from '../../../core/store/userStore';
import { userAuth } from '../../../core/models/user.model';
import {ToastrService} from 'ngx-toastr';
import { Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder,FormControl,Validators,ReactiveFormsModule } from '@angular/forms';
import { PrimaryButtonAuth } from '../../components/primary-button-auth/primary-button-auth';

@Component({
  selector: 'app-login',
  imports: [Form, Loading, CommonModule, ReactiveFormsModule,PrimaryButtonAuth,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})


export class Login {
  private _toast=inject(ToastrService);
  private _loginService=inject(AuthServcie);
  private _user=userStore;
  private _route=inject(Router);
  pageLoad=signal(false);
  title:string="Sing in";
  titleButtonForm:string="Sing in";
  fb=inject(FormBuilder);


  formData= this.fb.group({
   username:["",Validators.required],
   password:["",Validators.required]
  });


  login=()=>{
     this.pageLoad.set(!this.pageLoad());
     userAuth.username=this.formData.get('username')!.value as string;
     this._loginService.login(this.formData.value).subscribe({
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



