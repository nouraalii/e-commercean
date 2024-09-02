import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {

  private readonly _AuthService=inject(AuthService);
  private readonly _Router=inject(Router);

  step:number=1;

  isLoading:boolean=false;

  verifyEmail:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
  })

  verifyCode:FormGroup=new FormGroup({
    resetCode:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6}$/)]),
  })


  resetPassword:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    newPassword:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
  })


  verifyEmailSubmit()
  {
    this.isLoading=true;
    this._AuthService.setVerifyEmail(this.verifyEmail.value).subscribe({
      
      next:(res)=>{
        console.log(res);
        if (res.statusMsg=='success') {
          this.step=2
        }
        this.isLoading=false
      },
      error:(err)=>
      {
        console.log(err);
        this.isLoading=false
      }
    })
  }

  verifyCodeSubmit()
  {
    this.isLoading=true;
    this._AuthService.setVerifyCode(this.verifyCode.value).subscribe({
      next:(res)=>{
        console.log(res);
        if (res.status=='Success') {
          this.step=3
        }
        this.isLoading=false
      },
      error:(err)=>
      {
        console.log(err);
        this.isLoading=false
      }
    })
  }

  ResetPassSubmit()
  {
    this.isLoading=true;
    this._AuthService.setResetPassword(this.resetPassword.value).subscribe({
      next:(res)=>{
        console.log(res);
        localStorage.setItem('userToken',res.token);

        this._AuthService.saveUserData();

        this._Router.navigate(['/home']);
        this.isLoading=false;
      },
      error:(err)=>
      {
        console.log(err);
        this.isLoading=false;
      }
    })
  }

}
