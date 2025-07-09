import { Component, inject } from '@angular/core';
import { Header } from "../../shared/header/header";
import { Form } from "../../components/form/form";
import { LoginServcie } from '../../services/loginServcie';

@Component({
  selector: 'app-login',
  imports: [Header, Form],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  private _loginService=inject(LoginServcie);

  login(event:any){
     console.log(event);
     console.log("este esta en el login")

     this._loginService.login(event).subscribe({
      next:(data)=>{
        console.log(data)
      },
      error:(err)=>{
        console.log(err)
      }
     })

  }
}
