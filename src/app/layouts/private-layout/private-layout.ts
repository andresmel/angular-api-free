import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../../shared/header/header";
import { CommonModule } from '@angular/common';
import { userStore } from '../../core/store/userStore';
@Component({
  selector: 'app-private-layout',
  imports: [RouterOutlet, Header,CommonModule],
  templateUrl: './private-layout.html',
  styleUrl: './private-layout.scss'
})

export class PrivateLayout {
  private _userAuth = userStore;

  constructor() {
   this._userAuth.onLoadApp();
  }
}
