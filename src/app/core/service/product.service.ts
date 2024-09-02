import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // constructor() { }


  private readonly _HttpClient = inject(HttpClient);

  baseUrl:string='https://ecommerce.routemisr.com';

  getProducts():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/products`)
  }

  getSpecificProduct(id:string|null):Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/products/${id}`)
  }
}
