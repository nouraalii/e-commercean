import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { logedGuard } from './core/guards/loged.guard';

export const routes: Routes = [
    {
        path: '', component: AuthLayoutComponent, canActivate: [logedGuard], children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' , title:'Login'},
            { path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent),title:'Login' },
            { path: 'register', loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent),title:'Register' },
            { path: 'forget', loadComponent: () => import('./components/forgetpassword/forgetpassword.component').then(m => m.ForgetpasswordComponent),title:'Forget Password' },
        ]
    },
    {
        path: '', component: BlankLayoutComponent, canActivate: [authGuard], children: [
            { path: '', redirectTo: 'home', pathMatch: 'full',title:'Home' },
            { path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),title:'Home' },
            { path: 'brands', loadComponent: () => import('./components/brands/brands.component').then(m => m.BrandsComponent),title:'Brands' },
            { path: 'cart', loadComponent: () => import('./components/cart/cart.component').then(m => m.CartComponent),title:'Cart' },
            { path: 'categories', loadComponent: () => import('./components/categories/categories.component').then(m => m.CategoriesComponent),title:'Categories' },
            { path: 'product', loadComponent: () => import('./components/product/product.component').then(m => m.ProductComponent),title:'Product' },
            { path: 'details/:id', loadComponent: () => import('./components/details/details.component').then(m => m.DetailsComponent),title:'Product Details' },
            { path: 'categoryDetails/:id', loadComponent: () => import('./components/details-categories/details-categories.component').then(m => m.DetailsCategoriesComponent),title:'Category Details' },
            { path: 'wishlist', loadComponent: () => import('./components/wishlist/wishlist.component').then(m => m.WishlistComponent),title:'Wishlist' },
            { path: 'allorders', loadComponent: () => import('./components/allorders/allorders.component').then(m => m.AllordersComponent),title:'Orders' },
            { path: 'order/:id', loadComponent: () => import('./components/order/order.component').then(m => m.OrderComponent),title:'Check Out' },
        ]
    },
    { 
        path: '**', loadComponent: () => import('./components/notfound/notfound.component').then(m => m.NotfoundComponent),title:'404' 
    }
];
