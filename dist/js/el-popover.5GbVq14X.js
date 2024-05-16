import{a as e,u as t,E as o}from"./el-popper.BfVBGKk4.js";import{b as a,aW as r,d as p,A as s,a as i,r as l,g as n,B as f,c as d,m as b,w as c,e as u,n as v,t as m,Z as h,f as g,a1 as w,a8 as y,_ as x,cL as A,s as S}from"./index.Buyu3njk.js";import{d as B}from"./dropdown.Bis_u1sZ.js";const C=a({trigger:e.trigger,placement:B.placement,disabled:e.disabled,visible:t.visible,transition:t.transition,popperOptions:B.popperOptions,tabindex:B.tabindex,content:t.content,popperStyle:t.popperStyle,popperClass:t.popperClass,enterable:{...t.enterable,default:!0},effect:{...t.effect,default:"light"},teleported:t.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),N={"update:visible":e=>r(e),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},R=p({name:"ElPopover"}),$=p({...R,props:C,emits:N,setup(e,{expose:t,emit:a}){const r=e,p=s((()=>r["onUpdate:visible"])),x=i("popover"),A=l(),S=s((()=>{var e;return null==(e=n(A))?void 0:e.popperRef})),B=s((()=>[{width:f(r.width)},r.popperStyle])),C=s((()=>[x.b(),r.popperClass,{[x.m("plain")]:!!r.content}])),N=s((()=>r.transition===`${x.namespace.value}-fade-in-linear`)),R=()=>{a("before-enter")},$=()=>{a("before-leave")},_=()=>{a("after-enter")},U=()=>{a("update:visible",!1),a("after-leave")};return t({popperRef:S,hide:()=>{var e;null==(e=A.value)||e.hide()}}),(e,t)=>(d(),b(n(o),y({ref_key:"tooltipRef",ref:A},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":n(C),"popper-style":n(B),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":n(N),"onUpdate:visible":n(p),onBeforeShow:R,onBeforeHide:$,onShow:_,onHide:U}),{content:c((()=>[e.title?(d(),u("div",{key:0,class:v(n(x).e("title")),role:"title"},m(e.title),3)):h("v-if",!0),g(e.$slots,"default",{},(()=>[w(m(e.content),1)]))])),default:c((()=>[e.$slots.reference?g(e.$slots,"reference",{key:0}):h("v-if",!0)])),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});const _=(e,t)=>{const o=t.arg||t.value,a=null==o?void 0:o.popperRef;a&&(a.triggerRef=e)};const U=S(x($,[["__file","popover.vue"]]),{directive:A({mounted(e,t){_(e,t)},updated(e,t){_(e,t)}},"popover")});export{U as E};