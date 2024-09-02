import { routes } from './../../app.routes';
import { Component, inject, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy{

  private readonly _AuthService=inject(AuthService);
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router=inject(Router)

  msgError:string="";
  isLoading:boolean=false;

  registerSub!:Subscription

  registerForm:FormGroup=this._FormBuilder.group({
    name:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    email:[null,[Validators.required,Validators.email]],
    phone:[null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}/)]],
    password:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]],
    rePassword:[null]
  },{validators:this.confirmPassword})
  

  // registerForm :FormGroup = new FormGroup({
  //     name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
  //     email:new FormControl(null,[Validators.required,Validators.email]),
  //     phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}/)]),
  //     password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
  //     rePassword:new FormControl(null),
  // },this.confirmPassword);

  registerSubmit():void
  {
    this.isLoading=true;
    if(this.registerForm.valid){
      this.registerSub=this._AuthService.setRegisterForm(this.registerForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          if(res.message=='success')
          {
            this._Router.navigate(['/login'])
          }
          this.isLoading=false
        },
        error:(err:HttpErrorResponse)=>{
          this.msgError=err.error.message
          console.log(err);
          this.isLoading=false
        }
      })
    }
    
  }


  confirmPassword(g:AbstractControl){
    if(g.get('password')?.value===g.get('rePassword')?.value){
      return null
    }
    else{
      return {mismatch:true}
    }
  }

  ngOnDestroy(): void {
      this.registerSub.unsubscribe()
  }

}
