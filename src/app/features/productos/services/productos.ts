import { Observable, of } from 'rxjs';
import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import apiUrl from "../../../core/apiUrl/apiUrls.json";
import { map ,tap} from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Productos {
  private _http= inject(HttpClient);

  constructor() { }


  getProductos(): Observable<any>{
    return this._http.get(apiUrl.baseUrl + apiUrl.endPoints.productos.getProductos).pipe(
      map((data:any) => {
      return data.map((product:any) => {
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
          image: product.image
        }
      });
    })
   );
  }

   productoDetail(id:number):Observable<any>{

    return this._http.get(apiUrl.baseUrl + apiUrl.endPoints.productos.getProductoDetail+id).pipe(

      map((data:any)=>{

        return {
          id: data.id,
          title: data.title,
          price: data.price,
          description: data.description,
          category: data.category,
          image: data.image
        }
      }),
    );
  }


}
