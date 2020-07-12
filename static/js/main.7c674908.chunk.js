(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{10:function(e,a,t){e.exports={head:"Table_head__2sJK5",country:"Table_country__ww812",confirm:"Table_confirm__38gvK",tconfirm:"Table_tconfirm__3xhVy",recover:"Table_recover__uSJfW",trecover:"Table_trecover__1kKH4",death:"Table_death__57Ws9",tdeath:"Table_tdeath__3_dz7",container:"Table_container__481kb",header:"Table_header__1wPCD",span:"Table_span__19itR",search:"Table_search__3YApa"}},100:function(e,a,t){e.exports={FormControl:"Country_FormControl__3uUZg",global:"Country_global__2f6G_",opt:"Country_opt__2bBHj"}},11:function(e,a,t){e.exports={container:"Cards_container__1TDLq",card:"Cards_card__153w0",confirmed:"Cards_confirmed__O8c5h",recovered:"Cards_recovered__1tYx0",deaths:"Cards_deaths__1o1L_",confi:"Cards_confi__2tDhr",cval:"Cards_cval__swBZS",rval:"Cards_rval__2EDnf",dval:"Cards_dval__1yFEL",date:"Cards_date__26iTp",para:"Cards_para__37RDC"}},134:function(e,a,t){e.exports={container:"Charts_container__17S4b"}},19:function(e,a,t){e.exports={head:"India_head__2PTQf",container:"India_container__1DZax",state:"India_state__oTYRp",confirmed:"India_confirmed__10Srm",active:"India_active__R1CsO",recovered:"India_recovered__1XeIZ",deaths:"India_deaths__3103z",header:"India_header__jz2cm",span:"India_span__3ma0h",search:"India_search__3VAYS"}},226:function(e,a,t){e.exports=t(618)},230:function(e,a,t){},43:function(e,a,t){e.exports={container:"App_container__3lOPe",header:"App_header__3p3WG",span:"App_span__C5smL",footer:"App_footer__3enXk",countLink:"App_countLink__1eJW9",stateLink:"App_stateLink__WOhpw"}},618:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),o=t.n(c),l=(t(230),t(9)),s=t(7),i=t.n(s),u=t(20),m=t(34),d=t(35),p=t(37),h=t(36),f=t(638),v=t(652),_=t(640),E=t(641),b=t(11),g=t.n(b),C=t(98),N=t.n(C),w=t(99),y=t.n(w),x=function(e){var a=e.data,t=a.confirmed,n=a.recovered,c=a.deaths,o=a.lastUpdate;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:g.a.container},r.a.createElement(f.a,{container:!0,spacing:1,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:y()(g.a.card,g.a.confirmed)},r.a.createElement(_.a,null,r.a.createElement(E.a,{gutterbuttom:!0,className:g.a.confi},"Confirmed"),r.a.createElement(E.a,{className:g.a.cval,varient:"h5"},r.a.createElement(N.a,{start:0,end:t.value,duration:2.5,separator:","})),r.a.createElement(E.a,{className:g.a.date},new Date(o).toDateString()),r.a.createElement(E.a,{className:g.a.para},"Number of Confirmed Covid-19 cases"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:y()(g.a.card,g.a.recovered)},r.a.createElement(_.a,null,r.a.createElement(E.a,{gutterbuttom:!0,className:g.a.confi},"Recovered"),r.a.createElement(E.a,{className:g.a.rval,varient:"h5"},r.a.createElement(N.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(E.a,{className:g.a.date},new Date(o).toDateString()),r.a.createElement(E.a,{className:g.a.para},"Number of people Recovered from Covid-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:y()(g.a.card,g.a.deaths)},r.a.createElement(_.a,null,r.a.createElement(E.a,{className:g.a.confi,gutterbuttom:!0},"Deaths"),r.a.createElement(E.a,{className:g.a.dval,varient:"h5"},r.a.createElement(N.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(E.a,{className:g.a.date},new Date(o).toDateString()),r.a.createElement(E.a,{className:g.a.para},"Number of Deaths caused by Covid-19")))))):"Loading..."},k=t(49),j=t(97),O=t(48),D=t.n(O),S="https://covid19.mathdro.id/api",T=function(){var e=Object(u.a)(i.a.mark((function e(a){var t,n,r,c,o,l,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S,a&&(t="".concat(S,"/countries/").concat(a)),e.prev=2,e.next=5,D.a.get(t);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,l=r.deaths,s=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:l,lastUpdate:s});case 14:e.prev=14,e.t0=e.catch(2);case 16:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(a){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(i.a.mark((function e(){var a,t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(S,"/daily"));case 3:return a=e.sent,t=a.data,n=t.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(S,"/countries"));case 3:return a=e.sent,t=a.data.countries,e.abrupt("return",t.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),F=t(133),R=t(134),I=t.n(R),W=function(e){var a,t,c=e.data,o=c.confirmed,l=c.recovered,s=c.deaths,m=e.country,d=Object(n.useState)([]),p=Object(j.a)(d,2),h=p[0],f=p[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=h.length?r.a.createElement(F.a,{className:I.a.chart,data:(t={labels:h.map((function(e){return e.date}))},Object(k.a)(t,"labels",["Confirmed","Recovered","Deaths"]),Object(k.a)(t,"datasets",[(a={data:h.map((function(e){return e.confirmed}))},Object(k.a)(a,"data",h.map((function(e){return e.recovered}))),Object(k.a)(a,"data",h.map((function(e){return e.deaths}))),Object(k.a)(a,"backgroundColor",["red","green","grey"]),Object(k.a)(a,"data",[o.value,l.value,s.value]),Object(k.a)(a,"fill",!0),a)]),t),options:{legend:{display:!1},title:{display:!0,text:"current state in the world",fontColor:"black",fontSize:16},scales:{yAxes:[{ticks:{fontColor:"black"}}],xAxes:[{ticks:{fontColor:"black",fontSize:18}}]}}}):null,_=o?r.a.createElement(F.a,{data:{labels:["Confirmed","Recovered","Deaths"],datasets:[{label:"people",backgroundColor:["red","green","grey"],data:[o.value,l.value,s.value]}]},options:{legend:{display:!1},title:{display:!0,text:"current state in ".concat(m)}}}):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:I.a.container},m?_:v))},z=t(653),U=t(649),B=t(100),J=t.n(B),P=function(e){var a=e.countryChange,t=Object(n.useState)([]),c=Object(j.a)(t,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,L();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{className:J.a.FormControl},r.a.createElement(U.a,{className:J.a.opt,defaultValue:"",onChange:function(e){return a(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,a){return r.a.createElement("option",{className:J.a.global,key:a,value:e},e)})))))},Y=t(43),G=t.n(Y),H=t(55),Z=t(650),K=t(642),M=Object(K.a)({root:{background:"#455a64",color:"white",padding:"10px 40px",marginTop:"20px",marginBottom:"70px",boxShadow:"0 5px 5px 0 black","&:hover":{backgroundColor:"grey"}},label:{color:"white",fontSize:"20px"}}),V=function(){var e=M();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{size:"large",classes:{root:e.root,label:e.label}},r.a.createElement(H.b,{className:G.a.countLink,activeClassName:"active",exact:!0,to:"/tables"},"Countries Table")))},X=Object(K.a)({root:{background:"#455a64",color:"white",padding:"10px 40px",margin:"20px 0",boxShadow:"0 5px 5px 0 black","&:hover":{backgroundColor:"grey"}},label:{color:"white",fontSize:"20px"}}),q=function(){var e=X();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{size:"large",classes:{root:e.root,label:e.label}},r.a.createElement(H.b,{className:G.a.stateLink,activeClassName:"active",exact:!0,to:"/state"},"India Status")))},Q=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={data:{},country:""},e.countryChange=function(){var a=Object(u.a)(i.a.mark((function a(t){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T(t);case 2:n=a.sent,e.setState({data:n,country:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:a=e.sent,this.setState({data:a});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.data,t=e.country,n=(new Date).getFullYear();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:G.a.header},r.a.createElement("p",null,"Covid-",r.a.createElement("span",{className:G.a.span},"19"))),r.a.createElement("div",{className:G.a.container},r.a.createElement(P,{countryChange:this.countryChange}),r.a.createElement(q,null),r.a.createElement(x,{data:a}),r.a.createElement(V,null),r.a.createElement(W,{data:a,country:t})),r.a.createElement("div",{className:G.a.footer},r.a.createElement("p",null,"Copyright \xa9 ",n," Covid-19")))}}]),t}(r.a.Component),$=t(62),ee=t(646),ae=t(648),te=t(644),ne=t(645),re=t(647),ce=t(643),oe=t(10),le=t.n(oe),se=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props.countriesData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce.a,null,r.a.createElement(te.a,{className:le.a.country},e.Country),r.a.createElement(te.a,{className:le.a.confirm},e.NewConfirmed),r.a.createElement(te.a,{className:le.a.tconfirm},e.TotalConfirmed),r.a.createElement(te.a,{className:le.a.recover},e.NewRecovered),r.a.createElement(te.a,{className:le.a.trecover},e.TotalRecovered),r.a.createElement(te.a,{className:le.a.death},e.NewDeaths),r.a.createElement(te.a,{className:le.a.tdeath},e.TotalDeaths)))}}]),t}(r.a.Component);var ie=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={countriesData:[],global:[],currentDate:null,loading:!0},n.state={countriesData:[],term:""},n.onChange=n.onChange.bind(Object($.a)(n)),n}return Object(d.a)(t,[{key:"onChange",value:function(e){this.setState({term:e.target.value})}},{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get(" https://api.covid19api.com/summary");case 2:a=e.sent,this.setState({countriesData:a.data.Countries}),this.setState({global:a.data.Global}),this.setState({currentDate:a.data.Date}),this.setState({loading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?r.a.createElement("h1",null,"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:le.a.header},r.a.createElement("p",null,"Covid-",r.a.createElement("span",{className:le.a.span},"19"))),r.a.createElement("div",{className:le.a.search},r.a.createElement("input",{type:"text",placeholder:"Search...",onChange:this.onChange})),r.a.createElement("div",null,r.a.createElement(ne.a,{className:le.a.container},r.a.createElement(ee.a,null,r.a.createElement(re.a,null,r.a.createElement(ce.a,null,r.a.createElement(te.a,{className:le.a.head},"Countries"),r.a.createElement(te.a,{className:le.a.head},"New Confirmed Cases"),r.a.createElement(te.a,{className:le.a.head},"Total Confirmed Cases"),r.a.createElement(te.a,{className:le.a.head},"New Recovered"),r.a.createElement(te.a,{className:le.a.head},"Total Recovered"),r.a.createElement(te.a,{className:le.a.head},"New Deaths"),r.a.createElement(te.a,{className:le.a.head},"Total Deaths"))),r.a.createElement(ae.a,null,this.state.countriesData.filter((e=this.state.term,function(a){return a.Country.toLowerCase().includes(e.toLowerCase())||!e})).map((function(e){return r.a.createElement(se,{countriesData:e,key:e.Country})})))))));var e}}]),t}(r.a.Component),ue=(t(344),t(19)),me=t.n(ue),de=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props.states;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce.a,null,r.a.createElement(te.a,{className:me.a.state},e.state),r.a.createElement(te.a,{className:me.a.confirmed},"\u2191 ",e.deltaconfirmed,r.a.createElement("br",null),e.confirmed),r.a.createElement(te.a,{className:me.a.active},e.active),r.a.createElement(te.a,{className:me.a.recovered},"\u2191 ",e.deltarecovered,r.a.createElement("br",null),e.recovered),r.a.createElement(te.a,{className:me.a.deaths},"\u2191 ",e.deltadeaths,r.a.createElement("br",null),e.deaths)))}}]),t}(r.a.Component),pe=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).onChange=function(e){n.setState({term:e.target.value})},n.state={states:[],loading:!0},n.state={states:[],term:""},n.onChange=n.onChange.bind(Object($.a)(n)),n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("https://api.covid19india.org/data.json");case 2:a=e.sent,this.setState({states:a.data.statewise}),this.setState({loading:!1}),console.log(a);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?r.a.createElement("h1",null,"loaging..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:me.a.header},r.a.createElement("p",null,"Covid-",r.a.createElement("span",{className:me.a.span},"19"))),r.a.createElement("div",{className:me.a.search},r.a.createElement("input",{type:"text",placeholder:"Search...",onChange:this.onChange})),r.a.createElement(ne.a,{className:me.a.container},r.a.createElement(ee.a,null,r.a.createElement(re.a,null,r.a.createElement(ce.a,null,r.a.createElement(te.a,{className:me.a.head},"States"),r.a.createElement(te.a,{className:me.a.head},"Confirmed"),r.a.createElement(te.a,{className:me.a.head},"Active"),r.a.createElement(te.a,{className:me.a.head},"Recovered"),r.a.createElement(te.a,{className:me.a.head},"Deaths"))),r.a.createElement(ae.a,null,this.state.states.filter((e=this.state.term,function(a){return a.state.toLowerCase().includes(e.toLowerCase())||!e})).map((function(e){return r.a.createElement(de,{states:e,key:e.state})})))))));var e}}]),t}(r.a.Component),he=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:Q}),r.a.createElement(l.a,{exact:!0,path:"/tables",component:ie}),r.a.createElement(l.a,{exact:!0,path:"/state",component:pe})))},fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _e=t(215),Ee=t.n(_e);o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,null,r.a.createElement(he,null),r.a.createElement(Ee.a,{onAddToHomescreenClick:function(){alert("Add Covid-19 To HomeScreen")}}))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid-status",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/covid-status","/service-worker.js");fe?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ve(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ve(a,e)}))}}()}},[[226,1,2]]]);
//# sourceMappingURL=main.7c674908.chunk.js.map