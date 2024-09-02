import{c as p}from"./chunk-LUY3Z6OP.js";import{t as l}from"./chunk-VGO3SYRC.js";import{$ as n,V as c}from"./chunk-DDNZF7KO.js";var o=class extends Error{};o.prototype.name="InvalidTokenError";function h(r){return decodeURIComponent(atob(r).replace(/(.)/g,(t,s)=>{let e=s.charCodeAt(0).toString(16).toUpperCase();return e.length<2&&(e="0"+e),"%"+e}))}function d(r){let t=r.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return h(t)}catch{return atob(t)}}function u(r,t){if(typeof r!="string")throw new o("Invalid token specified: must be a string");t||(t={});let s=t.header===!0?0:1,e=r.split(".")[s];if(typeof e!="string")throw new o(`Invalid token specified: missing part #${s+1}`);let i;try{i=d(e)}catch(a){throw new o(`Invalid token specified: invalid base64 for part #${s+1} (${a.message})`)}try{return JSON.parse(i)}catch(a){throw new o(`Invalid token specified: invalid json for part #${s+1} (${a.message})`)}}var y=(()=>{let t=class t{constructor(){this._HttpClient=n(l),this._Router=n(p),this.userData=null,this.baseUrl="https://ecommerce.routemisr.com"}setRegisterForm(e){return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signup`,e)}setLoginForm(e){return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signin`,e)}saveUserData(){localStorage.getItem("userToken")!==null&&(this.userData=u(localStorage.getItem("userToken")),console.log(this.userData.id))}logOut(){localStorage.removeItem("userToken"),this.userData=null,this._Router.navigate(["/login"])}setVerifyEmail(e){return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/forgotPasswords`,e)}setVerifyCode(e){return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/verifyResetCode`,e)}setResetPassword(e){return this._HttpClient.put(`${this.baseUrl}/api/v1/auth/resetPassword`,e)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{y as a};