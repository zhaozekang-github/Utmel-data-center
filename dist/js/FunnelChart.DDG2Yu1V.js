import{i as e}from"./index.CN7NSmFY.js";import{d as t,r as i,o as a,ax as n,bn as l,c as d,e as r,n as s,ah as o}from"./index.BXZnkrMD.js";const u=["id"],h=t({__name:"FunnelChart",props:{id:{type:String,default:"funnelChart"},className:{type:String,default:""},width:{type:String,default:"200px",required:!0},height:{type:String,default:"200px",required:!0}},setup(t){const h=t,m={title:{show:!0,text:"订单线索转化漏斗图",x:"center",padding:15,textStyle:{fontSize:18,fontStyle:"normal",fontWeight:"bold",color:"#337ecc"}},grid:{left:"2%",right:"2%",bottom:"10%",containLabel:!0},legend:{x:"center",y:"bottom",data:["Show","Click","Visit","Inquiry","Order"]},series:[{name:"Funnel",type:"funnel",left:"20%",top:60,bottom:60,width:"60%",sort:"descending",gap:2,label:{show:!0,position:"inside"},labelLine:{length:10,lineStyle:{width:1,type:"solid"}},itemStyle:{borderColor:"#fff",borderWidth:1},emphasis:{label:{fontSize:20}},data:[{value:60,name:"Visit"},{value:40,name:"Inquiry"},{value:20,name:"Order"},{value:80,name:"Click"},{value:100,name:"Show"}]}]},p=i("");return a((()=>{p.value=n(e(document.getElementById(h.id))),p.value.setOption(m),window.addEventListener("resize",(()=>{p.value.resize()}))})),l((()=>{p.value&&p.value.resize()})),(e,i)=>(d(),r("div",{id:t.id,class:s(t.className),style:o({height:t.height,width:t.width})},null,14,u))}});export{h as default};
