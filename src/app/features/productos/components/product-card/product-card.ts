import { Component,Input,signal, SimpleChanges,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimary } from "../../../../shared/button-primary/button-primary";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, ButtonPrimary],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  @Input() producto:any[] = [];
  productoSignal= signal<any>({});
  _router = inject(Router);
  buttonName:string = 'Return to products';

  ngOnChanges(changes:SimpleChanges):void {
    if(changes['producto']) {
      console.log(this.producto);
      this.productoSignal.set(this.producto);
    }else {
      this.productoSignal.set([]);
    }
  }


  goBack =() =>{
    this._router.navigate(['dashboard']);
  }
}
