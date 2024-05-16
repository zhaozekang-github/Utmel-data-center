import{d as e,z as a,r as l,S as t,o,bd as s,c as i,e as d,l as r,Y as n,w as u,g as p,a1 as m,W as c,m as f,aG as y,aL as g,Z as _,t as b,at as v,aC as h,$ as C,a0 as k}from"./index.Buyu3njk.js";import{v as V}from"./el-loading.DxUxpi7-.js";import{E as j}from"./el-dialog.DbryiCq8.js";import{_ as x,E as w,a as U}from"./refresh.3ZItKhR7.js";import{E as D}from"./el-input-number.DeJjfaiD.js";import{E}from"./el-card.CaBNoqdo.js";import{_ as S}from"./index.ZJpo3Td-.js";import{E as N,a as F}from"./el-table-column.CVWMIrBT.js";import"./el-checkbox.B5b_Jz-d.js";import"./el-tooltip.l0sNRNKZ.js";import"./el-popper.BfVBGKk4.js";import"./el-scrollbar.Cu2msVTx.js";import{_ as z,a as q}from"./delete.0IIXIgsN.js";/* empty css               */import{_ as B}from"./plus.CgQ2C7TA.js";import{a as P,E as I}from"./el-form-item.B1EC_3Ji.js";import{_ as L}from"./search.BHW2NzeT.js";import{D as R}from"./index.CNI2rFpj.js";import{E as T}from"./index.DdOiTB_p.js";const Y={class:"app-container"},Z={class:"search-container"},$={class:"dialog-footer"},A=e({name:"DictData",inheritAttrs:!1,__name:"dict-item",props:{typeCode:{type:String,default:()=>""},typeName:{type:String,default:()=>""}},setup(e){const A=e;a((()=>A.typeCode),(e=>{K.typeCode=e,X.typeCode=e,le()}));const G=l(P),J=l(P),O=l(!1),W=l([]),H=l(0),K=t({pageNum:1,pageSize:10,typeCode:A.typeCode}),M=l(),Q=t({title:"",visible:!1}),X=t({status:1,typeCode:A.typeCode,sort:1}),ee=t({name:[{required:!0,message:"请输入字典名称",trigger:"blur"}],value:[{required:!0,message:"请输入字典值",trigger:"blur"}]});function ae(){K.typeCode&&(O.value=!0,R.getDictPage(K).then((e=>{M.value=e.list,H.value=e.total})).finally((()=>O.value=!1)))}function le(){G.value.resetFields(),K.pageNum=1,ae()}function te(e){W.value=e.map((e=>e.id))}function oe(e){Q.visible=!0,e?(Q.title="修改字典",R.getDictFormData(e).then((e=>{Object.assign(X,e)}))):Q.title="新增字典"}function se(){J.value.validate((e=>{if(e){O.value=!1;const e=X.id;e?R.updateDict(e,X).then((()=>{v.success("修改成功"),ie(),le()})).finally((()=>O.value=!1)):R.addDict(X).then((()=>{v.success("新增成功"),ie(),le()})).finally((()=>O.value=!1))}}))}function ie(){Q.visible=!1,J.value.resetFields(),J.value.clearValidate(),X.id=void 0,X.status=1,X.sort=1,X.typeCode=A.typeCode}function de(e){const a=[e||W.value].join(",");a?h.confirm("确认删除已选中的数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{R.deleteDictByIds(a).then((()=>{v.success("删除成功"),le()}))})):v.warning("请勾选删除项")}return o((()=>{ae()})),(a,l)=>{const t=C,o=I,v=L,h=k,R=x,A=P,re=B,ne=z,ue=N,pe=T,me=q,ce=F,fe=S,ye=E,ge=D,_e=w,be=U,ve=j,he=s("hasPerm"),Ce=V;return i(),d("div",Y,[r("div",Z,[n(A,{ref_key:"queryFormRef",ref:G,model:p(K),inline:!0},{default:u((()=>[n(o,{label:"关键字",prop:"name"},{default:u((()=>[n(t,{modelValue:p(K).name,"onUpdate:modelValue":l[0]||(l[0]=e=>p(K).name=e),placeholder:"字典名称",clearable:""},null,8,["modelValue"])])),_:1}),n(o,null,{default:u((()=>[n(h,{type:"primary",onClick:ae},{default:u((()=>[n(v),m("搜索")])),_:1}),n(h,{onClick:le},{default:u((()=>[n(R),m("重置")])),_:1})])),_:1})])),_:1},8,["model"])]),n(ye,{shadow:"never"},{header:u((()=>[c((i(),f(h,{type:"success",onClick:l[1]||(l[1]=e=>oe())},{default:u((()=>[n(re),m("新增")])),_:1})),[[he,["sys:dict:add"]]]),c((i(),f(h,{type:"danger",disabled:0===p(W).length,onClick:l[2]||(l[2]=e=>de())},{default:u((()=>[n(ne),m("删除")])),_:1},8,["disabled"])),[[he,["sys:dict:delete"]]])])),default:u((()=>[c((i(),f(ce,{data:p(M),border:"",onSelectionChange:te},{default:u((()=>[n(ue,{type:"selection",width:"50"}),n(ue,{label:"字典名称",prop:"name"}),n(ue,{label:"字典值",prop:"value"}),n(ue,{label:"状态",align:"center"},{default:u((e=>[1===e.row.status?(i(),f(pe,{key:0,type:"success"},{default:u((()=>[m("启用")])),_:1})):(i(),f(pe,{key:1,type:"info"},{default:u((()=>[m("禁用")])),_:1}))])),_:1}),n(ue,{fixed:"right",label:"操作",align:"center"},{default:u((e=>[c((i(),f(h,{type:"primary",link:"",onClick:a=>oe(e.row.id)},{default:u((()=>[n(me),m("编辑")])),_:2},1032,["onClick"])),[[he,["sys:dict:edit"]]]),c((i(),f(h,{type:"primary",link:"",onClick:y((a=>de(e.row.id)),["stop"])},{default:u((()=>[n(ne),m("删除")])),_:2},1032,["onClick"])),[[he,["sys:dict:delete"]]])])),_:1})])),_:1},8,["data"])),[[Ce,p(O)]]),p(H)>0?(i(),f(fe,{key:0,total:p(H),"onUpdate:total":l[3]||(l[3]=e=>g(H)?H.value=e:null),page:p(K).pageNum,"onUpdate:page":l[4]||(l[4]=e=>p(K).pageNum=e),limit:p(K).pageSize,"onUpdate:limit":l[5]||(l[5]=e=>p(K).pageSize=e),onPagination:ae},null,8,["total","page","limit"])):_("",!0)])),_:1}),n(ve,{modelValue:p(Q).visible,"onUpdate:modelValue":l[11]||(l[11]=e=>p(Q).visible=e),title:p(Q).title,width:"500px",onClose:ie},{footer:u((()=>[r("div",$,[n(h,{type:"primary",onClick:se},{default:u((()=>[m("确 定")])),_:1}),n(h,{onClick:ie},{default:u((()=>[m("取 消")])),_:1})])])),default:u((()=>[n(A,{ref_key:"dataFormRef",ref:J,model:p(X),rules:p(ee),"label-width":"100px"},{default:u((()=>[n(o,{label:"字典名称"},{default:u((()=>[m(b(e.typeName),1)])),_:1}),n(o,{label:"字典名称",prop:"name"},{default:u((()=>[n(t,{modelValue:p(X).name,"onUpdate:modelValue":l[6]||(l[6]=e=>p(X).name=e),placeholder:"请输入字典名称"},null,8,["modelValue"])])),_:1}),n(o,{label:"字典值",prop:"value"},{default:u((()=>[n(t,{modelValue:p(X).value,"onUpdate:modelValue":l[7]||(l[7]=e=>p(X).value=e),placeholder:"字典值"},null,8,["modelValue"])])),_:1}),n(o,{label:"排序",prop:"sort"},{default:u((()=>[n(ge,{modelValue:p(X).sort,"onUpdate:modelValue":l[8]||(l[8]=e=>p(X).sort=e),"controls-position":"right",min:0},null,8,["modelValue"])])),_:1}),n(o,{label:"状态",prop:"status"},{default:u((()=>[n(be,{modelValue:p(X).status,"onUpdate:modelValue":l[9]||(l[9]=e=>p(X).status=e)},{default:u((()=>[n(_e,{label:1},{default:u((()=>[m("正常")])),_:1}),n(_e,{label:0},{default:u((()=>[m("停用")])),_:1})])),_:1},8,["modelValue"])])),_:1}),n(o,{label:"备注",prop:"remark"},{default:u((()=>[n(t,{modelValue:p(X).remark,"onUpdate:modelValue":l[10]||(l[10]=e=>p(X).remark=e),type:"textarea"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}});export{A as _};
