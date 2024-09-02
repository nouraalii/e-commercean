import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string='https://ecommerce.routemisr.com';

  checkOut(idCart:string|null,shippingDetails:object):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/orders/checkout-session/${idCart}?url=${window.location.origin}`,
      {
        "shippingAddress":shippingDetails
      }
    )
  }

  getAllOrders(id:string|null):Observable<any>
  { 
    return this._HttpClient.get(`${this.baseUrl}/api/v1/orders/user/${id}`)
  }

}
