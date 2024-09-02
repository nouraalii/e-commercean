import './polyfills.server.mjs';
import{a as _}from"./chunk-K2P5YX2L.mjs";import{a as v,c as g,d as S,h as b,i as C,j as y,k as x,m as F}from"./chunk-P62YSWON.mjs";import{a as h}from"./chunk-PATWWLDP.mjs";import"./chunk-OLSM6CU6.mjs";import"./chunk-S22GBDN5.mjs";import{$ as d,Gb as r,Nb as f,Pa as u,X as l,hb as c,pb as i,qb as e,rb as m,yb as p}from"./chunk-HXINP7UO.mjs";import"./chunk-VVCT4QZE.mjs";var R=(()=>{let o=class o{constructor(){this._FormBuilder=l(x),this._ActivatedRoute=l(h),this._OrdersService=l(_),this.orderForm=this._FormBuilder.group({details:[null],phone:[null],city:[null]}),this.idCart=""}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:t=>{this.idCart=t.get("id"),console.log(this.idCart)}})}orderSubmit(){console.log(this.orderForm.value),this._OrdersService.checkOut(this.idCart,this.orderForm.value).subscribe({next:t=>{console.log(t),t.status==="success"&&window.open(t.session.url,"_self")}})}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=d({type:o,selectors:[["app-order"]],standalone:!0,features:[f],decls:18,vars:1,consts:[[1,"my-4","bg-main-light","rounded-4","shadow","w-75","mx-auto","p-2"],[1,"text-center","text-main"],[3,"ngSubmit","formGroup"],[1,"my-2"],["for","details"],["id","details","formControlName","details",1,"form-control"],["for","phone"],["id","phone","formControlName","phone","type","tel",1,"form-control"],["for","city"],["id","city","formControlName","city","type","text",1,"form-control"],["type","submit",1,"btn-main"]],template:function(n,a){n&1&&(i(0,"section",0)(1,"h1",1),r(2,"shipping Address"),e(),i(3,"form",2),p("ngSubmit",function(){return a.orderSubmit()}),i(4,"div",3)(5,"label",4),r(6,"Details:"),e(),m(7,"textarea",5),e(),i(8,"div",3)(9,"label",6),r(10,"Phone:"),e(),m(11,"input",7),e(),i(12,"div",3)(13,"label",8),r(14,"City:"),e(),m(15,"input",9),e(),i(16,"button",10),r(17,"Check Out"),e()()()),n&2&&(u(3),c("formGroup",a.orderForm))},dependencies:[F,b,v,g,S,C,y]});let s=o;return s})();export{R as OrderComponent};