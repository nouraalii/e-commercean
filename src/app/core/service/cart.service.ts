import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string='https://ecommerce.routemisr.com';

  cartNumber:BehaviorSubject<number>=new BehaviorSubject(0);

  addProductToCart(id:string):Observable <any>
  {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/cart`,
    {
      "productId":id
    }
  )
  }

  getProductsCart():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/cart`,
      
    )
  }

  deleteSpecificCartItem(id:string):Observable<any>
  {
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart/${id}`,
      
    )
  }

  updateProductQuantity(id:string,newCount:number):Observable<any>
  {
   return this._HttpClient.put(`${this.baseUrl}/api/v1/cart/${id}`,
      {
        "count":newCount
      }
    )
  }


  clearCart():Observable<any>
  {
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart`,
)
  }

}
