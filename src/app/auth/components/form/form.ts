import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {FormBuilder ,Validators, ReactiveFormsModule, FormGroup} from "@angular/forms"
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form {
  @Input() title:string="";
  private fb=inject(FormBuilder);




  formdata=this.fb.group({
    "username":["",[Validators.required]],
    "password":["",[Validators.required]]
  })



  @Output() sendata=new EventEmitter<any>();

  Login(){
    if(this.formdata.valid){
      this.sendata.emit(this.formdata.value);
    }
  }



}
