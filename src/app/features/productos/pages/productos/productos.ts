import { Component , inject, signal} from '@angular/core';
import { Productos as ProductosService } from '../../services/productos';
import {toSignal} from '@angular/core/rxjs-interop';
import { catchError, of,tap } from 'rxjs';
import { TableList } from "../../components/table-list/table-list";
import { Router } from '@angular/router';
import { Loading } from "../../../../shared/loading/loading";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  imports: [TableList, Loading, CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.scss'
})
export class Productos {
 private _productosService = inject(ProductosService);
 private _router = inject(Router);
 pageLoad= signal(true);

  productos=toSignal(

    this._productosService.getProductos().pipe(
      tap((data:any) => {
        console.log(data)
        this.pageLoad.set(!this.pageLoad())
      }),
      catchError((error) => {
        console.error('Error fetching products:', error);
        this.pageLoad.set(!this.pageLoad());
        return of([]); //
      })
    ),
     {initialValue: []}
    );



     detailProduct(productoEmmit:any){
      console.log(productoEmmit)
      this._router.navigate(['dashboard','producto', productoEmmit.id]);
     }


}
