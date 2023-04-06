import{br as p,aS as u,r as b,af as a,ag as l,av as d,ah as f,aq as g}from"./index-e32c25e6.js";import{n as m}from"./floorFilterUtils-080a7cd2.js";import{i as S}from"./sublayerUtils-3dfb8033.js";const v={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let t=class extends p(g){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map(s=>{const n=m(this.floors,s);return s.toExportImageJSON(n)});return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&S(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("sublayer-update",s=>this.notifyChange(v[s.propertyName]))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map(s=>s.id).join(","):"show:-1":null}get layerDefs(){var n;const e=!!((n=this.floors)!=null&&n.length),s=this.visibleSublayers.filter(i=>i.definitionExpression!=null||e&&i.floorInfo!=null);return s.length?JSON.stringify(s.reduce((i,r)=>{const o=m(this.floors,r),y=u(o,r.definitionExpression);return b(y)&&(i[r.id]=y),i},{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const s=this.layer.sublayers,n=r=>{const o=this.scale,y=o===0,h=r.minScale===0||o<=r.minScale,c=r.maxScale===0||o>=r.maxScale;r.visible&&(y||h&&c)&&(r.sublayers?r.sublayers.forEach(n):e.unshift(r))};s&&s.forEach(n);const i=this._get("visibleSublayers");return!i||i.length!==e.length||i.some((r,o)=>e[o]!==r)?e:i}toJSON(){const e=this.layer;let s={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?s.dynamicLayers=this.dynamicLayers:s={...s,layers:this.layers,layerDefs:this.layerDefs},s}};a([l({readOnly:!0})],t.prototype,"dynamicLayers",null),a([l()],t.prototype,"floors",void 0),a([l({readOnly:!0})],t.prototype,"hasDynamicLayers",null),a([l()],t.prototype,"layer",null),a([l({readOnly:!0})],t.prototype,"layers",null),a([l({readOnly:!0})],t.prototype,"layerDefs",null),a([l({type:Number})],t.prototype,"scale",void 0),a([l(d)],t.prototype,"timeExtent",void 0),a([l({readOnly:!0})],t.prototype,"version",null),a([l({readOnly:!0})],t.prototype,"visibleSublayers",null),t=a([f("esri.layers.mixins.ExportImageParameters")],t);export{t as c};
