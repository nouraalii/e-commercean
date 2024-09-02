import { CartItem } from './../../core/interface/iorder';
import { Component, inject, OnInit } from '@angular/core';
import { OrdersService } from '../../core/service/orders.service';
import { AuthService } from '../../core/service/auth.service';
import { IProduct } from '../../core/interface/iproduct';
import { throws } from 'assert';
import { IOrder } from '../../core/interface/iorder';
import { CurrencyPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [CurrencyPipe,RouterLink,NgFor],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss'
})
export class AllordersComponent implements OnInit{
  private readonly _OrdersService=inject(OrdersService);                               
  private readonly _AuthService=inject(AuthService); 
                                

  userId: string | null = null; 

  constructor(private authService: AuthService) {}

  allOrders: IOrder[] = [];

  ngOnInit(): void {
    this.authService.saveUserData();
  
    if (this.authService.userData && this.authService.userData.id) {
      this.userId = this.authService.userData.id;
    }

    console.log('User ID:', this.userId);

    this._OrdersService.getAllOrders(this.userId).subscribe({
      next: (res) => {
        console.log(res);
        this.allOrders = res; // Since res is an array of orders
        console.log(this.allOrders);
      },
    });
  }
}
