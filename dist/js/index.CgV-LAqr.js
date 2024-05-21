import{b as e,bq as a,aw as l,aS as t,aV as n,aW as r,Z as u,aT as o,d as i,u as s,a as d,r as m,J as c,aX as p,D as f,bA as b,aY as v,a_ as y,K as g,o as h,bB as _,b1 as V,c as N,e as k,O as x,g as w,n as S,b2 as j,f as I,a4 as C,w as E,m as F,H as A,bC as U,E as B,ag as z,bD as K,bE as O,af as R,b9 as T,_ as q,G as D,N as M,b0 as P,s as $,l as L,a2 as G,b7 as Y,t as H,be as J,al as W,bF as X,ba as Z}from"./index.BXZnkrMD.js";import{d as Q,b as ee,c as ae,_ as le,E as te,a as ne,v as re}from"./el-table-column.BA27jq_-.js";import{E as ue}from"./el-scrollbar.D7Yemm64.js";import{E as oe}from"./el-tree.D1-ZRUQD.js";import{E as ie}from"./el-dialog.BMOgxEH-.js";import{R as se,_ as de,a as me,E as ce,b as pe}from"./index.D-W7jZU2.js";import{E as fe}from"./el-tag.DuZhHOy2.js";import"./el-tooltip.DRY2Qbgd.js";import{E as be}from"./el-card.DQw2peI-.js";import{_ as ve}from"./edit.DWyhAf1X.js";import{_ as ye}from"./position.Cph0n314.js";import{_ as ge}from"./delete.C2unngrs.js";import{a as he,E as _e}from"./el-form-item.BxSDn5hW.js";import{_ as Ve}from"./search.BQd6gJji.js";import"./_Uint8Array.B4bQ-8dH.js";import"./debounce.7APpE7z1.js";import"./index.DsDZ0Fvt.js";import"./castArray.BgmiIN3w.js";import"./_plugin-vue_export-helper.BCo6x5W8.js";import"./index.B58uIRBn.js";import"./refs.14QZpcYP.js";import"./isUndefined.DgmxjSXK.js";const Ne=e({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:a,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||l(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0},...t(["ariaLabel"])}),ke={[n]:(e,a)=>a!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[r]:e=>l(e)||u(e),[o]:e=>l(e)||u(e)},xe=["aria-label","onKeydown"],we=["aria-label","onKeydown"],Se=i({name:"ElInputNumber"});const je=$(q(i({...Se,props:Ne,emits:ke,setup(e,{expose:a,emit:t}){const i=e,{t:q}=s(),$=d("input-number"),L=m(),G=c({currentValue:i.modelValue,userInput:null}),{formItem:Y}=p(),H=f((()=>l(i.modelValue)&&i.modelValue<=i.min)),J=f((()=>l(i.modelValue)&&i.modelValue>=i.max)),W=f((()=>{const e=te(i.step);return b(i.precision)?Math.max(te(i.modelValue),e):(i.precision,i.precision)})),X=f((()=>i.controls&&"right"===i.controlsPosition)),Z=v(),ee=y(),ae=f((()=>{if(null!==G.userInput)return G.userInput;let e=G.currentValue;if(u(e))return"";if(l(e)){if(Number.isNaN(e))return"";b(i.precision)||(e=e.toFixed(i.precision))}return e})),le=(e,a)=>{if(b(a)&&(a=W.value),0===a)return Math.round(e);let l=String(e);const t=l.indexOf(".");if(-1===t)return e;if(!l.replace(".","").split("")[t+a])return e;const n=l.length;return"5"===l.charAt(n-1)&&(l=`${l.slice(0,Math.max(0,n-1))}6`),Number.parseFloat(Number(l).toFixed(a))},te=e=>{if(u(e))return 0;const a=e.toString(),l=a.indexOf(".");let t=0;return-1!==l&&(t=a.length-l-1),t},ne=(e,a=1)=>l(e)?le(e+i.step*a):G.currentValue,re=()=>{if(i.readonly||ee.value||J.value)return;const e=Number(ae.value)||0,a=ne(e);ie(a),t(r,G.currentValue),pe()},ue=()=>{if(i.readonly||ee.value||H.value)return;const e=Number(ae.value)||0,a=ne(e,-1);ie(a),t(r,G.currentValue),pe()},oe=(e,a)=>{const{max:l,min:n,step:r,precision:s,stepStrictly:d,valueOnClear:m}=i;l<n&&D("InputNumber","min should not be greater than max.");let c=Number(e);if(u(e)||Number.isNaN(c))return null;if(""===e){if(null===m)return null;c=M(m)?{min:n,max:l}[m]:m}return d&&(c=le(Math.round(c/r)*r,s)),b(s)||(c=le(c,s)),(c>l||c<n)&&(c=c>l?l:n,a&&t(o,c)),c},ie=(e,a=!0)=>{var l;const r=G.currentValue,u=oe(e);a?r===u&&e||(G.userInput=null,t(o,u),r!==u&&t(n,u,r),i.validateEvent&&(null==(l=null==Y?void 0:Y.validate)||l.call(Y,"change").catch((e=>P()))),G.currentValue=u):t(o,u)},se=e=>{G.userInput=e;const a=""===e?null:Number(e);t(r,a),ie(a,!1)},de=e=>{const a=""!==e?Number(e):"";(l(a)&&!Number.isNaN(a)||""===e)&&ie(a),pe(),G.userInput=null},me=e=>{t("focus",e)},ce=e=>{var a;G.userInput=null,t("blur",e),i.validateEvent&&(null==(a=null==Y?void 0:Y.validate)||a.call(Y,"blur").catch((e=>P())))},pe=()=>{G.currentValue!==i.modelValue&&(G.currentValue=i.modelValue)},fe=e=>{document.activeElement===e.target&&e.preventDefault()};return g((()=>i.modelValue),((e,a)=>{const l=oe(e,!0);null===G.userInput&&l!==a&&(G.currentValue=l)}),{immediate:!0}),h((()=>{var e;const{min:a,max:n,modelValue:r}=i,u=null==(e=L.value)?void 0:e.input;if(u.setAttribute("role","spinbutton"),Number.isFinite(n)?u.setAttribute("aria-valuemax",String(n)):u.removeAttribute("aria-valuemax"),Number.isFinite(a)?u.setAttribute("aria-valuemin",String(a)):u.removeAttribute("aria-valuemin"),u.setAttribute("aria-valuenow",G.currentValue||0===G.currentValue?String(G.currentValue):""),u.setAttribute("aria-disabled",String(ee.value)),!l(r)&&null!=r){let e=Number(r);Number.isNaN(e)&&(e=null),t(o,e)}u.addEventListener("wheel",fe,{passive:!1})})),_((()=>{var e,a;const l=null==(e=L.value)?void 0:e.input;null==l||l.setAttribute("aria-valuenow",`${null!=(a=G.currentValue)?a:""}`)})),V({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-input-number",ref:"https://element-plus.org/en-US/component/input-number.html"},f((()=>!!i.label))),a({focus:()=>{var e,a;null==(a=null==(e=L.value)?void 0:e.focus)||a.call(e)},blur:()=>{var e,a;null==(a=null==(e=L.value)?void 0:e.blur)||a.call(e)}}),(e,a)=>(N(),k("div",{class:S([w($).b(),w($).m(w(Z)),w($).is("disabled",w(ee)),w($).is("without-controls",!e.controls),w($).is("controls-right",w(X))]),onDragstart:a[0]||(a[0]=R((()=>{}),["prevent"]))},[e.controls?x((N(),k("span",{key:0,role:"button","aria-label":w(q)("el.inputNumber.decrease"),class:S([w($).e("decrease"),w($).is("disabled",w(H))]),onKeydown:j(ue,["enter"])},[I(e.$slots,"decrease-icon",{},(()=>[C(w(B),null,{default:E((()=>[w(X)?(N(),F(w(A),{key:0})):(N(),F(w(U),{key:1}))])),_:1})]))],42,xe)),[[w(Q),ue]]):z("v-if",!0),e.controls?x((N(),k("span",{key:1,role:"button","aria-label":w(q)("el.inputNumber.increase"),class:S([w($).e("increase"),w($).is("disabled",w(J))]),onKeydown:j(re,["enter"])},[I(e.$slots,"increase-icon",{},(()=>[C(w(B),null,{default:E((()=>[w(X)?(N(),F(w(K),{key:0})):(N(),F(w(O),{key:1}))])),_:1})]))],42,we)),[[w(Q),re]]):z("v-if",!0),C(w(T),{id:e.id,ref_key:"input",ref:L,type:"number",step:e.step,"model-value":w(ae),placeholder:e.placeholder,readonly:e.readonly,disabled:w(ee),size:w(Z),max:e.max,min:e.min,name:e.name,"aria-label":e.label||e.ariaLabel,"validate-event":!1,onKeydown:[j(R(re,["prevent"]),["up"]),j(R(ue,["prevent"]),["down"])],onBlur:ce,onFocus:me,onInput:se,onChange:de},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","aria-label","onKeydown"])],34))}}),[["__file","input-number.vue"]])),Ie={class:"app-container"},Ce={class:"search-container"},Ee={class:"dialog-footer"},Fe={class:"dialog-footer"},Ae=i({name:"Role",inheritAttrs:!1,__name:"index",setup(e){const a=m(he),l=m(he),t=m(oe),n=m(!1),r=m([]),u=m(0),o=c({pageNum:1,pageSize:10}),i=m(),s=c({title:"",visible:!1}),d=c({sort:1,status:1,code:"",name:""}),p=c({name:[{required:!0,message:"请输入角色名称",trigger:"blur"}],code:[{required:!0,message:"请输入角色编码",trigger:"blur"}],dataScope:[{required:!0,message:"请选择数据权限",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"blur"}]}),f=m(!1),b=m([]);let v=c({});function y(){n.value=!0,se.getPage(o).then((e=>{i.value=e.list,u.value=e.total})).finally((()=>{n.value=!1}))}function g(){a.value.resetFields(),o.pageNum=1,y()}function _(e){r.value=e.map((e=>e.id))}function V(e){s.visible=!0,e?(s.title="修改角色",se.getFormData(e).then((e=>{Object.assign(d,e)}))):s.title="新增角色"}function S(){l.value.validate((e=>{if(e){n.value=!0;const e=d.id;e?se.update(e,d).then((()=>{J.success("修改成功"),I(),g()})).finally((()=>n.value=!1)):se.add(d).then((()=>{J.success("新增成功"),I(),g()})).finally((()=>n.value=!1))}}))}function I(){s.visible=!1,l.value.resetFields(),l.value.clearValidate(),d.id=void 0,d.sort=1,d.status=1}function A(e){const a=[e||r.value].join(",");a?W.confirm("确认删除已选中的数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{n.value=!0,se.deleteByIds(a).then((()=>{J.success("删除成功"),g()})).finally((()=>n.value=!1))})):J.warning("请勾选删除项")}function U(){const e=v.id;if(e){const a=t.value.getCheckedNodes(!1,!0).map((e=>e.value));n.value=!0,se.updateRoleMenus(e,a).then((()=>{J.success("分配权限成功"),f.value=!1,g()})).finally((()=>{n.value=!1}))}}return h((()=>{y()})),(e,m)=>{const c=T,h=_e,B=Ve,K=Z,O=de,R=he,q=me,D=ge,M=ee,P=fe,$=ye,J=ve,W=ae,Q=le,Ne=be,ke=te,xe=ne,we=ce,Se=pe,Ae=je,Ue=ie,Be=oe,ze=ue,Ke=re;return N(),k("div",Ie,[L("div",Ce,[C(R,{ref_key:"queryFormRef",ref:a,model:w(o),inline:!0},{default:E((()=>[C(h,{prop:"keywords",label:"关键字"},{default:E((()=>[C(c,{modelValue:w(o).keywords,"onUpdate:modelValue":m[0]||(m[0]=e=>w(o).keywords=e),placeholder:"角色名称",clearable:"",onKeyup:j(y,["enter"])},null,8,["modelValue"])])),_:1}),C(h,null,{default:E((()=>[C(K,{type:"primary",onClick:y},{default:E((()=>[C(B),G("搜索")])),_:1}),C(K,{onClick:g},{default:E((()=>[C(O),G("重置")])),_:1})])),_:1})])),_:1},8,["model"])]),C(Ne,{shadow:"never",class:"table-container"},{header:E((()=>[C(K,{type:"success",onClick:m[1]||(m[1]=e=>V())},{default:E((()=>[C(q),G("新增")])),_:1}),C(K,{type:"danger",disabled:0===w(r).length,onClick:m[2]||(m[2]=e=>A())},{default:E((()=>[C(D),G("删除")])),_:1},8,["disabled"])])),default:E((()=>[x((N(),F(W,{ref:"dataTableRef",data:w(i),"highlight-current-row":"",border:"",onSelectionChange:_},{default:E((()=>[C(M,{type:"selection",width:"55",align:"center"}),C(M,{label:"角色名称",prop:"name","min-width":"100"}),C(M,{label:"角色编码",prop:"code",width:"150"}),C(M,{label:"状态",align:"center",width:"100"},{default:E((e=>[1===e.row.status?(N(),F(P,{key:0,type:"success"},{default:E((()=>[G("正常")])),_:1})):(N(),F(P,{key:1,type:"info"},{default:E((()=>[G("禁用")])),_:1}))])),_:1}),C(M,{label:"排序",align:"center",width:"80",prop:"sort"}),C(M,{fixed:"right",label:"操作",width:"220"},{default:E((e=>[C(K,{type:"primary",size:"small",link:"",onClick:a=>async function(e){const a=e.id;a&&(v={id:a,name:e.name},f.value=!0,n.value=!0,b.value=await X.getOptions(),se.getRoleMenuIds(a).then((e=>{e.forEach((e=>t.value.setChecked(e,!0,!1)))})).finally((()=>{n.value=!1})))}(e.row)},{default:E((()=>[C($),G("分配权限 ")])),_:2},1032,["onClick"]),C(K,{type:"primary",size:"small",link:"",onClick:a=>V(e.row.id)},{default:E((()=>[C(J),G("编辑 ")])),_:2},1032,["onClick"]),C(K,{type:"primary",size:"small",link:"",onClick:a=>A(e.row.id)},{default:E((()=>[C(D),G("删除 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[Ke,w(n)]]),w(u)>0?(N(),F(Q,{key:0,total:w(u),"onUpdate:total":m[3]||(m[3]=e=>Y(u)?u.value=e:null),page:w(o).pageNum,"onUpdate:page":m[4]||(m[4]=e=>w(o).pageNum=e),limit:w(o).pageSize,"onUpdate:limit":m[5]||(m[5]=e=>w(o).pageSize=e),onPagination:y},null,8,["total","page","limit"])):z("",!0)])),_:1}),C(Ue,{modelValue:w(s).visible,"onUpdate:modelValue":m[11]||(m[11]=e=>w(s).visible=e),title:w(s).title,width:"500px",onClose:I},{footer:E((()=>[L("div",Ee,[C(K,{type:"primary",onClick:S},{default:E((()=>[G("确 定")])),_:1}),C(K,{onClick:I},{default:E((()=>[G("取 消")])),_:1})])])),default:E((()=>[C(R,{ref_key:"roleFormRef",ref:l,model:w(d),rules:w(p),"label-width":"100px"},{default:E((()=>[C(h,{label:"角色名称",prop:"name"},{default:E((()=>[C(c,{modelValue:w(d).name,"onUpdate:modelValue":m[6]||(m[6]=e=>w(d).name=e),placeholder:"请输入角色名称"},null,8,["modelValue"])])),_:1}),C(h,{label:"角色编码",prop:"code"},{default:E((()=>[C(c,{modelValue:w(d).code,"onUpdate:modelValue":m[7]||(m[7]=e=>w(d).code=e),placeholder:"请输入角色编码"},null,8,["modelValue"])])),_:1}),C(h,{label:"数据权限",prop:"dataScope"},{default:E((()=>[C(xe,{modelValue:w(d).dataScope,"onUpdate:modelValue":m[8]||(m[8]=e=>w(d).dataScope=e)},{default:E((()=>[(N(),F(ke,{key:0,label:"全部数据",value:0})),(N(),F(ke,{key:1,label:"部门及子部门数据",value:1})),(N(),F(ke,{key:2,label:"本部门数据",value:2})),(N(),F(ke,{key:3,label:"本人数据",value:3}))])),_:1},8,["modelValue"])])),_:1}),C(h,{label:"状态",prop:"status"},{default:E((()=>[C(Se,{modelValue:w(d).status,"onUpdate:modelValue":m[9]||(m[9]=e=>w(d).status=e)},{default:E((()=>[C(we,{label:1},{default:E((()=>[G("正常")])),_:1}),C(we,{label:0},{default:E((()=>[G("停用")])),_:1})])),_:1},8,["modelValue"])])),_:1}),C(h,{label:"排序",prop:"sort"},{default:E((()=>[C(Ae,{modelValue:w(d).sort,"onUpdate:modelValue":m[10]||(m[10]=e=>w(d).sort=e),"controls-position":"right",min:0,style:{width:"100px"}},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"]),C(Ue,{modelValue:w(f),"onUpdate:modelValue":m[13]||(m[13]=e=>Y(f)?f.value=e:null),title:"【"+w(v).name+"】权限分配",width:"800px"},{footer:E((()=>[L("div",Fe,[C(K,{type:"primary",onClick:U},{default:E((()=>[G("确 定")])),_:1}),C(K,{onClick:m[12]||(m[12]=e=>f.value=!1)},{default:E((()=>[G("取 消")])),_:1})])])),default:E((()=>[x((N(),F(ze,{"max-height":"600px"},{default:E((()=>[C(Be,{ref_key:"menuRef",ref:t,"node-key":"value","show-checkbox":"",data:w(b),"default-expand-all":!0},{default:E((({data:e})=>[G(H(e.label),1)])),_:1},8,["data"])])),_:1})),[[Ke,w(n)]])])),_:1},8,["modelValue","title"])])}}});export{Ae as default};
