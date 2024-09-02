import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/service/product.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { NgFor } from '@angular/common';
import { IProduct } from '../../core/interface/iproduct';
import { WishlistService } from '../../core/service/wishlist.service';
import { CartService } from '../../core/service/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CarouselModule,NgFor],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{
  private readonly _ActivatedRoute=inject(ActivatedRoute);
  private readonly _ProductService=inject(ProductService);
  private readonly _WishlistService=inject(WishlistService);
  private readonly _CartService=inject(CartService);
  private readonly _ToastrService=inject(ToastrService)


  customOptionsDetails: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }

  productDetails: IProduct | null = null;
  isInWishlist: boolean = false;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (p) => {
        let idProduct = p.get('id');
        if (idProduct) {
          this._ProductService.getSpecificProduct(idProduct).subscribe({
            next: (res) => {
              console.log(res.data);
              this.productDetails = res.data;
              this.checkWishlist(idProduct);
            }
          });
        }
      }
    });
  }

  addCart(id: string): void {
    this._CartService.addProductToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this._ToastrService.success(res.message, 'FreshCart');
        this._CartService.cartNumber.next(res.numOfCartItems)
        console.log(this._CartService.cartNumber);
        
      }
    });
  }

  checkWishlist(productId: string): void {
    this._WishlistService.getProductsWishlist().subscribe({
      next: (res) => {
        this.isInWishlist = res.data.some((item: IProduct) => item.id === productId);
      }
    });
  }

  toggleWishlist(): void {
    if (!this.productDetails) return;

    if (this.isInWishlist) {
      this._WishlistService.deleteSpecificWishlistItem(this.productDetails.id).subscribe({
        next: () => {
          this.isInWishlist = false;
          console.log('Removed from wishlist');
        }
      });
    } else {
      this._WishlistService.addProductToWishlist(this.productDetails.id).subscribe({
        next: () => {
          this.isInWishlist = true;
          console.log('Added to wishlist');
        }
      });
    }
  }
}
