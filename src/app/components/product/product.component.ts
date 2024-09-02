import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/service/product.service';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from '../../core/interface/iproduct';
import { Subscription } from 'rxjs';
import { FormsModule, NgModel } from '@angular/forms';
import { TermtextPipe } from '../../core/pipes/termtext.pipe';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/service/cart.service';
import { WishlistService } from '../../core/service/wishlist.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,TermtextPipe,SearchPipe,CurrencyPipe,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  private readonly _ProductService=inject(ProductService);
  private readonly _ToastrService=inject(ToastrService); 
  private readonly _CartService=inject(CartService);
  private readonly _WishlistService=inject(WishlistService) 

  productList: IProduct[] = [];
  wishlist: Set<string> = new Set<string>();
  allProductSub!: Subscription;
  wishlistSub!: Subscription;
  text: string = '';

  ngOnInit(): void {
    // Fetch products
    this.allProductSub = this._ProductService.getProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.productList = res.data;
      }
    });

    // Fetch wishlist items
    this.wishlistSub = this._WishlistService.getProductsWishlist().subscribe({
      next: (res) => {
        console.log(res);
        this.wishlist = new Set(res.data.map((item: IProduct) => item.id));
      }
    });
  }

  ngOnDestroy(): void {
    this.allProductSub?.unsubscribe();
    this.wishlistSub?.unsubscribe();
  }

  addCart(id: string): void {
    this._CartService.addProductToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this._ToastrService.success(res.message, 'FreshCart');
        this._CartService.cartNumber.next(res.numOfCartItems)
      }
    });
  }

  toggleWishlist(event: Event, product: IProduct): void {
    event.stopPropagation(); // Prevent navigation

    if (this.wishlist.has(product.id)) {
      this._WishlistService.deleteSpecificWishlistItem(product.id).subscribe({
        next: () => {
          this.wishlist.delete(product.id);
          this._ToastrService.success('Removed from wishlist');
        }
      });
    } else {
      this._WishlistService.addProductToWishlist(product.id).subscribe({
        next: () => {
          this.wishlist.add(product.id);
          this._ToastrService.success('Added to wishlist');
        }
      });
    }
  }
  
}
