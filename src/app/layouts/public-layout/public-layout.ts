import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../auth/shared/header/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet,Header, CommonModule],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss'
})
export class PublicLayout {

}
