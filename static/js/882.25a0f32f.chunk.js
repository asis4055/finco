"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[882],{73332:function(e,t,n){n.d(t,{B:function(){return o},a:function(){return a}});var i=n(74569),l=n.n(i),o=l().create({baseURL:"http://finco360.com/",headers:{"content-type":"application/json",UserAgent:"WebAgent","X-TenantID":"finco3"}}),a=l().create({baseURL:"http://finco360.com/",headers:{"content-type":"application/json",UserAgent:"WebAgent","X-TenantID":"finco3"}})},65482:function(e,t,n){n.d(t,{LP:function(){return f},jG:function(){return s},sd:function(){return h}});var i=n(1413),l=n(34045),o=n(35125),a=n(31052),c=n.n(a),r=n(85062),d=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],f=function(){var e=JSON.parse(localStorage.getItem("fincoLoginDetails")).token;return e||!1},s=function(e){var t=e.data,n=e.pdfTitle,l=e.pdfName,a=e.columns;console.log("downloadPdf called");var r=new o.default("p","mm",[430,430]);r.text(n,15,10),c()(r,{body:t,columns:a.map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{dataKey:e.field})})),theme:"grid",columnStyles:{0:{cellWidth:10},1:{cellWidth:25},2:{cellWidth:20},3:{cellWidth:25},4:{cellWidth:25},5:{cellWidth:30},6:{cellWidth:25},7:{cellWidth:25},8:{cellWidth:25},9:{cellWidth:25},10:{cellWidth:25},11:{cellWidth:22},12:{cellWidth:20},13:{cellWidth:22},14:{cellWidth:20},15:{cellWidth:20},16:{cellWidth:30},17:{cellWidth:20}},styles:{fontSize:10,theme:"grid"},headStyles:{lineWidth:.5,fontSize:10,fontStyle:"bold",fillColor:"#f9c46b",lineColor:"#ffffff"},bodyStyles:{fillColor:"#e3e3e3",lineWidth:.5,lineColor:"#ffffff"}}),r.save(l)};function u(e){var t=e.finalData,n=e.columnLength,i=l.P6.json_to_sheet(t,{skipHeader:!0}),o=l.P6.book_new();l.P6.book_append_sheet(o,i,"Staff List");var a=l.cW(o,{bookType:"xlsx",type:"array"});return function(e,t){return r.fromDataAsync(e).then((function(e){return e.sheets().forEach((function(e){e.usedRange().style({fontFamily:"Arial",verticalAlignment:"center"}),d.forEach((function(t){e.column(t).width(18)})),e.range(t.titleRange).merged(!0).style({bold:!0,horizontalAlignment:"center",verticalAlignment:"center"}),e.range(t.theadRange).style({fill:"edd2cb",bold:!1,horizontalAlignment:"center"}),e.range(t.tbodyRange).style({horizontalAlignment:"left",fill:"f1e8e6"}),e.range(t.tableRange).style({border:{style:"thin",color:"000000",direction:"both"}})})),e.outputAsync().then((function(e){return URL.createObjectURL(e)}))}))}(new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"}),{titleCell:"A2",titleRange:"A1:B2",theadRange:"A3:".concat(d[n-1],"3"),tbodyRange:"A4:".concat(d[n-1]).concat(t.length),tableRange:"A3:".concat(d[n-1]).concat(t.length)})}var h=function(e){var t=e.data,n=e.sheetName,l=e.fileName,o=[];for(var a in t[0])o.push(a);for(var c={},r=[],f=0;f<o.length;f++){var s=d[f];c[s]=o[f]}r.push(c);var h=[].concat([{A:"Details:"},{}],r),p={};t.forEach((function(e,t){for(var n in c){var l=c[n];p[n]=e[l]}h.push((0,i.Z)({},p))})),u({finalData:h,columnLength:o.length,sheetName:n}).then((function(e){var t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download",l),t.click(),t.remove()}))}},73882:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var i=n(74165),l=n(15861),o=n(70885),a=n(78983),c=n(72791),r=n(73332),d=n(65482),f=n(9098),s=n(62711),u=n(59434),h=n(80184),p=function(e){var t=e.data,n=[{title:"Id",field:"StaffId"},{title:"FirstName",field:"Firstname"},{title:"LastName",field:"Lastname"},{title:"Code",field:"Code"},{title:"Dob",field:"Dob"},{title:"MaritalStatus",field:"MaritalStatus"},{title:"Mobile",field:"Mobile"},{title:"Email",field:"Email"},{title:"BloodGroup",field:"BloodGroup"},{title:"JoinDate",field:"JoinDate"},{title:"JobType",field:"JobType"},{title:"StaffGroup",field:"StaffGroup"},{title:"PanNo",field:"PanNo"},{title:"Gender",field:"Gender"},{title:"District",field:"District"},{title:"Vdc",field:"Vdc"},{title:"Tole",field:"Tole"},{title:"WardNo",field:"WardNo"}],i={data:t,sheetName:"Records",fileName:"StaffList.xlsx"},l={data:t,pdfTitle:"Staff Details:",pdfName:"StaffList.pdf",columns:n},o=(0,u.v9)((function(e){return e.dropDownData.selected.name})),c="Office Name:".concat(o);return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(a.KB,{className:"p-2",children:(0,h.jsx)(f.ZP,{title:c,data:t,columns:n,options:{headerStyle:{background:"rgb(84,142,239)",color:"white",fontWeight:"bold",position:"sticky",top:0},maxBodyHeight:"650px",sorting:!0,columnsButton:!0,paginationType:"stepped",showFirstLastPageButtons:!0},actions:[{icon:function(){return(0,h.jsx)(s.JO,{icon:"mdi:file-excel",width:"25",inline:!0,id:1,color:"green"})},tooltip:"Export To Excel",isFreeAction:!0,onClick:function(e){(0,d.sd)(i)}},{icon:function(){return(0,h.jsx)(s.JO,{icon:"mdi:file-pdf-box",color:"red",width:"26",id:1,inline:!0})},tooltip:"Download as pdf",isFreeAction:!0,onClick:function(e){(0,d.jG)(l)}}]})})})},m=n(24846),g=n(62412),b=function(){var e=(0,c.useState)([]),t=(0,o.Z)(e,2),n=t[0],f=t[1],s=(0,u.v9)((function(e){return e.dropDownData.selected.id})),b=(0,d.LP)();return(0,c.useEffect)((function(){var e=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.a.get("/finco/api/auth/staff/list?officeId=".concat(s),{headers:{token:"".concat(b)}});case 3:t=e.sent,f(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[s]),(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(a.KB,{children:(0,h.jsx)(a.rb,{children:(0,h.jsx)(a.b7,{xs:"12",children:(0,h.jsxs)(a.xH,{style:{background:"#60779f"},children:[(0,h.jsxs)(a.bn,{component:"h5",children:[(0,h.jsx)(m.Z,{icon:g.E,customClassName:"nav-icon",height:30,width:50,style:{color:"white"}}),(0,h.jsx)("span",{className:"d-inline-block text-white",children:"Staff Details"})]}),(0,h.jsx)(a.sl,{children:(0,h.jsx)(p,{data:n})})]})})})})})}}}]);
//# sourceMappingURL=882.25a0f32f.chunk.js.map