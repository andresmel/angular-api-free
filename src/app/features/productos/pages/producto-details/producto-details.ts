import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, signal ,inject, computed} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from '../../services/productos';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, tap} from 'rxjs/operators';
import { effect } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { Loading } from "../../../../shared/loading/loading";

@Component({
  selector: 'app-producto-details',
  imports: [ProductCard, Loading, CommonModule, ReactiveFormsModule],
  templateUrl: './producto-details.html',
  styleUrl: './producto-details.scss'
})
export class ProductoDetails {
  private _activeroute = inject(ActivatedRoute);
  private _productoService=inject(Productos);
  producto=signal<any>({});
  pageLoad = signal<boolean>(true);

  id=toSignal(
    this._activeroute.params.pipe(
      tap((params:any) => {
        console.log(params.id);
      }),
      map((params:any) => {
        return params.id;

      }),
    ),
    {initialValue: 0}
  )

  constructor() {
    effect(() => {
      if(this.id()!=null && this.id() > 0) {
      this._productoService.productoDetail(this.id()).subscribe({
        next: (data:any) => {
          this.producto.set(data);
          console.log(this.producto());
          this.pageLoad.set(false);
        },
        error: (err:any) => {
          console.error('Error fetching product details:', err);
          this.pageLoad.set(false);
        }
      });
      }else{
    }
    });
  }
}
