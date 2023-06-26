import{_ as pt,o as k,d as _,F,e as V,p as J,q as tt,s as et,v as it,k as ft,g as U,x as st,r as ot,a as E,l as O,w as X,t as q,c as ht,b as nt}from"./index-3db1033b.js";function at(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Function]"}function Y(t,e,i,s=1){const h=Math.round(e/s/t[0])*t[0],a=Math.round(i/s/t[1])*t[1];return[h,a]}function lt(t,e,i){return t-e-i}function rt(t,e,i){return t-e-i}function T(t,e,i){return e!==null&&t<e?e:i!==null&&i<t?i:t}function $(t,e,i,s,h){const a=Math.PI/180*h,r=Math.cos(a),u=Math.sin(a);let n=i-t,l=s-e;return{x:n*r-l*u+t,y:n*u+l*r+e}}function gt(t,e){let i=Math.atan2(e,t);return i=Math.round(180/Math.PI*i),i<0&&(i=360+i),i}function ct(t,e,i){let s=t;const h=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].find(a=>at(s[a]));if(!at(s[h]))return!1;do{if(s[h](e))return!0;if(s===i)return!1;s=s.parentNode}while(s);return!1}function xt(t){const e=window.getComputedStyle(t);return[parseFloat(e.getPropertyValue("width"),10),parseFloat(e.getPropertyValue("height"),10)]}function A(t,e,i){t&&(t.attachEvent?t.attachEvent("on"+e,i):t.addEventListener?t.addEventListener(e,i,!0):t["on"+e]=i)}function C(t,e,i){t&&(t.detachEvent?t.detachEvent("on"+e,i):t.removeEventListener?t.removeEventListener(e,i,!0):t["on"+e]=null)}const I={mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"},touch:{start:"touchstart",move:"touchmove",stop:"touchend"}},yt={userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",MsUserSelect:"none"},bt={userSelect:"auto",MozUserSelect:"auto",WebkitUserSelect:"auto",MsUserSelect:"auto"};let W=I.mouse;const wt={replace:!0,name:"Element",props:{className:{type:String,default:"vdr"},classNameDraggable:{type:String,default:"draggable"},classNameResizable:{type:String,default:"resizable"},classNameRotatable:{type:String,default:"rotatable"},classNameDragging:{type:String,default:"dragging"},classNameResizing:{type:String,default:"resizing"},classNameRotating:{type:String,default:"rotating"},classNameActive:{type:String,default:"active"},classNameHandle:{type:String,default:"handle"},disableUserSelect:{type:Boolean,default:!0},enableNativeDrag:{type:Boolean,default:!1},preventDeactivation:{type:Boolean,default:!1},active:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},rotatable:{type:Boolean,default:!1},lockAspectRatio:{type:Boolean,default:!1},outsideAspectRatio:{type:[Number,String],default:0},w:{type:[Number,String],default:414,validator:t=>typeof t=="number"?t>0:t==="auto"},h:{type:[Number,String],default:100,validator:t=>typeof t=="number"?t>0:t==="auto"},minWidth:{type:Number,default:0,validator:t=>t>=0},minHeight:{type:Number,default:0,validator:t=>t>=0},maxWidth:{type:Number,default:1/0,validator:t=>t>=0},maxHeight:{type:Number,default:1/0,validator:t=>t>=0},x:{type:[String,Number],default:0},y:{type:[String,Number],default:0},z:{type:[String,Number],default:"auto",validator:t=>typeof t=="string"?t==="auto":t>=0},r:{type:[String,Number],default:0},handles:{type:Array,default:()=>["tl","tm","tr","mr","br","bm","bl","ml","rot"],validator:t=>{const e=new Set(["tl","tm","tr","mr","br","bm","bl","ml","rot"]);return new Set(t.filter(i=>e.has(i))).size===t.length}},dragHandle:{type:String,default:null},dragCancel:{type:String,default:null},axis:{type:String,default:"both",validator:t=>["x","y","both"].includes(t)},grid:{type:Array,default:()=>[1,1]},parent:{type:[Boolean,String],default:!1},onDragStart:{type:Function,default:()=>!0},onDrag:{type:Function,default:()=>!0},onResizeStart:{type:Function,default:()=>!0},onResize:{type:Function,default:()=>!0},onRotateStart:{type:Function,default:()=>!0},onRotate:{type:Function,default:()=>!0},isConflictCheck:{type:Boolean,default:!1},snap:{type:Boolean,default:!1},snapBorder:{type:Boolean,default:!1},snapTolerance:{type:Number,default:5,validator:function(t){return typeof t=="number"}},scaleRatio:{type:Number,default:1,validator:t=>typeof t=="number"},handleInfo:{type:Object,default:()=>({size:8,offset:-4,switch:!0})}},data(){return{left:this.x,top:this.y,right:null,bottom:null,rotate:this.r,width:null,height:null,widthTouched:!1,heightTouched:!1,aspectFactor:null,parentWidth:null,parentHeight:null,minW:this.minWidth,minH:this.minHeight,maxW:this.maxWidth,maxH:this.maxHeight,handle:null,enabled:this.active,resizing:!1,dragging:!1,rotating:!1,zIndex:this.z,lastCenterX:0,lastCenterY:0,parentX:0,parentY:0}},computed:{handleStyle(){return t=>{if(!this.handleInfo.switch)return{display:this.enabled?"block":"none"};if(t==="rot"&&!this.rotatable)return{display:"none"};if(t!=="rot"&&!this.resizable)return{display:"none"};const e=(this.handleInfo.size/this.scaleRatio).toFixed(2),i=(this.handleInfo.offset/this.scaleRatio).toFixed(2),s=(e/2).toFixed(2),h={tl:{top:`${i}px`,left:`${i}px`},tm:{top:`${i}px`,left:`calc(50% - ${s}px)`},tr:{top:`${i}px`,right:`${i}px`},mr:{top:`calc(50% - ${s}px)`,right:`${i}px`},br:{bottom:`${i}px`,right:`${i}px`},bm:{bottom:`${i}px`,right:`calc(50% - ${s}px)`},bl:{bottom:`${i}px`,left:`${i}px`},ml:{top:`calc(50% - ${s}px)`,left:`${i}px`},rot:{top:`-${e*3}px`,left:"50%"}},a={width:h[t].width||`${e}px`,height:h[t].height||`${e}px`,top:h[t].top,left:h[t].left,right:h[t].right,bottom:h[t].bottom},r={tl:0,tm:1,tr:2,mr:3,br:4,bm:5,bl:6,ml:7,rot:8};if(t!=="rot"){const u=["nw-resize","n-resize","ne-resize","e-resize","se-resize","s-resize","sw-resize","w-resize"],l=this.rotate+22.5,d=Math.floor(l/45);let m=(r[t]+d)%8;a.cursor=u[m]}return a.display=this.enabled?"block":"none",a}},style(){return{background:"#f00",transform:`translate(${this.left}px, ${this.top}px) rotate(${this.rotate}deg)`,width:this.computedWidth,height:this.computedHeight,zIndex:this.zIndex,fontSize:this.handleInfo.size*2+"px",...this.dragging&&this.disableUserSelect?yt:bt}},actualHandles(){return!this.resizable&&!this.rotatable?[]:this.handles},computedWidth(){return this.w==="auto"&&!this.widthTouched?"auto":this.width+"px"},computedHeight(){return this.h==="auto"&&!this.heightTouched?"auto":this.height+"px"}},watch:{active(t){this.enabled=t,t?(this.updateParentSize(),this.$emit("activated")):this.$emit("deactivated")},x(t){this.resizing||this.dragging||(this.parent&&(this.bounds=this.calcDragLimits()),this.moveHorizontally(t))},y(t){this.resizing||this.dragging||(this.parent&&(this.bounds=this.calcDragLimits()),this.moveVertically(t))},z(t){(t>=0||t==="auto")&&(this.zIndex=t)},r(t){t>=0&&(this.rotate=t%360)},lockAspectRatio(t){t?this.outsideAspectRatio?this.aspectFactor=this.outsideAspectRatio:this.aspectFactor=this.width/this.height:this.aspectFactor=void 0},outsideAspectRatio(t){t&&(this.aspectFactor=t)},minWidth(t){t>0&&t<=this.width&&(this.minW=t)},minHeight(t){t>0&&t<=this.height&&(this.minH=t)},maxWidth(t){this.maxW=t},maxHeight(t){this.maxH=t},w(t){this.resizing||this.dragging||(this.parent&&(this.bounds=this.calcResizeLimits()),this.changeWidth(t))},h(t){this.resizing||this.dragging||(this.parent&&(this.bounds=this.calcResizeLimits()),this.changeHeight(t))}},created(){this.maxWidth&&this.minWidth>this.maxWidth&&console.warn("[Vdr warn]: Invalid prop: minWidth cannot be greater than maxWidth"),this.maxWidth&&this.minHeight>this.maxHeight&&console.warn("[Vdr warn]: Invalid prop: minHeight cannot be greater than maxHeight"),this.elmX=0,this.elmY=0,this.elmW=0,this.elmH=0,this.lastCenterX=0,this.lastCenterY=0,this.fixedXName="",this.fixedYName="",this.fixedX=0,this.fixedY=0,this.TL={},this.TR={},this.BL={},this.BR={},this.resetBoundsAndMouseState()},mounted(){this.enableNativeDrag||(this.$el.ondragstart=()=>!1);const[t,e]=this.getParentSize();this.parentWidth=t,this.parentHeight=e;const[i,s]=xt(this.$el);this.aspectFactor=(this.w!=="auto"?this.w:i)/(this.h!=="auto"?this.h:s),this.outsideAspectRatio&&(this.aspectFactor=this.outsideAspectRatio),this.width=this.w!=="auto"?this.w:i,this.height=this.h!=="auto"?this.h:s,this.right=this.parentWidth-this.width-this.left,this.bottom=this.parentHeight-this.height-this.top,this.settingAttribute(),A(document.documentElement,"mousedown",this.deselect),A(document.documentElement,"touchend touchcancel",this.deselect),A(window,"resize",this.checkParentSize)},beforeDestroy(){C(document.documentElement,"mousedown",this.deselect),C(document.documentElement,"touchstart",this.handleUp),C(document.documentElement,"mousemove",this.move),C(document.documentElement,"touchmove",this.move),C(document.documentElement,"mouseup",this.handleUp),C(document.documentElement,"touchend touchcancel",this.deselect),C(window,"resize",this.checkParentSize)},methods:{resetBoundsAndMouseState(){this.mouseClickPosition={mouseX:0,mouseY:0,x:0,y:0,w:0,h:0},this.bounds={minLeft:null,maxLeft:null,minRight:null,maxRight:null,minTop:null,maxTop:null,minBottom:null,maxBottom:null}},checkParentSize(){if(this.parent){const[t,e]=this.getParentSize();this.right=t-this.width-this.left,this.bottom=e-this.height-this.top,this.parentWidth=t,this.parentHeight=e}},updateParentSize(){const[t,e]=this.getParentSize();this.parentWidth=t,this.parentHeight=e},getParentSize(){if(this.parent===!0){const t=window.getComputedStyle(this.$el.parentNode,null),e=this.$el.parentNode.getBoundingClientRect();return this.parentX=e.x,this.parentY=e.y,[Math.round(parseFloat(t.getPropertyValue("width"),10)),Math.round(parseFloat(t.getPropertyValue("height"),10))]}if(typeof this.parent=="string"){const t=document.querySelector(this.parent);if(!(t instanceof HTMLElement))throw new Error(`The selector ${this.parent} does not match any element`);return[t.offsetWidth,t.offsetHeight]}return[null,null]},elementTouchDown(t){W=I.touch,this.elementDown(t)},elementMouseDown(t){W=I.mouse,this.elementDown(t)},elementDown(t){if(t instanceof MouseEvent&&t.which!==1)return;const e=t.target||t.srcElement;if(this.$el.contains(e)){if(this.onDragStart(t)===!1)return;if(this.dragHandle&&!ct(e,this.dragHandle,this.$el)||this.dragCancel&&ct(e,this.dragCancel,this.$el)){this.dragging=!1;return}this.enabled||(this.enabled=!0,this.$emit("activated"),this.$emit("update:active",!0)),this.draggable&&(this.dragging=!0),this.mouseClickPosition.mouseX=t.touches?t.touches[0].pageX:t.pageX,this.mouseClickPosition.mouseY=t.touches?t.touches[0].pageY:t.pageY,this.mouseClickPosition.left=this.left,this.mouseClickPosition.right=this.right,this.mouseClickPosition.top=this.top,this.mouseClickPosition.bottom=this.bottom,this.mouseClickPosition.width=this.width,this.mouseClickPosition.height=this.height,this.parent&&(this.bounds=this.calcDragLimits()),A(document.documentElement,W.move,this.move),A(document.documentElement,W.stop,this.handleUp)}},calcDragLimits(){return this.rotatable?{minLeft:-this.width/2,maxLeft:this.parentWidth-this.width/2,minRight:this.width/2,maxRight:this.parentWidth+this.width/2,minTop:-this.height/2,maxTop:this.parentHeight-this.height/2,minBottom:this.height/2,maxBottom:this.parentHeight+this.height/2}:{minLeft:this.left%this.grid[0],maxLeft:Math.floor((this.parentWidth-this.width-this.left)/this.grid[0])*this.grid[0]+this.left,minRight:this.right%this.grid[0],maxRight:Math.floor((this.parentWidth-this.width-this.right)/this.grid[0])*this.grid[0]+this.right,minTop:this.top%this.grid[1],maxTop:Math.floor((this.parentHeight-this.height-this.top)/this.grid[1])*this.grid[1]+this.top,minBottom:this.bottom%this.grid[1],maxBottom:Math.floor((this.parentHeight-this.height-this.bottom)/this.grid[1])*this.grid[1]+this.bottom}},deselect(t){const e=t.target||t.srcElement,i=new RegExp(this.className+"-([trmbl]{2})","");!this.$el.contains(e)&&!i.test(e.className)&&(this.enabled&&!this.preventDeactivation&&(this.enabled=!1,this.$emit("deactivated"),this.$emit("update:active",!1)),C(document.documentElement,W.move,this.move)),this.resetBoundsAndMouseState()},handleTouchDown(t,e){W=I.touch,this.handleDown(t,e)},handleDown(t,e){if(e instanceof MouseEvent&&e.which!==1||this.onResizeStart(t,e)===!1)return!1;e.stopPropagation&&e.stopPropagation(),this.handle=t,this.handle==="rot"?this.rotating=!0:this.resizing=!0;let{top:i,left:s,width:h,height:a}=this.$el.getBoundingClientRect();this.lastCenterX=window.pageXOffset+s+h/2,this.lastCenterY=window.pageYOffset+i+a/2;let r=this.left,u=this.top,n=this.width,l=this.height,d=r+n/2,m=u+l/2,o=this.rotate;this.TL=$(d,m,r,u,o),this.TR=$(d,m,r+n,u,o),this.BL=$(d,m,r,u+l,o),this.BR=$(d,m,r+n,u+l,o),this.mouseClickPosition.mouseX=e.touches?e.touches[0].pageX:e.pageX,this.mouseClickPosition.mouseY=e.touches?e.touches[0].pageY:e.pageY,this.mouseClickPosition.left=this.left,this.mouseClickPosition.right=this.right,this.mouseClickPosition.top=this.top,this.mouseClickPosition.bottom=this.bottom,this.mouseClickPosition.width=this.width,this.mouseClickPosition.height=this.height,this.bounds=this.calcResizeLimits(),A(document.documentElement,W.move,this.move),A(document.documentElement,W.stop,this.handleUp)},calcResizeLimits(){let t=this.minW,e=this.minH,i=this.maxW,s=this.maxH;const[h,a]=this.grid,r=this.width,u=this.height,n=this.left,l=this.top,d=this.right,m=this.bottom;i=i-i%h,s=s-s%a;const o={minLeft:null,maxLeft:null,minTop:null,maxTop:null,minRight:null,maxRight:null,minBottom:null,maxBottom:null};return this.parent?(o.minLeft=n,o.maxLeft=n+Math.floor((r-t)/h),o.minTop=l,o.maxTop=l+Math.floor((u-e)/a),o.minRight=d,o.maxRight=d+Math.floor((r-t)/h),o.minBottom=m,o.maxBottom=m+Math.floor((u-e)/a),i&&(o.minLeft=Math.max(o.minLeft,this.parentWidth-d-i),o.minRight=Math.max(o.minRight,this.parentWidth-n-i)),s&&(o.minTop=Math.max(o.minTop,this.parentHeight-m-s),o.minBottom=Math.max(o.minBottom,this.parentHeight-l-s))):(o.minLeft=null,o.maxLeft=n+Math.floor(r-t),o.minTop=null,o.maxTop=l+Math.floor(u-e),o.minRight=null,o.maxRight=d+Math.floor(r-t),o.minBottom=null,o.maxBottom=m+Math.floor(u-e),i&&(o.minLeft=-(d+i),o.minRight=-(n+i)),s&&(o.minTop=-(m+s),o.minBottom=-(l+s)),this.lockAspectRatio&&i&&s&&(o.minLeft=Math.min(o.minLeft,-(d+i)),o.minTop=Math.min(o.minTop,-(s+m)),o.minRight=Math.min(o.minRight,-n-i),o.minBottom=Math.min(o.minBottom,-l-s))),o},move(t){this.resizing?this.handleResize(t):this.dragging?this.handleDrag(t):this.rotating&&this.handleRotate(t)},getMouseCoordinate(t){return t.type.indexOf("touch")!==-1?{x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}:{x:t.pageX||t.clientX+document.documentElement.scrollLeft,y:t.pageY||t.clientY+document.documentElement.scrollTop}},handleRotate(t){const{x:e,y:i}=this.getMouseCoordinate(t),s=e-this.lastCenterX,h=i-this.lastCenterY;this.rotate=(gt(s,h)+90)%360,this.$emit("rotating",this.rotate)},async handleDrag(t){const e=this.axis,i=this.grid,s=this.bounds,h=this.mouseClickPosition,a=e&&e!=="y"?h.mouseX-(t.touches?t.touches[0].pageX:t.pageX):0,r=e&&e!=="x"?h.mouseY-(t.touches?t.touches[0].pageY:t.pageY):0,[u,n]=Y(i,a,r,this.scaleRatio),l=T(h.left-u,s.minLeft,s.maxLeft),d=T(h.top-n,s.minTop,s.maxTop);if(this.onDrag(l,d)===!1)return;const m=T(h.right+u,s.minRight,s.maxRight),o=T(h.bottom+n,s.minBottom,s.maxBottom);this.left=l,this.top=d,this.right=m,this.bottom=o,await this.snapCheck(),this.$emit("dragging",this.left,this.top)},moveHorizontally(t){const[e,i]=Y(this.grid,t,this.top,this.scale),s=T(e,this.bounds.minLeft,this.bounds.maxLeft);this.left=s,this.right=this.parentWidth-this.width-s},moveVertically(t){const[e,i]=Y(this.grid,this.left,t,this.scale),s=T(i,this.bounds.minTop,this.bounds.maxTop);this.top=s,this.bottom=this.parentHeight-this.height-s},handleResize(t){const e=this.handle,i=this.scaleRatio,{TL:s,TR:h,BL:a,BR:r}=this;let{x:u,y:n}=this.getMouseCoordinate(t);!this.rotatable&&this.parent&&(u=T(u,this.parentX,this.parentX+this.parentWidth*i),n=T(n,this.parentY,this.parentY+this.parentHeight*i));let l=u-this.mouseClickPosition.mouseX,d=n-this.mouseClickPosition.mouseY;l=l/i,d=d/i;let m,o,x,L,R,b,w,H,M,c={},f={},g={},y={},p={},N={},v={},S={};if(e.includes("m")){switch(e){case"tm":m=l+(s.x+h.x)/2,o=d+(s.y+h.y)/2,c=a,f=s,g=r,y={x:m-c.x,y:o-c.y},p={x:f.x-c.x,y:f.y-c.y},x=(y.x*p.x+y.y*p.y)/(Math.pow(p.x,2)+Math.pow(p.y,2)),v={x:g.x-c.x,y:g.y-c.y},S={x:p.x*x,y:p.y*x};break;case"bm":m=l+(a.x+r.x)/2,o=d+(a.y+r.y)/2,c=s,f=a,g=h,y={x:m-c.x,y:o-c.y},p={x:f.x-c.x,y:f.y-c.y},x=(y.x*p.x+y.y*p.y)/(Math.pow(p.x,2)+Math.pow(p.y,2)),v={x:g.x-c.x,y:g.y-c.y},S={x:p.x*x,y:p.y*x};break;case"ml":m=l+(s.x+a.x)/2,o=d+(s.y+a.y)/2,c=r,f=a,g=h,y={x:m-c.x,y:o-c.y},p={x:f.x-c.x,y:f.y-c.y},x=(y.x*p.x+y.y*p.y)/(Math.pow(p.x,2)+Math.pow(p.y,2)),S={x:g.x-c.x,y:g.y-c.y},v={x:p.x*x,y:p.y*x};break;case"mr":m=l+(h.x+h.x)/2,o=d+(h.y+h.y)/2,c=a,f=r,g=s,y={x:m-c.x,y:o-c.y},p={x:f.x-c.x,y:f.y-c.y},x=(y.x*p.x+y.y*p.y)/(Math.pow(p.x,2)+Math.pow(p.y,2)),S={x:g.x-c.x,y:g.y-c.y},v={x:p.x*x,y:p.y*x};break}b=c.x+(v.x+S.x)/2,w=c.y+(v.y+S.y)/2,H=Math.sqrt(Math.pow(v.x,2)+Math.pow(v.y,2)),M=Math.sqrt(Math.pow(S.x,2)+Math.pow(S.y,2))}else{switch(e){case"tl":m=l+s.x,o=d+s.y,c=r,f=a,g=h;break;case"tr":m=l+h.x,o=d+h.y,c=a,f=r,g=s;break;case"bl":m=l+a.x,o=d+a.y,c=h,f=s,g=r;break;case"br":m=l+r.x,o=d+r.y,c=s,f=h,g=a;break}y={x:m-c.x,y:o-c.y},p={x:f.x-c.x,y:f.y-c.y},N={x:g.x-c.x,y:g.y-c.y},L=(y.x*p.x+y.y*p.y)/(Math.pow(p.x,2)+Math.pow(p.y,2)),R=(y.x*N.x+y.y*N.y)/(Math.pow(N.x,2)+Math.pow(N.y,2)),v={x:p.x*L,y:p.y*L},S={x:N.x*R,y:N.y*R},b=c.x+(v.x+S.x)/2,w=c.y+(v.y+S.y)/2,H=Math.sqrt(Math.pow(v.x,2)+Math.pow(v.y,2)),M=Math.sqrt(Math.pow(S.x,2)+Math.pow(S.y,2))}this.left=b-H/2,this.top=w-M/2,H=T(H,this.minW||0,this.maxW),M=T(M,this.minH||0,this.maxH),this.parent&&(H=T(H,0,this.parentWidth),M=T(M,0,this.parentHeight)),this.lockAspectRatio&&(console.log(this.lockAspectRatio,this.aspectFactor),H/M>this.aspectFactor?H=M*this.aspectFactor:M=H/this.aspectFactor),this.width=H,this.height=M,this.$emit("resizing",this.left,this.top,this.width,this.height)},changeWidth(t){const[e,i]=Y(this.grid,t,0,this.scale),s=this.parentWidth-e-this.left;let h=this.bottom;this.lockAspectRatio&&(h=this.bottom-(this.right-s)/this.aspectFactor);const a=lt(this.parentWidth,this.left,s),r=rt(this.parentHeight,this.top,h);this.right=s,this.bottom=h,this.width=a,this.height=r},changeHeight(t){const[e,i]=Y(this.grid,0,t,this.scale),s=this.parentHeight-i-this.top;let h=this.right;this.lockAspectRatio&&(h=this.right-(this.bottom-s)*this.aspectFactor);const a=lt(this.parentWidth,this.left,h),r=rt(this.parentHeight,this.top,s);this.right=h,this.bottom=s,this.width=a,this.height=r},async handleUp(t){this.handle=null;const e=new Array(3).fill({display:!1,position:"",origin:"",lineLength:""}),i={vLine:[],hLine:[]};for(const a in i)i[a]=JSON.parse(JSON.stringify(e));const{x:s,y:h}=this.getMouseCoordinate(t);this.lastMouseX=s,this.lastMouseY=h,this.resizing&&(this.resizing=!1,await this.conflictCheck(),this.$emit("refLineParams",i),this.$emit("resizestop",this.left,this.top,this.width,this.height)),this.dragging&&(this.dragging=!1,await this.conflictCheck(),this.$emit("refLineParams",i),this.$emit("dragstop",this.left,this.top)),this.rotating&&(this.rotating=!1,this.$emit("rotatestop",this.rotate)),this.resetBoundsAndMouseState(),C(document.documentElement,W.move,this.move)},settingAttribute(){this.$el.setAttribute("data-is-check",`${this.isConflictCheck}`),this.$el.setAttribute("data-is-snap",`${this.snap}`)},conflictCheck(){const t=this.top,e=this.left,i=this.width,s=this.height;if(this.isConflictCheck){const h=this.$el.parentNode.childNodes;for(const a of h)if(a.className!==void 0&&!a.className.split(" ").includes(this.classNameActive)&&a.getAttribute("data-is-check")!==null&&a.getAttribute("data-is-check")!=="false"){const r=a.offsetWidth,u=a.offsetHeight,[n,l]=this.formatTransformVal(a.style.transform),d=t>=l&&e>=n&&l+u>t&&n+r>e||t<=l&&e<n&&t+s>l&&e+i>n,m=e<=n&&t>=l&&e+i>n&&t<l+u||t<l&&e>n&&t+s>l&&e<n+r,o=t<=l&&e>=n&&t+s>l&&e<n+r||t>=l&&e<=n&&t<l+u&&e>n+r,x=t<=l&&e>=n&&t+s>l&&e<n+r||t>=l&&e<=n&&t<l+u&&e>n+r,L=e>=n&&t>=l&&e<n+r&&t<l+u||t>l&&e<=n&&e+i>n&&t<l+u,R=t<=l&&e>=n&&t+s>l&&e<n+r||t>=l&&e<=n&&t<l+u&&e+i>n;(d||m||o||x||L||R)&&(this.top=this.mouseClickPosition.top,this.left=this.mouseClickPosition.left,this.width=this.mouseClickPosition.width,this.height=this.mouseClickPosition.height)}}},async snapCheck(){if(this.snap){let t=this.width,e=this.height,i=this.left,s=this.left+t,h=this.top,a=this.top+e;const r=new Array(3).fill({display:!1,position:"",origin:"",lineLength:""}),u={vLine:[],hLine:[]};for(const R in u)u[R]=JSON.parse(JSON.stringify(r));const n={value:{x:[[],[],[]],y:[[],[],[]]},display:[],position:[]},l=this.$el.parentNode.childNodes,{groupWidth:d,groupHeight:m,groupLeft:o,groupTop:x,bln:L}=await this.getActiveAll(l);L||(t=d,e=m,i=o,s=o+d,h=x,a=x+m);for(const R of l)if(R.className!==void 0&&!R.className.split(" ").includes(this.classNameActive)&&R.getAttribute("data-is-snap")!==null&&R.getAttribute("data-is-snap")!=="false"){const[b,w,H]=this.formatTransformVal(R.style.transform);if((H-this.rotate)%90===0){const M=R.offsetWidth,c=R.offsetHeight,f=b+M,g=w+c,y=Math.abs(h+e/2-(w+c/2))<=this.snapTolerance,p=Math.abs(i+t/2-(b+M/2))<=this.snapTolerance,N=Math.abs(w-a)<=this.snapTolerance,v=Math.abs(g-a)<=this.snapTolerance,S=Math.abs(w-h)<=this.snapTolerance,j=Math.abs(g-h)<=this.snapTolerance,G=Math.abs(b-s)<=this.snapTolerance,K=Math.abs(f-s)<=this.snapTolerance,Q=Math.abs(b-i)<=this.snapTolerance,Z=Math.abs(f-i)<=this.snapTolerance;n.display=[N,v,S,j,y,y,G,K,Q,Z,p,p],n.position=[w,g,w,g,w+c/2,w+c/2,b,f,b,f,b+M/2,b+M/2],L&&(N&&(this.top=w-e,this.bottom=this.parentHeight-this.top-e,n.value.y[0].push(b,f,i,s)),S&&(this.top=w,this.bottom=this.parentHeight-this.top-e,n.value.y[0].push(b,f,i,s)),v&&(this.top=g-e,this.bottom=this.parentHeight-this.top-e,n.value.y[1].push(b,f,i,s)),j&&(this.top=g,this.bottom=this.parentHeight-this.top-e,n.value.y[1].push(b,f,i,s)),G&&(this.left=b-t,this.right=this.parentWidth-this.left-t,n.value.x[0].push(w,g,h,a)),Q&&(this.left=b,this.right=this.parentWidth-this.left-t,n.value.x[0].push(w,g,h,a)),K&&(this.left=f-t,this.right=this.parentWidth-this.left-t,n.value.x[1].push(w,g,h,a)),Z&&(this.left=f,this.right=this.parentWidth-this.left-t,n.value.x[1].push(w,g,h,a)),y&&(this.top=w+c/2-e/2,this.bottom=this.parentHeight-this.top-e,n.value.y[2].push(b,f,i,s)),p&&(this.left=b+M/2-t/2,this.right=this.parentWidth-this.left-t,n.value.x[2].push(w,g,h,a)),this.snapBorder&&(Math.abs(this.left-0)<=this.snapTolerance&&(this.left=0,this.right=this.parentWidth-this.left-t),Math.abs(this.right-0)<=this.snapTolerance&&(this.right=0,this.left=this.parentWidth-this.width-this.right),Math.abs(this.top-0)<=this.snapTolerance&&(this.top=0,this.bottom=this.parentHeight-this.top-e),Math.abs(this.bottom-0)<=this.snapTolerance&&(this.bottom=0,this.top=this.parentHeight-this.bottom-e)));let B=this.bounds;this.left=T(this.left,B.minLeft,B.maxLeft),this.top=T(this.top,B.minTop,B.maxTop),this.right=T(this.right,B.minRight,B.maxRight),this.bottom=T(this.bottom,B.minBottom,B.maxBottom);const P=[0,1,0,1,2,2,0,1,0,1,2,2];for(let z=0;z<=P.length;z++){const ut=z<6?"y":"x",D=z<6?"hLine":"vLine";if(n.display[z]){const{origin:dt,length:mt}=this.calcLineValues(n.value[ut][P[z]]);u[D][P[z]].display=n.display[z],u[D][P[z]].position=n.position[z]+"px",u[D][P[z]].origin=dt,u[D][P[z]].lineLength=mt}}}}this.$emit("refLineParams",u)}},calcLineValues(t){const e=Math.max(...t)-Math.min(...t)+"px",i=Math.min(...t)+"px";return{length:e,origin:i}},async getActiveAll(t){const e=[],i=[],s=[];let h=0,a=0,r=0,u=0;for(const d of t)d.className!==void 0&&d.className.split(" ").includes(this.classNameActive)&&e.push(d);const n=e.length;if(n>1){for(const d of e){const m=d.offsetLeft,o=m+d.offsetWidth,x=d.offsetTop,L=x+d.offsetHeight;i.push(m,o),s.push(x,L)}h=Math.max(...i)-Math.min(...i),a=Math.max(...s)-Math.min(...s),r=Math.min(...i),u=Math.min(...s)}return{groupWidth:h,groupHeight:a,groupLeft:r,groupTop:u,bln:n===1}},formatTransformVal(t){let[e,i,s=0]=t.match(/[\d|\.]+/g);return i===void 0&&(i=0),[Number(e),Number(i),s]}}},Mt=["onMousedown","onTouchstart"];function vt(t,e,i,s,h,a){return k(),_("div",{style:tt(a.style),class:J([{[i.classNameActive]:h.enabled,[i.classNameDragging]:h.dragging,[i.classNameResizing]:h.resizing,[i.classNameDraggable]:i.draggable,[i.classNameResizable]:i.resizable,[i.classNameRotating]:h.rotating,[i.classNameRotatable]:i.rotatable},i.className]),onMousedown:e[0]||(e[0]=(...r)=>a.elementMouseDown&&a.elementMouseDown(...r)),onTouchstart:e[1]||(e[1]=(...r)=>a.elementTouchDown&&a.elementTouchDown(...r))},[(k(!0),_(F,null,V(a.actualHandles,(r,u)=>(k(),_("div",{key:u,class:J([i.classNameHandle,i.classNameHandle+"-"+r]),style:tt(a.handleStyle(r,u)),onMousedown:et(n=>a.handleDown(r,n),["stop","prevent"]),onTouchstart:et(n=>a.handleTouchDown(r,n),["stop","prevent"])},[it(t.$slots,r,{},void 0,!0)],46,Mt))),128)),it(t.$slots,"default",{},void 0,!0)],38)}const St=pt(wt,[["render",vt],["__scopeId","data-v-a7d3ae59"]]),Tt={class:"screen-editor"},Rt={class:"asider"},Ht={class:"ul"},zt={class:"container1"},Lt=E("p",null,"banner",-1),Nt={class:"config"},Wt=ft({__name:"index",setup(t){const e=U(0),i=[{text:"图文",next:[{text:"推荐"},{text:"收藏"}],config:[{text:"页面设置"},{text:"图层管理"},{text:"页面管理"}]},{text:"单页",next:[{text:"推荐"},{text:"收藏"}],config:[{text:"页面设置"},{text:"图层管理"},{text:"页面管理"}]},{text:"装饰",next:[{text:"推荐"},{text:"收藏"}],config:[{text:"页面设置"},{text:"图层管理"},{text:"页面管理"}]}],s=st(()=>i[e.value].next),h=U(s.value[0].text),a=st(()=>i[e.value].config),r=U(a.value[0].text),u=(n,l)=>{console.log(n,l)};return(n,l)=>{const d=ot("el-tab-pane"),m=ot("el-tabs");return k(),_("div",Tt,[E("div",Rt,[E("div",Ht,[(k(),_(F,null,V(i,(o,x)=>E("li",{key:x,class:J({active:e.value===x})},q(o.text),3)),64))]),O(m,{modelValue:h.value,"onUpdate:modelValue":l[0]||(l[0]=o=>h.value=o),class:"demo-tabs",onTabClick:u},{default:X(()=>[(k(!0),_(F,null,V(s.value,(o,x)=>(k(),ht(d,{label:o.text,name:o.text,key:x},{default:X(()=>[nt(q(o.text),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])]),E("div",zt,[O(St,{parent:!0,w:414,height:100},{default:X(()=>[Lt]),_:1})]),E("div",Nt,[O(m,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=o=>r.value=o),class:"demo-tabs",onTabClick:u},{default:X(()=>[(k(!0),_(F,null,V(a.value,(o,x)=>(k(),ht(d,{label:o.text,name:o.text,key:x},{default:X(()=>[nt(q(o.text),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])])])}}});export{Wt as default};
