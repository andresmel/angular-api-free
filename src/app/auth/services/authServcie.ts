import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiUrl from "../../core/apiUrl/apiUrls.json";

@Injectable({
  providedIn: 'root'
})
export class AuthServcie {
 private _http=inject(HttpClient);

  constructor() { }

  login(data:any):Observable<any>{
    return this._http.post(apiUrl.baseUrl+apiUrl.endPoints.users.auth, data);
  }

  register(user:any):Observable<any>{
    return this._http.post(apiUrl.baseUrl+apiUrl.endPoints.users.register,user);
  }
}
