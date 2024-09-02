import { Component, inject, OnInit } from '@angular/core';
import { WishlistService } from '../../core/service/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { CurrencyPipe } from '@angular/common';
import { ICart } from '../../core/interface/icart';
import { IProduct } from '../../core/interface/iproduct';
import { CartService } from '../../core/service/cart.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit{
  private readonly _WishlistService= inject(WishlistService);
  private readonly _ToastrService=inject(ToastrService);
  private readonly _CartService=inject(CartService);

  wishlistDetails:IProduct [] =[];

  ngOnInit(): void {
    this._WishlistService.getProductsWishlist().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.wishlistDetails=res.data
      }
    })
  }

  removeItem(id: string): void {
    this._WishlistService.deleteSpecificWishlistItem(id).subscribe({
      next: (res) => {
        console.log(res);
        this.wishlistDetails = this.wishlistDetails.filter(item => item.id !== id);
        this._ToastrService.success('Item removed from wishlist', 'FreshCart');
      },
      error: (err) => {
        console.log(err);
        this._ToastrService.error('Failed to remove item', 'FreshCart');
      }
    });
  }
  

  addCart(id:string):void
  {
    this._CartService.addProductToCart(id).subscribe({
      next:(res)=>{
        console.log(res)
        this._ToastrService.success(res.message,'FreshCart');
        this._CartService.cartNumber.next(res.numOfCartItems)
      }
    }) 
  }

}
