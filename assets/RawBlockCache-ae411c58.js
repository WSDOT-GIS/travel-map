import{r as W,R as J}from"./index-e32c25e6.js";import{J as L,C as P,o as q}from"./rasterProjectionHelper-ca95fb77.js";class F{constructor(n=15e3,e=5e3){this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=n,this._interval=Math.min(n,e)}decreaseRefCount(n,e){const t=n+"/"+e,r=this._cachedBlocks;if(r.has(t)){const o=r.get(t);return o.refCount--,o.refCount<=0&&(r.delete(t),o.controller&&o.controller.abort()),o.refCount}return 0}getBlock(n,e){const t=n+"/"+e,r=this._cachedBlocks;if(r.has(t)){const o=r.get(t);return o.ts=Date.now(),o.refCount++,r.delete(t),r.set(t,o),o.block}return null}putBlock(n,e,t,r){const o=this._cachedBlocks,s=n+"/"+e;if(o.has(s)){const i=o.get(s);i.ts=Date.now(),i.refCount++}else o.set(s,{block:t,ts:Date.now(),refCount:1,controller:r});this._trim(),this._updateTimer()}deleteBlock(n,e){const t=this._cachedBlocks,r=n+"/"+e;t.has(r)&&t.delete(r)}updateMaxSize(n){this._size=n,this._trim()}empty(){this._cachedBlocks.clear(),this._clearTimer()}getCurrentSize(){return this._cachedBlocks.size}_updateTimer(){if(this._timer!=null)return;const n=this._cachedBlocks;this._timer=setInterval(()=>{const e=Array.from(n),t=Date.now();for(let r=0;r<e.length&&e[r][1].ts<=t-this._duration;r++)n.delete(e[r][0]);n.size===0&&this._clearTimer()},this._interval)}_trim(){const n=this._cachedBlocks;if(this._size===-1||this._size>=n.size)return;const e=Array.from(n);for(let t=0;t<e.length-this._size;t++)n.delete(e[t][0])}_clearTimer(){this._timer!=null&&(clearInterval(this._timer),this._timer=null)}}const f=new Map,d=new F;function O(l,n){return n==null?l:`${l}?sliceId=${n}`}function Q(l,n){const e={extent:null,rasterInfo:n,cache:new Map},t=f.get(l);return t?(t.push(e),t.length-1):(f.set(l,[e]),0)}function U(l,n){const e=f.get(l);e&&(e[n]=null,e.some(t=>t!=null)||f.delete(l))}function V(l,n,e){var s,i;const t=f.get(l);if(!t)return n==null?d.decreaseRefCount(l,e):0;if(n==null||t[n]==null)return d.decreaseRefCount(l,e);const r=(s=t[n])==null?void 0:s.cache,o=r==null?void 0:r.get(e);if(r&&o){if(o.refCount--,o.refCount===0){r.delete(e);for(let c=0;c<t.length;c++)(i=t[c])==null||i.cache.delete(e);o.controller&&o.controller.abort()}return o.refCount}return 0}function X(l,n,e){var o,s,i;const t=f.get(l);if(!t)return n==null?d.getBlock(l,e):null;if(n==null||t[n]==null){for(let c=0;c<t.length;c++){const a=(o=t[c])==null?void 0:o.cache.get(e);if(a)return a.refCount++,a.block}return d.getBlock(l,e)}const r=(s=t[n])==null?void 0:s.cache.get(e);if(r)return r.refCount++,r.block;for(let c=0;c<t.length;c++){if(c===n||!t[c])continue;const a=(i=t[c])==null?void 0:i.cache,m=a==null?void 0:a.get(e);if(a&&m)return m.refCount++,a.set(e,m),m.block}return null}function Y(l,n,e,t,r=null){var i;const o=f.get(l);if(!o)return void(n==null&&d.putBlock(l,e,t,r));if(n==null||o[n]==null)return void d.putBlock(l,e,t,r);const s={refCount:1,block:t,isResolved:!1,isRejected:!1,controller:r};t.then(()=>s.isResolved=!0).catch(()=>s.isRejected=!0),(i=o[n])==null||i.cache.set(e,s)}function Z(l,n,e){var r;const t=f.get(l);t?n!=null&&t[n]!=null?(r=t[n])==null||r.cache.delete(e):d.deleteBlock(l,e):n==null&&d.deleteBlock(l,e)}function G(l,n){const e=f.get(l);return e?e[n]??null:null}function ee(l,n,e,t,r,o,s=null){const i=G(l,n);if(!i)return;const c=i.extent,{cache:a,rasterInfo:m}=i;if(c&&c.xmin===e.xmin&&c.xmax===e.xmax&&c.ymin===e.ymin&&c.ymax===e.ymax)return;t=t??0;const M=e.clone().normalize(),{spatialReference:R,transform:v}=m,w=new Set;for(let g=0;g<M.length;g++){const h=M[g];if(h.xmax-h.xmin<=t||h.ymax-h.ymin<=t)continue;let u=L(h,R,s);W(v)&&(u=v.inverseTransform(u));const I=new J({x:t,y:t,spatialReference:h.spatialReference});if(r==null&&!(r=P(I,R,h,s)))return;const{pyramidLevel:p,pyramidResolution:_,excessiveReading:T}=q(r,m,o||"closest");if(T)return;const{storageInfo:x}=m,{origin:b}=x,k={x:Math.max(0,Math.floor((u.xmin-b.x)/_.x)),y:Math.max(0,Math.floor((b.y-u.ymax)/_.y))},j=Math.ceil((u.xmax-u.xmin)/_.x-.1),D=Math.ceil((u.ymax-u.ymin)/_.y-.1),z=p>0?x.pyramidBlockWidth:x.blockWidth,$=p>0?x.pyramidBlockHeight:x.blockHeight,y=1,H=Math.max(0,Math.floor(k.x/z)-y),S=Math.max(0,Math.floor(k.y/$)-y),A=Math.floor((k.x+j-1)/z)+y,E=Math.floor((k.y+D-1)/$)+y;for(let B=S;B<=E;B++)for(let C=H;C<=A;C++)w.add(`${p}/${B}/${C}`)}a.forEach((g,h)=>{if(!w.has(h)){const u=a.get(h);(u==null||u.isResolved||u.isRejected)&&a.delete(h)}}),i.extent={xmin:e.xmin,ymin:e.ymin,xmax:e.xmax,ymax:e.ymax}}export{O as a,Z as d,U as f,ee as g,Y as h,V as m,Q as u,X as x};
