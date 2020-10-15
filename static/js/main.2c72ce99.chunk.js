(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{134:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=(a(85),a(27)),l=a(51),s=a(181),m=a(50),u=a(169),d=a(14),p=a(171),g=a(173),h=a(174),E=a(187),f=a(65),v=a.n(f),b=a(175),w=a(180),x=a(186),y=Object(u.a)((function(e){return{grow:{flexGrow:1},title:Object(m.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(m.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(d.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(d.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(m.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),formControl:{margin:e.spacing(1),minWidth:120},select:{backgroundColor:"#fff"}}}));function j(e){var t=e.unit,a=e.handleUnitChange,n=y();return r.a.createElement("div",{className:n.grow},r.a.createElement(p.a,{position:"static"},r.a.createElement(g.a,null,r.a.createElement(h.a,{className:n.title,variant:"h6",noWrap:!0},"Weather App"),r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(v.a,null)),r.a.createElement(E.a,{placeholder:"Search Location",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement(h.a,{className:n.title,variant:"subtitle1",noWrap:!0},"Unit"),r.a.createElement(b.a,{variant:"outlined",className:n.formControl},r.a.createElement(w.a,{id:"demo-simple-select-outlined",defaultValue:"standard",value:t,onChange:a,classes:{root:n.select,outlined:n.select}},r.a.createElement(x.a,{value:"standard"},"Standard"),r.a.createElement(x.a,{value:"metric"},"Metric"),r.a.createElement(x.a,{value:"imperial"},"Imperial"))),r.a.createElement("div",{className:n.grow}))))}var O=a(67),C=a(185),S=a(182);function k(e){return r.a.createElement(S.a,Object.assign({elevation:6,variant:"filled"},e))}function I(e){var t=e.type,a=e.handleClose,n=e.message,o=Object(O.a)(e,["type","handleClose","message"]);return r.a.createElement(C.a,o,r.a.createElement(k,{onClose:a,severity:t},n))}var N=a(12),L=a.n(N),W=a(49),B=a.n(W),z=a(178),R=a(179),T=a(176),P=a(177),F={standard:"K",metric:"\xb0C",imperial:"\xb0F"},U=Object(u.a)({desc:{textTransform:"capitalize"},temp:{fontSize:12,fontWeight:700}});function J(e){var t=e.latlng,a=e.unit,n=void 0===a?"standard":a,o=U(),c=Object(i.b)("".concat("https://api.openweathermap.org/data/2.5","/onecall?lat=").concat(t.lat,"&lon=").concat(t.lng,"&appid=").concat("01dbc6f376226b6537d5ee27257514eb","&units=").concat(n)),l=c.data,m=c.error;if(!l)return null;if(m)return"Error: ".concat(m.message);var u=L()(l,"daily",[]);return r.a.createElement(T.a,{container:!0},u.map((function(e,t){var a=1e3*L()(e,"dt"),c=L()(e,["weather","0"],{}),i=L()(c,"description",""),l=L()(c,"icon",""),m=L()(e,["temp","min"],0),u=L()(e,["temp","max"],0);return r.a.createElement(T.a,{container:!0,item:!0,xs:!0,xl:!0,key:"forcast-".concat(L()(e,"dt"),"-").concat(t),direction:"column",alignItems:"center"},r.a.createElement(h.a,{variant:"h5"},B()(a).format("dddd")),r.a.createElement("img",{alt:i,src:"http://openweathermap.org/img/wn/".concat(l,"@2x.png")}),r.a.createElement(h.a,{classes:{root:o.desc},color:"textSecondary"},i),r.a.createElement(s.a,{display:"flex",mt:2},r.a.createElement(h.a,{classes:{root:o.temp},variant:"subtitle1"},u," ",F[n]),r.a.createElement(P.a,{orientation:"vertical",flexItem:!0,variant:"middle"}),r.a.createElement(h.a,{classes:{root:o.temp},variant:"subtitle1"},m," ",F[n])))})))}var M=Object(u.a)({root:{minWidth:275,marginBottom:10},subText:{fontSize:14},weatherIcon:{marginLeft:10,width:100,height:100},desc:{textTransform:"capitalize",fontSize:20}});function A(e){var t=e.latlng,a=e.unit,n=M(),o=Object(i.b)("".concat("https://api.openweathermap.org/data/2.5","/weather?lat=").concat(t.lat,"&lon=").concat(t.lng,"&appid=").concat("01dbc6f376226b6537d5ee27257514eb","&units=").concat(a)),c=o.data,l=o.error;if(!c)return null;if(l)return"Error: ".concat(l.message);var s=1e3*L()(c,"dt"),m=L()(c,"name"),u=L()(c,["weather","0"],{}),d=L()(u,"description",""),p=L()(c,["main","temp"],0),g=L()(c,["main","humidity"],0),E=L()(c,["main","pressure"],0),f=L()(u,"icon","");return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{className:n.root},r.a.createElement(R.a,null,r.a.createElement(T.a,{container:!0,spacing:2},r.a.createElement(T.a,{item:!0,xs:2,xl:2},r.a.createElement(h.a,{variant:"h5",component:"h2"},m),f&&r.a.createElement("img",{className:n.weatherIcon,alt:"weather_icon",src:"http://openweathermap.org/img/wn/".concat(f,"@2x.png")}),r.a.createElement(h.a,{classes:{root:n.subText},color:"textSecondary"},B()(s).format("LLL")),r.a.createElement(h.a,{classes:{root:n.desc},variant:"subtitle2"},d)),r.a.createElement(T.a,{item:!0,xs:!0,xl:!0},r.a.createElement(h.a,{variant:"h6"},"Temperature"),r.a.createElement(h.a,{gutterBottom:!0,variant:"subtitle1",color:"textSecondary"},p," ",F[a]),r.a.createElement(h.a,{variant:"h6"},"Humidity"),r.a.createElement(h.a,{gutterBottom:!0,variant:"subtitle1",color:"textSecondary"},g," %"),r.a.createElement(h.a,{variant:"h6"},"Pressure"),r.a.createElement(h.a,{variant:"subtitle1",color:"textSecondary"},E," hPa"))))),r.a.createElement(z.a,null,r.a.createElement(R.a,null,r.a.createElement(J,{unit:a,latlng:t}))))}function G(){var e=Object(n.useState)({lat:40.7128,lng:74.006}),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),i=Object(l.a)(c,2),m=i[0],u=i[1],d=Object(n.useState)("standard"),p=Object(l.a)(d,2),g=p[0],h=p[1],E=Boolean(m);return Object(n.useEffect)((function(){!function(e){try{if(!navigator.geolocation)return void e("Not supported",null);navigator.geolocation.getCurrentPosition((function(t,a){console.log(a),e(a,t)}))}catch(t){console.log(t)}}((function(e,t){if(e)return console.log(e),void u(e.message);console.log(t),o({lat:t.coords.latitude,lng:t.coords.longitude})}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{unit:g,handleUnitChange:function(e){return h(e.target.value)}}),r.a.createElement(s.a,{p:3},r.a.createElement(A,{unit:g,latlng:a})),r.a.createElement(I,{open:E,message:m,type:"error",handleClose:function(){return u("")}}))}var H=function(){return r.a.createElement(i.a,{value:{fetcher:function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))}}},r.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a(134)},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.2c72ce99.chunk.js.map