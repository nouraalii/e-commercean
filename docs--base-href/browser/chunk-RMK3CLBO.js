import{a as U,b as z}from"./chunk-FQLS43JT.js";import{a as j,b as M,c as V}from"./chunk-GWN4NZXW.js";import{a as O}from"./chunk-2GAPWCEI.js";import{a as R}from"./chunk-6MRWYRUN.js";import{l as B}from"./chunk-JTG6TFIY.js";import{a as A,b as N}from"./chunk-TLPPR7V5.js";import"./chunk-WXI33M2S.js";import{a as $}from"./chunk-5KIYE5F4.js";import{d as I}from"./chunk-LUY3Z6OP.js";import"./chunk-CYIXHTS2.js";import{m as L}from"./chunk-VGO3SYRC.js";import{$ as d,Ab as u,Hb as p,Ib as h,Jb as D,Ma as y,Ob as H,Pb as W,Qa as n,Qb as T,Ub as g,Wb as _,ca as b,gb as f,ib as m,kb as F,ma as S,mb as k,na as C,nb as w,ob as v,pb as x,qb as a,rb as s,sb as c,vb as E,zb as P}from"./chunk-DDNZF7KO.js";var J=(e,o)=>o.id,q=e=>["/categoryDetails",e],K=e=>["/details",e],Q=()=>[1,2,3,4,5];function X(e,o){e&1&&c(0,"img",11)}function Y(e,o){e&1&&c(0,"img",12)}function Z(e,o){e&1&&c(0,"img",13)}function ee(e,o){if(e&1&&(a(0,"div",14),c(1,"img",15),a(2,"h3",16),p(3),s()()),e&2){let t=u().$implicit;m("routerLink",T(4,q,t._id)),n(),m("src",t.image,y)("alt",t.name),n(2),h(t.name)}}function te(e,o){if(e&1&&f(0,ee,4,6,"ng-template",8),e&2){let t=o.$implicit;m("id",t._id)}}function ie(e,o){e&1&&(a(0,"span"),c(1,"i",25),s())}function re(e,o){e&1&&c(0,"i",22)}function oe(e,o){if(e&1){let t=E();a(0,"div",4)(1,"div",17)(2,"div",14)(3,"i",18),P("click",function(i){let l=S(t).$implicit,G=u();return C(G.toggleWishlist(i,l))}),s(),c(4,"img",19),a(5,"h3",20),p(6),g(7,"termtext"),s(),a(8,"h4",16),p(9),g(10,"termtext"),s(),a(11,"div",21)(12,"span"),p(13),g(14,"currency"),s(),a(15,"div"),v(16,ie,2,0,"span",null,w),f(18,re,1,0,"i",22),a(19,"span",23),p(20),s()()()(),a(21,"button",24),P("click",function(){let i=S(t).$implicit,l=u();return C(l.addCart(i.id))}),p(22,"Add to Cart"),s()()()}if(e&2){let t=o.$implicit,r=u();n(2),m("routerLink",T(21,K,t.id)),n(),F("fa-solid",r.wishlist.has(t.id))("fa-regular",!r.wishlist.has(t.id)),n(),m("src",t.imageCover,y)("alt",t.title),n(2),h(_(7,12,t.category.name,1)),n(3),h(_(10,15,t.title,2)),n(4),D("",_(14,18,t.price,"GBP")," "),n(3),x(W(23,Q).slice(0,t.ratingsAverage)),n(2),k(18,t.ratingsAverage%1!==0?18:-1),n(2),h(t.ratingsAverage)}}var De=(()=>{let o=class o{constructor(){this._ProductService=d(O),this._CategoriesService=d($),this._CartService=d(A),this._ToastrService=d(N),this._WishlistService=d(R),this.customOptionsMain={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,navSpeed:700,navText:["",""],items:1,nav:!0},this.customOptionsCategory={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,navSpeed:700,navText:["prev","next"],responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:6}},nav:!1},this.productList=[],this.categoriesList=[],this.wishlist=new Set,this.text=""}ngOnInit(){this.loadCategories(),this.loadProducts(),this.loadWishlist()}ngOnDestroy(){this.allProductSub?.unsubscribe()}loadCategories(){this._CategoriesService.getAllCategories().subscribe({next:r=>{console.log(r.data),this.categoriesList=r.data}})}loadProducts(){this.allProductSub=this._ProductService.getProducts().subscribe({next:r=>{console.log(r.data),this.productList=r.data}})}loadWishlist(){this._WishlistService.getProductsWishlist().subscribe({next:r=>{console.log(r.data),this.wishlist=new Set(r.data.map(i=>i.id))}})}toggleWishlist(r,i){r.stopPropagation(),this.wishlist.has(i.id)?this._WishlistService.deleteSpecificWishlistItem(i.id).subscribe({next:()=>{this.wishlist.delete(i.id),this._ToastrService.success("Removed from wishlist")}}):this._WishlistService.addProductToWishlist(i.id).subscribe({next:()=>{this.wishlist.add(i.id),this._ToastrService.success("Added to wishlist")}})}addCart(r){this._CartService.addProductToCart(r).subscribe({next:i=>{console.log(i),this._ToastrService.success(i.message,"FreshCart"),this._CartService.cartNumber.next(i.numOfCartItems),console.log(this._CartService.cartNumber)}})}};o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=b({type:o,selectors:[["app-home"]],standalone:!0,features:[H],decls:23,vars:5,consts:[[1,"row","g-0"],[1,"col-md-10"],[3,"options"],["carouselSlide",""],[1,"col-md-2"],["src","./assets/grocery-banner.png","height","150px","alt","",1,"w-100"],["src","./assets/grocery-banner-2.jpeg","height","150px","alt","",1,"w-100"],[1,"my-4"],["carouselSlide","",3,"id"],[1,"my-5"],[1,"row","g-3"],["src","./assets/slider-image-1.jpeg","height","300px","alt","",1,"w-100"],["src","./assets/slider-image-2.jpeg","height","300px","alt","",1,"w-100"],["src","./assets/slider-image-3.jpeg","height","300px","alt","",1,"w-100"],[3,"routerLink"],["height","250px",1,"w-100",3,"src","alt"],[1,"h6"],[1,"product","p-2"],[1,"fa-heart","fa-xl","text-main",3,"click"],[1,"w-100",3,"src","alt"],[1,"small","text-main"],[1,"d-flex","justify-content-between","align-items-center"],[1,"fa-solid","fa-star-half-stroke","rating-color"],[1,"text-muted"],[1,"btn-main","w-100",3,"click"],[1,"fas","fa-star","rating-color"]],template:function(i,l){i&1&&(a(0,"section")(1,"div",0)(2,"div",1)(3,"owl-carousel-o",2),f(4,X,1,0,"ng-template",3)(5,Y,1,0,"ng-template",3)(6,Z,1,0,"ng-template",3),s()(),a(7,"div",4),c(8,"img",5)(9,"img",6),s()()(),a(10,"section",7)(11,"h2"),p(12,"Shop Popular categories"),s(),a(13,"owl-carousel-o",2),v(14,te,1,1,null,8,w),s()(),a(16,"section",9)(17,"h2"),p(18,"Popular Products:"),s(),a(19,"div",10),v(20,oe,23,24,"div",4,J),g(22,"search"),s()()),i&2&&(n(3),m("options",l.customOptionsMain),n(10),m("options",l.customOptionsCategory),n(),x(l.categoriesList),n(6),x(_(22,2,l.productList.slice(0,12),l.text)))},dependencies:[V,M,j,I,B,U,z,L]});let e=o;return e})();export{De as HomeComponent};
