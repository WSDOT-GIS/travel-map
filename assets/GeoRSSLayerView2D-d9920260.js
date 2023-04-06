import{G as l,H as h,ai as g,P as f,aj as w,ak as u,al as n,af as d,ah as b}from"./index-e32c25e6.js";import{f as S,u as V}from"./LayerView-0eb31626.js";import{i as _}from"./GraphicContainer-f62a7500.js";import{a as T}from"./GraphicsView2D-568922a4.js";import"./Container-f0439a20.js";import"./definitions-3ddd14a8.js";import"./enums-64ab819c.js";import"./Texture-aaf4070c.js";import"./color-c539f19f.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-2f155864.js";import"./FeatureContainer-d28af2e9.js";import"./AttributeStoreView-e1ade59e.js";import"./TiledDisplayObject-cbe84a0d.js";import"./visualVariablesUtils-123b7607.js";import"./visualVariablesUtils-404edd17.js";import"./VertexArrayObject-759cb07f.js";import"./TileContainer-29226c47.js";import"./WGLContainer-d3d3b3d0.js";import"./ProgramTemplate-48e837ef.js";import"./MaterialKey-ca906b04.js";import"./utils-da75a91a.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./vec3f32-ad1dc57f.js";import"./ExpandedCIM-ce5e8e78.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-ae053a23.js";import"./floatRGBA-d50a62e5.js";import"./normalizeUtilsSync-e8185ee5.js";import"./projectionSupport-e7646c74.js";import"./json-48e3ea08.js";import"./Matcher-3777c554.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-a4e99687.js";import"./devEnvironmentUtils-5002a058.js";import"./schemaUtils-6d57a085.js";import"./util-387f818e.js";import"./ComputedAttributeStorage-3ed060f1.js";import"./arcadeTimeUtils-ea14115c.js";import"./executionError-fb3f283a.js";import"./centroid-fae55095.js";let y=class extends S(V){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(e=>{const t=this._popupTemplates.get(e),s=e.hitTest(i);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=t;return s}).flat().map(e=>({type:"graphic",graphic:e,layer:o,mapPoint:i}))}update(i){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(i)}attach(){this.addAttachHandles([l(()=>{var i;return(i=this.layer)==null?void 0:i.featureCollections},i=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:e}of i){const t=g.fromJSON(o),s=new f(t.features),p=e.drawingInfo,c=r?w.fromJSON(r):null,a=u(p.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.polygonSymbol},i=>{this._graphicsViewMap.polygon.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.lineSymbol},i=>{this._graphicsViewMap.polyline.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.pointSymbol},i=>{this._graphicsViewMap.point.renderer=new n({symbol:i})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=d([b("esri.views.2d.layers.GeoRSSLayerView2D")],y);const ui=y;export{ui as default};
