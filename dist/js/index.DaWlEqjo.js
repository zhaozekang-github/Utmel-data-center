import{bo as e,d as l,a8 as a,J as o,a1 as t,c as p,e as r,a4 as i,w as s,g as d,a2 as n,l as u,Q as m,ae as c,m as b,ba as f,b9 as h,E as y}from"./index.BXZnkrMD.js";import{E as V}from"./el-dialog.BMOgxEH-.js";import{E as _,a as k}from"./el-form-item.BxSDn5hW.js";import{a as g,E as w}from"./el-col.D2SAVTdG.js";import{E as v}from"./el-card.DQw2peI-.js";import{_ as j}from"./index.C1hjqodT.js";import{_ as x}from"./delete.C2unngrs.js";import{_ as U}from"./edit.DWyhAf1X.js";import{_ as C}from"./position.Cph0n314.js";import{v as L}from"./v4.CgpUT58S.js";import{_ as A}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./refs.14QZpcYP.js";import"./isUndefined.DgmxjSXK.js";import"./castArray.BgmiIN3w.js";import"./_Uint8Array.B4bQ-8dH.js";import"./el-table-column.BA27jq_-.js";import"./el-scrollbar.D7Yemm64.js";import"./el-tooltip.DRY2Qbgd.js";import"./debounce.7APpE7z1.js";import"./el-tree.D1-ZRUQD.js";import"./index.B58uIRBn.js";import"./index.DsDZ0Fvt.js";import"./el-tag.DuZhHOy2.js";import"./el-tree-select.kZHmnJuP.js";const z={pk:"id",width:"70%",placeholder:"请选择用户",formItems:[{type:"input",label:"型号",prop:"model",attrs:{placeholder:"型号",clearable:!0,style:{width:"200px"}}},{type:"autocomplete",label:"厂商",prop:"manufacturer",attrs:{clearable:!0,class:"inline-input w-50",placeholder:"输入厂商"}},{type:"autocomplete",label:"供应商",prop:"supplier",attrs:{clearable:!0,class:"inline-input w-50",placeholder:"输入供应商"}},{type:"select",label:"库存类型",prop:"inventory-type",attrs:{clearable:!0,placeholder:"选择类型",style:{width:"130px"}},options:[{label:"现货库存",value:1},{label:"热卖库存",value:0}]},{type:"autocomplete",label:"库存数量",prop:"inventory_num",attrs:{placeholder:"输入数量",clearable:!0,style:{width:"200px"}}},{type:"autocomplete",label:"封装",prop:"packaging",attrs:{placeholder:"请输入",clearable:!0,style:{width:"200px"}}},{type:"autocomplete",label:"批次",prop:"batch",attrs:{placeholder:"请输入",clearable:!0,style:{width:"200px"}}},{type:"autocomplete",label:"库位",prop:"location",attrs:{placeholder:"请输入",clearable:!0,style:{width:"200px"}}},{type:"date-picker",label:"创建时间",prop:"createAt",attrs:{type:"date","range-separator":"~",placeholder:"请选择时间","value-format":"YYYY-MM-DD",style:{width:"140px"}}}],indexAction:function(l){if("createAt"in l){const e=l.createAt;l.startTime=e[0],l.endTime=e[1],delete l.createAt}return e.getPage(l)},tableColumns:[{type:"selection",width:50,align:"center"},{label:"型号",align:"center",prop:"id",width:100},{label:"厂商",align:"center",prop:"username"},{label:"库存类型",align:"center",prop:"nickname",width:120},{label:"库存数量",align:"center",prop:"genderLabel",width:100},{label:"封装",align:"center",prop:"deptName",width:120},{label:"批次",align:"center",prop:"mobile",width:120},{label:"库位",align:"center",prop:"mobile",width:120},{label:"供应商",align:"center",prop:"mobile",width:120},{label:"数据来源",align:"center",prop:"mobile",width:120},{label:"创建时间",align:"center",prop:"mobile",width:120},{label:"创建时间",align:"center",prop:"createTime",width:180},{label:"操作",align:"center",prop:"status",templet:"custom",slotName:"options",width:220}]},Y={class:"app-container"},I={class:"dialog-footer"},T=A(l({__name:"index",setup(e){const l=a(),A=o({title:"",visible:!1}),T=o({supplierName:1,supplierBadge:1,membershipType:"",membershipYears:"",personInfo:[{key:1,name:"zzz",tel:"123456"},{key:1,name:"rrr",tel:"456789"}],fax:"",officeLocation:"",address:"",albumLink:"",business:[{key:1,value:""},{key:2,value:""}],supplierLink:""});function E(e){A.visible=!0,A.title=e?"编辑供应商":"新增供应商"}function N(){A.visible=!1}return(e,a)=>{const o=C,B=f,D=U,P=x,M=j,F=v,J=h,Q=_,R=g,S=t("CirclePlus"),G=y,K=w,O=k,q=V;return p(),r("div",Y,[i(F,{shadow:"never",class:"table-container"},{default:s((()=>[i(M,{hasAdd:!0,"table-config":d(z),onPopAddClick:E},{options:s((a=>[i(B,{type:"primary",size:"small",link:"",onClick:e=>{return o=a.row,void l.push({path:"/data-manage/Supplierdetail",params:o});var o}},{default:s((()=>[i(o),n("查看 ")])),_:2},1032,["onClick"]),i(B,{type:"primary",size:"small",link:"",onClick:e=>E(a.row)},{default:s((()=>[i(D),n("编辑 ")])),_:2},1032,["onClick"]),i(B,{type:"primary",size:"small",link:"",onClick:l=>e.handleDelete(a.row.id)},{default:s((()=>[i(P),n("删除 ")])),_:2},1032,["onClick"])])),_:1},8,["table-config"])])),_:1}),i(q,{modelValue:d(A).visible,"onUpdate:modelValue":a[9]||(a[9]=e=>d(A).visible=e),title:d(A).title,width:"600px",onClose:N},{footer:s((()=>[u("div",I,[i(B,{type:"primary",onClick:e.handleSubmit},{default:s((()=>[n("确 定")])),_:1},8,["onClick"]),i(B,null,{default:s((()=>[n("取 消")])),_:1})])])),default:s((()=>[i(O,{ref:"roleFormRef","label-position":"right",model:d(T),rules:e.rules,"label-width":"120px",width:"300px"},{default:s((()=>[i(Q,{label:"供应商名称",prop:"supplierName"},{default:s((()=>[i(J,{modelValue:d(T).supplierName,"onUpdate:modelValue":a[0]||(a[0]=e=>d(T).supplierName=e),placeholder:"请输入"},null,8,["modelValue"])])),_:1}),i(Q,{label:"供应商徽章",prop:"supplierBadge"},{default:s((()=>[i(J,{modelValue:d(T).supplierBadge,"onUpdate:modelValue":a[1]||(a[1]=e=>d(T).supplierBadge=e),placeholder:"请输入"},null,8,["modelValue"])])),_:1}),i(Q,{label:"供应商会员类型",prop:"membershipType"},{default:s((()=>[i(J,{modelValue:d(T).membershipType,"onUpdate:modelValue":a[2]||(a[2]=e=>d(T).membershipType=e),placeholder:"请输入"},null,8,["modelValue"])])),_:1}),i(Q,{label:"会员年限",prop:"membershipYears"},{default:s((()=>[i(J,{modelValue:d(T).membershipYears,"onUpdate:modelValue":a[3]||(a[3]=e=>d(T).membershipYears=e),placeholder:"请输入"},null,8,["modelValue"])])),_:1}),(p(!0),r(m,null,c(d(T).personInfo,((e,l)=>(p(),b(K,{key:e.key,label:"personInfo"+l,prop:"personInfo."+l+".value"},{default:s((()=>[i(R,{span:12},{default:s((()=>[i(Q,{label:"姓名",prop:"name"},{default:s((()=>[i(J,{modelValue:e.name,"onUpdate:modelValue":l=>e.name=l,placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024),i(R,{span:10},{default:s((()=>[i(Q,{label:"手机",prop:"name","label-width":"60px"},{default:s((()=>[i(J,{modelValue:e.tel,"onUpdate:modelValue":l=>e.tel=l,placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024),i(R,{span:2},{default:s((()=>[i(G,{size:"large",onClick:e=>function(e){const l={key:L(),value:""};T.personInfo.splice(e+1,0,l)}(l)},{default:s((()=>[i(S)])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1032,["label","prop"])))),128)),i(Q,{label:"传真",prop:"fax"},{default:s((()=>[i(J,{modelValue:d(T).fax,"onUpdate:modelValue":a[4]||(a[4]=e=>d(T).fax=e),placeholder:"请输入"},null,8,["modelValue"])])),_:1}),i(Q,{label:"办公地点",prop:"officeLocation"},{default:s((()=>[i(J,{modelValue:d(T).officeLocation,"onUpdate:modelValue":a[5]||(a[5]=e=>d(T).officeLocation=e),placeholder:"请输入"},null,8,["modelValue"])])),_:1}),i(Q,{label:"地址",prop:"address"},{default:s((()=>[i(J,{modelValue:d(T).address,"onUpdate:modelValue":a[6]||(a[6]=e=>d(T).address=e),placeholder:"请输入"},null,8,["modelValue"])])),_:1}),i(Q,{label:"公司相册链接",prop:"albumLink"},{default:s((()=>[i(J,{modelValue:d(T).albumLink,"onUpdate:modelValue":a[7]||(a[7]=e=>d(T).albumLink=e),placeholder:"请输入"},null,8,["modelValue"])])),_:1}),(p(!0),r(m,null,c(d(T).business,((e,l)=>(p(),b(Q,{key:e.key,label:"business"+l,prop:"businesss."+l+".value"},{default:s((()=>[i(J,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"]),i(G,{size:"large",onClick:e=>function(e){const l={key:L(),value:""};T.business.splice(e+1,0,l)}(l)},{default:s((()=>[i(S)])),_:2},1032,["onClick"])])),_:2},1032,["label","prop"])))),128)),i(Q,{label:"供应商链接",prop:"supplierLink"},{default:s((()=>[i(J,{modelValue:d(T).supplierLink,"onUpdate:modelValue":a[8]||(a[8]=e=>d(T).supplierLink=e),placeholder:"请输入"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-03d01511"]]);export{T as default};