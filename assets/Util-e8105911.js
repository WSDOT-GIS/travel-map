import{fF as g,b as v,fk as p,fp as m,fl as l,g_ as h,bv as w,I as b,fr as A}from"./index-e32c25e6.js";import{s as j,c as k}from"./sphere-8f836488.js";function $(r){return r?{origin:g(r.origin),vector:g(r.vector)}:{origin:v(),vector:v()}}function P(r,t,s=$()){return p(s.origin,r),m(s.vector,t,r),s}function S(r,t,s){return x(r,t,0,1,s)}function x(r,t,s,f,e){const{vector:o,origin:i}=r,n=m(k.get(),t,i),c=l(o,n)/h(o);return w(e,o,b(c,s,f)),A(e,e,r.origin)}new j(()=>$());class E{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function _(r,t){if(!r){t=t||"Assertion";const s=new Error(t).stack;throw new E(`${t} at ${s}`)}}function d(r,t,s,f){let e,o=(s[0]-r[0])/t[0],i=(f[0]-r[0])/t[0];o>i&&(e=o,o=i,i=e);let n=(s[1]-r[1])/t[1],c=(f[1]-r[1])/t[1];if(n>c&&(e=n,n=c,c=e),o>c||n>i)return!1;n>o&&(o=n),c<i&&(i=c);let u=(s[2]-r[2])/t[2],a=(f[2]-r[2])/t[2];return u>a&&(e=u,u=a,a=e),!(o>a||u>i)&&(a<i&&(i=a),!(i<0))}export{P as b,d as i,S as j,_ as s,$ as v};
