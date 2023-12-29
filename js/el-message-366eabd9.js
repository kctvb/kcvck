import{A as e,be as s,aE as t,k as a,as as n,o,x as l,bj as r,bl as u,p,ac as d,a$ as i,aT as c,bb as m,c as f,aN as g,aA as y,al as v,m as b,ae as x,n as C,aH as h,F as N,bo as k,br as B,a7 as T,bq as _,aC as S}from"./index-3fcd27a8.js";import{b as w,d as E,a as I,aB as $,u as j,c as L,_ as M,w as z,H,n as O,X as D,V as F,aC as A,B as U,a7 as q,E as R,aD as Z,aE as P,F as V,ax as X,aF as G}from"./el-popper-0ae00969.js";const J=w({a11y:{type:Boolean,default:!0},locale:{type:E(Object)},size:I,button:{type:E(Object)},experimentalFeatures:{type:E(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:E(Object)},zIndex:Number,namespace:{type:String,default:"el"}}),K={};e({name:"ElConfigProvider",props:J,setup(e,{slots:a}){s((()=>e.message),(e=>{Object.assign(K,null!=e?e:{})}),{immediate:!0,deep:!0});const n=$(e);return()=>t(a,"default",{config:null==n?void 0:n.value})}});const Q=w({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),W=["textContent"],Y=e({name:"ElBadge"});const ee=z(M(e({...Y,props:Q,setup(e,{expose:s}){const g=e,y=j("badge"),v=a((()=>g.isDot?"":L(g.value)&&L(g.max)&&g.max<g.value?`${g.max}+`:`${g.value}`));return s({content:v}),(e,s)=>(n(),o("div",{class:d(i(y).b())},[t(e.$slots,"default"),l(f,{name:`${i(y).namespace.value}-zoom-in-center`,persisted:""},{default:r((()=>[u(p("sup",{class:d([i(y).e("content"),i(y).em("content",e.type),i(y).is("fixed",!!e.$slots.default),i(y).is("dot",e.isDot)]),textContent:c(i(v))},null,10,W),[[m,!e.hidden&&(i(v)||e.isDot)]])])),_:1},8,["name"])],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]])),se=["success","info","warning","error"],te=O({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:D?document.body:void 0}),ae=w({customClass:{type:String,default:te.customClass},center:{type:Boolean,default:te.center},dangerouslyUseHTMLString:{type:Boolean,default:te.dangerouslyUseHTMLString},duration:{type:Number,default:te.duration},icon:{type:H,default:te.icon},id:{type:String,default:te.id},message:{type:E([String,Object,Function]),default:te.message},onClose:{type:E(Function),required:!1},showClose:{type:Boolean,default:te.showClose},type:{type:String,values:se,default:te.type},offset:{type:Number,default:te.offset},zIndex:{type:Number,default:te.zIndex},grouping:{type:Boolean,default:te.grouping},repeatNum:{type:Number,default:te.repeatNum}}),ne=g([]),oe=e=>{const{prev:s}=(e=>{const s=ne.findIndex((s=>s.id===e)),t=ne[s];let a;return s>0&&(a=ne[s-1]),{current:t,prev:a}})(e);return s?s.vm.exposed.bottom.value:0},le=["id"],re=["innerHTML"],ue=e({name:"ElMessage"});var pe=M(e({...ue,props:ae,emits:{destroy:()=>!0},setup(e,{expose:g}){const B=e,{Close:T}=Z,{ns:_,zIndex:S}=F("message"),{currentZIndex:w,nextZIndex:E}=S,I=y(),$=y(!1),j=y(0);let L;const M=a((()=>B.type?"error"===B.type?"danger":B.type:"info")),z=a((()=>{const e=B.type;return{[_.bm("icon",e)]:e&&A[e]}})),H=a((()=>B.icon||A[B.type]||"")),O=a((()=>oe(B.id))),D=a((()=>((e,s)=>ne.findIndex((s=>s.id===e))>0?20:s)(B.id,B.offset)+O.value)),X=a((()=>j.value+D.value)),G=a((()=>({top:`${D.value}px`,zIndex:w.value})));function J(){0!==B.duration&&({stop:L}=P((()=>{Q()}),B.duration))}function K(){null==L||L()}function Q(){$.value=!1}return v((()=>{J(),E(),$.value=!0})),s((()=>B.repeatNum),(()=>{K(),J()})),U(document,"keydown",(function({code:e}){e===V.esc&&Q()})),q(I,(()=>{j.value=I.value.getBoundingClientRect().height})),g({visible:$,bottom:X,close:Q}),(e,s)=>(n(),b(f,{name:i(_).b("fade"),onBeforeLeave:e.onClose,onAfterLeave:s[0]||(s[0]=s=>e.$emit("destroy")),persisted:""},{default:r((()=>[u(p("div",{id:e.id,ref_key:"messageRef",ref:I,class:d([i(_).b(),{[i(_).m(e.type)]:e.type&&!e.icon},i(_).is("center",e.center),i(_).is("closable",e.showClose),e.customClass]),style:x(i(G)),role:"alert",onMouseenter:K,onMouseleave:J},[e.repeatNum>1?(n(),b(i(ee),{key:0,value:e.repeatNum,type:i(M),class:d(i(_).e("badge"))},null,8,["value","type","class"])):C("v-if",!0),i(H)?(n(),b(i(R),{key:1,class:d([i(_).e("icon"),i(z)])},{default:r((()=>[(n(),b(h(i(H))))])),_:1},8,["class"])):C("v-if",!0),t(e.$slots,"default",{},(()=>[e.dangerouslyUseHTMLString?(n(),o(N,{key:1},[C(" Caution here, message could've been compromised, never use user's input as message "),p("p",{class:d(i(_).e("content")),innerHTML:e.message},null,10,re)],2112)):(n(),o("p",{key:0,class:d(i(_).e("content"))},c(e.message),3))])),e.showClose?(n(),b(i(R),{key:2,class:d(i(_).e("closeBtn")),onClick:k(Q,["stop"])},{default:r((()=>[l(i(T))])),_:1},8,["class","onClick"])):C("v-if",!0)],46,le),[[m,$.value]])])),_:3},8,["name","onBeforeLeave"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let de=1;const ie=e=>{const s=!e||B(e)||T(e)||_(e)?{message:e}:e,t={...te,...s};if(t.appendTo){if(B(t.appendTo)){let e=document.querySelector(t.appendTo);X(e)||(e=document.body),t.appendTo=e}}else t.appendTo=document.body;return t},ce=({appendTo:e,...s},t)=>{const a="message_"+de++,n=s.onClose,o=document.createElement("div"),r={...s,id:a,onClose:()=>{null==n||n(),(e=>{const s=ne.indexOf(e);if(-1===s)return;ne.splice(s,1);const{handler:t}=e;t.close()})(i)},onDestroy:()=>{S(null,o)}},u=l(pe,r,_(r.message)||T(r.message)?{default:_(r.message)?r.message:()=>r.message}:null);u.appContext=t||me._context,S(u,o),e.appendChild(o.firstElementChild);const p=u.component,d={close:()=>{p.exposed.visible.value=!1}},i={id:a,vnode:u,vm:p,handler:d,props:u.component.props};return i},me=(e={},s)=>{if(!D)return{close:()=>{}};if(L(K.max)&&ne.length>=K.max)return{close:()=>{}};const t=ie(e);if(t.grouping&&ne.length){const e=ne.find((({vnode:e})=>{var s;return(null==(s=e.props)?void 0:s.message)===t.message}));if(e)return e.props.repeatNum+=1,e.props.type=t.type,e.handler}const a=ce(t,s);return ne.push(a),a.handler};se.forEach((e=>{me[e]=(s={},t)=>{const a=ie(s);return me({...a,type:e},t)}})),me.closeAll=function(e){for(const s of ne)e&&e!==s.props.type||s.handler.close()},me._context=null;const fe=G(me,"$message");export{fe as E};
