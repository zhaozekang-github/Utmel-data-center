import{d as e,r as a,S as l,o as t,bd as s,c as o,e as r,l as i,Y as d,w as n,g as u,X as p,a1 as m,W as c,m as f,aG as h,at as y,aC as _,$ as b,a0 as j}from"./index.Buyu3njk.js";import{v as g}from"./el-loading.DxUxpi7-.js";import{E as v}from"./el-dialog.DbryiCq8.js";import{_ as k,E as w,a as V}from"./refresh.3ZItKhR7.js";import{E as C}from"./el-input-number.DeJjfaiD.js";/* empty css               */import{E as x,a as I}from"./el-select.8_InoF5O.js";import"./el-scrollbar.Cu2msVTx.js";import"./el-popper.BfVBGKk4.js";import"./el-tree.BraUYeL7.js";import"./el-checkbox.B5b_Jz-d.js";import{E}from"./el-tree-select.DuTZap5_.js";import{E as U}from"./el-card.CaBNoqdo.js";import{E as q,a as F}from"./el-table-column.CVWMIrBT.js";import"./el-tooltip.l0sNRNKZ.js";import{_ as z,a as A}from"./delete.0IIXIgsN.js";import{_ as B}from"./plus.CgQ2C7TA.js";import{a as D,E as O}from"./el-form-item.B1EC_3Ji.js";import{_ as R}from"./search.BHW2NzeT.js";import{D as S}from"./index.DTkKoh9h.js";import{E as L}from"./index.DdOiTB_p.js";import"./use-dialog.1bzcfXgI.js";import"./isUndefined.DgmxjSXK.js";import"./refs.C2OHdTAj.js";import"./strings.DYMDfDiy.js";import"./isEqual.ZGBuoL13.js";import"./_Uint8Array.CYseMYDv.js";import"./debounce.BSlwRXJD.js";import"./_baseIteratee.BtCZdpFB.js";import"./index.BtWKdmvV.js";import"./castArray.N1xzF4QI.js";import"./index.CquR4N0Z.js";import"./_initCloneObject.7QVjqoR1.js";const T={class:"app-container"},W={class:"search-container"},X={class:"dialog-footer"},Y=e({name:"Dept",inheritAttrs:!1,__name:"index",setup(e){const Y=a(D),$=a(D),G=a(!1),J=a([]),K=l({title:"",visible:!1}),P=l({}),Q=a(),Z=a(),H=l({status:1,parentId:0,sort:1}),M=l({parentId:[{required:!0,message:"上级部门不能为空",trigger:"blur"}],name:[{required:!0,message:"部门名称不能为空",trigger:"blur"}],sort:[{required:!0,message:"显示排序不能为空",trigger:"blur"}]});function N(){G.value=!0,S.getList(P).then((e=>{Q.value=e,G.value=!1}))}function ee(){Y.value.resetFields(),N()}function ae(e){J.value=e.map((e=>e.id))}async function le(e,a){await async function(){S.getOptions().then((e=>{Z.value=[{value:0,label:"顶级部门",children:e}]}))}(),K.visible=!0,a?(K.title="修改部门",S.getFormData(a).then((e=>{Object.assign(H,e)}))):(K.title="新增部门",H.parentId=e??0)}function te(){$.value.validate((e=>{if(e){const e=H.id;G.value=!0,e?S.update(e,H).then((()=>{y.success("修改成功"),oe(),N()})).finally((()=>G.value=!1)):S.add(H).then((()=>{y.success("新增成功"),oe(),N()})).finally((()=>G.value=!1))}}))}function se(e){const a=[e||J.value].join(",");a?_.confirm("确认删除已选中的数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{S.deleteByIds(a).then((()=>{y.success("删除成功"),ee()}))})):y.warning("请勾选删除项")}function oe(){K.visible=!1,$.value.resetFields(),$.value.clearValidate(),H.id=void 0,H.parentId=0,H.status=1,H.sort=1}return t((()=>{N()})),(e,a)=>{const l=b,t=O,y=x,_=I,S=R,re=j,ie=k,de=D,ne=B,ue=z,pe=q,me=L,ce=A,fe=F,he=U,ye=E,_e=C,be=w,je=V,ge=v,ve=s("hasPerm"),ke=g;return o(),r("div",T,[i("div",W,[d(de,{ref_key:"queryFormRef",ref:Y,model:u(P),inline:!0},{default:n((()=>[d(t,{label:"关键字",prop:"keywords"},{default:n((()=>[d(l,{modelValue:u(P).keywords,"onUpdate:modelValue":a[0]||(a[0]=e=>u(P).keywords=e),placeholder:"部门名称",onKeyup:p(N,["enter"])},null,8,["modelValue"])])),_:1}),d(t,{label:"部门状态",prop:"status"},{default:n((()=>[d(_,{modelValue:u(P).status,"onUpdate:modelValue":a[1]||(a[1]=e=>u(P).status=e),placeholder:"全部",clearable:"",class:"!w-[100px]"},{default:n((()=>[d(y,{value:1,label:"正常"}),d(y,{value:0,label:"禁用"})])),_:1},8,["modelValue"])])),_:1}),d(t,null,{default:n((()=>[d(re,{class:"filter-item",type:"primary",onClick:N},{default:n((()=>[d(S),m(" 搜索 ")])),_:1}),d(re,{onClick:ee},{default:n((()=>[d(ie),m("重置 ")])),_:1})])),_:1})])),_:1},8,["model"])]),d(he,{shadow:"never",class:"table-container"},{header:n((()=>[c((o(),f(re,{type:"success",onClick:a[2]||(a[2]=e=>le(0,void 0))},{default:n((()=>[d(ne),m("新增")])),_:1})),[[ve,["sys:dept:add"]]]),c((o(),f(re,{type:"danger",disabled:0===u(J).length,onClick:a[3]||(a[3]=e=>se())},{default:n((()=>[d(ue),m("删除 ")])),_:1},8,["disabled"])),[[ve,["sys:dept:delete"]]])])),default:n((()=>[c((o(),f(fe,{data:u(Q),"row-key":"id","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"},onSelectionChange:ae},{default:n((()=>[d(pe,{type:"selection",width:"55",align:"center"}),d(pe,{prop:"name",label:"部门名称","min-width":"200"}),d(pe,{prop:"status",label:"状态",width:"100"},{default:n((e=>[1==e.row.status?(o(),f(me,{key:0,type:"success"},{default:n((()=>[m("正常")])),_:1})):(o(),f(me,{key:1,type:"info"},{default:n((()=>[m("禁用")])),_:1}))])),_:1}),d(pe,{prop:"sort",label:"排序",width:"100"}),d(pe,{label:"操作",fixed:"right",align:"left",width:"200"},{default:n((e=>[c((o(),f(re,{type:"primary",link:"",size:"small",onClick:h((a=>le(e.row.id,void 0)),["stop"])},{default:n((()=>[d(ne),m("新增 ")])),_:2},1032,["onClick"])),[[ve,["sys:dept:add"]]]),c((o(),f(re,{type:"primary",link:"",size:"small",onClick:h((a=>le(e.row.parentId,e.row.id)),["stop"])},{default:n((()=>[d(ce),m("编辑 ")])),_:2},1032,["onClick"])),[[ve,["sys:dept:edit"]]]),c((o(),f(re,{type:"primary",link:"",size:"small",onClick:h((a=>se(e.row.id)),["stop"])},{default:n((()=>[d(ue),m("删除 ")])),_:2},1032,["onClick"])),[[ve,["sys:dept:delete"]]])])),_:1})])),_:1},8,["data"])),[[ke,u(G)]])])),_:1}),d(ge,{modelValue:u(K).visible,"onUpdate:modelValue":a[8]||(a[8]=e=>u(K).visible=e),title:u(K).title,width:"600px",onClosed:oe},{footer:n((()=>[i("div",X,[d(re,{type:"primary",onClick:te},{default:n((()=>[m(" 确 定 ")])),_:1}),d(re,{onClick:oe},{default:n((()=>[m(" 取 消 ")])),_:1})])])),default:n((()=>[d(de,{ref_key:"deptFormRef",ref:$,model:u(H),rules:u(M),"label-width":"80px"},{default:n((()=>[d(t,{label:"上级部门",prop:"parentId"},{default:n((()=>[d(ye,{modelValue:u(H).parentId,"onUpdate:modelValue":a[4]||(a[4]=e=>u(H).parentId=e),placeholder:"选择上级部门",data:u(Z),filterable:"","check-strictly":"","render-after-expand":!1},null,8,["modelValue","data"])])),_:1}),d(t,{label:"部门名称",prop:"name"},{default:n((()=>[d(l,{modelValue:u(H).name,"onUpdate:modelValue":a[5]||(a[5]=e=>u(H).name=e),placeholder:"请输入部门名称"},null,8,["modelValue"])])),_:1}),d(t,{label:"显示排序",prop:"sort"},{default:n((()=>[d(_e,{modelValue:u(H).sort,"onUpdate:modelValue":a[6]||(a[6]=e=>u(H).sort=e),"controls-position":"right",style:{width:"100px"},min:0},null,8,["modelValue"])])),_:1}),d(t,{label:"部门状态"},{default:n((()=>[d(je,{modelValue:u(H).status,"onUpdate:modelValue":a[7]||(a[7]=e=>u(H).status=e)},{default:n((()=>[d(be,{label:1},{default:n((()=>[m("正常")])),_:1}),d(be,{label:0},{default:n((()=>[m("禁用")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}});export{Y as default};
