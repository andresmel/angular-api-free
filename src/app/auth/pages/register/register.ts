import { PrimaryButtonAuth } from './../../components/primary-button-auth/primary-button-auth';
import { Component , inject, Input } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Form } from '../../components/form/form';
import { RouterLink } from '@angular/router';
import { FormBuilder,FormControl,Validator,ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServcie } from '../../services/authServcie';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  imports: [Header,Form,RouterLink,ReactiveFormsModule,PrimaryButtonAuth],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
   @Input() title:string= "Create Account";
   private fb=inject(FormBuilder);
   private _toast=inject(ToastrService);
   titleButtonForm:string="Create";
   private _http=inject(AuthServcie);
  formData:any= this.fb.group({
    username:["",Validators.required],
    email:["",Validators.required],
    password:["",Validators.required],
  })

  register=()=>{
    if(!this.formData.valid){
        this._toast.info("Datos Obligatorios")
    }
    else{
      this._http.register(this.formData.value).subscribe({
        next:(data:any)=>{
          console.log(data)
           this._toast.success("Usuario Registrado")
        },
        error:(error:any)=>{
           console.log(error)
           this._toast.error("Error al registrar")
        },
        complete:()=>{

        }
      })
    }
  }





}
