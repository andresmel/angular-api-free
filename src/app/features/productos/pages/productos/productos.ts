import { Component , inject} from '@angular/core';
import { Productos as ProductosService } from '../../services/productos';
import {toSignal} from '@angular/core/rxjs-interop';
import { catchError, of,tap } from 'rxjs';
import { TableList } from "../../components/table-list/table-list";

@Component({
  selector: 'app-productos',
  imports: [TableList],
  templateUrl: './productos.html',
  styleUrl: './productos.scss'
})
export class Productos {
  private _productosService = inject(ProductosService);


  productos=toSignal(
    this._productosService.getProductos().pipe(
      tap((data:any) => {console.log(data)}),
      catchError((error) => {
        console.error('Error fetching products:', error);
        return of([]); //
      })
    ),
     {initialValue: []});
}
