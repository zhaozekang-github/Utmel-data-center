import{k as e,A as l,an as t,j as a,cA as o,cw as s,z as n,_ as i,d as r,a as u,bT as p,g as d,S as c,b6 as v,ag as f,V as m,W as h,a3 as b,c as g,e as y,f as S,l as x,t as C,n as O,aG as w,r as I,o as V,al as T,Z as E,C as R,c_ as k,b0 as B,u as M,R as D,N as L,Q as $,cW as F,bR as z,c$ as W,O as _,a5 as K,x as j,bb as A,aX as N,K as P,d0 as H,U,a6 as G,d1 as Q,I as q,G as X,b as J,D as Y,h as Z,i as ee,cU as le,a2 as te,cV as ae,F as oe,$ as se,E as ne,p as ie,ap as re,bd as ue,Y as pe,w as de,L as ce,M as ve,m as fe,X as me,d2 as he,q as be,d3 as ge,s as ye,v as Se}from"./index.Buyu3njk.js";import{u as xe,b as Ce,E as Oe}from"./el-popper.BfVBGKk4.js";import{E as we}from"./el-scrollbar.Cu2msVTx.js";import{t as Ie,E as Ve}from"./index.DdOiTB_p.js";import{e as Te}from"./strings.DYMDfDiy.js";import{i as Ee}from"./isEqual.ZGBuoL13.js";import{d as Re}from"./debounce.BSlwRXJD.js";import{b as ke}from"./_baseIteratee.BtCZdpFB.js";import{C as Be}from"./index.BtWKdmvV.js";import{c as Me}from"./castArray.N1xzF4QI.js";const De=Symbol("ElSelectGroup"),Le=Symbol("ElSelect");const $e=r({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(i){const r=u("select"),h=p(),b=l((()=>[r.be("dropdown","item"),r.is("disabled",d(x)),r.is("selected",d(S)),r.is("hovering",d(V))])),g=c({index:-1,groupDisabled:!1,visible:!0,hover:!1}),{currentLabel:y,itemSelected:S,isDisabled:x,select:C,hoverItem:O,updateOption:w}=function(i,r){const u=e(Le),p=e(De,{disabled:!1}),d=l((()=>u.props.multiple?b(u.props.modelValue,i.value):b([u.props.modelValue],i.value))),c=l((()=>{if(u.props.multiple){const e=u.props.modelValue||[];return!d.value&&e.length>=u.props.multipleLimit&&u.props.multipleLimit>0}return!1})),v=l((()=>i.label||(t(i.value)?"":i.value))),f=l((()=>i.value||i.label||"")),m=l((()=>i.disabled||r.groupDisabled||c.value)),h=a(),b=(e=[],l)=>{if(t(i.value)){const t=u.props.valueKey;return e&&e.some((e=>o(s(e,t))===s(l,t)))}return e&&e.includes(l)};return n((()=>v.value),(()=>{i.created||u.props.remote||u.setSelected()})),n((()=>i.value),((e,l)=>{const{remote:a,valueKey:o}=u.props;if(Ee(e,l)||(u.onOptionDestroy(l,h.proxy),u.onOptionCreate(h.proxy)),!i.created&&!a){if(o&&t(e)&&t(l)&&e[o]===l[o])return;u.setSelected()}})),n((()=>p.disabled),(()=>{r.groupDisabled=p.disabled}),{immediate:!0}),{select:u,currentLabel:v,currentValue:f,itemSelected:d,isDisabled:m,hoverItem:()=>{i.disabled||p.disabled||(u.states.hoveringIndex=u.optionsArray.indexOf(h.proxy))},updateOption:e=>{const l=new RegExp(Te(e),"i");r.visible=l.test(v.value)||i.created}}}(i,g),{visible:I,hover:V}=v(g),T=a().proxy;return C.onOptionCreate(T),f((()=>{const e=T.value,{selected:l}=C.states,t=(C.props.multiple?l:[l]).some((e=>e.value===T.value));m((()=>{C.states.cachedOptions.get(e)!==T||t||C.states.cachedOptions.delete(e)})),C.onOptionDestroy(e,T)})),{ns:r,id:h,containerKls:b,currentLabel:y,itemSelected:S,isDisabled:x,select:C,hoverItem:O,updateOption:w,visible:I,hover:V,selectOptionClick:function(){!0!==i.disabled&&!0!==g.groupDisabled&&C.handleOptionSelect(T)},states:g}}}),Fe=["id","aria-disabled","aria-selected"];var ze=i($e,[["render",function(e,l,t,a,o,s){return h((g(),y("li",{id:e.id,class:O(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:l[0]||(l[0]=(...l)=>e.hoverItem&&e.hoverItem(...l)),onClick:l[1]||(l[1]=w(((...l)=>e.selectOptionClick&&e.selectOptionClick(...l)),["stop"]))},[S(e.$slots,"default",{},(()=>[x("span",null,C(e.currentLabel),1)]))],42,Fe)),[[b,e.visible]])}],["__file","option.vue"]]);var We=i(r({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const t=e(Le),a=u("select"),o=l((()=>t.props.popperClass)),s=l((()=>t.props.multiple)),n=l((()=>t.props.fitInputWidth)),i=I("");function r(){var e;i.value=`${null==(e=t.selectRef)?void 0:e.offsetWidth}px`}return V((()=>{r(),T(t.selectRef,r)})),{ns:a,minWidth:i,popperClass:o,isMultiple:s,isFitInputWidth:n}}}),[["render",function(e,l,t,a,o,s){return g(),y("div",{class:O([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:R({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(g(),y("div",{key:0,class:O(e.ns.be("dropdown","header"))},[S(e.$slots,"header")],2)):E("v-if",!0),S(e.$slots,"default"),e.$slots.footer?(g(),y("div",{key:1,class:O(e.ns.be("dropdown","footer"))},[S(e.$slots,"footer")],2)):E("v-if",!0)],6)}],["__file","select-dropdown.vue"]]);const _e=(e,a)=>{const{t:i}=M(),r=p(),d=u("select"),v=u("input"),f=c({inputValue:"",options:new Map,cachedOptions:new Map,disabledOptions:new Map,optionValues:[],selected:e.multiple?[]:{},selectionWidth:0,calculatorWidth:0,collapseItemWidth:0,selectedLabel:"",hoveringIndex:-1,previousQuery:null,inputHovering:!1,menuVisibleOnFocus:!1,isBeforeHide:!1}),h=I(null),b=I(null),g=I(null),y=I(null),S=I(null),x=I(null),C=I(null),O=I(null),w=I(null),E=I(null),R=I(null),X=I(null),{wrapperRef:J,isFocused:Y,handleFocus:Z,handleBlur:ee}=D(S,{afterFocus(){e.automaticDropdown&&!le.value&&(le.value=!0,f.menuVisibleOnFocus=!0)},beforeBlur(e){var l,t;return(null==(l=g.value)?void 0:l.isFocusInsideContent(e))||(null==(t=y.value)?void 0:t.isFocusInsideContent(e))},afterBlur(){le.value=!1,f.menuVisibleOnFocus=!1}}),le=I(!1),te=I(),{form:ae,formItem:oe}=L(),{inputId:se}=$(e,{formItemContext:oe}),{valueOnClear:ne,isEmptyValue:ie}=F(e),re=l((()=>e.disabled||(null==ae?void 0:ae.disabled))),ue=l((()=>e.multiple?z(e.modelValue)&&e.modelValue.length>0:!ie(e.modelValue))),pe=l((()=>e.clearable&&!re.value&&f.inputHovering&&ue.value)),de=l((()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon)),ce=l((()=>d.is("reverse",de.value&&le.value))),ve=l((()=>(null==oe?void 0:oe.validateState)||"")),fe=l((()=>W[ve.value])),me=l((()=>e.remote?300:0)),he=l((()=>e.loading?e.loadingText||i("el.select.loading"):!(e.remote&&!f.inputValue&&0===f.options.size)&&(e.filterable&&f.inputValue&&f.options.size>0&&0===be.value?e.noMatchText||i("el.select.noMatch"):0===f.options.size?e.noDataText||i("el.select.noData"):null))),be=l((()=>ge.value.filter((e=>e.visible)).length)),ge=l((()=>{const e=Array.from(f.options.values()),l=[];return f.optionValues.forEach((t=>{const a=e.findIndex((e=>e.value===t));a>-1&&l.push(e[a])})),l.length>=e.length?l:e})),ye=l((()=>Array.from(f.cachedOptions.values()))),Se=l((()=>{const l=ge.value.filter((e=>!e.created)).some((e=>e.currentLabel===f.inputValue));return e.filterable&&e.allowCreate&&""!==f.inputValue&&!l})),xe=()=>{e.filterable&&B(e.filterMethod)||e.filterable&&e.remote&&B(e.remoteMethod)||ge.value.forEach((e=>{var l;null==(l=e.updateOption)||l.call(e,f.inputValue)}))},Ce=_(),Oe=l((()=>["small"].includes(Ce.value)?"small":"default")),we=l({get:()=>le.value&&!1!==he.value,set(e){le.value=e}}),Ie=l((()=>z(e.modelValue)?0===e.modelValue.length&&!f.inputValue:!e.filterable||!f.inputValue)),Ve=l((()=>{var l;const t=null!=(l=e.placeholder)?l:i("el.select.placeholder");return e.multiple||!ue.value?t:f.selectedLabel}));n((()=>e.modelValue),((l,t)=>{e.multiple&&e.filterable&&!e.reserveKeyword&&(f.inputValue="",Te("")),Me(),!Ee(l,t)&&e.validateEvent&&(null==oe||oe.validate("change").catch((e=>K())))}),{flush:"post",deep:!0}),n((()=>le.value),(e=>{e?Te(f.inputValue):(f.inputValue="",f.previousQuery=null,f.isBeforeHide=!0),a("visible-change",e)})),n((()=>f.options.entries()),(()=>{var l;if(!j)return;const t=(null==(l=h.value)?void 0:l.querySelectorAll("input"))||[];(e.filterable||e.defaultFirstOption||A(e.modelValue))&&Array.from(t).includes(document.activeElement)||Me(),e.defaultFirstOption&&(e.filterable||e.remote)&&be.value&&Be()}),{flush:"post"}),n((()=>f.hoveringIndex),(e=>{N(e)&&e>-1?te.value=ge.value[e]||{}:te.value={},ge.value.forEach((e=>{e.hover=te.value===e}))})),P((()=>{f.isBeforeHide||xe()}));const Te=l=>{f.previousQuery!==l&&(f.previousQuery=l,e.filterable&&B(e.filterMethod)?e.filterMethod(l):e.filterable&&e.remote&&B(e.remoteMethod)&&e.remoteMethod(l),e.defaultFirstOption&&(e.filterable||e.remote)&&be.value?m(Be):m(Le))},Be=()=>{const e=ge.value.filter((e=>e.visible&&!e.disabled&&!e.states.groupDisabled)),l=e.find((e=>e.created)),t=e[0];f.hoveringIndex=He(ge.value,l||t)},Me=()=>{if(!e.multiple){const l=De(e.modelValue);return f.selectedLabel=l.currentLabel,void(f.selected=l)}f.selectedLabel="";const l=[];z(e.modelValue)&&e.modelValue.forEach((e=>{l.push(De(e))})),f.selected=l},De=l=>{let t;const a="object"===H(l).toLowerCase(),o="null"===H(l).toLowerCase(),n="undefined"===H(l).toLowerCase();for(let i=f.cachedOptions.size-1;i>=0;i--){const o=ye.value[i];if(a?s(o.value,e.valueKey)===s(l,e.valueKey):o.value===l){t={value:l,currentLabel:o.currentLabel,get isDisabled(){return o.isDisabled}};break}}if(t)return t;return{value:l,currentLabel:a?l.label:o||n?"":l}},Le=()=>{e.multiple?f.hoveringIndex=ge.value.findIndex((e=>f.selected.some((l=>el(l)===el(e))))):f.hoveringIndex=ge.value.findIndex((e=>el(e)===el(f.selected)))},$e=()=>{f.calculatorWidth=x.value.getBoundingClientRect().width},Fe=()=>{var e,l;null==(l=null==(e=g.value)?void 0:e.updatePopper)||l.call(e)},ze=()=>{var e,l;null==(l=null==(e=y.value)?void 0:e.updatePopper)||l.call(e)},We=()=>{f.inputValue.length>0&&!le.value&&(le.value=!0),Te(f.inputValue)},_e=l=>{if(f.inputValue=l.target.value,!e.remote)return We();Ke()},Ke=Re((()=>{We()}),me.value),je=l=>{Ee(e.modelValue,l)||a(q,l)},Ae=e=>function(e,l,t){var a=null==e?0:e.length;if(!a)return-1;var o=a-1;return function(e,l,t,a){e.length;for(var o=t+1;o--;)if(l(e[o],o,e))return o;return-1}(e,ke(l),o)}(e,(e=>!f.disabledOptions.has(e))),Ne=l=>{l.stopPropagation();const t=e.multiple?[]:ne.value;if(e.multiple)for(const e of f.selected)e.isDisabled&&t.push(e.value);a(U,t),je(t),f.hoveringIndex=-1,le.value=!1,a("clear"),Je()},Pe=l=>{if(e.multiple){const t=(e.modelValue||[]).slice(),o=He(t,l.value);o>-1?t.splice(o,1):(e.multipleLimit<=0||t.length<e.multipleLimit)&&t.push(l.value),a(U,t),je(t),l.created&&Te(""),e.filterable&&!e.reserveKeyword&&(f.inputValue="")}else a(U,l.value),je(l.value),le.value=!1;Je(),le.value||m((()=>{Ue(l)}))},He=(l=[],a)=>{if(!t(a))return l.indexOf(a);const n=e.valueKey;let i=-1;return l.some(((e,l)=>o(s(e,n))===s(a,n)&&(i=l,!0))),i},Ue=e=>{var l,t,a,o,s;const n=z(e)?e[0]:e;let i=null;if(null==n?void 0:n.value){const e=ge.value.filter((e=>e.value===n.value));e.length>0&&(i=e[0].$el)}if(g.value&&i){const e=null==(o=null==(a=null==(t=null==(l=g.value)?void 0:l.popperRef)?void 0:t.contentRef)?void 0:a.querySelector)?void 0:o.call(a,`.${d.be("dropdown","wrap")}`);e&&Q(e,i)}null==(s=X.value)||s.handleScroll()},{handleCompositionStart:Ge,handleCompositionUpdate:Qe,handleCompositionEnd:qe}=function(e){const l=I(!1);return{handleCompositionStart:()=>{l.value=!0},handleCompositionUpdate:e=>{const t=e.target.value,a=t[t.length-1]||"";l.value=!k(a)},handleCompositionEnd:t=>{l.value&&(l.value=!1,B(e)&&e(t))}}}((e=>_e(e))),Xe=l((()=>{var e,l;return null==(l=null==(e=g.value)?void 0:e.popperRef)?void 0:l.contentRef})),Je=()=>{var e;null==(e=S.value)||e.focus()},Ye=e=>{if(le.value=!1,Y.value){const l=new FocusEvent("focus",e);m((()=>ee(l)))}},Ze=()=>{re.value||(f.menuVisibleOnFocus?f.menuVisibleOnFocus=!1:le.value=!le.value)},el=l=>t(l.value)?s(l.value,e.valueKey):l.value,ll=l((()=>ge.value.filter((e=>e.visible)).every((e=>e.disabled)))),tl=l((()=>e.multiple?e.collapseTags?f.selected.slice(0,e.maxCollapseTags):f.selected:[])),al=l((()=>e.multiple&&e.collapseTags?f.selected.slice(e.maxCollapseTags):[])),ol=e=>{if(le.value){if(0!==f.options.size&&0!==be.value&&!ll.value){"next"===e?(f.hoveringIndex++,f.hoveringIndex===f.options.size&&(f.hoveringIndex=0)):"prev"===e&&(f.hoveringIndex--,f.hoveringIndex<0&&(f.hoveringIndex=f.options.size-1));const l=ge.value[f.hoveringIndex];!0!==l.disabled&&!0!==l.states.groupDisabled&&l.visible||ol(e),m((()=>Ue(te.value)))}}else le.value=!0},sl=l((()=>{const l=(()=>{if(!b.value)return 0;const e=window.getComputedStyle(b.value);return Number.parseFloat(e.gap||"6px")})();return{maxWidth:`${R.value&&1===e.maxCollapseTags?f.selectionWidth-f.collapseItemWidth-l:f.selectionWidth}px`}})),nl=l((()=>({maxWidth:`${f.selectionWidth}px`}))),il=l((()=>({width:`${Math.max(f.calculatorWidth,11)}px`})));return e.multiple&&!z(e.modelValue)&&a(U,[]),!e.multiple&&z(e.modelValue)&&a(U,""),T(b,(()=>{f.selectionWidth=b.value.getBoundingClientRect().width})),T(x,$e),T(w,Fe),T(J,Fe),T(E,ze),T(R,(()=>{f.collapseItemWidth=R.value.getBoundingClientRect().width})),V((()=>{Me()})),{inputId:se,contentId:r,nsSelect:d,nsInput:v,states:f,isFocused:Y,expanded:le,optionsArray:ge,hoverOption:te,selectSize:Ce,filteredOptionsCount:be,resetCalculatorWidth:$e,updateTooltip:Fe,updateTagTooltip:ze,debouncedOnInputChange:Ke,onInput:_e,deletePrevTag:l=>{if(e.multiple&&l.code!==G.delete&&l.target.value.length<=0){const l=e.modelValue.slice(),t=Ae(l);if(t<0)return;l.splice(t,1),a(U,l),je(l)}},deleteTag:(l,t)=>{const o=f.selected.indexOf(t);if(o>-1&&!re.value){const l=e.modelValue.slice();l.splice(o,1),a(U,l),je(l),a("remove-tag",t.value)}l.stopPropagation(),Je()},deleteSelected:Ne,handleOptionSelect:Pe,scrollToOption:Ue,hasModelValue:ue,shouldShowPlaceholder:Ie,currentPlaceholder:Ve,showClose:pe,iconComponent:de,iconReverse:ce,validateState:ve,validateIcon:fe,showNewOption:Se,updateOptions:xe,collapseTagSize:Oe,setSelected:Me,selectDisabled:re,emptyText:he,handleCompositionStart:Ge,handleCompositionUpdate:Qe,handleCompositionEnd:qe,onOptionCreate:e=>{f.options.set(e.value,e),f.cachedOptions.set(e.value,e),e.disabled&&f.disabledOptions.set(e.value,e)},onOptionDestroy:(e,l)=>{f.options.get(e)===l&&f.options.delete(e)},handleMenuEnter:()=>{f.isBeforeHide=!1,m((()=>Ue(f.selected)))},handleFocus:Z,focus:Je,blur:()=>{Ye()},handleBlur:ee,handleClearClick:e=>{Ne(e)},handleClickOutside:Ye,handleEsc:()=>{f.inputValue.length>0?f.inputValue="":le.value=!1},toggleMenu:Ze,selectOption:()=>{le.value?ge.value[f.hoveringIndex]&&Pe(ge.value[f.hoveringIndex]):Ze()},getValueKey:el,navigateOptions:ol,dropdownMenuVisible:we,showTagList:tl,collapseTagList:al,tagStyle:sl,collapseTagStyle:nl,inputStyle:il,popperRef:Xe,inputRef:S,tooltipRef:g,tagTooltipRef:y,calculatorRef:x,prefixRef:C,suffixRef:O,selectRef:h,wrapperRef:J,selectionRef:b,scrollbarRef:X,menuRef:w,tagMenuRef:E,collapseItemRef:R}};var Ke=r({name:"ElOptions",setup(l,{slots:t}){const a=e(Le);let o=[];return()=>{var e,l;const s=null==(e=t.default)?void 0:e.call(t),n=[];return s.length&&function e(l){z(l)&&l.forEach((l=>{var t,a,o,s;const i=null==(t=(null==l?void 0:l.type)||{})?void 0:t.name;"ElOptionGroup"===i?e(X(l.children)||z(l.children)||!B(null==(a=l.children)?void 0:a.default)?l.children:null==(o=l.children)?void 0:o.default()):"ElOption"===i?n.push(null==(s=l.props)?void 0:s.value):z(l.children)&&e(l.children)}))}(null==(l=s[0])?void 0:l.children),Ee(n,o)||(o=n,a&&(a.states.optionValues=n)),s}}});const je="ElSelect",Ae=r({name:je,componentName:je,components:{ElInput:se,ElSelectMenu:We,ElOption:ze,ElOptions:Ke,ElTag:Ve,ElScrollbar:we,ElTooltip:Oe,ElIcon:ne},directives:{ClickOutside:Be},props:J({name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:Y,effect:{type:Z(String),default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:Z(Object),default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:xe.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:ee,default:le},fitInputWidth:Boolean,suffixIcon:{type:ee,default:te},tagType:{...Ie.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,placement:{type:Z(String),values:Ce,default:"bottom-start"},fallbackPlacements:{type:Z(Array),default:["bottom-start","top-start","right","left"]},...ae,...oe(["ariaLabel"])}),emits:[U,q,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:l}){const t=_e(e,l);return ie(Le,c({props:e,states:t.states,optionsArray:t.optionsArray,handleOptionSelect:t.handleOptionSelect,onOptionCreate:t.onOptionCreate,onOptionDestroy:t.onOptionDestroy,selectRef:t.selectRef,setSelected:t.setSelected})),{...t}}}),Ne=["id","disabled","autocomplete","readonly","aria-activedescendant","aria-controls","aria-expanded","aria-label"],Pe=["textContent"];var He=i(Ae,[["render",function(e,l,t,a,o,s){const n=re("el-tag"),i=re("el-tooltip"),r=re("el-icon"),u=re("el-option"),p=re("el-options"),d=re("el-scrollbar"),c=re("el-select-menu"),v=ue("click-outside");return h((g(),y("div",{ref:"selectRef",class:O([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),onMouseenter:l[16]||(l[16]=l=>e.states.inputHovering=!0),onMouseleave:l[17]||(l[17]=l=>e.states.inputHovering=!1),onClick:l[18]||(l[18]=w(((...l)=>e.toggleMenu&&e.toggleMenu(...l)),["prevent","stop"]))},[pe(i,{ref:"tooltipRef",visible:e.dropdownMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onBeforeShow:e.handleMenuEnter,onHide:l[15]||(l[15]=l=>e.states.isBeforeHide=!1)},{default:de((()=>{var t;return[x("div",{ref:"wrapperRef",class:O([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)])},[e.$slots.prefix?(g(),y("div",{key:0,ref:"prefixRef",class:O(e.nsSelect.e("prefix"))},[S(e.$slots,"prefix")],2)):E("v-if",!0),x("div",{ref:"selectionRef",class:O([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.states.selected.length)])},[e.multiple?S(e.$slots,"tag",{key:0},(()=>[(g(!0),y(ce,null,ve(e.showTagList,(l=>(g(),y("div",{key:e.getValueKey(l),class:O(e.nsSelect.e("selected-item"))},[pe(n,{closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:R(e.tagStyle),onClose:t=>e.deleteTag(t,l)},{default:de((()=>[x("span",{class:O(e.nsSelect.e("tags-text"))},C(l.currentLabel),3)])),_:2},1032,["closable","size","type","style","onClose"])],2)))),128)),e.collapseTags&&e.states.selected.length>e.maxCollapseTags?(g(),fe(i,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:de((()=>[x("div",{ref:"collapseItemRef",class:O(e.nsSelect.e("selected-item"))},[pe(n,{closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:R(e.collapseTagStyle)},{default:de((()=>[x("span",{class:O(e.nsSelect.e("tags-text"))}," + "+C(e.states.selected.length-e.maxCollapseTags),3)])),_:1},8,["size","type","style"])],2)])),content:de((()=>[x("div",{ref:"tagMenuRef",class:O(e.nsSelect.e("selection"))},[(g(!0),y(ce,null,ve(e.collapseTagList,(l=>(g(),y("div",{key:e.getValueKey(l),class:O(e.nsSelect.e("selected-item"))},[pe(n,{class:"in-tooltip",closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",onClose:t=>e.deleteTag(t,l)},{default:de((()=>[x("span",{class:O(e.nsSelect.e("tags-text"))},C(l.currentLabel),3)])),_:2},1032,["closable","size","type","onClose"])],2)))),128))],2)])),_:1},8,["disabled","effect","teleported"])):E("v-if",!0)])):E("v-if",!0),e.selectDisabled?E("v-if",!0):(g(),y("div",{key:1,class:O([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[h(x("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":l[0]||(l[0]=l=>e.states.inputValue=l),type:"text",class:O([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:R(e.inputStyle),role:"combobox",readonly:!e.filterable,spellcheck:"false","aria-activedescendant":(null==(t=e.hoverOption)?void 0:t.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropdownMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:l[1]||(l[1]=(...l)=>e.handleFocus&&e.handleFocus(...l)),onBlur:l[2]||(l[2]=(...l)=>e.handleBlur&&e.handleBlur(...l)),onKeydown:[l[3]||(l[3]=me(w((l=>e.navigateOptions("next")),["stop","prevent"]),["down"])),l[4]||(l[4]=me(w((l=>e.navigateOptions("prev")),["stop","prevent"]),["up"])),l[5]||(l[5]=me(w(((...l)=>e.handleEsc&&e.handleEsc(...l)),["stop","prevent"]),["esc"])),l[6]||(l[6]=me(w(((...l)=>e.selectOption&&e.selectOption(...l)),["stop","prevent"]),["enter"])),l[7]||(l[7]=me(w(((...l)=>e.deletePrevTag&&e.deletePrevTag(...l)),["stop"]),["delete"]))],onCompositionstart:l[8]||(l[8]=(...l)=>e.handleCompositionStart&&e.handleCompositionStart(...l)),onCompositionupdate:l[9]||(l[9]=(...l)=>e.handleCompositionUpdate&&e.handleCompositionUpdate(...l)),onCompositionend:l[10]||(l[10]=(...l)=>e.handleCompositionEnd&&e.handleCompositionEnd(...l)),onInput:l[11]||(l[11]=(...l)=>e.onInput&&e.onInput(...l)),onClick:l[12]||(l[12]=w(((...l)=>e.toggleMenu&&e.toggleMenu(...l)),["stop"]))},null,46,Ne),[[he,e.states.inputValue]]),e.filterable?(g(),y("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:O(e.nsSelect.e("input-calculator")),textContent:C(e.states.inputValue)},null,10,Pe)):E("v-if",!0)],2)),e.shouldShowPlaceholder?(g(),y("div",{key:2,class:O([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[x("span",null,C(e.currentPlaceholder),1)],2)):E("v-if",!0)],2),x("div",{ref:"suffixRef",class:O(e.nsSelect.e("suffix"))},[e.iconComponent&&!e.showClose?(g(),fe(r,{key:0,class:O([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:de((()=>[(g(),fe(be(e.iconComponent)))])),_:1},8,["class"])):E("v-if",!0),e.showClose&&e.clearIcon?(g(),fe(r,{key:1,class:O([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:de((()=>[(g(),fe(be(e.clearIcon)))])),_:1},8,["class","onClick"])):E("v-if",!0),e.validateState&&e.validateIcon?(g(),fe(r,{key:2,class:O([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:de((()=>[(g(),fe(be(e.validateIcon)))])),_:1},8,["class"])):E("v-if",!0)],2)],2)]})),content:de((()=>[pe(c,{ref:"menuRef"},{default:de((()=>[e.$slots.header?(g(),y("div",{key:0,class:O(e.nsSelect.be("dropdown","header")),onClick:l[13]||(l[13]=w((()=>{}),["stop"]))},[S(e.$slots,"header")],2)):E("v-if",!0),h(pe(d,{id:e.contentId,ref:"scrollbarRef",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:O([e.nsSelect.is("empty",0===e.filteredOptionsCount)]),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:de((()=>[e.showNewOption?(g(),fe(u,{key:0,value:e.states.inputValue,created:!0},null,8,["value"])):E("v-if",!0),pe(p,null,{default:de((()=>[S(e.$slots,"default")])),_:3})])),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[b,e.states.options.size>0&&!e.loading]]),e.$slots.loading&&e.loading?(g(),y("div",{key:1,class:O(e.nsSelect.be("dropdown","loading"))},[S(e.$slots,"loading")],2)):e.loading||0===e.filteredOptionsCount?(g(),y("div",{key:2,class:O(e.nsSelect.be("dropdown","empty"))},[S(e.$slots,"empty",{},(()=>[x("span",null,C(e.emptyText),1)]))],2)):E("v-if",!0),e.$slots.footer?(g(),y("div",{key:3,class:O(e.nsSelect.be("dropdown","footer")),onClick:l[14]||(l[14]=w((()=>{}),["stop"]))},[S(e.$slots,"footer")],2)):E("v-if",!0)])),_:3},512)])),_:3},8,["visible","placement","teleported","popper-class","popper-options","fallback-placements","effect","transition","persistent","onBeforeShow"])],34)),[[v,e.handleClickOutside,e.popperRef]])}],["__file","select.vue"]]);var Ue=i(r({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const t=u("select"),o=I(null),s=a(),n=I([]);ie(De,c({...v(e)}));const i=l((()=>n.value.some((e=>!0===e.visible)))),r=e=>{const l=Me(e),t=[];return l.forEach((e=>{var l,a;(e=>{var l,t;return"ElOption"===(null==(l=e.type)?void 0:l.name)&&!!(null==(t=e.component)?void 0:t.proxy)})(e)?t.push(e.component.proxy):(null==(l=e.children)?void 0:l.length)?t.push(...r(e.children)):(null==(a=e.component)?void 0:a.subTree)&&t.push(...r(e.component.subTree))})),t},p=()=>{n.value=r(s.subTree)};return V((()=>{p()})),ge(o,p,{attributes:!0,subtree:!0,childList:!0}),{groupRef:o,visible:i,ns:t}}}),[["render",function(e,l,t,a,o,s){return h((g(),y("ul",{ref:"groupRef",class:O(e.ns.be("group","wrap"))},[x("li",{class:O(e.ns.be("group","title"))},C(e.label),3),x("li",null,[x("ul",{class:O(e.ns.b("group"))},[S(e.$slots,"default")],2)])],2)),[[b,e.visible]])}],["__file","option-group.vue"]]);const Ge=ye(He,{Option:ze,OptionGroup:Ue}),Qe=Se(ze);Se(Ue);export{Qe as E,Ge as a,Le as s};
