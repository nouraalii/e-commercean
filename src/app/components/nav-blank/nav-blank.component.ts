import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/service/auth.service';
import { CartService } from '../../core/service/cart.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss'
})
export class NavBlankComponent implements OnInit{
  readonly _AuthService=inject(AuthService);
  private readonly _CartService=inject(CartService)

  countNumber:number=0
  
  ngOnInit(): void {
    this._CartService.getProductsCart().subscribe({
      next:(res)=>{
        console.log('cart items',res);
        this._CartService.cartNumber.next(res.numOfCartItems)
      }
    })

      this._CartService.cartNumber.subscribe({
        next:(data)=>{
          this.countNumber=data
        }
      })
  }
}
