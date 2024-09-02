import './polyfills.server.mjs';
import{a as ye,d as Se}from"./chunk-3TUNMBOA.mjs";import{a as Ee}from"./chunk-LYRTE5YL.mjs";import{a as Oe,b as De,c as Ne}from"./chunk-4AMEMC65.mjs";import{c as Ce,d as N,f as k,g as xe,h as L}from"./chunk-GTSSCL6B.mjs";import{b,d as w,e as I,f as E,g as ke,h as we,i as Ie}from"./chunk-PATWWLDP.mjs";import{e as he,g as ve,h as be}from"./chunk-OLSM6CU6.mjs";import{A as fe,B as ge,k as ce,l as me,p as de,z as ue}from"./chunk-S22GBDN5.mjs";import{$ as c,Ab as ee,Bb as te,Db as ne,E as G,Eb as ie,Fb as re,Gb as p,Hb as oe,Ka as J,M as V,Nb as m,Pa as f,Qa as v,R as B,S as U,Tb as ae,U as q,Ub as se,X as d,aa as Q,ca as W,ea as X,f as T,fb as x,g as P,hb as g,hc as le,ia as Z,ib as y,k as j,kb as K,pa as Y,pb as r,pc as pe,qb as o,rb as a,w as z,x as H,yb as $,zb as S}from"./chunk-HXINP7UO.mjs";import{a as F,b as R}from"./chunk-VVCT4QZE.mjs";var Qe=["overlay"],We=["*"];function Xe(e,t){e&1&&a(0,"div")}function Ze(e,t){if(e&1&&(r(0,"div"),x(1,Xe,1,0,"div",6),o()),e&2){let l=S(2);K(l.spinner.class),y("color",l.spinner.color),f(),g("ngForOf",l.spinner.divArray)}}function Ye(e,t){if(e&1&&(a(0,"div",7),ae(1,"safeHtml")),e&2){let l=S(2);g("innerHTML",se(1,1,l.template),J)}}function Je(e,t){if(e&1&&(r(0,"div",2,0),x(2,Ze,2,5,"div",3)(3,Ye,2,3,"div",4),r(4,"div",5),te(5),o()()),e&2){let l=S();y("background-color",l.spinner.bdColor)("z-index",l.spinner.zIndex)("position",l.spinner.fullScreen?"fixed":"absolute"),g("@.disabled",l.disableAnimation)("@fadeIn","in"),f(2),g("ngIf",!l.template),f(),g("ngIf",l.template),f(),y("z-index",l.spinner.zIndex)}}var Ke={"ball-8bits":16,"ball-atom":4,"ball-beat":3,"ball-circus":5,"ball-climbing-dot":4,"ball-clip-rotate":1,"ball-clip-rotate-multiple":2,"ball-clip-rotate-pulse":2,"ball-elastic-dots":5,"ball-fall":3,"ball-fussion":4,"ball-grid-beat":9,"ball-grid-pulse":9,"ball-newton-cradle":4,"ball-pulse":3,"ball-pulse-rise":5,"ball-pulse-sync":3,"ball-rotate":1,"ball-running-dots":5,"ball-scale":1,"ball-scale-multiple":3,"ball-scale-pulse":2,"ball-scale-ripple":1,"ball-scale-ripple-multiple":3,"ball-spin":8,"ball-spin-clockwise":8,"ball-spin-clockwise-fade":8,"ball-spin-clockwise-fade-rotating":8,"ball-spin-fade":8,"ball-spin-fade-rotating":8,"ball-spin-rotate":2,"ball-square-clockwise-spin":8,"ball-square-spin":8,"ball-triangle-path":3,"ball-zig-zag":2,"ball-zig-zag-deflect":2,cog:1,"cube-transition":2,fire:3,"line-scale":5,"line-scale-party":5,"line-scale-pulse-out":5,"line-scale-pulse-out-rapid":5,"line-spin-clockwise-fade":8,"line-spin-clockwise-fade-rotating":8,"line-spin-fade":8,"line-spin-fade-rotating":8,pacman:6,"square-jelly-box":2,"square-loader":1,"square-spin":1,timer:1,"triangle-skew-spin":1},A={BD_COLOR:"rgba(51,51,51,0.8)",SPINNER_COLOR:"#fff",Z_INDEX:99999},M="primary",h=class e{constructor(t){Object.assign(this,t)}static create(t){return!t?.template&&!t?.type&&console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`),new e(t)}},_=(()=>{let t=class t{constructor(){this.spinnerObservable=new P(null)}getSpinner(i){return this.spinnerObservable.asObservable().pipe(z(n=>n&&n.name===i))}show(i=M,n){return new Promise((s,u)=>{setTimeout(()=>{n&&Object.keys(n).length?(n.name=i,this.spinnerObservable.next(new h(R(F({},n),{show:!0}))),s(!0)):(this.spinnerObservable.next(new h({name:i,show:!0})),s(!0))},10)})}hide(i=M,n=10){return new Promise((s,u)=>{setTimeout(()=>{this.spinnerObservable.next(new h({name:i,show:!1})),s(!0)},n)})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=B({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Le=new q("NGX_SPINNER_CONFIG"),$e=(()=>{let t=class t{constructor(i){this._sanitizer=i}transform(i){if(i)return this._sanitizer.bypassSecurityTrustHtml(i)}};t.\u0275fac=function(n){return new(n||t)(v(ve,16))},t.\u0275pipe=W({name:"safeHtml",type:t,pure:!0,standalone:!0});let e=t;return e})(),Ae=(()=>{let t=class t{constructor(i,n,s,u){this.spinnerService=i,this.changeDetector=n,this.elementRef=s,this.globalConfig=u,this.disableAnimation=!1,this.spinner=new h,this.ngUnsubscribe=new T,this.setDefaultOptions=()=>{let{type:D}=this.globalConfig??{};this.spinner=h.create({name:this.name,bdColor:this.bdColor,size:this.size,color:this.color,type:this.type??D,fullScreen:this.fullScreen,divArray:this.divArray,divCount:this.divCount,show:this.show,zIndex:this.zIndex,template:this.template,showSpinner:this.showSpinner})},this.bdColor=A.BD_COLOR,this.zIndex=A.Z_INDEX,this.color=A.SPINNER_COLOR,this.size="large",this.fullScreen=!0,this.name=M,this.template=null,this.showSpinner=!1,this.divArray=[],this.divCount=0,this.show=!1}initObservable(){this.spinnerService.getSpinner(this.name).pipe(V(this.ngUnsubscribe)).subscribe(i=>{this.setDefaultOptions(),Object.assign(this.spinner,i),i.show&&this.onInputChange(),this.changeDetector.detectChanges()})}ngOnInit(){this.setDefaultOptions(),this.initObservable()}isSpinnerZone(i){return i===this.elementRef.nativeElement.parentElement?!0:i.parentNode&&this.isSpinnerZone(i.parentNode)}ngOnChanges(i){for(let n in i)if(n){let s=i[n];if(s.isFirstChange())return;typeof s.currentValue<"u"&&s.currentValue!==s.previousValue&&s.currentValue!==""&&(this.spinner[n]=s.currentValue,n==="showSpinner"&&(s.currentValue?this.spinnerService.show(this.spinner.name,this.spinner):this.spinnerService.hide(this.spinner.name)),n==="name"&&this.initObservable())}}getClass(i,n){this.spinner.divCount=Ke[i],this.spinner.divArray=Array(this.spinner.divCount).fill(0).map((u,D)=>D);let s="";switch(n.toLowerCase()){case"small":s="la-sm";break;case"medium":s="la-2x";break;case"large":s="la-3x";break;default:break}return"la-"+i+" "+s}onInputChange(){this.spinner.class=this.getClass(this.spinner.type,this.spinner.size)}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}};t.\u0275fac=function(n){return new(n||t)(v(_),v(le),v(Y),v(Le,8))},t.\u0275cmp=c({type:t,selectors:[["ngx-spinner"]],viewQuery:function(n,s){if(n&1&&ne(Qe,5),n&2){let u;ie(u=re())&&(s.spinnerDOM=u.first)}},inputs:{bdColor:"bdColor",size:"size",color:"color",type:"type",fullScreen:"fullScreen",name:"name",zIndex:"zIndex",template:"template",showSpinner:"showSpinner",disableAnimation:"disableAnimation"},standalone:!0,features:[Z,m],ngContentSelectors:We,decls:1,vars:1,consts:[["overlay",""],["class","ngx-spinner-overlay",3,"background-color","z-index","position",4,"ngIf"],[1,"ngx-spinner-overlay"],[3,"class","color",4,"ngIf"],[3,"innerHTML",4,"ngIf"],[1,"loading-text"],[4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(n,s){n&1&&(ee(),x(0,Je,6,12,"div",1)),n&2&&g("ngIf",s.spinner.show)},dependencies:[$e,me,ce],styles:[".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],data:{animation:[Ce("fadeIn",[xe("in",k({opacity:1})),L(":enter",[k({opacity:0}),N(300)]),L(":leave",N(200,k({opacity:0})))])]},changeDetection:0});let e=t;return e})(),Me=(()=>{let t=class t{static forRoot(i){return{ngModule:t,providers:[{provide:Le,useValue:i}]}}};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=Q({type:t}),t.\u0275inj=U({imports:[de]});let e=t;return e})();var _e=(()=>{let t=class t{constructor(){this.title="e-commerce"}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],standalone:!0,features:[m],decls:5,vars:0,consts:[[1,"mt-5"],["bdColor","rgba(100, 100, 100, 0.7)","template","<img width='300px' src='../assets/freshcart-logo.svg' />"],[1,"text-white"]],template:function(n,s){n&1&&(r(0,"div",0),a(1,"router-outlet"),o(),r(2,"ngx-spinner",1)(3,"p",2),p(4,"Loading..."),o()())},dependencies:[b,Ae]});let e=t;return e})();var Fe=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c({type:t,selectors:[["app-nav-auth"]],standalone:!0,features:[m],decls:26,vars:0,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary","fixed-top"],[1,"container-fluid"],["routerLink","login",1,"navbar-brand"],["src","./assets/freshcart-logo.svg","alt",""],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto"],[1,"nav-item"],[1,"nav-link","active"],[1,"fa-brands","fa-facebook"],[1,"nav-link"],[1,"fa-brands","fa-twitter"],[1,"fa-brands","fa-instagram"],[1,"fa-brands","fa-linkedin"],["routerLink","login","routerLinkActive","active-link",1,"nav-link","cursor-pointer"],["routerLink","register","routerLinkActive","active-link",1,"nav-link","cursor-pointer"]],template:function(n,s){n&1&&(r(0,"nav",0)(1,"div",1)(2,"a",2),a(3,"img",3),o(),r(4,"button",4),a(5,"span",5),o(),r(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),a(10,"i",10),o()(),r(11,"li",8)(12,"a",11),a(13,"i",12),o()(),r(14,"li",8)(15,"a",11),a(16,"i",13),o()(),r(17,"li",8)(18,"a",11),a(19,"i",14),o()(),r(20,"li",8)(21,"a",15),p(22," Login "),o()(),r(23,"li",8)(24,"a",16),p(25," Register "),o()()()()()())},dependencies:[I,E]});let e=t;return e})();var O=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c({type:t,selectors:[["app-footer"]],standalone:!0,features:[m],decls:24,vars:0,consts:[[1,"bg-main-light","py-5"],[1,"container"],[1,"m-0","h4"],[1,"text-muted","small"],[1,"d-flex","align-items-center","gap-3","text-nowrap"],["type","text","placeholder","Email",1,"form-control"],[1,"btn-main"],[1,"pay-details","d-flex","justify-content-between","align-items-center"],[1,"d-flex","align-items-center","gap-2"],[1,"h6","m-0"],["src","./assets/images/amazon-pay.png","width","30px","alt",""],["src","./assets/images/American-Express-Color.png","width","30px","alt",""],["src","./assets/images/paypal.png","width","30px","alt",""],["src","./assets/images/mastercard.webp","width","30px","alt",""],["src","./assets/images/get-google-play.png","width","75px","alt",""],["src","./assets/images/get-apple-store.png","width","75px","alt",""]],template:function(n,s){n&1&&(r(0,"footer",0)(1,"div",1)(2,"h2",2),p(3,"Get The FreshCart App"),o(),r(4,"p",3),p(5," We Will Send You a Link, Open it on Your Phone to download the app "),o(),r(6,"div",4),a(7,"input",5),r(8,"button",6),p(9,"Share App Link"),o()(),a(10,"hr"),r(11,"div",7)(12,"div",8)(13,"h3",9),p(14,"Payment partners"),o(),a(15,"img",10)(16,"img",11)(17,"img",12)(18,"img",13),o(),r(19,"div",8)(20,"h3",9),p(21,"Get Deliveries with FreshCart"),o(),a(22,"img",14)(23,"img",15),o()()()())}});let e=t;return e})();var Re=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c({type:t,selectors:[["app-auth-layout"]],standalone:!0,features:[m],decls:4,vars:0,consts:[[1,"container"]],template:function(n,s){n&1&&(a(0,"app-nav-auth"),r(1,"div",0),a(2,"router-outlet"),o(),a(3,"app-footer"))},dependencies:[Fe,b,O],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}"]});let e=t;return e})();var Te=(()=>{let t=class t{constructor(){this._AuthService=d(Ee),this._CartService=d(Oe),this.countNumber=0}ngOnInit(){this._CartService.getProductsCart().subscribe({next:i=>{console.log("cart items",i),this._CartService.cartNumber.next(i.numOfCartItems)}}),this._CartService.cartNumber.subscribe({next:i=>{this.countNumber=i}})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c({type:t,selectors:[["app-nav-blank"]],standalone:!0,features:[m],decls:44,vars:1,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary","fixed-top"],[1,"container-fluid"],["routerLink","home",1,"navbar-brand"],["src","./assets/freshcart-logo.svg","alt",""],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],["aria-current","page","routerLink","home","routerLinkActive","active-link",1,"nav-link","active"],["aria-current","page","routerLink","product","routerLinkActive","active-link",1,"nav-link","active"],["aria-current","page","routerLink","categories","routerLinkActive","active-link",1,"nav-link","active"],["aria-current","page","routerLink","brands","routerLinkActive","active-link",1,"nav-link","active"],[1,"navbar-nav","ms-auto"],["routerLink","cart","routerLinkActive","active-link",1,"nav-link","active","position-relative"],[1,"fa-solid","fa-cart-shopping","fa-xl"],[1,"badge","bg-success","position-absolute","top-0","start-0"],["routerLink","wishlist","routerLinkActive","active-link",1,"nav-link","active"],[1,"fa-regular","fa-heart"],[1,"nav-link","active"],[1,"fa-brands","fa-facebook"],[1,"nav-link"],[1,"fa-brands","fa-twitter"],[1,"fa-brands","fa-instagram"],[1,"fa-brands","fa-linkedin"],[1,"nav-link","cursor-pointer",3,"click"]],template:function(n,s){n&1&&(r(0,"nav",0)(1,"div",1)(2,"a",2),a(3,"img",3),o(),r(4,"button",4),a(5,"span",5),o(),r(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),p(10,"Home"),o()(),r(11,"li",8)(12,"a",10),p(13,"product"),o()(),r(14,"li",8)(15,"a",11),p(16,"categories"),o()(),r(17,"li",8)(18,"a",12),p(19,"brands"),o()()(),r(20,"ul",13)(21,"li",8)(22,"a",14),a(23,"i",15),r(24,"span",16),p(25),o()()(),r(26,"li",8)(27,"a",17),a(28,"i",18),o()(),r(29,"li",8)(30,"a",19),a(31,"i",20),o()(),r(32,"li",8)(33,"a",21),a(34,"i",22),o()(),r(35,"li",8)(36,"a",21),a(37,"i",23),o()(),r(38,"li",8)(39,"a",21),a(40,"i",24),o()(),r(41,"li",8)(42,"a",25),$("click",function(){return s._AuthService.logOut()}),p(43," SignOut "),o()()()()()()),n&2&&(f(25),oe(s.countNumber))},dependencies:[I,E]});let e=t;return e})();var Pe=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c({type:t,selectors:[["app-blank-layout"]],standalone:!0,features:[m],decls:4,vars:0,consts:[[1,"container-fluid"]],template:function(n,s){n&1&&(a(0,"app-nav-blank"),r(1,"div",0),a(2,"router-outlet"),o(),a(3,"app-footer"))},dependencies:[Te,b,O],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}"]});let e=t;return e})();var je=(e,t)=>{let l=d(w);return typeof localStorage<"u"?localStorage.getItem("userToken")!==null?!0:(l.navigate(["/login"]),!1):!1};var ze=(e,t)=>{let l=d(w);return typeof localStorage<"u"?localStorage.getItem("userToken")!==null?(l.navigate(["/home"]),!1):!0:!1};var He=[{path:"",component:Re,canActivate:[ze],children:[{path:"",redirectTo:"login",pathMatch:"full",title:"Login"},{path:"login",loadComponent:()=>import("./chunk-BO7KU4JI.mjs").then(e=>e.LoginComponent),title:"Login"},{path:"register",loadComponent:()=>import("./chunk-JI3OCLXO.mjs").then(e=>e.RegisterComponent),title:"Register"},{path:"forget",loadComponent:()=>import("./chunk-ZWUT35RB.mjs").then(e=>e.ForgetpasswordComponent),title:"Forget Password"}]},{path:"",component:Pe,canActivate:[je],children:[{path:"",redirectTo:"home",pathMatch:"full",title:"Home"},{path:"home",loadComponent:()=>import("./chunk-JEWGT5WU.mjs").then(e=>e.HomeComponent),title:"Home"},{path:"brands",loadComponent:()=>import("./chunk-QOZZHMXZ.mjs").then(e=>e.BrandsComponent),title:"Brands"},{path:"cart",loadComponent:()=>import("./chunk-ROCTXRBG.mjs").then(e=>e.CartComponent),title:"Cart"},{path:"categories",loadComponent:()=>import("./chunk-7YJAG4HT.mjs").then(e=>e.CategoriesComponent),title:"Categories"},{path:"product",loadComponent:()=>import("./chunk-JTLCAVOE.mjs").then(e=>e.ProductComponent),title:"Product"},{path:"details/:id",loadComponent:()=>import("./chunk-K4WKF4BL.mjs").then(e=>e.DetailsComponent),title:"Product Details"},{path:"categoryDetails/:id",loadComponent:()=>import("./chunk-VDKCK7PO.mjs").then(e=>e.DetailsCategoriesComponent),title:"Category Details"},{path:"wishlist",loadComponent:()=>import("./chunk-CQSJYV7U.mjs").then(e=>e.WishlistComponent),title:"Wishlist"},{path:"allorders",loadComponent:()=>import("./chunk-UTUUTLJJ.mjs").then(e=>e.AllordersComponent),title:"Orders"},{path:"order/:id",loadComponent:()=>import("./chunk-EOLY3A5T.mjs").then(e=>e.OrderComponent),title:"Check Out"}]},{path:"**",loadComponent:()=>import("./chunk-QCBOQGYS.mjs").then(e=>e.NotfoundComponent)}];var Ge=(e,t)=>(localStorage.getItem("userToken")!==null&&(e=e.clone({setHeaders:{token:localStorage.getItem("userToken")}})),t(e));var Ve=(e,t)=>{let l=d(De);return t(e).pipe(H(i=>(console.log("interceptor",i),l.error(i.error.message,"FreshCart"),j(()=>i))))};var Be=(e,t)=>{let l=d(_);return l.show(),t(e).pipe(G(()=>{l.hide()}))};var Ue={providers:[ke(He,Ie(),we({scrollPositionRestoration:"enabled"})),be(),ue(ge(),fe([Ge,Ve,Be])),ye(),Ne(),X(Me)]};var et={providers:[Se()]},qe=pe(Ue,et);var tt=()=>he(_e,qe),En=tt;export{En as a};
