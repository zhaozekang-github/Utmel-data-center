import{b as e,h as l,bs as a,aS as t,aT as o,N as u,aW as s,aV as n,Y as r,d as i,aN as p,aM as d,a_ as v,a as c,r as m,bt as f,D as g,bu as b,o as h,c as y,m as k,w as _,l as V,n as x,g as C,ah as w,a4 as $,e as S,f as U,E,b3 as A,Q as F,ae as j,a2 as K,t as B,b9 as I,z as N,b2 as R,af as T,bi as L,_ as W,bv as z,G as M,s as O,J as q,bw as D,ag as H,O as P,ba as G}from"./index.BXZnkrMD.js";import{E as J,a as Q,b as Y,c as X,_ as Z,v as ee}from"./el-table-column.BA27jq_-.js";import"./el-tree.D1-ZRUQD.js";import{u as le,E as ae}from"./el-tooltip.DRY2Qbgd.js";import{E as te}from"./el-scrollbar.D7Yemm64.js";import"./el-tag.DuZhHOy2.js";import{E as oe,a as ue}from"./el-form-item.BxSDn5hW.js";import{E as se,a as ne}from"./el-tree-select.kZHmnJuP.js";import{d as re}from"./debounce.7APpE7z1.js";import{_ as ie}from"./_plugin-vue_export-helper.BCo6x5W8.js";const pe=e({valueKey:{type:String,default:"value"},modelValue:{type:[String,Number],default:""},debounce:{type:Number,default:300},placement:{type:l(String),values:["top","top-start","top-end","bottom","bottom-start","bottom-end"],default:"bottom-start"},fetchSuggestions:{type:l([Function,Array]),default:a},popperClass:{type:String,default:""},triggerOnFocus:{type:Boolean,default:!0},selectWhenUnmatched:{type:Boolean,default:!1},hideLoading:{type:Boolean,default:!1},teleported:le.teleported,highlightFirstItem:{type:Boolean,default:!1},fitInputWidth:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:String,...t(["ariaLabel"])}),de={[o]:e=>u(e),[s]:e=>u(e),[n]:e=>u(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,select:e=>r(e)},ve=["aria-expanded","aria-owns"],ce={key:0},me=["id","aria-selected","onClick"],fe="ElAutocomplete",ge=i({name:fe,inheritAttrs:!1});const be=O(W(i({...ge,props:pe,emits:de,setup(e,{expose:l,emit:a}){const t=e,u=p(),r=d(),i=v(),W=c("autocomplete"),O=m(),q=m(),D=m(),H=m();let P=!1,G=!1;const J=m([]),Q=m(-1),Y=m(""),X=m(!1),Z=m(!1),ee=m(!1),le=f(),oe=g((()=>r.style)),ue=g((()=>(J.value.length>0||ee.value)&&X.value)),se=g((()=>!t.hideLoading&&ee.value)),ne=g((()=>O.value?Array.from(O.value.$el.querySelectorAll("input")):[])),ie=()=>{ue.value&&(Y.value=`${O.value.$el.offsetWidth}px`)},pe=()=>{Q.value=-1},de=re((async e=>{if(Z.value)return;const l=e=>{ee.value=!1,Z.value||(z(e)?(J.value=e,Q.value=t.highlightFirstItem?0:-1):M(fe,"autocomplete suggestions must be an array"))};if(ee.value=!0,z(t.fetchSuggestions))l(t.fetchSuggestions);else{const a=await t.fetchSuggestions(e,l);z(a)&&l(a)}}),t.debounce),ge=e=>{const l=!!e;if(a(s,e),a(o,e),Z.value=!1,X.value||(X.value=l),!t.triggerOnFocus&&!e)return Z.value=!0,void(J.value=[]);de(e)},be=e=>{var l;i.value||("INPUT"!==(null==(l=e.target)?void 0:l.tagName)||ne.value.includes(document.activeElement))&&(X.value=!0)},he=e=>{a(n,e)},ye=e=>{G?G=!1:(X.value=!0,a("focus",e),t.triggerOnFocus&&!P&&de(String(t.modelValue)))},ke=e=>{setTimeout((()=>{var l;(null==(l=D.value)?void 0:l.isFocusInsideContent())?G=!0:(X.value&&Ce(),a("blur",e))}))},_e=()=>{X.value=!1,a(o,""),a("clear")},Ve=async()=>{ue.value&&Q.value>=0&&Q.value<J.value.length?we(J.value[Q.value]):t.selectWhenUnmatched&&(a("select",{value:t.modelValue}),J.value=[],Q.value=-1)},xe=e=>{ue.value&&(e.preventDefault(),e.stopPropagation(),Ce())},Ce=()=>{X.value=!1},we=async e=>{a(s,e[t.valueKey]),a(o,e[t.valueKey]),a("select",e),J.value=[],Q.value=-1},$e=e=>{if(!ue.value||ee.value)return;if(e<0)return void(Q.value=-1);e>=J.value.length&&(e=J.value.length-1);const l=q.value.querySelector(`.${W.be("suggestion","wrap")}`),a=l.querySelectorAll(`.${W.be("suggestion","list")} li`)[e],t=l.scrollTop,{offsetTop:o,scrollHeight:u}=a;o+u>t+l.clientHeight&&(l.scrollTop+=u),o<t&&(l.scrollTop-=u),Q.value=e,O.value.ref.setAttribute("aria-activedescendant",`${le.value}-item-${Q.value}`)};return b(H,(()=>{ue.value&&Ce()})),h((()=>{O.value.ref.setAttribute("role","textbox"),O.value.ref.setAttribute("aria-autocomplete","list"),O.value.ref.setAttribute("aria-controls","id"),O.value.ref.setAttribute("aria-activedescendant",`${le.value}-item-${Q.value}`),P=O.value.ref.hasAttribute("readonly")})),l({highlightedIndex:Q,activated:X,loading:ee,inputRef:O,popperRef:D,suggestions:J,handleSelect:we,handleKeyEnter:Ve,focus:()=>{var e;null==(e=O.value)||e.focus()},blur:()=>{var e;null==(e=O.value)||e.blur()},close:Ce,highlight:$e}),(e,l)=>(y(),k(C(ae),{ref_key:"popperRef",ref:D,visible:C(ue),placement:e.placement,"fallback-placements":["bottom-start","top-start"],"popper-class":[C(W).e("popper"),e.popperClass],teleported:e.teleported,"gpu-acceleration":!1,pure:"","manual-mode":"",effect:"light",trigger:"click",transition:`${C(W).namespace.value}-zoom-in-top`,persistent:"",role:"listbox",onBeforeShow:ie,onHide:pe},{content:_((()=>[V("div",{ref_key:"regionRef",ref:q,class:x([C(W).b("suggestion"),C(W).is("loading",C(se))]),style:w({[e.fitInputWidth?"width":"minWidth"]:Y.value,outline:"none"}),role:"region"},[$(C(te),{id:C(le),tag:"ul","wrap-class":C(W).be("suggestion","wrap"),"view-class":C(W).be("suggestion","list"),role:"listbox"},{default:_((()=>[C(se)?(y(),S("li",ce,[U(e.$slots,"loading",{},(()=>[$(C(E),{class:x(C(W).is("loading"))},{default:_((()=>[$(C(A))])),_:1},8,["class"])]))])):(y(!0),S(F,{key:1},j(J.value,((l,a)=>(y(),S("li",{id:`${C(le)}-item-${a}`,key:a,class:x({highlighted:Q.value===a}),role:"option","aria-selected":Q.value===a,onClick:e=>we(l)},[U(e.$slots,"default",{item:l},(()=>[K(B(l[e.valueKey]),1)]))],10,me)))),128))])),_:3},8,["id","wrap-class","view-class"])],6)])),default:_((()=>[V("div",{ref_key:"listboxRef",ref:H,class:x([C(W).b(),e.$attrs.class]),style:w(C(oe)),role:"combobox","aria-haspopup":"listbox","aria-expanded":C(ue),"aria-owns":C(le)},[$(C(I),N({ref_key:"inputRef",ref:O},C(u),{clearable:e.clearable,disabled:C(i),name:e.name,"model-value":e.modelValue,"aria-label":e.ariaLabel,onInput:ge,onChange:he,onFocus:ye,onBlur:ke,onClear:_e,onKeydown:[l[0]||(l[0]=R(T((e=>$e(Q.value-1)),["prevent"]),["up"])),l[1]||(l[1]=R(T((e=>$e(Q.value+1)),["prevent"]),["down"])),R(Ve,["enter"]),R(Ce,["tab"]),R(xe,["esc"])],onMousedown:be}),L({_:2},[e.$slots.prepend?{name:"prepend",fn:_((()=>[U(e.$slots,"prepend")]))}:void 0,e.$slots.append?{name:"append",fn:_((()=>[U(e.$slots,"append")]))}:void 0,e.$slots.prefix?{name:"prefix",fn:_((()=>[U(e.$slots,"prefix")]))}:void 0,e.$slots.suffix?{name:"suffix",fn:_((()=>[U(e.$slots,"suffix")]))}:void 0]),1040,["clearable","disabled","name","model-value","aria-label","onKeydown"])],14,ve)])),_:3},8,["visible","placement","popper-class","teleported","transition"]))}}),[["__file","autocomplete.vue"]])),he=ie(i({__name:"index",props:{tableConfig:{},hasAdd:{type:Boolean,default:!1}},emits:["confirmClick"],setup(e,{emit:l}){const a=e,t=l,o=a.tableConfig.pk??"id",u=!0===a.tableConfig.multiple,s=a.tableConfig.width??"100%";a.tableConfig.placeholder,m(!1);const n=m(!1),r=m(0),i=m([]),p=q({pageNum:1,pageSize:10}),d=m([]),v=m(),c=m(s);D(v,(e=>{c.value=`${e[0].contentRect.width}px`}));const f=m();for(const m of a.tableConfig.formItems)p[m.prop]=m.initialValue??"";function b(){var e;null==(e=f.value)||e.resetFields(),E(!0)}function V(){E(!0)}function w(){t("popAddClick",[])}function E(e=!1){n.value=!0,e&&(p.pageNum=1,p.pageSize=10),a.tableConfig.indexAction(p).then((e=>{r.value=e.total,i.value=e.list})).finally((()=>{n.value=!1}))}let A,B=m("1");const T=(e,l)=>{var a;"manufacturer"===(a=B.value)?d.value=[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}]:"supplier"===a&&(d.value=[{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}]);const t=e?d.value.filter(L(e)):d.value;clearTimeout(A),A=setTimeout((()=>{l(t)}),500)},L=e=>l=>0===l.value.toLowerCase().indexOf(e.toLowerCase()),W=m();for(const m of a.tableConfig.tableColumns)if("selection"===m.type){m.reserveSelection=!0;break}const z=m([]);function M(e,l){var a,t,o;u||0===e.length?z.value=e:(z.value=[e[e.length-1]],null==(a=W.value)||a.clearSelection(),null==(t=W.value)||t.toggleRowSelection(z.value[0],!0),null==(o=W.value)||o.setCurrentRow(z.value[0]))}function O(e){u&&(z.value=e)}function le(){E()}return g((()=>z.value.length>0?`已选(${z.value.length})`:"确 定")),m(!1),m(),h((()=>{E()})),(e,l)=>{const a=I,t=J,s=Q,d=se,v=be,c=ne,m=oe,g=G,h=ue,E=Y,A=X,L=Z,z=ee;return y(),S("div",null,[$(h,{ref_key:"formRef",ref:f,model:p,inline:!0},{default:_((()=>[(y(!0),S(F,null,j(e.tableConfig.formItems,(e=>(y(),k(m,{key:e.prop,label:e.label,prop:e.prop},{default:_((()=>{var l,o;return["input"===e.type?(y(),S(F,{key:0},["number"===(null==(l=e.attrs)?void 0:l.type)?(y(),k(a,N({key:0,modelValue:p[e.prop],"onUpdate:modelValue":l=>p[e.prop]=l,modelModifiers:{number:!0},ref_for:!0},e.attrs,{onKeyup:R(V,["enter"])}),null,16,["modelValue","onUpdate:modelValue"])):(y(),k(a,N({key:1,modelValue:p[e.prop],"onUpdate:modelValue":l=>p[e.prop]=l,ref_for:!0},e.attrs,{onKeyup:R(V,["enter"])}),null,16,["modelValue","onUpdate:modelValue"]))],64)):"select"===e.type?(y(),k(s,N({key:1,modelValue:p[e.prop],"onUpdate:modelValue":l=>p[e.prop]=l,ref_for:!0},e.attrs),{default:_((()=>[(y(!0),S(F,null,j(e.options,(e=>(y(),k(t,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1040,["modelValue","onUpdate:modelValue"])):"tree-select"===e.type?(y(),k(d,N({key:2,modelValue:p[e.prop],"onUpdate:modelValue":l=>p[e.prop]=l,ref_for:!0},e.attrs),null,16,["modelValue","onUpdate:modelValue"])):"autocomplete"===e.type?(y(),k(v,N({key:3,modelValue:p[e.prop],"onUpdate:modelValue":l=>p[e.prop]=l,ref_for:!0},e.attrs,{onFocus:l=>{return a=e.prop,void(B.value=a);var a},"fetch-suggestions":T}),null,16,["modelValue","onUpdate:modelValue","onFocus"])):"date-picker"===e.type?(y(),k(c,N({key:4,modelValue:p[e.prop],"onUpdate:modelValue":l=>p[e.prop]=l,ref_for:!0},e.attrs),null,16,["modelValue","onUpdate:modelValue"])):(y(),S(F,{key:5},["number"===(null==(o=e.attrs)?void 0:o.type)?(y(),k(a,N({key:0,modelValue:p[e.prop],"onUpdate:modelValue":l=>p[e.prop]=l,modelModifiers:{number:!0},ref_for:!0},e.attrs,{onKeyup:R(V,["enter"])}),null,16,["modelValue","onUpdate:modelValue"])):(y(),k(a,N({key:1,modelValue:p[e.prop],"onUpdate:modelValue":l=>p[e.prop]=l,ref_for:!0},e.attrs,{onKeyup:R(V,["enter"])}),null,16,["modelValue","onUpdate:modelValue"]))],64))]})),_:2},1032,["label","prop"])))),128)),$(m,null,{default:_((()=>[$(g,{type:"primary",icon:"search",onClick:V},{default:_((()=>[K(" 搜索 ")])),_:1}),$(g,{icon:"refresh",onClick:b},{default:_((()=>[K("重置")])),_:1})])),_:1})])),_:1},8,["model"]),e.hasAdd?(y(),k(g,{key:0,class:"addbtn",type:"primary",icon:"Apple",onClick:w},{default:_((()=>[K(" 添加 ")])),_:1})):H("",!0),P((y(),k(A,{ref_key:"tableRef",ref:W,data:i.value,border:!0,"max-height":250,"row-key":C(o),"highlight-current-row":!0,class:x({radio:!u}),onSelect:M,onSelectAll:O},{default:_((()=>[(y(!0),S(F,null,j(e.tableConfig.tableColumns,(l=>(y(),S(F,{key:l.prop},["custom"===l.templet?(y(),k(E,N({key:0,ref_for:!0},l),{default:_((a=>[U(e.$slots,l.slotName??l.prop,N({prop:l.prop,ref_for:!0},a),(()=>[K("??")]),!0)])),_:2},1040)):(y(),k(E,N({key:1,ref_for:!0},l),null,16))],64)))),128))])),_:3},8,["data","row-key","class"])),[[z,n.value]]),r.value>0?(y(),k(L,{key:1,total:r.value,"onUpdate:total":l[0]||(l[0]=e=>r.value=e),page:p.pageNum,"onUpdate:page":l[1]||(l[1]=e=>p.pageNum=e),limit:p.pageSize,"onUpdate:limit":l[2]||(l[2]=e=>p.pageSize=e),onPagination:le},null,8,["total","page","limit"])):H("",!0)])}}}),[["__scopeId","data-v-1292bdc7"]]);export{he as _};