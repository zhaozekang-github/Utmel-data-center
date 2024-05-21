import{d as e,r as t,o as a,ax as o,bn as r,c as i,m as s,w as d,l,a2 as n,a4 as c,n as m,ah as p,e as f}from"./index.BXZnkrMD.js";import{E as u}from"./el-card.DQw2peI-.js";import{E as h}from"./el-tooltip.DRY2Qbgd.js";import{_ as y}from"./download.BW1zkF8s.js";import{L as g,i as x}from"./index.CN7NSmFY.js";import{_ as v}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./isUndefined.DgmxjSXK.js";const b={class:"title"},w=["id"],_=v(e({__name:"BarChart",props:{id:{type:String,default:"barChart"},className:{type:String,default:""},width:{type:String,default:"100%",required:!0},height:{type:String,default:"400px",required:!0}},setup(e){const f=e,v={grid:{left:"2%",right:"2%",bottom:"10%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{x:"center",y:"bottom",data:["收入","毛利润","收入增长率","利润增长率"],textStyle:{color:"#999"}},xAxis:[{type:"category",data:["浙江","北京","上海","广东","深圳"],axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:0,max:1e4,interval:2e3,axisLabel:{formatter:"{value} "}},{type:"value",min:0,max:100,interval:20,axisLabel:{formatter:"{value}%"}}],series:[{name:"收入",type:"bar",data:[7e3,7100,7200,7300,7400],barWidth:20,itemStyle:{color:new g(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])}},{name:"毛利润",type:"bar",data:[8e3,8200,8400,8600,8800],barWidth:20,itemStyle:{color:new g(0,0,0,1,[{offset:0,color:"#25d73c"},{offset:.5,color:"#1bc23d"},{offset:1,color:"#179e61"}])}},{name:"收入增长率",type:"line",yAxisIndex:1,data:[60,65,70,75,80],itemStyle:{color:"#67C23A"}},{name:"利润增长率",type:"line",yAxisIndex:1,data:[70,75,80,85,90],itemStyle:{color:"#409EFF"}}]},_=()=>{const e=new Image;e.src=S.value.getDataURL({type:"png",pixelRatio:1,backgroundColor:"#fff"}),e.onload=()=>{const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");if(a){a.drawImage(e,0,0,e.width,e.height);const o=document.createElement("a");o.download="业绩柱状图.png",o.href=t.toDataURL("image/png",.9),document.body.appendChild(o),o.click(),o.remove()}}},S=t("");return a((()=>{S.value=o(x(document.getElementById(f.id))),S.value.setOption(v),window.addEventListener("resize",(()=>{S.value.resize()}))})),r((()=>{S.value&&S.value.resize()})),(t,a)=>{const o=y,r=h,f=u;return i(),s(f,null,{header:d((()=>[l("div",b,[n(" 业绩柱状图 "),c(r,{effect:"dark",content:"点击试试下载",placement:"bottom"},{default:d((()=>[c(o,{class:"download",onClick:_})])),_:1})])])),default:d((()=>[l("div",{id:e.id,class:m(e.className),style:p({height:e.height,width:e.width})},null,14,w)])),_:1})}}}),[["__scopeId","data-v-3e578f24"]]),S={class:"app-container"},I=v(e({__name:"Inventory-board",setup:e=>(e,t)=>(i(),f("div",S,[c(_)]))}),[["__scopeId","data-v-5cd820d1"]]);export{I as default};
