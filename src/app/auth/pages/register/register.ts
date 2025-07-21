import { Component , Input } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Form } from '../../components/form/form';
@Component({
  selector: 'app-register',
  imports: [Header,Form],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
   @Input() title:string= "Create Account";
}
