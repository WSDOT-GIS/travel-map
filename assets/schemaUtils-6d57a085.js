import{Q as oe,w as K,aD as W,s as d,cu as se,r as x,W as Se,cv as Te,q as P,aS as Fe,u as ie,cw as ue,t as we,cq as Ve,cs as Ee}from"./index-e32c25e6.js";import{L as D,E as V,S as g,V as Ie}from"./color-c539f19f.js";import{c as ze}from"./utils-da75a91a.js";import{l as Oe}from"./visualVariablesUtils-404edd17.js";import{f as E,_ as pe,A as $e}from"./MaterialKey-ca906b04.js";import"./ExpandedCIM-ce5e8e78.js";import{e as ce}from"./util-387f818e.js";function fe(e){if(!e)return D.NONE;let t=0;for(const r of e)if(r.type==="size"){const s=Oe(r);t|=s,r.target==="outline"&&(t|=s<<4)}else r.type==="color"?t|=D.COLOR:r.type==="opacity"?t|=D.OPACITY:r.type==="rotation"&&(t|=D.ROTATION);return t}function I(e){var t;return e.type==="line-marker"?{type:"line-marker",color:(t=e.color)==null?void 0:t.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function z(e){return $e(e)}function b(e,t,r=!1){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return Me(e,t,r);case"simple-marker":case"picture-marker":return Re(e,t,r);case"simple-line":return Ne(e,t,r);case"text":return Be(e,t,r);case"label":return Le(e,t,r);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return{...I(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}function Le(e,t,r){const s=e.toJSON(),i=E(V.LABEL,{...t,placement:s.labelPlacement});return{materialKey:r?z(i):i,hash:e.hash(),...s,labelPlacement:s.labelPlacement}}function Me(e,t,r){const s=E(V.FILL,t),i=r?z(s):s,n=e.clone(),l=n.outline,o=pe(t.symbologyType);o||(n.outline=null);const u={materialKey:i,hash:n.hash(),...I(n)};if(o)return u;const a=[];if(a.push(u),l){const p=E(V.LINE,{...t,isOutline:!0}),c={materialKey:r?z(p):p,hash:l.hash(),...I(l)};a.push(c)}return{type:"composite-symbol",layers:a,hash:a.reduce((p,c)=>c.hash+p,"")}}function Ne(e,t,r){const s=pe(t.symbologyType)?g.DEFAULT:t.symbologyType,i=E(V.LINE,{...t,symbologyType:s}),n=r?z(i):i,l=e.clone(),o=l.marker;l.marker=null;const u=[];if(u.push({materialKey:n,hash:l.hash(),...I(l)}),o){const a=E(V.MARKER,t),p=r?z(a):a;o.color=o.color??l.color,u.push({materialKey:p,hash:o.hash(),lineWidth:l.width,...I(o)})}return{type:"composite-symbol",layers:u,hash:u.reduce((a,p)=>p.hash+a,"")}}function Re(e,t,r){const s=E(V.MARKER,t),i=r?z(s):s,n=I(e);return{materialKey:i,hash:e.hash(),...n,angle:e.angle,maxVVSize:t.maxVVSize}}function Be(e,t,r){const s=E(V.TEXT,t),i=r?z(s):s,n=I(e);return{materialKey:i,hash:e.hash(),...n,angle:e.angle,maxVVSize:t.maxVVSize}}const ct=Object.freeze(Object.defineProperty({__proto__:null,createSymbolSchema:b},Symbol.toStringTag,{value:"Module"}));function ke(e,t){if(!("visualVariables"in e)||!e.hasVisualVariables("size"))return 0;const r=e.getVisualVariablesForType("size");if(!r[0])return 0;const s=r[0];if(t&&s.field==="cluster_count"&&t.type==="cluster")return t.clusterMaxSize;if(s.target==="outline")return 0;if(s.transformationType==="stops")return s.stops.map(i=>i.size).reduce(U,0);if(s.transformationType==="clamped-linear"){let i=-1/0,n=-1/0;return i=typeof s.maxSize=="number"?s.maxSize:s.maxSize.stops.map(l=>l.size).reduce(U,0),n=typeof s.minSize=="number"?s.minSize:s.minSize.stops.map(l=>l.size).reduce(U,0),Math.max(i,n)}return s.transformationType==="real-world-size"?30:void 0}function U(e,t){return Math.max(e,t)}const _=8,de=_-2,J=oe.getLogger("esri.views.2d.layers.features.support.rendererUtils"),ft=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const t=e.clone(),r=t.visualVariables.map(s=>ye(s)?me(s):s);return t.visualVariables=r,t};function Ae(e){return e.map(t=>ye(t)?me(t.clone()):t)}function ye(e){return(e.type==="size"||e.type==="color"||e.type==="opacity")&&e.stops!=null}function me(e){return e.stops=Pe(e.type,e.stops??[]),e}function L(e,t,r){return(1-r)*e+r*t}function Ce(e,t){const[r,...s]=t,i=s.pop(),n=s[0].value,l=s[s.length-1].value,o=(l-n)/de,u=[];for(let a=n;a<l;a+=o){let p=0;for(;a>=s[p].value;)p++;const c=s[p],f=t[p-1],M=a-f.value,F=c.value===f.value?1:M/(c.value-f.value);if(e==="color"){const h=s[p],v=t[p-1],y=h.color.clone();y.r=L(v.color.r,y.r,F),y.g=L(v.color.g,y.g,F),y.b=L(v.color.b,y.b,F),y.a=L(v.color.a,y.a,F),u.push({value:a,color:y,label:h.label})}else if(e==="size"){const h=s[p],v=t[p-1],y=se(h.size),S=L(se(v.size),y,F);u.push({value:a,size:S,label:h.label})}else{const h=s[p],v=L(t[p-1].opacity,h.opacity,F);u.push({value:a,opacity:v,label:h.label})}}return[r,...u,i]}function De(e){const[t,...r]=e,s=r.pop();for(;r.length>de;){let i=0,n=0;for(let l=1;l<r.length;l++){const o=r[l-1],u=r[l],a=Math.abs(u.value-o.value);a>n&&(n=a,i=l)}r.splice(i,1)}return[t,...r,s]}function Pe(e,t){return t.length<=_?t:(J.warn(`Found ${t.length} Visual Variable stops, but MapView only supports ${_}. Displayed stops will be simplified.`),t.length>2*_?Ce(e,t):De(t))}function Q(){if(K("heatmap-force-raster"))return"raster";const{supportsTextureFloat:e,supportsTextureHalfFloat:t,supportsColorBufferFloat:r,supportsColorBufferFloatBlend:s,supportsColorBufferHalfFloat:i}=W("2d");return e&&r&&s||t&&i?"symbol":K("heatmap-allow-raster-fallback")?"raster":"none"}function dt(e){if(!e)return!0;switch(e.type){case"dot-density":if(!W("2d").supportsTextureFloat)return J.error(new d("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1;break;case"heatmap":{const t=Q();if(t==="none"||t==="raster"&&!K("heatmap-force-raster")){const r=W("2d"),s=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter(i=>!r[i]).join(", ");if(t==="none")return J.errorOnce(new d("webgl-missing-extension",`Missing WebGL${r.type} requirements for Heatmap: ${s}`)),!1;t==="raster"&&J.warnOnce(`Missing WebGL${r.type} requirements for accelerated Heatmap: ${s}. Feature support may be limited.`)}break}}return!0}const O=oe.getLogger("esri.views.2d.layers.features.schemaUtils"),m="ValidationError";function j(e,t){let r=0,s=0,i=g.DEFAULT;if(x(e)){if(s=ke(e,t),"visualVariables"in e&&(r=fe(e.visualVariables||[]),e.type==="dot-density"&&(i=g.DOT_DENSITY)),e.type==="heatmap"&&(i=g.HEATMAP),e.type==="dictionary")return{maxVVSize:s,vvFlags:r,symbologyType:g.DEFAULT};if(e.type==="pie-chart")return{maxVVSize:s,vvFlags:r,symbologyType:g.PIE_CHART};if(i!==g.DOT_DENSITY&&i!==g.HEATMAP){const n=e.getSymbols();"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&n.push(e.backgroundFillSymbol);let l=!0,o=!0;for(const u of n)if(u.type==="cim"&&(o=!1),u.type==="simple-fill"||u.type==="picture-fill"){const a=u.outline,p=a&&a.style!=="none"&&a.style!=="solid",c=u.type==="simple-fill"&&u.style!=="none"&&u.style!=="solid";p&&(l=!1),(u.type==="picture-fill"||c||p)&&(o=!1)}l?i=o?g.OUTLINE_FILL_SIMPLE:g.OUTLINE_FILL:o&&(i=g.SIMPLE)}}return{vvFlags:r,maxVVSize:s,symbologyType:i}}let ne=null;function yt(e){if(K("esri-2d-update-debug")){const t=le(e,!0);console.debug("Created new schema",t),console.debug("Schema diff",Te(ne,t)),ne=t}return le(e)}function le(e,t=!1){var r,s;try{const i=Ue(e,t),n=Ge(e),l={};i.map(a=>_e(l,e,a));const o=x(e.subtypeCode)?`${e.subtypeField} = ${e.subtypeCode}`:null;return{source:{definitionExpression:P(Fe(e.definitionExpression,o)),fields:e.fields.map(a=>a.toJSON()),gdbVersion:e.gdbVersion,historicMoment:(r=e.historicMoment)==null?void 0:r.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:(s=e.timeExtent)==null?void 0:s.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:i,tileRenderer:n,targets:l}}catch(i){if(i.fieldName===m)return O.error(i),null;throw i}}function _e(e,t,r){switch(r.target){case"feature":return void H(e,q(t),r);case"aggregate":{if(!("featureReduction"in t))return;const s=t.featureReduction;switch(s==null?void 0:s.type){case"selection":throw new d(m,"Mapview does not support `selection` reduction type",s);case"binning":return H(e,q(t),r),void Je(e,s,t.fields.map(i=>i.toJSON()),r);case"cluster":return H(e,q(t),r),void Ke(e,s,t.fields.map(i=>i.toJSON()),r)}}}}function X(e,t){var r,s;for(const i in t){const n=t[i];if(n.target!==e.name)continue;const l=e.attributes[i];if(l!=null&&l.context){const o=l.context;o.mesh=o.mesh||((r=n.context)==null?void 0:r.mesh),o.storage=o.storage||((s=n.context)==null?void 0:s.storage)}else e.attributes[i]=n}return e}function q(e){var t,r,s;return[((t=P(e.filter))==null?void 0:t.toJSON())??null,((s=P((r=P(e.featureEffect))==null?void 0:r.filter))==null?void 0:s.toJSON())??null]}function H(e,t,r){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),X(e.feature,r.attributes.fields),e}function ge(e,t){const{onStatisticExpression:r,onStatisticField:s,statisticType:i}=e;switch(i){case"min":case"max":case"avg":case"avg_angle":case"sum":case"count":return"esriFieldTypeDouble";case"mode":{if(r){const{returnType:l}=r;return l?l==="string"?"esriFieldTypeString":"esriFieldTypeDouble":(O.error(new d(m,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}const n=t.find(l=>l.name===s);return n?n.type:(O.error(new d(m,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}}}function Je(e,t,r,s){return e.aggregate||(e.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:t.fixedBinLevel,fields:(t.fields??[]).map(i=>({...i.toJSON(),type:ge(i,r)}))},attributes:{}}),X(e.aggregate,s.attributes.fields),e}function Ke(e,t,r,s){var i;return e.aggregate||(e.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:ie(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(ie(t.clusterMaxSize)/64),fields:(i=t.fields??[])==null?void 0:i.map(n=>({...n.toJSON(),type:ge(n,r)}))}}),X(e.aggregate,s.attributes.fields),e}function T(e,t){return t.field?w(e,{...t,type:"field",field:t.field}):t.valueExpression?w(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:void 0,fieldIndex:void 0}}function w(e,t){switch(t.type){case"expression":{const r=t.valueExpression;if(!e.fields[r]){const s=e.indexCount++;e.fields[r]={...t,name:r,fieldIndex:s}}return{fieldIndex:e.fields[r].fieldIndex}}case"label-expression":{const r=JSON.stringify(t.label);if(!e.fields[r]){const s=e.indexCount++;e.fields[r]={...t,name:r,fieldIndex:s}}return{fieldIndex:e.fields[r].fieldIndex}}case"field":{const r=t.field;return t.target==="aggregate"&&e.fields[r]||(e.fields[r]={...t,name:r}),{field:r}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function Ue(e,t=!1){const r=new Array;let s=0;return r.push(He(e,s++,t)),r}function G(e,t,r,s,i,n=!1){const l=w(e,{type:"label-expression",target:r,context:{mesh:!0},resultType:"string",label:{labelExpression:t.labelExpression,labelExpressionInfo:t.labelExpressionInfo?{expression:t.labelExpressionInfo.expression}:null,symbol:!!t.symbol,where:t.where}}),{fieldIndex:o}=l;return{...b(t,i,n),fieldIndex:o,target:r,index:s}}function qe(e,t,r){var p;const s="featureReduction"in t&&t.featureReduction;if(!s)return{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};const i="aggregate",n=[];let l=null,o=ce(t.geometryType),u=[],a=null;if(s)switch(s.type){case"selection":return O.error(new d(m,"Mapview does not support `selection` reduction type",s)),{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};case"cluster":case"binning":if(n.push(...s.fields??[]),s.type==="cluster"?o="esriGeometryPoint":s.type==="binning"&&(o="esriGeometryPolygon"),s.renderer&&!((p=s.renderer.authoringInfo)!=null&&p.isAutoGenerated)){if(s.type==="cluster"){const{renderer:f}=Ve(s.renderer,s,null);a=f}else a=s.renderer;const c=j(s.renderer,s);l=Y(e,i,s.renderer,c,r),u=s&&s.labelsVisible&&s.labelingInfo||[]}else if(s.type==="cluster"){if(a=Ee(n,t.renderer,s,null,!0),s.symbol){const c=j(a,s);l={type:"simple",symbol:b(s.symbol,c,r),symbologyType:c.symbologyType}}u=s&&s.labelsVisible&&s.labelingInfo||[]}}return je(e,n),{labels:ue(u,s.type==="binning"?"esriGeometryPolygon":o),matcher:l,fields:n,rendererOverride:a}}function He(e,t,r=!1){var y;const s={indexCount:0,fields:{}},i="featureReduction"in e?e.featureReduction??void 0:void 0,n=i?"aggregate":"feature";if("sublayers"in e){const S={type:"subtype",subtypeField:e.subtypeField,renderers:{},symbologyType:g.DEFAULT},A={type:"subtype",mapping:{},target:"feature",subtypeField:e.subtypeField},C={type:"subtype",classes:{}},be={type:"symbol",target:"feature",aggregateFields:[],attributes:s,storage:A,mesh:{matcher:S,aggregateMatcher:null,labels:C,sortKey:null}},Z=new Set;let he=0;for(const{renderer:$,subtypeCode:N,labelingInfo:xe,labelsVisible:ve}of e.sublayers){let ee=0;"visualVariables"in $&&$.visualVariables&&($.visualVariables.some(k=>k.type!=="rotation")&&O.warnOnce("SubtypeGroupLayer currently only supports rotation visualVariables. All other visualVariable types will be ignored."),ee=fe($.visualVariables.filter(k=>k.type!=="size")));const te={symbologyType:g.DEFAULT,vvFlags:ee,maxVVSize:0},R=Y(s,n,$,te,r),B=ae(s,n,$),re=ve&&xe;if(R.type==="dictionary")throw new d(m,"Dictionary renderer is not supported in subtype layers");if(R.type==="subtype")throw new d(m,"Nested subtype renderers is not supported");if(x(B)&&B.type==="subtype")throw new d(m,"Nested subtype storage is not supported");if(x(B)&&x(B.attributeMapping))throw new d(m,"Non-visual-variable attributes are not supported in subtype layers");if(R.type==="heatmap")throw new d(m,"Heatmaps are not supported in subtype layers");if(R.type==="pie-chart")throw new d(m,"Pie-charts are not supported in subtype layers");if(Z.has(N))throw new d(m,"Subtype codes for sublayers must be unique");Z.add(N),S.renderers[N]=R,A.mapping[N]=B,re&&(C.classes[N]=re.map(k=>G(s,k,"feature",he++,te,r)))}return be}if(((y=e.renderer)==null?void 0:y.type)==="heatmap"&&Q()==="raster"){const{radius:S,fieldOffset:A,field:C}=e.renderer;return{type:"heatmap",aggregateFields:[],attributes:s,target:n,storage:null,mesh:{radius:S,fieldOffset:A,field:T(s,{target:n,field:C,resultType:"numeric"}).field}}}const l=qe(s,e,r),o=ce(e.geometryType),u=l.rendererOverride??e.renderer,a=j(u,i),p=Y(s,n,u,a,r),c=ae(s,n,u),f=We(s,e.orderBy,e.renderer,i),M=e.labelsVisible&&e.labelingInfo||[],F=ue(M,o);let h=0;const v=[...F.map(S=>G(s,S,"feature",h++,a,r)),...l.labels.map(S=>G(s,S,"aggregate",h++,a,r))];return{type:"symbol",target:n,attributes:s,aggregateFields:l.fields,storage:c,mesh:{matcher:p,labels:{type:"simple",classes:v},aggregateMatcher:l.matcher,sortKey:f}}}function Ge(e){var t;return((t=e.renderer)==null?void 0:t.type)==="heatmap"&&Q()==="raster"?{type:"heatmap"}:{type:"symbol"}}function We(e,t,r,s){if(x(s))return null;if(x(t)&&t.length){t.length>1&&O.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${t.length}. All but the first will be discarded`);const i=t[0],n=i.order==="ascending"?"asc":"desc";return i.field?{field:i.field,order:n}:i.valueExpression?{fieldIndex:w(e,{type:"expression",target:"feature",valueExpression:i.valueExpression,resultType:"numeric"}).fieldIndex,order:n}:(O.error(new d(m,"Expected to find a field or valueExpression for OrderByInfo",i)),null)}return x(r)&&r.type==="unique-value"&&r.orderByClassesEnabled?{byRenderer:!0,order:"asc"}:null}function je(e,t){const r={mesh:!0,storage:!0};for(const s of t){const{name:i,onStatisticField:n,onStatisticExpression:l,statisticType:o}=s;let u,a;const p="numeric",c="feature";l?a=w(e,{type:"expression",target:c,valueExpression:l.expression,resultType:p}).fieldIndex:u=w(e,{type:"field",target:c,field:n,resultType:p}).field,w(e,{type:"statistic",target:"aggregate",name:i,context:r,inField:u,inFieldIndex:a,statisticType:o})}}function ae(e,t,r){let s;switch(r.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":s={visualVariables:!0,attributes:null};break;default:s=ze(r).getStorageSpec(r)}return Ye(e,t,s,r)}function Ye(e,t,r,s){if(we(r))return null;const{visualVariables:i,attributes:n}=r;let l=null;i&&"visualVariables"in s&&(l=Qe(e,t,s.visualVariables));const o=x(l)?4:0;let u=null;return x(n)&&(u=n.map((a,p)=>{const{field:c,fieldIndex:f}=T(e,{valueExpression:a.valueExpression,field:a.field,resultType:"numeric",target:t});return{binding:p+o,field:c,fieldIndex:f}})),{type:"simple",target:t,attributeMapping:u,vvMapping:l}}function Qe(e,t,r){if(!r||!r.length)return[];const s={storage:!0},i="numeric";return Ae(r).map(n=>{const l=Ie(n.type),{field:o,fieldIndex:u}=T(e,{target:t,valueExpression:n.valueExpression,field:n.field,context:s,resultType:i});switch(n.type){case"size":return n.valueExpression==="$view.scale"?null:{type:"size",binding:l,field:o,fieldIndex:u,normalizationField:T(e,{target:t,field:n.normalizationField,context:s,resultType:i}).field,valueRepresentation:n.valueRepresentation??null};case"color":return{type:"color",binding:l,field:o,fieldIndex:u,normalizationField:T(e,{target:t,field:n.normalizationField,context:s,resultType:i}).field};case"opacity":return{type:"opacity",binding:l,field:o,fieldIndex:u,normalizationField:T(e,{target:t,field:n.normalizationField,context:s,resultType:i}).field};case"rotation":return{type:"rotation",binding:l,field:o,fieldIndex:u}}}).filter(x)}function Y(e,t,r,s,i=!1){const n=Se(e,{indexCount:0,fields:{}});switch(r.type){case"simple":case"dot-density":return Xe(n,r,s,i);case"class-breaks":return et(n,t,r,s,i);case"unique-value":return tt(n,t,r,s,i);case"dictionary":return rt(n,r,s,i);case"heatmap":return st(n,r,s,i);case"pie-chart":return Ze(n,r,s,i)}}function Xe(e,t,r,s=!1){const i=t.getSymbols(),n=i.length?i[0]:null;return{type:"simple",symbol:b(n,r,s),symbologyType:r.symbologyType}}function Ze(e,t,r,s=!1){const i=t.getSymbols(),n=i[0],l=i.length>1?i[1]:null;return{type:"pie-chart",markerSymbol:b(n,r,s),fillSymbol:b(l,r,s),symbologyType:r.symbologyType}}function et(e,t,r,s,i=!1){const n={mesh:!0,use:"renderer.field"},l=r.backgroundFillSymbol,{field:o,fieldIndex:u}=T(e,{target:t,field:r.field,valueExpression:r.valueExpression,resultType:"numeric",context:n}),a=r.normalizationType,p=a==="log"?"esriNormalizeByLog":a==="percent-of-total"?"esriNormalizeByPercentOfTotal":a==="field"?"esriNormalizeByField":null,c=r.classBreakInfos.map(f=>({symbol:b(f.symbol,s,i),min:f.minValue,max:f.maxValue})).sort((f,M)=>f.min-M.min);return{type:"interval",attributes:e.fields,field:o,fieldIndex:u,backgroundFillSymbol:b(l,s,i),defaultSymbol:b(r.defaultSymbol,s,i),intervals:c,normalizationField:r.normalizationField,normalizationTotal:r.normalizationTotal,normalizationType:p,isMaxInclusive:r.isMaxInclusive,symbologyType:s.symbologyType}}function tt(e,t,r,s,i=!1){const n=[],l=r.backgroundFillSymbol,o={target:t,context:{mesh:!0},resultType:"string"};if(r.field&&typeof r.field!="string")throw new d(m,"Expected renderer.field to be a string",r);const{field:u,fieldIndex:a}=T(e,{...o,field:r.field,valueExpression:r.valueExpression});for(const p of r.uniqueValueInfos??[])n.push({value:""+p.value,symbol:b(p.symbol,s,i)});return{type:"map",attributes:e.fields,field:u,fieldIndex:a,field2:T(e,{...o,field:r.field2}).field,field3:T(e,{...o,field:r.field3}).field,fieldDelimiter:r.fieldDelimiter??void 0,backgroundFillSymbol:b(l,s),defaultSymbol:b(r.defaultSymbol,s),map:n,symbologyType:s.symbologyType}}function rt(e,t,r,s=!1){return{type:"dictionary",config:t.config,fieldMap:t.fieldMap,scaleExpression:t.scaleExpression,url:t.url,symbolOptions:r,symbologyType:r.symbologyType}}function st(e,t,r,s=!1){const i=t.getSymbols(),n=i.length?i[0]:null;return{type:"heatmap",symbol:b(n,r,s),symbologyType:r.symbologyType}}export{Y as $,yt as I,ct as c,dt as h,ft as n,b as o,j as w};
