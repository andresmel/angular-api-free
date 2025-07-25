import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-primary-button-auth',
  imports: [],
  templateUrl: './primary-button-auth.html',
  styleUrl: './primary-button-auth.scss'
})
export class PrimaryButtonAuth {
   @Input() titleButton:string ="";
   @Input() action: () => void = () => {};
}
