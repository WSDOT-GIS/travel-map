import{af as i,ag as s,aY as O,aZ as V,ah as x,aW as X,ko as ee,km as te,br as N,cP as M,bW as re,cn as F,i7 as ie,Q as se,iZ as ne,al as L,r as T,s as b,iv as ae,kp as U,aS as P,e8 as Q,aw as H,kq as oe,i$ as le,j0 as pe,j1 as ue,j2 as de,kl as ye,kk as ce,ix as he,aj as be,j6 as B,W as J,kr as fe,jy as me,jw as ge,iy as W,ks as ve,kt as we,ku as $e,i5 as Fe,kv as Oe,kf as Se,ip as Ie,iY as je,iq as Ce,ir as Ee,cM as Te,cN as _e,cO as ke,iV as xe,iC as Le,C as Pe,P as k,G as Ae,ao as Ge,E as De,a3 as qe,kw as Re,kx as Ve,dC as Ne,eC as Me,iH as Ue,ky as Qe,kz as He,kA as Be,a2 as Je,_ as We,kB as Ze,kC as ze,iD as Ye,kD as Ke,kE as Xe,kF as et,kG as tt,kH as rt,kI as it,jo as st,i_ as nt,kJ as at,iG as ot,jH as A,kK as lt,cT as pt}from"./index-e32c25e6.js";let m=class extends X{constructor(){super(...arguments),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(e){if(!e)return null;const t={};for(const r of Object.keys(e))t[r]=ee(e[r]);return t}writeDomains(e,t){var n;if(!e)return;const r={};for(const a of Object.keys(e))e[a]&&(r[a]=(n=e[a])==null?void 0:n.toJSON());t.domains=r}};i([s({type:Number,json:{write:!0}})],m.prototype,"code",void 0),i([s({type:Object,json:{write:!0}})],m.prototype,"defaultValues",void 0),i([s({json:{write:!0}})],m.prototype,"domains",void 0),i([O("domains")],m.prototype,"readDomains",null),i([V("domains")],m.prototype,"writeDomains",null),i([s({type:String,json:{write:!0}})],m.prototype,"name",void 0),m=i([x("esri.layers.support.Subtype")],m);const ut=m,dt=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],Z={key:"type",base:fe,errorContext:"renderer",typeMap:{simple:L,"unique-value":me,"class-breaks":ge}},G=W(),D=te({types:Z});let yt=0;function I(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function ct(e){return new L({symbol:ht(e)})}function ht(e){switch(e){case"point":case"multipoint":return $e.clone();case"polyline":return we.clone();case"polygon":case"multipatch":return ve.clone();default:return null}}function bt(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&typeof e.field=="string"&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function z(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(n=>n.code===e)}function ft(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const n={},a=z(e,t);if(T(a)){const{defaultValues:o}=a;for(const p in o)n[p]=o[p]}return n[t.subtypeField]=e,new B({name:"New Feature",drawingTool:r,prototype:{attributes:n}})}const Y="esri.layers.support.SubtypeSublayer";let l=class extends N(M(re(Fe))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${yt++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return(e=this.parent)==null?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){const{fields:n,parent:a}=this;let o;if(n){o=[];let p=0;n.forEach(({name:y,alias:c,editable:g,visible:v})=>{var j;if(!v)return;const d=(j=a==null?void 0:a.fields)==null?void 0:j.find(S=>S.name===y);if(!d)return;const f={name:y};let $=!1;c!==d.alias&&(f.alias=c,$=!0),g!==d.editable&&(f.editable=g,$=!0),o.push(f),$&&p++}),p===0&&o.length===n.length&&(o=null)}else o=F(e);o!=null&&o.length&&ie(r,o,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,n=e==null?void 0:e.fields;if(!e||!(n!=null&&n.length))return null;const{subtypes:a,subtypeField:o}=e,p=a==null?void 0:a.find(v=>v.code===r),y=p==null?void 0:p.defaultValues,c=p==null?void 0:p.domains,g=[];for(const v of n){const d=v.clone(),{name:f}=d,$=t==null?void 0:t.find(C=>C.name===f);if(d.visible=!t||!!$,$){const{alias:C,editable:K}=$;C&&(d.alias=C),K===!1&&(d.editable=!1)}const j=(y==null?void 0:y[f])??null;d.defaultValue=f===o?r:j;const S=(c==null?void 0:c[f])??null;d.domain=f===o?null:S?S.type==="inherited"?d.domain:S.clone():null,g.push(d)}return g}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||se.getLogger(Y).error(w("objectIdField")),(e=this.parent)==null?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){ne(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?ct(e.geometryType):null}readRendererFromService(e,t,r){var y,c,g;if(t.type==="Table")return null;const n=(y=t.drawingInfo)==null?void 0:y.renderer,a=D(n,t,r);let o;const{subtypeCode:p}=this;if(p!=null&&bt(a,t.subtypeField)){const v=(c=a.uniqueValueInfos)==null?void 0:c.find(({value:d})=>(d=typeof d=="number"?String(d):d)===String(p));v&&(o=new L({symbol:v.symbol}))}else(a==null?void 0:a.type)!=="simple"||(g=a.visualVariables)!=null&&g.length||(o=a);return o}readRenderer(e,t,r){var o,p,y;const n=(p=(o=t==null?void 0:t.layerDefinition)==null?void 0:o.drawingInfo)==null?void 0:p.renderer;return n?((y=n.visualVariables)==null?void 0:y.some(c=>c.type!=="rotationInfo"))?void 0:D(n,t,r)||void 0:void 0}get spatialReference(){var e;return(e=this.parent)==null?void 0:e.spatialReference}readTemplatesFromService(e,t){return[ft(this.subtypeCode,t)]}readTitleFromService(e,t){const r=z(this.subtypeCode,t);return T(r)?r.name:null}get url(){var e;return(e=this.parent)==null?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!!((e=this.parent)!=null&&e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw w("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:n}=this;if(!n)throw w("updateAttachment");if(e.getAttribute(n.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return n.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw w("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw w("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:n,title:a}=this;if(r){const{displayField:o,editFieldsInfo:p,objectIdField:y}=r;t={displayField:o,editFieldsInfo:p,fields:n,objectIdField:y,title:a}}return ae(t,e)}createQuery(){if(!this.parent)throw w("createQuery");const e=U(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=P(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return dt.some(e=>this.originIdOf(e)===Q.USER)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw w("queryAttachments");const n=e.clone();return n.where=q(n.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw w("queryFeatures");const n=H.from(e)??r.createQuery();return T(e)&&(n.where=q(n.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(n,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([s({readOnly:!0,json:{read:!1}})],l.prototype,"capabilities",null),i([s({readOnly:!0,json:{read:!1}})],l.prototype,"effectiveCapabilities",null),i([s({json:{write:{ignoreOrigin:!0}}})],l.prototype,"charts",void 0),i([s({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],l.prototype,"editingEnabled",void 0),i([s({type:Boolean,readOnly:!0})],l.prototype,"effectiveEditingEnabled",null),i([s({readOnly:!0,json:{read:!1}})],l.prototype,"elevationInfo",null),i([s({readOnly:!0,json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],l.prototype,"fieldOverrides",void 0),i([V("fieldOverrides")],l.prototype,"writeFieldOverrides",null),i([s({...G.fields,readOnly:!0,json:{read:!1}})],l.prototype,"fields",null),i([s(G.fieldsIndex)],l.prototype,"fieldsIndex",void 0),i([s({type:oe,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],l.prototype,"formTemplate",void 0),i([s({type:String,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"id",void 0),i([s({readOnly:!0,json:{read:!1}})],l.prototype,"geometryType",null),i([s({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),i([s(I(F(le)))],l.prototype,"labelsVisible",void 0),i([s({type:[pe],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:ue},write:{ignoreOrigin:!0}}})],l.prototype,"labelingInfo",void 0),i([s({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l.prototype,"layerType",void 0),i([s(I(F(de)))],l.prototype,"legendEnabled",void 0),i([s({type:["show","hide"]})],l.prototype,"listMode",void 0),i([s((()=>{const e=F(ye);return e.json.origins.service.read=!1,I(e)})())],l.prototype,"minScale",void 0),i([s((()=>{const e=F(ce);return e.json.origins.service.read=!1,I(e)})())],l.prototype,"maxScale",void 0),i([s({readOnly:!0})],l.prototype,"effectiveScaleRange",null),i([s({readOnly:!0,json:{read:!1}})],l.prototype,"objectIdField",null),i([s({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],l.prototype,"opacity",void 0),i([s()],l.prototype,"parent",void 0),i([s(I(F(he)))],l.prototype,"popupEnabled",void 0),i([s({type:be,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],l.prototype,"popupTemplate",void 0),i([s({readOnly:!0})],l.prototype,"defaultPopupTemplate",null),i([s({types:Z,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],l.prototype,"renderer",null),i([O("service","renderer",["drawingInfo.renderer","subtypeField","type"])],l.prototype,"readRendererFromService",null),i([O("renderer",["layerDefinition.drawingInfo.renderer"])],l.prototype,"readRenderer",null),i([s({readOnly:!0,json:{read:!1}})],l.prototype,"spatialReference",null),i([s({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"subtypeCode",void 0),i([s({type:[B],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],l.prototype,"templates",void 0),i([O("service","templates",["geometryType","subtypeField","subtypes","type"])],l.prototype,"readTemplatesFromService",null),i([s({type:String,json:{write:{ignoreOrigin:!0}}})],l.prototype,"title",void 0),i([O("service","title",["subtypes"])],l.prototype,"readTitleFromService",null),i([s({readOnly:!0,json:{read:!1}})],l.prototype,"url",null),i([s({readOnly:!0})],l.prototype,"userHasUpdateItemPrivileges",null),i([s({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],l.prototype,"visible",void 0),l=i([x(Y)],l);const q=(e,t,r)=>{const n=new RegExp(`${t}=[0-9]`),a=`${t}=${r}`,o=J(e,"");return n.test(o)?o.replace(n,a):P(a,o)},w=e=>new b(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),E=l,h="SubtypeGroupLayer",mt="esri.layers.SubtypeGroupLayer";function R(e,t){return new b("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const _=W();let u=class extends Oe(Se(Ie(je(Ce(Ee(Te(_e(ke(M(xe(Le(N(pt))))))))))))){constructor(...e){super(...e),this._handles=new Pe,this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.subtypes=null,this.sublayers=new(k.ofType(E)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this.addHandles(Ae(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),Ge))}destroy(){var e;(e=this.source)==null||e.destroy(),this._handles=De(this._handles)}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=T(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(qe).then(async()=>{if(!this.url)throw new b("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new b("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>this._setUserPrivileges(this.serviceItemId,e)).then(()=>Re(this,e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return Ve(this)}get parsedUrl(){const e=Ne(this.url);return e!=null&&this.layerId!=null&&(e.path=Me(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?Ue(this.url,t):t}async addAttachment(e,t){return Qe(this,e,t,h)}async updateAttachment(e,t,r){return He(this,e,t,r,h)}async applyEdits(e,t){return Be(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await Je(We(()=>import("./FeatureLayerSource-4915bb72.js"),["assets/FeatureLayerSource-4915bb72.js","assets/index-e32c25e6.js","assets/index-4747a2ac.css","assets/assetEditingSupport-2cebf928.js","assets/clientSideDefaults-87d235d5.js","assets/QueryEngineCapabilities-42e44ded.js","assets/QueryTask-84593f4b.js","assets/executeForIds-e84d10fe.js"]),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=U(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=P(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return Ze(this,e,t,h)}async fetchRecomputedExtents(e){return ze(this,e,h)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this._sublayerLookup.get(r)}loadAll(){return Ye(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return Ke(this,e,t,h)}async queryFeatures(e,t){const r=await this.load(),n=H.from(e)??r.createQuery(),a=J(n.outFields,[]);a.includes(this.subtypeField)||(a.push(this.subtypeField),n.outFields=a);const o=await r.source.queryFeatures(n,t);if(o!=null&&o.features)for(const p of o.features)p.layer=p.sourceLayer=this.findSublayerForFeature(p);return o}async queryObjectIds(e,t){return Xe(this,e,t,h)}async queryFeatureCount(e,t){return et(this,e,t,h)}async queryExtent(e,t){return tt(this,e,t,h)}async queryRelatedFeatures(e,t){return rt(this,e,t,h)}async queryRelatedFeaturesCount(e,t){return it(this,e,t,h)}write(e,t){var o;const{origin:r,layerContainerType:n,messages:a}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&n!=="tables")return a==null||a.push(R(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&n==="tables")return a==null||a.push(R(this,"using a non-table source cannot be written to tables in web maps")),null;return(o=this.sublayers)!=null&&o.length?super.write(e,t):(a==null||a.push(new b("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&st(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var r;this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new b("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!((r=this.subtypes)!=null&&r.length))throw new b("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),nt(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return at(this)}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(n=>n.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.handles.remove("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this._sublayersCollectionChanged=!1,this.handles.add([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)}),e.on("after-changes",()=>{this._sublayersCollectionChanged=!0})],"sublayers-owner"))}};i([s({readOnly:!0})],u.prototype,"createQueryVersion",null),i([s({readOnly:!0})],u.prototype,"editingEnabled",null),i([s({readOnly:!0})],u.prototype,"effectiveEditingEnabled",null),i([s({..._.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],u.prototype,"fields",void 0),i([s(_.fieldsIndex)],u.prototype,"fieldsIndex",void 0),i([s(ot)],u.prototype,"id",void 0),i([s({type:["show","hide","hide-children"]})],u.prototype,"listMode",void 0),i([s({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"]})],u.prototype,"operationalLayerType",void 0),i([s(_.outFields)],u.prototype,"outFields",void 0),i([s({readOnly:!0})],u.prototype,"parsedUrl",null),i([s()],u.prototype,"source",null),i([s({type:[ut],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],u.prototype,"subtypes",void 0),i([s({type:k.ofType(E),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const n=e.map(({code:a})=>{const o=new E({subtypeCode:a});return o.read(t,r),o});return new(k.ofType(E))(n)}}}},name:"layers",write:{overridePolicy(e,t,r){const n=this.originOf("sublayers"),a=Q.PORTAL_ITEM;let o=!0;if(A(n)===a&&A(r.origin)>a){const p=e.some(y=>y.hasUserOverrides());o=this._sublayersCollectionChanged||p}return{enabled:o,ignoreOrigin:!0}}}}})],u.prototype,"sublayers",void 0),i([s({type:lt})],u.prototype,"timeInfo",void 0),i([s({json:{origins:{"portal-item":{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],u.prototype,"title",void 0),i([O("service","title",["name"])],u.prototype,"readTitleFromService",null),i([s({json:{read:!1}})],u.prototype,"type",void 0),u=i([x(mt)],u);const vt=u;export{vt as default};
