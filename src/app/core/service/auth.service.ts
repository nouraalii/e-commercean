import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _HttpClient=inject(HttpClient);
  private readonly _Router=inject(Router);

  userData:any=null

  baseUrl:string='https://ecommerce.routemisr.com'

  setRegisterForm(data:object):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signup`,data)
  }

  setLoginForm(data:object):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signin`,data)
  }

 
  saveUserData():void
  {
    if(localStorage.getItem('userToken')!==null)
    {
      this.userData=jwtDecode(localStorage.getItem('userToken')!);
      console.log(this.userData.id);
      
    }
  }


  logOut():void
  {
    localStorage.removeItem('userToken');
    this.userData=null

    this._Router.navigate(['/login'])
  }


  setVerifyEmail(data:object):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/forgotPasswords`,data)
  }
  setVerifyCode(data:object):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/verifyResetCode`,data)
  }

  
  setResetPassword(data:object):Observable<any>
  {
    return this._HttpClient.put(`${this.baseUrl}/api/v1/auth/resetPassword`,data)
  }
}
