(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[17],{1140:function(e,a,t){"use strict";t.r(a);var l=t(224),s=t(225),r=t(227),n=t(226),c=t(229),m=t(228),o=t(3),i=t.n(o),d=t(935),u=t(880),p=t(881),g=t(883),E=t(884),N=t(994),b=t(956),v=t(1097),h=t(1098),f=t(1099),x=t(898),y=t(35),w=t(98),O=t(108),C=t.n(O),M=t(875),j=t.n(M),T=t(876),k={tag:T.p,className:C.a.string,cssModule:C.a.object},S=function(e){var a=e.className,t=e.cssModule,l=e.tag,s=Object(w.a)(e,["className","cssModule","tag"]),r=Object(T.l)(j()(a,"card-title"),t);return i.a.createElement(l,Object(y.a)({},s,{className:r}))};S.propTypes=k,S.defaultProps={tag:"div"};var A=S,R=t(887),J=t(995),L=t(903),P=t(927),B=t(885),z=t(891),F=t(918),W=t(945),I=t(973),D=Object(o.lazy)((function(){return t.e(44).then(t.bind(null,974))})),H=Object(I.getStyle)("--primary"),_=Object(I.getStyle)("--success"),U=Object(I.getStyle)("--info"),V=Object(I.getStyle)("--warning"),Y=Object(I.getStyle)("--danger"),$={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:H,borderColor:"rgba(255,255,255,.55)",data:[65,59,84,84,51,55,40]}]},q={tooltips:{enabled:!1,custom:W.CustomTooltips},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,$.datasets[0].data)-5,max:Math.max.apply(Math,$.datasets[0].data)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},K={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:U,borderColor:"rgba(255,255,255,.55)",data:[1,18,9,17,34,22,11]}]},Q={tooltips:{enabled:!1,custom:W.CustomTooltips},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,K.datasets[0].data)-5,max:Math.max.apply(Math,K.datasets[0].data)+5}}]},elements:{line:{tension:1e-5,borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},X={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40]}]},Z={tooltips:{enabled:!1,custom:W.CustomTooltips},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},G={labels:["","","","","","","","","","","","","","","",""],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.3)",borderColor:"transparent",data:[78,81,80,45,34,12,40,75,34,89,32,68,54,72,18,98]}]},ee={tooltips:{enabled:!1,custom:W.CustomTooltips},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1,barPercentage:.6}],yAxes:[{display:!1}]}},ae=[{data:[65,59,84,84,51,55,40],label:"facebook"},{data:[1,13,9,17,34,41,38],label:"twitter"},{data:[78,81,80,45,34,12,40],label:"linkedin"},{data:[35,23,56,22,97,23,64],label:"google"}],te=function(e){var a=ae[e],t={labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:a.data,label:a.label}]};return function(){return t}},le={tooltips:{enabled:!1,custom:W.CustomTooltips},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}},se=[{data:[35,23,56,22,97,23,64],label:"New Clients"},{data:[65,59,84,84,51,55,40],label:"Recurring Clients"},{data:[35,23,56,22,97,23,64],label:"Pageviews"},{data:[65,59,84,84,51,55,40],label:"Organic"},{data:[78,81,80,45,34,12,40],label:"CTR"},{data:[1,13,9,17,34,41,38],label:"Bounce Rate"}],re=function(e,a){var t=se[e],l={labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{backgroundColor:"transparent",borderColor:a||"#c2cfd6",data:t.data,label:t.label}]};return function(){return l}},ne={tooltips:{enabled:!1,custom:W.CustomTooltips},responsive:!0,maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}};function ce(e,a){return Math.floor(Math.random()*(a-e+1)+e)}for(var me=[],oe=[],ie=[],de=0;de<=27;de++)me.push(ce(50,200)),oe.push(ce(80,100)),ie.push(65);var ue={labels:["Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su"],datasets:[{label:"My First dataset",backgroundColor:Object(I.hexToRgba)(U,10),borderColor:U,pointHoverBackgroundColor:"#fff",borderWidth:2,data:me},{label:"My Second dataset",backgroundColor:"transparent",borderColor:_,pointHoverBackgroundColor:"#fff",borderWidth:2,data:oe},{label:"My Third dataset",backgroundColor:"transparent",borderColor:Y,pointHoverBackgroundColor:"#fff",borderWidth:1,borderDash:[8,5],data:ie}]},pe={tooltips:{enabled:!1,custom:W.CustomTooltips,intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(e,a){return{backgroundColor:a.data.datasets[e.datasetIndex].borderColor}}}},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{drawOnChartArea:!1}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}},ge=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(r.a)(this,Object(n.a)(a).call(this,e))).loading=function(){return i.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},t.toggle=t.toggle.bind(Object(c.a)(t)),t.onRadioBtnClick=t.onRadioBtnClick.bind(Object(c.a)(t)),t.state={dropdownOpen:!1,radioSelected:2},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"onRadioBtnClick",value:function(e){this.setState({radioSelected:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(u.a,null,i.a.createElement(p.a,{xs:"12",sm:"6",lg:"3"},i.a.createElement(g.a,{className:"text-white bg-info"},i.a.createElement(E.a,{className:"pb-0"},i.a.createElement(N.a,{className:"float-right"},i.a.createElement(b.a,{id:"card1",isOpen:this.state.card1,toggle:function(){e.setState({card1:!e.state.card1})}},i.a.createElement(v.a,{caret:!0,className:"p-0",color:"transparent"},i.a.createElement("i",{className:"icon-settings"})),i.a.createElement(h.a,{right:!0},i.a.createElement(f.a,null,"Action"),i.a.createElement(f.a,null,"Another action"),i.a.createElement(f.a,{disabled:!0},"Disabled action"),i.a.createElement(f.a,null,"Something else here")))),i.a.createElement("div",{className:"text-value"},"9.823"),i.a.createElement("div",null,"Members online")),i.a.createElement("div",{className:"chart-wrapper mx-3",style:{height:"70px"}},i.a.createElement(d.c,{data:K,options:Q,height:70})))),i.a.createElement(p.a,{xs:"12",sm:"6",lg:"3"},i.a.createElement(g.a,{className:"text-white bg-primary"},i.a.createElement(E.a,{className:"pb-0"},i.a.createElement(N.a,{className:"float-right"},i.a.createElement(x.a,{id:"card2",isOpen:this.state.card2,toggle:function(){e.setState({card2:!e.state.card2})}},i.a.createElement(v.a,{className:"p-0",color:"transparent"},i.a.createElement("i",{className:"icon-location-pin"})),i.a.createElement(h.a,{right:!0},i.a.createElement(f.a,null,"Action"),i.a.createElement(f.a,null,"Another action"),i.a.createElement(f.a,null,"Something else here")))),i.a.createElement("div",{className:"text-value"},"9.823"),i.a.createElement("div",null,"Members online")),i.a.createElement("div",{className:"chart-wrapper mx-3",style:{height:"70px"}},i.a.createElement(d.c,{data:$,options:q,height:70})))),i.a.createElement(p.a,{xs:"12",sm:"6",lg:"3"},i.a.createElement(g.a,{className:"text-white bg-warning"},i.a.createElement(E.a,{className:"pb-0"},i.a.createElement(N.a,{className:"float-right"},i.a.createElement(x.a,{id:"card3",isOpen:this.state.card3,toggle:function(){e.setState({card3:!e.state.card3})}},i.a.createElement(v.a,{caret:!0,className:"p-0",color:"transparent"},i.a.createElement("i",{className:"icon-settings"})),i.a.createElement(h.a,{right:!0},i.a.createElement(f.a,null,"Action"),i.a.createElement(f.a,null,"Another action"),i.a.createElement(f.a,null,"Something else here")))),i.a.createElement("div",{className:"text-value"},"9.823"),i.a.createElement("div",null,"Members online")),i.a.createElement("div",{className:"chart-wrapper",style:{height:"70px"}},i.a.createElement(d.c,{data:X,options:Z,height:70})))),i.a.createElement(p.a,{xs:"12",sm:"6",lg:"3"},i.a.createElement(g.a,{className:"text-white bg-danger"},i.a.createElement(E.a,{className:"pb-0"},i.a.createElement(N.a,{className:"float-right"},i.a.createElement(b.a,{id:"card4",isOpen:this.state.card4,toggle:function(){e.setState({card4:!e.state.card4})}},i.a.createElement(v.a,{caret:!0,className:"p-0",color:"transparent"},i.a.createElement("i",{className:"icon-settings"})),i.a.createElement(h.a,{right:!0},i.a.createElement(f.a,null,"Action"),i.a.createElement(f.a,null,"Another action"),i.a.createElement(f.a,null,"Something else here")))),i.a.createElement("div",{className:"text-value"},"9.823"),i.a.createElement("div",null,"Members online")),i.a.createElement("div",{className:"chart-wrapper mx-3",style:{height:"70px"}},i.a.createElement(d.a,{data:G,options:ee,height:70}))))),i.a.createElement(u.a,null,i.a.createElement(p.a,null,i.a.createElement(g.a,null,i.a.createElement(E.a,null,i.a.createElement(u.a,null,i.a.createElement(p.a,{sm:"5"},i.a.createElement(A,{className:"mb-0"},"Traffic"),i.a.createElement("div",{className:"small text-muted"},"November 2015")),i.a.createElement(p.a,{sm:"7",className:"d-none d-sm-inline-block"},i.a.createElement(R.a,{color:"primary",className:"float-right"},i.a.createElement("i",{className:"icon-cloud-download"})),i.a.createElement(J.a,{className:"float-right","aria-label":"Toolbar with button groups"},i.a.createElement(N.a,{className:"mr-3","aria-label":"First group"},i.a.createElement(R.a,{color:"outline-secondary",onClick:function(){return e.onRadioBtnClick(1)},active:1===this.state.radioSelected},"Day"),i.a.createElement(R.a,{color:"outline-secondary",onClick:function(){return e.onRadioBtnClick(2)},active:2===this.state.radioSelected},"Month"),i.a.createElement(R.a,{color:"outline-secondary",onClick:function(){return e.onRadioBtnClick(3)},active:3===this.state.radioSelected},"Year"))))),i.a.createElement("div",{className:"chart-wrapper",style:{height:"300px",marginTop:"40px"}},i.a.createElement(d.c,{data:ue,options:pe,height:300}))),i.a.createElement(L.a,null,i.a.createElement(u.a,{className:"text-center"},i.a.createElement(p.a,{sm:12,md:!0,className:"mb-sm-2 mb-0"},i.a.createElement("div",{className:"text-muted"},"Visits"),i.a.createElement("strong",null,"29.703 Users (40%)"),i.a.createElement(P.a,{className:"progress-xs mt-2",color:"success",value:"40"})),i.a.createElement(p.a,{sm:12,md:!0,className:"mb-sm-2 mb-0 d-md-down-none"},i.a.createElement("div",{className:"text-muted"},"Unique"),i.a.createElement("strong",null,"24.093 Users (20%)"),i.a.createElement(P.a,{className:"progress-xs mt-2",color:"info",value:"20"})),i.a.createElement(p.a,{sm:12,md:!0,className:"mb-sm-2 mb-0"},i.a.createElement("div",{className:"text-muted"},"Pageviews"),i.a.createElement("strong",null,"78.706 Views (60%)"),i.a.createElement(P.a,{className:"progress-xs mt-2",color:"warning",value:"60"})),i.a.createElement(p.a,{sm:12,md:!0,className:"mb-sm-2 mb-0"},i.a.createElement("div",{className:"text-muted"},"New Users"),i.a.createElement("strong",null,"22.123 Users (80%)"),i.a.createElement(P.a,{className:"progress-xs mt-2",color:"danger",value:"80"})),i.a.createElement(p.a,{sm:12,md:!0,className:"mb-sm-2 mb-0 d-md-down-none"},i.a.createElement("div",{className:"text-muted"},"Bounce Rate"),i.a.createElement("strong",null,"Average Rate (40.15%)"),i.a.createElement(P.a,{className:"progress-xs mt-2",color:"primary",value:"40"}))))))),i.a.createElement(u.a,null,i.a.createElement(p.a,{xs:"6",sm:"6",lg:"3"},i.a.createElement(o.Suspense,{fallback:this.loading()},i.a.createElement(D,{dataBox:function(){return{variant:"facebook",friends:"89k",feeds:"459"}}},i.a.createElement("div",{className:"chart-wrapper"},i.a.createElement(d.c,{data:te(0),options:le,height:90}))))),i.a.createElement(p.a,{xs:"6",sm:"6",lg:"3"},i.a.createElement(o.Suspense,{fallback:this.loading()},i.a.createElement(D,{dataBox:function(){return{variant:"twitter",followers:"973k",tweets:"1.792"}}},i.a.createElement("div",{className:"chart-wrapper"},i.a.createElement(d.c,{data:te(1),options:le,height:90}))))),i.a.createElement(p.a,{xs:"6",sm:"6",lg:"3"},i.a.createElement(o.Suspense,{fallback:this.loading()},i.a.createElement(D,{dataBox:function(){return{variant:"linkedin",contacts:"500+",feeds:"292"}}},i.a.createElement("div",{className:"chart-wrapper"},i.a.createElement(d.c,{data:te(2),options:le,height:90}))))),i.a.createElement(p.a,{xs:"6",sm:"6",lg:"3"},i.a.createElement(o.Suspense,{fallback:this.loading()},i.a.createElement(D,{dataBox:function(){return{variant:"google-plus",followers:"894",circles:"92"}}},i.a.createElement("div",{className:"chart-wrapper"},i.a.createElement(d.c,{data:te(3),options:le,height:90})))))),i.a.createElement(u.a,null,i.a.createElement(p.a,null,i.a.createElement(g.a,null,i.a.createElement(B.a,null,"Traffic "," & "," Sales"),i.a.createElement(E.a,null,i.a.createElement(u.a,null,i.a.createElement(p.a,{xs:"12",md:"6",xl:"6"},i.a.createElement(u.a,null,i.a.createElement(p.a,{sm:"6"},i.a.createElement("div",{className:"callout callout-info"},i.a.createElement("small",{className:"text-muted"},"New Clients"),i.a.createElement("br",null),i.a.createElement("strong",{className:"h4"},"9,123"),i.a.createElement("div",{className:"chart-wrapper"},i.a.createElement(d.c,{data:re(0,H),options:ne,width:100,height:30})))),i.a.createElement(p.a,{sm:"6"},i.a.createElement("div",{className:"callout callout-danger"},i.a.createElement("small",{className:"text-muted"},"Recurring Clients"),i.a.createElement("br",null),i.a.createElement("strong",{className:"h4"},"22,643"),i.a.createElement("div",{className:"chart-wrapper"},i.a.createElement(d.c,{data:re(1,Y),options:ne,width:100,height:30}))))),i.a.createElement("hr",{className:"mt-0"}),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Monday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(P.a,{className:"progress-xs",color:"info",value:"34"}),i.a.createElement(P.a,{className:"progress-xs",color:"danger",value:"78"}))),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Tuesday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(P.a,{className:"progress-xs",color:"info",value:"56"}),i.a.createElement(P.a,{className:"progress-xs",color:"danger",value:"94"}))),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Wednesday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(P.a,{className:"progress-xs",color:"info",value:"12"}),i.a.createElement(P.a,{className:"progress-xs",color:"danger",value:"67"}))),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Thursday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(P.a,{className:"progress-xs",color:"info",value:"43"}),i.a.createElement(P.a,{className:"progress-xs",color:"danger",value:"91"}))),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Friday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(P.a,{className:"progress-xs",color:"info",value:"22"}),i.a.createElement(P.a,{className:"progress-xs",color:"danger",value:"73"}))),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Saturday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(P.a,{className:"progress-xs",color:"info",value:"53"}),i.a.createElement(P.a,{className:"progress-xs",color:"danger",value:"82"}))),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Sunday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(P.a,{className:"progress-xs",color:"info",value:"9"}),i.a.createElement(P.a,{className:"progress-xs",color:"danger",value:"69"}))),i.a.createElement("div",{className:"legend text-center"},i.a.createElement("small",null,i.a.createElement("sup",{className:"px-1"},i.a.createElement(z.a,{pill:!0,color:"info"},"\xa0")),"New clients \xa0",i.a.createElement("sup",{className:"px-1"},i.a.createElement(z.a,{pill:!0,color:"danger"},"\xa0")),"Recurring clients"))),i.a.createElement(p.a,{xs:"12",md:"6",xl:"6"},i.a.createElement(u.a,null,i.a.createElement(p.a,{sm:"6"},i.a.createElement("div",{className:"callout callout-warning"},i.a.createElement("small",{className:"text-muted"},"Pageviews"),i.a.createElement("br",null),i.a.createElement("strong",{className:"h4"},"78,623"),i.a.createElement("div",{className:"chart-wrapper"},i.a.createElement(d.c,{data:re(2,V),options:ne,width:100,height:30})))),i.a.createElement(p.a,{sm:"6"},i.a.createElement("div",{className:"callout callout-success"},i.a.createElement("small",{className:"text-muted"},"Organic"),i.a.createElement("br",null),i.a.createElement("strong",{className:"h4"},"49,123"),i.a.createElement("div",{className:"chart-wrapper"},i.a.createElement(d.c,{data:re(3,_),options:ne,width:100,height:30}))))),i.a.createElement("hr",{className:"mt-0"}),i.a.createElement("ul",null,i.a.createElement("div",{className:"progress-group"},i.a.createElement("div",{className:"progress-group-header"},i.a.createElement("i",{className:"icon-user progress-group-icon"}),i.a.createElement("span",{className:"title"},"Male"),i.a.createElement("span",{className:"ml-auto font-weight-bold"},"43%")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(P.a,{className:"progress-xs",color:"warning",value:"43"}))),i.a.createElement("div",{className:"progress-group mb-5"},i.a.createElement("div",{className:"progress-group-header"},i.a.createElement("i",{className:"icon-user-female progress-group-icon"}),i.a.createElement("span",{className:"title"},"Female"),i.a.createElement("span",{className:"ml-auto font-weight-bold"},"37%")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(P.a,{className:"progress-xs",color:"warning",value:"37"}))),i.a.createElement("div",{className:"progress-group"},i.a.createElement("div",{className:"progress-group-header"},i.a.createElement("i",{className:"icon-globe progress-group-icon"}),i.a.createElement("span",{className:"title"},"Organic Search"),i.a.createElement("span",{className:"ml-auto font-weight-bold"},"191,235 ",i.a.createElement("span",{className:"text-muted small"},"(56%)"))),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(P.a,{className:"progress-xs",color:"success",value:"56"}))),i.a.createElement("div",{className:"progress-group"},i.a.createElement("div",{className:"progress-group-header"},i.a.createElement("i",{className:"icon-social-facebook progress-group-icon"}),i.a.createElement("span",{className:"title"},"Facebook"),i.a.createElement("span",{className:"ml-auto font-weight-bold"},"51,223 ",i.a.createElement("span",{className:"text-muted small"},"(15%)"))),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(P.a,{className:"progress-xs",color:"success",value:"15"}))),i.a.createElement("div",{className:"progress-group"},i.a.createElement("div",{className:"progress-group-header"},i.a.createElement("i",{className:"icon-social-twitter progress-group-icon"}),i.a.createElement("span",{className:"title"},"Twitter"),i.a.createElement("span",{className:"ml-auto font-weight-bold"},"37,564 ",i.a.createElement("span",{className:"text-muted small"},"(11%)"))),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(P.a,{className:"progress-xs",color:"success",value:"11"}))),i.a.createElement("div",{className:"progress-group"},i.a.createElement("div",{className:"progress-group-header"},i.a.createElement("i",{className:"icon-social-linkedin progress-group-icon"}),i.a.createElement("span",{className:"title"},"LinkedIn"),i.a.createElement("span",{className:"ml-auto font-weight-bold"},"27,319 ",i.a.createElement("span",{className:"text-muted small"},"(8%)"))),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(P.a,{className:"progress-xs",color:"success",value:"8"}))),i.a.createElement("div",{className:"divider text-center"},i.a.createElement(R.a,{color:"link",size:"sm",className:"text-muted","data-toggle":"tooltip","data-placement":"top",title:"","data-original-title":"show more"},i.a.createElement("i",{className:"icon-options"})))))),i.a.createElement("br",null),i.a.createElement(F.a,{hover:!0,responsive:!0,className:"table-outline mb-0 d-none d-sm-table"},i.a.createElement("thead",{className:"thead-light"},i.a.createElement("tr",null,i.a.createElement("th",{className:"text-center"},i.a.createElement("i",{className:"icon-people"})),i.a.createElement("th",null,"User"),i.a.createElement("th",{className:"text-center"},"Country"),i.a.createElement("th",null,"Usage"),i.a.createElement("th",{className:"text-center"},"Payment Method"),i.a.createElement("th",null,"Activity"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{className:"text-center"},i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:"assets/img/avatars/1.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),i.a.createElement("span",{className:"avatar-status badge-success"}))),i.a.createElement("td",null,i.a.createElement("div",null,"Yiorgos Avraamu"),i.a.createElement("div",{className:"small text-muted"},i.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"flag-icon flag-icon-us h4 mb-0",title:"us",id:"us"})),i.a.createElement("td",null,i.a.createElement("div",{className:"clearfix"},i.a.createElement("div",{className:"float-left"},i.a.createElement("strong",null,"50%")),i.a.createElement("div",{className:"float-right"},i.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),i.a.createElement(P.a,{className:"progress-xs",color:"success",value:"50"})),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"fa fa-cc-mastercard",style:{fontSize:"24px"}})),i.a.createElement("td",null,i.a.createElement("div",{className:"small text-muted"},"Last login"),i.a.createElement("strong",null,"10 sec ago"))),i.a.createElement("tr",null,i.a.createElement("td",{className:"text-center"},i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:"assets/img/avatars/2.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),i.a.createElement("span",{className:"avatar-status badge-danger"}))),i.a.createElement("td",null,i.a.createElement("div",null,"Avram Tarasios"),i.a.createElement("div",{className:"small text-muted"},i.a.createElement("span",null,"Recurring")," | Registered: Jan 1, 2015")),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"flag-icon flag-icon-br h4 mb-0",title:"br",id:"br"})),i.a.createElement("td",null,i.a.createElement("div",{className:"clearfix"},i.a.createElement("div",{className:"float-left"},i.a.createElement("strong",null,"10%")),i.a.createElement("div",{className:"float-right"},i.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),i.a.createElement(P.a,{className:"progress-xs",color:"info",value:"10"})),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"fa fa-cc-visa",style:{fontSize:"24px"}})),i.a.createElement("td",null,i.a.createElement("div",{className:"small text-muted"},"Last login"),i.a.createElement("strong",null,"5 minutes ago"))),i.a.createElement("tr",null,i.a.createElement("td",{className:"text-center"},i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:"assets/img/avatars/3.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),i.a.createElement("span",{className:"avatar-status badge-warning"}))),i.a.createElement("td",null,i.a.createElement("div",null,"Quintin Ed"),i.a.createElement("div",{className:"small text-muted"},i.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"flag-icon flag-icon-in h4 mb-0",title:"in",id:"in"})),i.a.createElement("td",null,i.a.createElement("div",{className:"clearfix"},i.a.createElement("div",{className:"float-left"},i.a.createElement("strong",null,"74%")),i.a.createElement("div",{className:"float-right"},i.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),i.a.createElement(P.a,{className:"progress-xs",color:"warning",value:"74"})),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"fa fa-cc-stripe",style:{fontSize:"24px"}})),i.a.createElement("td",null,i.a.createElement("div",{className:"small text-muted"},"Last login"),i.a.createElement("strong",null,"1 hour ago"))),i.a.createElement("tr",null,i.a.createElement("td",{className:"text-center"},i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:"assets/img/avatars/4.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),i.a.createElement("span",{className:"avatar-status badge-secondary"}))),i.a.createElement("td",null,i.a.createElement("div",null,"En\xe9as Kwadwo"),i.a.createElement("div",{className:"small text-muted"},i.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"flag-icon flag-icon-fr h4 mb-0",title:"fr",id:"fr"})),i.a.createElement("td",null,i.a.createElement("div",{className:"clearfix"},i.a.createElement("div",{className:"float-left"},i.a.createElement("strong",null,"98%")),i.a.createElement("div",{className:"float-right"},i.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),i.a.createElement(P.a,{className:"progress-xs",color:"danger",value:"98"})),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"fa fa-paypal",style:{fontSize:"24px"}})),i.a.createElement("td",null,i.a.createElement("div",{className:"small text-muted"},"Last login"),i.a.createElement("strong",null,"Last month"))),i.a.createElement("tr",null,i.a.createElement("td",{className:"text-center"},i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:"assets/img/avatars/5.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),i.a.createElement("span",{className:"avatar-status badge-success"}))),i.a.createElement("td",null,i.a.createElement("div",null,"Agapetus Tade\xe1\u0161"),i.a.createElement("div",{className:"small text-muted"},i.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"flag-icon flag-icon-es h4 mb-0",title:"es",id:"es"})),i.a.createElement("td",null,i.a.createElement("div",{className:"clearfix"},i.a.createElement("div",{className:"float-left"},i.a.createElement("strong",null,"22%")),i.a.createElement("div",{className:"float-right"},i.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),i.a.createElement(P.a,{className:"progress-xs",color:"info",value:"22"})),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"fa fa-google-wallet",style:{fontSize:"24px"}})),i.a.createElement("td",null,i.a.createElement("div",{className:"small text-muted"},"Last login"),i.a.createElement("strong",null,"Last week"))),i.a.createElement("tr",null,i.a.createElement("td",{className:"text-center"},i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:"assets/img/avatars/6.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),i.a.createElement("span",{className:"avatar-status badge-danger"}))),i.a.createElement("td",null,i.a.createElement("div",null,"Friderik D\xe1vid"),i.a.createElement("div",{className:"small text-muted"},i.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"flag-icon flag-icon-pl h4 mb-0",title:"pl",id:"pl"})),i.a.createElement("td",null,i.a.createElement("div",{className:"clearfix"},i.a.createElement("div",{className:"float-left"},i.a.createElement("strong",null,"43%")),i.a.createElement("div",{className:"float-right"},i.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),i.a.createElement(P.a,{className:"progress-xs",color:"success",value:"43"})),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"fa fa-cc-amex",style:{fontSize:"24px"}})),i.a.createElement("td",null,i.a.createElement("div",{className:"small text-muted"},"Last login"),i.a.createElement("strong",null,"Yesterday"))))))))))}}]),a}(o.Component);a.default=ge},882:function(e,a,t){"use strict";function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},s=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),s.forEach((function(a){l(e,a,t[a])}))}return e}t.d(a,"a",(function(){return s}))},885:function(e,a,t){"use strict";var l=t(35),s=t(98),r=t(3),n=t.n(r),c=t(108),m=t.n(c),o=t(875),i=t.n(o),d=t(876),u={tag:d.p,className:m.a.string,cssModule:m.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),m=Object(d.l)(i()(a,"card-header"),t);return n.a.createElement(r,Object(l.a)({},c,{className:m}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},891:function(e,a,t){"use strict";var l=t(35),s=t(98),r=t(3),n=t.n(r),c=t(108),m=t.n(c),o=t(875),i=t.n(o),d=t(876),u={color:m.a.string,pill:m.a.bool,tag:d.p,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),children:m.a.node,className:m.a.string,cssModule:m.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.color,c=e.innerRef,m=e.pill,o=e.tag,u=Object(s.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(d.l)(i()(a,"badge","badge-"+r,!!m&&"badge-pill"),t);return u.href&&"span"===o&&(o="a"),n.a.createElement(o,Object(l.a)({},u,{className:p,ref:c}))};p.propTypes=u,p.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=p},897:function(e,a){var t=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,r=/^0o[0-7]+$/i,n=parseInt,c=Object.prototype.toString;function m(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}e.exports=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(m(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=m(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var o=s.test(e);return o||r.test(e)?n(e.slice(2),o?2:8):l.test(e)?NaN:+e}},903:function(e,a,t){"use strict";var l=t(35),s=t(98),r=t(3),n=t.n(r),c=t(108),m=t.n(c),o=t(875),i=t.n(o),d=t(876),u={tag:d.p,className:m.a.string,cssModule:m.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),m=Object(d.l)(i()(a,"card-footer"),t);return n.a.createElement(r,Object(l.a)({},c,{className:m}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},918:function(e,a,t){"use strict";var l=t(35),s=t(98),r=t(3),n=t.n(r),c=t(108),m=t.n(c),o=t(875),i=t.n(o),d=t(876),u={className:m.a.string,cssModule:m.a.object,size:m.a.string,bordered:m.a.bool,borderless:m.a.bool,striped:m.a.bool,dark:m.a.bool,hover:m.a.bool,responsive:m.a.oneOfType([m.a.bool,m.a.string]),tag:d.p,responsiveTag:d.p,innerRef:m.a.oneOfType([m.a.func,m.a.string,m.a.object])},p=function(e){var a=e.className,t=e.cssModule,r=e.size,c=e.bordered,m=e.borderless,o=e.striped,u=e.dark,p=e.hover,g=e.responsive,E=e.tag,N=e.responsiveTag,b=e.innerRef,v=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),h=Object(d.l)(i()(a,"table",!!r&&"table-"+r,!!c&&"table-bordered",!!m&&"table-borderless",!!o&&"table-striped",!!u&&"table-dark",!!p&&"table-hover"),t),f=n.a.createElement(E,Object(l.a)({},v,{ref:b,className:h}));if(g){var x=Object(d.l)(!0===g?"table-responsive":"table-responsive-"+g,t);return n.a.createElement(N,{className:x},f)}return f};p.propTypes=u,p.defaultProps={tag:"table",responsiveTag:"div"},a.a=p},927:function(e,a,t){"use strict";var l=t(35),s=t(98),r=t(3),n=t.n(r),c=t(108),m=t.n(c),o=t(875),i=t.n(o),d=t(897),u=t.n(d),p=t(876),g={children:m.a.node,bar:m.a.bool,multi:m.a.bool,tag:p.p,value:m.a.oneOfType([m.a.string,m.a.number]),max:m.a.oneOfType([m.a.string,m.a.number]),animated:m.a.bool,striped:m.a.bool,color:m.a.string,className:m.a.string,barClassName:m.a.string,cssModule:m.a.object},E=function(e){var a=e.children,t=e.className,r=e.barClassName,c=e.cssModule,m=e.value,o=e.max,d=e.animated,g=e.striped,E=e.color,N=e.bar,b=e.multi,v=e.tag,h=Object(s.a)(e,["children","className","barClassName","cssModule","value","max","animated","striped","color","bar","multi","tag"]),f=u()(m)/u()(o)*100,x=Object(p.l)(i()(t,"progress"),c),y=Object(p.l)(i()("progress-bar",N&&t||r,d?"progress-bar-animated":null,E?"bg-"+E:null,g||d?"progress-bar-striped":null),c),w=b?a:n.a.createElement("div",{className:y,style:{width:f+"%"},role:"progressbar","aria-valuenow":m,"aria-valuemin":"0","aria-valuemax":o,children:a});return N?w:n.a.createElement(v,Object(l.a)({},h,{className:x,children:w}))};E.propTypes=g,E.defaultProps={tag:"div",value:0,max:100},a.a=E},945:function(e,a,t){!function(e){"use strict";function a(e){var a=this,t="above",l="below",s="chartjs-tooltip",r="no-transform",n="tooltip-body",c="tooltip-body-item",m="tooltip-body-item-color",o="tooltip-body-item-label",i="tooltip-body-item-value",d="tooltip-header",u="tooltip-header-item",p={DIV:"div",SPAN:"span",TOOLTIP:(this._chart.canvas.id||function(){var e=function(){return(65536*(1+Math.random())|0).toString(16)},t="_canvas-"+(e()+e());return a._chart.canvas.id=t,t}())+"-tooltip"},g=document.getElementById(p.TOOLTIP);if(g||((g=document.createElement("div")).id=p.TOOLTIP,g.className=s,this._chart.canvas.parentNode.appendChild(g)),0!==e.opacity){if(g.classList.remove(t,l,r),e.yAlign?g.classList.add(e.yAlign):g.classList.add(r),e.body){var E=e.title||[],N=document.createElement(p.DIV);N.className=d,E.forEach((function(e){var a=document.createElement(p.DIV);a.className=u,a.innerHTML=e,N.appendChild(a)}));var b=document.createElement(p.DIV);b.className=n,e.body.map((function(e){return e.lines})).forEach((function(a,t){var l=document.createElement(p.DIV);l.className=c;var s=e.labelColors[t],r=document.createElement(p.SPAN);if(r.className=m,r.style.backgroundColor=s.backgroundColor,l.appendChild(r),a[0].split(":").length>1){var n=document.createElement(p.SPAN);n.className=o,n.innerHTML=a[0].split(": ")[0],l.appendChild(n);var d=document.createElement(p.SPAN);d.className=i,d.innerHTML=a[0].split(": ").pop(),l.appendChild(d)}else{var u=document.createElement(p.SPAN);u.className=i,u.innerHTML=a[0],l.appendChild(u)}b.appendChild(l)})),g.innerHTML="",g.appendChild(N),g.appendChild(b)}var v=this._chart.canvas.getBoundingClientRect(),h=this._chart.canvas.offsetTop,f=this._chart.canvas.offsetLeft+e.caretX,x=h+e.caretY,y=e.width/2;f+y>v.width?f-=y:f<y&&(f+=y),g.style.opacity=1,g.style.left=f+"px",g.style.top=x+"px"}else g.style.opacity=0}var t=a;e.CustomTooltips=a,e.customTooltips=t,Object.defineProperty(e,"__esModule",{value:!0})}(a)},956:function(e,a,t){"use strict";var l=t(35),s=t(3),r=t.n(s),n=t(108),c=t.n(n),m=t(898),o={children:c.a.node},i=function(e){return r.a.createElement(m.a,Object(l.a)({group:!0},e))};i.propTypes=o,a.a=i},994:function(e,a,t){"use strict";var l=t(35),s=t(98),r=t(3),n=t.n(r),c=t(108),m=t.n(c),o=t(875),i=t.n(o),d=t(876),u={tag:d.p,"aria-label":m.a.string,className:m.a.string,cssModule:m.a.object,role:m.a.string,size:m.a.string,vertical:m.a.bool},p=function(e){var a=e.className,t=e.cssModule,r=e.size,c=e.vertical,m=e.tag,o=Object(s.a)(e,["className","cssModule","size","vertical","tag"]),u=Object(d.l)(i()(a,!!r&&"btn-group-"+r,c?"btn-group-vertical":"btn-group"),t);return n.a.createElement(m,Object(l.a)({},o,{className:u}))};p.propTypes=u,p.defaultProps={tag:"div",role:"group"},a.a=p},995:function(e,a,t){"use strict";var l=t(35),s=t(98),r=t(3),n=t.n(r),c=t(108),m=t.n(c),o=t(875),i=t.n(o),d=t(876),u={tag:d.p,"aria-label":m.a.string,className:m.a.string,cssModule:m.a.object,role:m.a.string},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),m=Object(d.l)(i()(a,"btn-toolbar"),t);return n.a.createElement(r,Object(l.a)({},c,{className:m}))};p.propTypes=u,p.defaultProps={tag:"div",role:"toolbar"},a.a=p}}]);
//# sourceMappingURL=17.095e7a70.chunk.js.map