import { Component , inject} from '@angular/core';
import { userStore } from '../../core/store/userStore';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
 private _userAuth = userStore;
 private _router = inject(Router);

 constructor() {
  console.log(this._userAuth.user());
  if(!this._userAuth.user()?.token) {
    this._router.navigate(["/login"]);
  }
 }


 logout() {
    sessionStorage.removeItem("token");
    this._userAuth.clearUser();
    this._router.navigate(["/login"]);
  }
}
