import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {FormBuilder ,Validators, ReactiveFormsModule, FormGroup} from "@angular/forms"

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form {
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
