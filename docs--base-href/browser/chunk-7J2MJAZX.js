import{a as V}from"./chunk-NFYKLAK5.js";import{a as q,b as f,c as N,d as G,e as h,f as w,h as R,i as A,j as D,m as M}from"./chunk-JTG6TFIY.js";import{c as L}from"./chunk-LUY3Z6OP.js";import"./chunk-CYIXHTS2.js";import{h as T}from"./chunk-VGO3SYRC.js";import{$ as P,Ab as _,Hb as m,Ob as F,Qa as r,Rb as C,ca as b,gb as u,ib as p,ma as v,mb as d,na as x,qb as a,rb as l,sb as g,vb as y,zb as E}from"./chunk-DDNZF7KO.js";var S=(n,o)=>({"is-valid":n,"is-invalid":o});function z(n,o){n&1&&(a(0,"p",10),m(1,"Email is required"),l())}function k(n,o){n&1&&(a(0,"p",10),m(1,"Enter valid email"),l())}function $(n,o){if(n&1&&(a(0,"div",7),u(1,z,2,0,"p",10)(2,k,2,0,"p",10),l()),n&2){let t,i,e=_(2);r(),d(1,(t=e.verifyEmail.get("email"))!=null&&t.getError("required")?1:-1),r(),d(2,(i=e.verifyEmail.get("email"))!=null&&i.getError("email")?2:-1)}}function j(n,o){n&1&&g(0,"i",9)}function I(n,o){if(n&1){let t=y();a(0,"form",3),E("ngSubmit",function(){v(t);let e=_();return x(e.verifyEmailSubmit())}),a(1,"div",4)(2,"label",5),m(3,"email:"),l(),g(4,"input",6),u(5,$,3,2,"div",7),l(),a(6,"button",8),m(7,"Verify Email "),u(8,j,1,0,"i",9),l()()}if(n&2){let t,i,e=_();p("formGroup",e.verifyEmail),r(4),p("ngClass",C(5,S,!((t=e.verifyEmail.get("email"))!=null&&t.errors)&&(((t=e.verifyEmail.get("email"))==null?null:t.touched)||((t=e.verifyEmail.get("email"))==null?null:t.dirty)),((t=e.verifyEmail.get("email"))==null?null:t.errors)&&(((t=e.verifyEmail.get("email"))==null?null:t.touched)||((t=e.verifyEmail.get("email"))==null?null:t.dirty)))),r(),d(5,(i=e.verifyEmail.get("email"))!=null&&i.errors&&((i=e.verifyEmail.get("email"))!=null&&i.touched||(i=e.verifyEmail.get("email"))!=null&&i.dirty)?5:-1),r(),p("disabled",e.verifyEmail.invalid||e.isLoading),r(2),d(8,e.isLoading?8:-1)}}function U(n,o){n&1&&(a(0,"p",10),m(1,"code is required"),l())}function B(n,o){n&1&&(a(0,"p",10),m(1,"Enter valid code"),l())}function H(n,o){if(n&1&&(a(0,"div",7),u(1,U,2,0,"p",10)(2,B,2,0,"p",10),l()),n&2){let t,i,e=_(2);r(),d(1,(t=e.verifyCode.get("resetCode"))!=null&&t.getError("required")?1:-1),r(),d(2,(i=e.verifyCode.get("resetCode"))!=null&&i.getError("pattern")?2:-1)}}function J(n,o){n&1&&g(0,"i",9)}function K(n,o){if(n&1){let t=y();a(0,"form",3),E("ngSubmit",function(){v(t);let e=_();return x(e.verifyCodeSubmit())}),a(1,"div",4)(2,"label",11),m(3,"code:"),l(),g(4,"input",12),u(5,H,3,2,"div",7),l(),a(6,"button",8),m(7,"Verify Code "),u(8,J,1,0,"i",9),l()()}if(n&2){let t,i,e=_();p("formGroup",e.verifyCode),r(4),p("ngClass",C(5,S,!((t=e.verifyCode.get("resetCode"))!=null&&t.errors)&&(((t=e.verifyCode.get("resetCode"))==null?null:t.touched)||((t=e.verifyCode.get("resetCode"))==null?null:t.dirty)),((t=e.verifyCode.get("resetCode"))==null?null:t.errors)&&(((t=e.verifyCode.get("resetCode"))==null?null:t.touched)||((t=e.verifyCode.get("resetCode"))==null?null:t.dirty)))),r(),d(5,(i=e.verifyCode.get("resetCode"))!=null&&i.errors&&((i=e.verifyCode.get("resetCode"))!=null&&i.touched||(i=e.verifyCode.get("resetCode"))!=null&&i.dirty)?5:-1),r(),p("disabled",e.verifyCode.invalid||e.isLoading),r(2),d(8,e.isLoading?8:-1)}}function O(n,o){n&1&&(a(0,"p",10),m(1,"Email is required"),l())}function Q(n,o){n&1&&(a(0,"p",10),m(1,"Enter valid email"),l())}function W(n,o){if(n&1&&(a(0,"div",7),u(1,O,2,0,"p",10)(2,Q,2,0,"p",10),l()),n&2){let t,i,e=_(2);r(),d(1,(t=e.resetPassword.get("email"))!=null&&t.getError("required")?1:-1),r(),d(2,(i=e.resetPassword.get("email"))!=null&&i.getError("email")?2:-1)}}function X(n,o){n&1&&(a(0,"p",10),m(1,"password is required"),l())}function Y(n,o){n&1&&(a(0,"p",10),m(1,"Enter valid password"),l())}function Z(n,o){if(n&1&&(a(0,"div",7),u(1,X,2,0,"p",10)(2,Y,2,0,"p",10),l()),n&2){let t,i,e=_(2);r(),d(1,(t=e.resetPassword.get("newPassword"))!=null&&t.getError("required")?1:-1),r(),d(2,(i=e.resetPassword.get("newPassword"))!=null&&i.getError("pattern")?2:-1)}}function ee(n,o){n&1&&g(0,"i",9)}function te(n,o){if(n&1){let t=y();a(0,"form",13),E("ngSubmit",function(){v(t);let e=_();return x(e.ResetPassSubmit())}),a(1,"div",4)(2,"label",5),m(3,"email:"),l(),g(4,"input",6),u(5,W,3,2,"div",7),l(),a(6,"div",14)(7,"label",15),m(8,"New Password:"),l(),g(9,"input",16),u(10,Z,3,2,"div",7),l(),a(11,"button",8),m(12,"Reset password "),u(13,ee,1,0,"i",9),l()()}if(n&2){let t,i,e,c,s=_();p("formGroup",s.resetPassword),r(4),p("ngClass",C(7,S,!((t=s.resetPassword.get("email"))!=null&&t.errors)&&(((t=s.resetPassword.get("email"))==null?null:t.touched)||((t=s.resetPassword.get("email"))==null?null:t.dirty)),((t=s.resetPassword.get("email"))==null?null:t.errors)&&(((t=s.resetPassword.get("email"))==null?null:t.touched)||((t=s.resetPassword.get("email"))==null?null:t.dirty)))),r(),d(5,(i=s.resetPassword.get("email"))!=null&&i.errors&&((i=s.resetPassword.get("email"))!=null&&i.touched||(i=s.resetPassword.get("email"))!=null&&i.dirty)?5:-1),r(4),p("ngClass",C(10,S,!((e=s.resetPassword.get("newPassword"))!=null&&e.errors)&&(((e=s.resetPassword.get("newPassword"))==null?null:e.touched)||((e=s.resetPassword.get("newPassword"))==null?null:e.dirty)),((e=s.resetPassword.get("newPassword"))==null?null:e.errors)&&(((e=s.resetPassword.get("newPassword"))==null?null:e.touched)||((e=s.resetPassword.get("newPassword"))==null?null:e.dirty)))),r(),d(10,(c=s.resetPassword.get("newPassword"))!=null&&c.errors&&((c=s.resetPassword.get("newPassword"))!=null&&c.touched||(c=s.resetPassword.get("newPassword"))!=null&&c.dirty)?10:-1),r(),p("disabled",s.resetPassword.invalid||s.isLoading),r(2),d(13,s.isLoading?13:-1)}}var me=(()=>{let o=class o{constructor(){this._AuthService=P(V),this._Router=P(L),this.step=1,this.isLoading=!1,this.verifyEmail=new h({email:new w(null,[f.required,f.email])}),this.verifyCode=new h({resetCode:new w(null,[f.required,f.pattern(/^\w{6}$/)])}),this.resetPassword=new h({email:new w(null,[f.required,f.email]),newPassword:new w(null,[f.required,f.pattern(/^\w{6,}$/)])})}verifyEmailSubmit(){this.isLoading=!0,this._AuthService.setVerifyEmail(this.verifyEmail.value).subscribe({next:i=>{console.log(i),i.statusMsg=="success"&&(this.step=2),this.isLoading=!1},error:i=>{console.log(i),this.isLoading=!1}})}verifyCodeSubmit(){this.isLoading=!0,this._AuthService.setVerifyCode(this.verifyCode.value).subscribe({next:i=>{console.log(i),i.status=="Success"&&(this.step=3),this.isLoading=!1},error:i=>{console.log(i),this.isLoading=!1}})}ResetPassSubmit(){this.isLoading=!0,this._AuthService.setResetPassword(this.resetPassword.value).subscribe({next:i=>{console.log(i),localStorage.setItem("userToken",i.token),this._AuthService.saveUserData(),this._Router.navigate(["/home"]),this.isLoading=!1},error:i=>{console.log(i),this.isLoading=!1}})}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=b({type:o,selectors:[["app-forgetpassword"]],standalone:!0,features:[F],decls:6,vars:1,consts:[[1,"my-5"],[1,"text-main","text-center","my-4"],[1,"bg-main-light","rounded-4","p-3","shadow",3,"formGroup"],[1,"bg-main-light","rounded-4","p-3","shadow",3,"ngSubmit","formGroup"],[1,"my-2","py-3"],["for","email",1,"fw-bold","text-capitalize"],["type","email","id","email","formControlName","email",1,"form-control",3,"ngClass"],[1,"text-danger","fw-bold","mt-2"],[1,"btn-main",3,"disabled"],[1,"fas","fa-spin","fa-spinner"],[1,"m-0"],["for","resetCode",1,"fw-bold","text-capitalize"],["type","text","id","resetCode","formControlName","resetCode",1,"form-control",3,"ngClass"],[1,"bg-main-light","rounded-4","p-3","shadow","my-2",3,"ngSubmit","formGroup"],[1,"my-2"],["for","newPassword",1,"fw-bold","text-capitalize"],["type","password","id","newPassword","formControlName","newPassword",1,"form-control",3,"ngClass"]],template:function(e,c){e&1&&(a(0,"section",0)(1,"h1",1),m(2,"Forget Password"),l(),u(3,I,9,8,"form",2)(4,K,9,8)(5,te,14,13),l()),e&2&&(r(3),d(3,c.step==1?3:c.step==2?4:c.step==3?5:-1))},dependencies:[M,R,q,N,G,A,D,T]});let n=o;return n})();export{me as ForgetpasswordComponent};
