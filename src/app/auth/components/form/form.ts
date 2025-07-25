import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form {
  @Input() title:string="";
}
