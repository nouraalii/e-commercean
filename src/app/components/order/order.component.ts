import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../core/service/orders.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit{

  private readonly _FormBuilder=inject(FormBuilder);
  private readonly _ActivatedRoute=inject(ActivatedRoute);
  private readonly _OrdersService=inject(OrdersService)

  orderForm:FormGroup=this._FormBuilder.group({
    details:[null],
    phone:[null],
    city:[null],
  })

  idCart:string|null=""
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(param)=>{
          this.idCart=param.get('id');
          console.log(this.idCart);
          
        }
      })
  }

  orderSubmit()
  {
    console.log(this.orderForm.value);
    this._OrdersService.checkOut(this.idCart,this.orderForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        if (res.status==='success') {
          window.open(res.session.url,'_self')
        }
      }
    })
    
  }
}
