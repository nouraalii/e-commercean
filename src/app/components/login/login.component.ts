import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/service/auth.service';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly _AuthService=inject(AuthService);
  private readonly _FormBuilder=inject(FormBuilder);
  private readonly _Router=inject(Router);

  msgError:string="";
  isLoading:boolean=false;

  loginForm:FormGroup = this._FormBuilder.group({
    email:[null,[Validators.required,Validators.email]],
    password:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]]
  })

  loginSubmit():void
  {
    if(this.loginForm.valid)
    {
      this._AuthService.setLoginForm(this.loginForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          if (res.message==='success') 
          {
            localStorage.setItem('userToken',res.token);

            this._AuthService.saveUserData();

            this._Router.navigate(['/home']);
          }
          this.isLoading=true
        },
        error:(err:HttpErrorResponse)=>{
          this.msgError=err.error.message
          console.log(err);
          this.isLoading=false
        }
      })
    }
  }
}
