import { Subscription } from 'rxjs';
import { ProductService } from './../../core/service/product.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/service/categories.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { AsyncPipe, CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { SalePipe } from '../../core/pipes/sale.pipe';
import { TermtextPipe } from '../../core/pipes/termtext.pipe';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/service/cart.service';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from '../../core/interface/iproduct';
import { ICategores } from '../../core/interface/icategores';
import { WishlistService } from '../../core/service/wishlist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule,RouterLink,FormsModule,AsyncPipe,SalePipe,TermtextPipe,SearchPipe,UpperCasePipe,LowerCasePipe,TitleCasePipe,SlicePipe,CurrencyPipe,DatePipe,JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit,OnDestroy{
  private readonly _ProductService=inject(ProductService);
  private readonly _CategoriesService=inject(CategoriesService);
  private readonly _CartService=inject(CartService);
  private readonly _ToastrService=inject(ToastrService);
  private readonly _WishlistService=inject(WishlistService);


  
  customOptionsMain: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true, 
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: true
  }

  customOptionsCategory: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true, 
    navSpeed: 700,
    navText: ['prev', 'next'],
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
        items: 6
      }
    },
    nav: false
  }


  productList: IProduct[] = [];
  categoriesList: ICategores[] = [];
  wishlist: Set<string> = new Set<string>();
  allProductSub!: Subscription;
  text:string=''

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
    this.loadWishlist(); // Load wishlist on component init
  }

  ngOnDestroy(): void {
    this.allProductSub?.unsubscribe();
  }

  loadCategories(): void {
    this._CategoriesService.getAllCategories().subscribe({
      next: (res) => {
        console.log(res.data);
        this.categoriesList = res.data;
      }
    });
  }

  loadProducts(): void {
    this.allProductSub = this._ProductService.getProducts().subscribe({
      next: (res) => {
        console.log(res.data);
        this.productList = res.data;
      }
    });
  }

  loadWishlist(): void {
    this._WishlistService.getProductsWishlist().subscribe({
      next: (res) => {
        console.log(res.data);
        this.wishlist = new Set(res.data.map((item: IProduct) => item.id));
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
  

}
