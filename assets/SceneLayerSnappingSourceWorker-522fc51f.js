import{de as Rt,eB as z,r as U,bv as w,fr as B,gX as Q,fk as tt,gY as Et,b as N,aN as m,gZ as et,fj as K,af as At,ah as Nt,f as Ft,t as nt,W as Mt,fF as v}from"./index-e32c25e6.js";import{i as ot,v as St,b as xt,j as Bt}from"./Util-e8105911.js";import{s as mt,d as it,_ as D,p as st,T as G,k as F,V as rt,R as x,N as at}from"./sphere-8f836488.js";import{D as ht}from"./QueryEngineResult-784b2b5f.js";import"./plane-3ca25415.js";import{m as jt}from"./edgeProcessing-7ba55499.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quatf64-3363c48e.js";import"./quantizationUtils-ae053a23.js";import"./WhereClause-f50df259.js";import"./executionError-fb3f283a.js";import"./utils-166e05fa.js";import"./generateRendererUtils-81b92043.js";import"./projectionSupport-e7646c74.js";import"./json-48e3ea08.js";import"./utils-489496bc.js";import"./deduplicate-54d2cd94.js";import"./Indices-18a024f1.js";import"./InterleavedLayout-d2a1b131.js";import"./BufferView-38fa4950.js";import"./types-e1c0a5bf.js";import"./VertexAttribute-15d1866a.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";function pt(o){return o?{ray:it(o.ray),c0:o.c0,c1:o.c1}:{ray:it(),c0:0,c1:Number.MAX_VALUE}}new mt(()=>pt());function $(o,t){for(let e=0;e<X.NUM;e++){const n=o[e];if(n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]>=t[3])return!1}return!0}var dt,c;(function(o){o[o.LEFT=0]="LEFT",o[o.RIGHT=1]="RIGHT",o[o.BOTTOM=2]="BOTTOM",o[o.TOP=3]="TOP",o[o.NEAR=4]="NEAR",o[o.FAR=5]="FAR"})(dt||(dt={})),function(o){o[o.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",o[o.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",o[o.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",o[o.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",o[o.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",o[o.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",o[o.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",o[o.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(c||(c={}));c.FAR_BOTTOM_RIGHT,c.NEAR_BOTTOM_RIGHT,c.NEAR_BOTTOM_LEFT,c.FAR_BOTTOM_LEFT,c.NEAR_BOTTOM_LEFT,c.NEAR_BOTTOM_RIGHT,c.NEAR_TOP_RIGHT,c.NEAR_TOP_LEFT,c.FAR_BOTTOM_RIGHT,c.FAR_BOTTOM_LEFT,c.FAR_TOP_LEFT,c.FAR_TOP_RIGHT,c.NEAR_BOTTOM_RIGHT,c.FAR_BOTTOM_RIGHT,c.FAR_TOP_RIGHT,c.NEAR_TOP_RIGHT,c.FAR_BOTTOM_LEFT,c.NEAR_BOTTOM_LEFT,c.NEAR_TOP_LEFT,c.FAR_TOP_LEFT,c.FAR_TOP_LEFT,c.NEAR_TOP_LEFT,c.NEAR_TOP_RIGHT,c.FAR_TOP_RIGHT;var X,ct;(function(o){o[o.NUM=6]="NUM"})(X||(X={})),function(o){o[o.NUM=8]="NUM"}(ct||(ct={}));new mt(pt);class j{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(t,e){this._objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new l,this._objectCount=0,e&&(e.maximumObjectsPerNode!==void 0&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),e.maximumDepth!==void 0&&(this._maximumDepth=e.maximumDepth))}destroy(){this._degenerateObjects.clear(),l.clearPool(),Y[0]=null,M.prune(),S.prune()}add(t,e=t.length){this._objectCount+=e,this._grow(t,e);const n=l.acquire();for(let i=0;i<e;i++){const s=t[i];this._isDegenerate(s)?this._degenerateObjects.add(s):(n.init(this._root),this._add(s,n))}l.release(n)}remove(t,e=null){this._objectCount-=t.length;const n=l.acquire();for(const i of t){const s=U(e)?e:D(this._objectToBoundingSphere(i),vt);P(s[3])?(n.init(this._root),this._remove(i,s,n)):this._degenerateObjects.delete(i)}l.release(n),this._shrink()}update(t,e){if(!P(e[3])&&this._isDegenerate(t))return;const n=zt(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const i=st(t,e);this._forEachNode(this._root,s=>{if(!this._intersectsNode(i,s))return!1;const a=s.node;return a.terminals.forAll(h=>{this._intersectsObject(i,h)&&n(h)}),a.residents!==null&&a.residents.forAll(h=>{this._intersectsObject(i,h)&&n(h)}),!0})}forEachAlongRayWithVerticalOffset(t,e,n,i){const s=st(t,e);this._forEachNode(this._root,a=>{if(!this._intersectsNodeWithOffset(s,a,i))return!1;const h=a.node;return h.terminals.forAll(r=>{this._intersectsObjectWithOffset(s,r,i)&&n(r)}),h.residents!==null&&h.residents.forAll(r=>{this._intersectsObjectWithOffset(s,r,i)&&n(r)}),!0})}forEach(t){this._forEachNode(this._root,e=>{const n=e.node;return n.terminals.forAll(t),n.residents!==null&&n.residents.forAll(t),!0}),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n,i=()=>!0,s=1/0){let a=1/0,h=1/0,r=null;const d=V(t,e),_=u=>{if(--s,!i(u))return;const p=this._objectToBoundingSphere(u);if(!$(n,p))return;const b=A(t,e,F(p)),I=b-p[3],f=b+p[3];I<a&&(a=I,h=f,r=u)};return this._forEachNodeDepthOrdered(this._root,u=>{if(s<=0||!$(n,u.bounds)||(w(g,d,u.halfSize),B(g,g,u.bounds),A(t,e,g)>h))return!1;const p=u.node;return p.terminals.forAll(b=>_(b)),p.residents!==null&&p.residents.forAll(b=>_(b)),!0},t,e),r}forEachInDepthRange(t,e,n,i,s,a,h){let r=-1/0,d=1/0;const _={setRange:f=>{n===j.DepthOrder.FRONT_TO_BACK?(r=Math.max(r,f.near),d=Math.min(d,f.far)):(r=Math.max(r,-f.far),d=Math.min(d,-f.near))}};_.setRange(i);const u=A(e,n,t),p=V(e,n),b=V(e,-n),I=f=>{if(!h(f))return;const E=this._objectToBoundingSphere(f),L=F(E),J=A(e,n,L)-u,gt=J-E[3],bt=J+E[3];gt>d||bt<r||!$(a,E)||s(f,_)};this._forEachNodeDepthOrdered(this._root,f=>{if(!$(a,f.bounds)||(w(g,p,f.halfSize),B(g,g,f.bounds),A(e,n,g)-u>d)||(w(g,b,f.halfSize),B(g,g,f.bounds),A(e,n,g)-u<r))return!1;const E=f.node;return E.terminals.forAll(L=>I(L)),E.residents!==null&&E.residents.forAll(L=>I(L)),!0},e,n)}forEachNode(t){this._forEachNode(this._root,e=>t(e.node,e.bounds,e.halfSize))}forEachNeighbor(t,e){const n=G(e),i=F(e),s=r=>{const d=this._objectToBoundingSphere(r),_=G(d),u=n+_;return!(Q(F(d),i)-u*u<=0)||t(r)};let a=!0;const h=r=>{a&&(a=s(r))};this._forEachNode(this._root,r=>{const d=G(r.bounds),_=n+d;if(Q(F(r.bounds),i)-_*_>0)return!1;const u=r.node;return u.terminals.forAll(h),a&&u.residents!==null&&u.residents.forAll(h),a}),a&&this.forEachDegenerateObject(h)}_intersectsNode(t,e){return C(e.bounds,2*-e.halfSize,T),C(e.bounds,2*e.halfSize,O),ot(t.origin,t.direction,T,O)}_intersectsNodeWithOffset(t,e,n){return C(e.bounds,2*-e.halfSize,T),C(e.bounds,2*e.halfSize,O),n.applyToMinMax(T,O),ot(t.origin,t.direction,T,O)}_intersectsObject(t,e){const n=this._objectToBoundingSphere(e);return!(n[3]>0)||rt(n,t)}_intersectsObjectWithOffset(t,e,n){const i=this._objectToBoundingSphere(e);return!(i[3]>0)||rt(n.applyToBoundingSphere(i),t)}_forEachNode(t,e){let n=l.acquire().init(t);const i=[n];for(;i.length!==0;){if(n=i.pop(),e(n)&&!n.isLeaf())for(let s=0;s<n.node.children.length;s++)n.node.children[s]&&i.push(l.acquire().init(n).advance(s));l.release(n)}}_forEachNodeDepthOrdered(t,e,n,i=j.DepthOrder.FRONT_TO_BACK){let s=l.acquire().init(t);const a=[s];for(Pt(n,i,_t);a.length!==0;){if(s=a.pop(),e(s)&&!s.isLeaf())for(let h=7;h>=0;--h){const r=_t[h];s.node.children[r]&&a.push(l.acquire().init(s).advance(r))}l.release(s)}}_remove(t,e,n){M.clear();const i=n.advanceTo(e,(s,a)=>{M.push(s.node),M.push(a)})?n.node.terminals:n.node.residents;if(i.removeUnordered(t),i.length===0)for(let s=M.length-2;s>=0;s-=2){const a=M.data[s],h=M.data[s+1];if(!this._purge(a,h))break}}_nodeIsEmpty(t){if(t.terminals.length!==0)return!1;if(t.residents!==null)return t.residents.length===0;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}_purge(t,e){return e>=0&&(t.children[e]=null),!!this._nodeIsEmpty(t)&&(t.residents===null&&(t.residents=new z({shrink:!0})),!0)}_add(t,e){e.advanceTo(this._objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const i=l.acquire().init(t);this._add(e.getItemAt(n),i),l.release(i)}}_grow(t,e){if(e!==0&&(lt(t,e,n=>this._objectToBoundingSphere(n),R),P(R[3])&&!this._fitsInsideTree(R)))if(this._nodeIsEmpty(this._root.node))D(R,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const n=this._rootBoundsForRootAsSubNode(R);this._placingRootViolatesMaxDepth(n)?this._rebuildTree(R,n):this._growRootAsSubNode(n),l.release(n)}}_rebuildTree(t,e){tt(q,e.bounds),q[3]=e.halfSize,lt([t,q],2,i=>i,W);const n=l.acquire().init(this._root);this._root.initFrom(null,W,W[3]),this._root.increaseHalfSize(1.25),this._forEachNode(n,i=>(this.add(i.node.terminals.data,i.node.terminals.length),i.node.residents!==null&&this.add(i.node.residents.data,i.node.residents.length),!0)),l.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return this._forEachNode(this._root,i=>(n=Math.max(n,i.depth),n+e<=this._maximumDepth)),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let i=-1/0;const s=this._root.bounds,a=this._root.halfSize;for(let r=0;r<3;r++){const d=s[r]-a-(n[r]-e),_=n[r]+e-(s[r]+a),u=Math.max(0,Math.ceil(d/(2*a))),p=Math.max(0,Math.ceil(_/(2*a)))+1,b=2**Math.ceil(Math.log(u+p)*Math.LOG2E);i=Math.max(i,b),H[r].min=u,H[r].max=p}for(let r=0;r<3;r++){let d=H[r].min,_=H[r].max;const u=(i-(d+_))/2;d+=Math.ceil(u),_+=Math.floor(u);const p=s[r]-a-d*a*2;k[r]=p+(_+d)*a}const h=i*a;return k[3]=h*Ot,l.acquire().initFrom(null,k,h,0)}_growRootAsSubNode(t){const e=this._root.node;tt(R,this._root.bounds),R[3]=this._root.halfSize,this._root.init(t),t.advanceTo(R,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(t===-1)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(this._root.node.terminals.length!==0||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,i=0;for(;i<e.length&&t==null;)n=i++,t=e[n];for(;i<e.length;)if(e[i++])return-1;return n}_isDegenerate(t){return!P(this._objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}}class l{constructor(){this.bounds=x(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n,i=this.depth){return this.node=U(t)?t:l.createEmptyNode(),U(e)&&D(e,this.bounds),this.halfSize=n,this.depth=i,this}increaseHalfSize(t){this.halfSize*=t,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*Ot}advance(t){let e=this.node.children[t];e||(e=l.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=Tt[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(t,e,n=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const i=this._childIndex(t);e&&e(this,i),this.advance(i)}}isLeaf(){return this.node.residents!=null}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new z({shrink:!0}),residents:new z({shrink:!0})}}static acquire(){return l._pool.acquire()}static release(t){l._pool.release(t)}static clearPool(){l._pool.prune()}}function It(o,t){o[0]=Math.min(o[0],t[0]-t[3]),o[1]=Math.min(o[1],t[1]-t[3]),o[2]=Math.min(o[2],t[2]-t[3])}function Lt(o,t){o[0]=Math.max(o[0],t[0]+t[3]),o[1]=Math.max(o[1],t[1]+t[3]),o[2]=Math.max(o[2],t[2]+t[3])}function C(o,t,e){e[0]=o[0]+t,e[1]=o[1]+t,e[2]=o[2]+t}function lt(o,t,e,n){if(t===1){const i=e(o[0]);D(i,n)}else{T[0]=1/0,T[1]=1/0,T[2]=1/0,O[0]=-1/0,O[1]=-1/0,O[2]=-1/0;for(let i=0;i<t;i++){const s=e(o[i]);P(s[3])&&(It(T,s),Lt(O,s))}Et(n,T,O,.5),n[3]=Math.max(O[0]-T[0],O[1]-T[1],O[2]-T[2])/2}}function Pt(o,t,e){if(!S.length)for(let n=0;n<8;++n)S.push({index:0,distance:0});for(let n=0;n<8;++n){const i=Tt[n];S.data[n].index=n,S.data[n].distance=A(o,t,i)}S.sort((n,i)=>n.distance-i.distance);for(let n=0;n<8;++n)e[n]=S.data[n].index}function V(o,t){let e,n=1/0;for(let i=0;i<8;++i){const s=A(o,t,ut[i]);s<n&&(n=s,e=ut[i])}return e}function A(o,t,e){return t*(o[0]*e[0]+o[1]*e[1]+o[2]*e[2])}function P(o){return!isNaN(o)&&o!==-1/0&&o!==1/0&&o>0}l._pool=new Rt(l),function(o){var t;(t=o.DepthOrder||(o.DepthOrder={}))[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(j||(j={}));const Tt=[m(-1,-1,-1),m(1,-1,-1),m(-1,1,-1),m(1,1,-1),m(-1,-1,1),m(1,-1,1),m(-1,1,1),m(1,1,1)],ut=[m(-1,-1,-1),m(-1,-1,1),m(-1,1,-1),m(-1,1,1),m(1,-1,-1),m(1,-1,1),m(1,1,-1),m(1,1,1)],Ot=Math.sqrt(3),Y=[null];function zt(o){return Y[0]=o,Y}const k=x(),g=N(),T=N(),O=N(),M=new z,vt=x(),R=x(),q=x(),W=x(),H=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],S=new z,_t=[0,0,0,0,0,0,0,0],ft=j,$t=1e3;function Ct(o,t,e){const n=x(),i=F(n);return et(i,i,o,.5),et(i,i,t,.5),n[3]=K(i,o),B(i,i,e),n}let Z=class{constructor(){this._idToComponent=new Map,this._components=new ft(o=>o.bounds),this._edges=new ft(o=>o.bounds),this._tmpLineSegment=St(),this._tmpP1=N(),this._tmpP2=N(),this._tmpP3=N(),this.remoteClient=null}async fetchCandidates(o,t){await Promise.resolve(),Ft(t),await this._ensureEdgeLocations(o,t);const e=[];return this._edges.forEachNeighbor(n=>(this._addCandidates(o,n,e),e.length<$t),o.bounds),{result:{candidates:e}}}async _ensureEdgeLocations(o,t){const e=[];if(this._components.forEachNeighbor(s=>{if(nt(s.info)){const{id:a,uid:h}=s;e.push({id:a,uid:h})}return!0},o.bounds),!e.length)return;const n={components:e},i=await this.remoteClient.invoke("fetchAllEdgeLocations",n,Mt(t,{}));for(const s of i.components)this._setFetchEdgeLocations(s)}async add(o){const t=new y(o.id,o.bounds);return this._idToComponent.set(t.id,t),this._components.add([t]),{result:{}}}async remove(o){const t=this._idToComponent.get(o.id);if(t){const e=[];this._edges.forEachNeighbor(n=>(n.component===t&&e.push(n),!0),t.bounds),this._edges.remove(e),this._components.remove([t]),this._idToComponent.delete(t.id)}return{result:{}}}_setFetchEdgeLocations(o){const t=this._idToComponent.get(o.id);if(nt(t)||o.uid!==t.uid)return;const e=jt.createView(o.locations),n=new Array(e.count),i=N(),s=N();for(let r=0;r<e.count;r++){e.position0.getVec(r,i),e.position1.getVec(r,s);const d=Ct(i,s,o.origin),_=new Ht(t,r,d);n[r]=_}this._edges.add(n);const{objectIds:a,origin:h}=o;t.info={locations:e,objectIds:a,origin:h}}_addCandidates(o,t,e){const{info:n}=t.component,{origin:i,objectIds:s}=n,a=n.locations,h=a.position0.getVec(t.index,this._tmpP1),r=a.position1.getVec(t.index,this._tmpP2);B(h,h,i),B(r,r,i);const d=s[a.componentIndex.get(t.index)];this._addEdgeCandidate(o,d,h,r,e),this._addVertexCandidate(o,d,h,e),this._addVertexCandidate(o,d,r,e)}_addEdgeCandidate(o,t,e,n,i){if(!(o.types&ht.EDGE))return;const s=F(o.bounds),a=xt(e,n,this._tmpLineSegment),h=Bt(a,s,this._tmpP3);at(o.bounds,h)&&i.push({type:"edge",objectId:t,target:v(h),distance:K(s,h),start:v(e),end:v(n)})}_addVertexCandidate(o,t,e,n){if(!(o.types&ht.VERTEX))return;const i=F(o.bounds);at(o.bounds,e)&&n.push({type:"vertex",objectId:t,target:v(e),distance:K(i,e)})}};Z=At([Nt("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],Z);const ce=Z;class y{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++y.uid}}y.uid=0;class Ht{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}export{ce as default};
