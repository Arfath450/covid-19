(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{10:function(e,a,t){e.exports={container:"Cards_container__1TDLq",card:"Cards_card__153w0",confirmed:"Cards_confirmed__O8c5h",recovered:"Cards_recovered__1tYx0",deaths:"Cards_deaths__1o1L_",confi:"Cards_confi__2tDhr",cval:"Cards_cval__swBZS",rval:"Cards_rval__2EDnf",dval:"Cards_dval__1yFEL",date:"Cards_date__26iTp",para:"Cards_para__37RDC"}},131:function(e,a,t){e.exports={container:"Charts_container__17S4b"}},18:function(e,a,t){e.exports={head:"India_head__2PTQf",container:"India_container__1DZax",state:"India_state__oTYRp",confirmed:"India_confirmed__10Srm",active:"India_active__R1CsO",recovered:"India_recovered__1XeIZ",deaths:"India_deaths__3103z",header:"India_header__jz2cm",span:"India_span__3ma0h"}},220:function(e,a,t){e.exports=t(612)},224:function(e,a,t){},42:function(e,a,t){e.exports={container:"App_container__3lOPe",header:"App_header__3p3WG",span:"App_span__C5smL",footer:"App_footer__3enXk",countLink:"App_countLink__1eJW9",stateLink:"App_stateLink__WOhpw"}},612:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(37),o=t.n(c),s=(t(224),t(8)),l=t(7),i=t.n(l),u=t(17),m=t(33),d=t(34),p=t(36),f=t(35),h=t(630),v=t(640),_=t(631),E=t(632),b=t(10),g=t.n(b),C=t(94),N=t.n(C),w=t(95),y=t.n(w),j=function(e){var a=e.data,t=a.confirmed,n=a.recovered,c=a.deaths,o=a.lastUpdate;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:g.a.container},r.a.createElement(h.a,{container:!0,spacing:1,justify:"center"},r.a.createElement(h.a,{item:!0,component:v.a,xs:12,md:3,className:y()(g.a.card,g.a.confirmed)},r.a.createElement(_.a,null,r.a.createElement(E.a,{gutterbuttom:!0,className:g.a.confi},"Confirmed"),r.a.createElement(E.a,{className:g.a.cval,varient:"h5"},r.a.createElement(N.a,{start:0,end:t.value,duration:2.5,separator:","})),r.a.createElement(E.a,{className:g.a.date},new Date(o).toDateString()),r.a.createElement(E.a,{className:g.a.para},"Number of Confirmed Covid-19 cases"))),r.a.createElement(h.a,{item:!0,component:v.a,xs:12,md:3,className:y()(g.a.card,g.a.recovered)},r.a.createElement(_.a,null,r.a.createElement(E.a,{gutterbuttom:!0,className:g.a.confi},"Recovered"),r.a.createElement(E.a,{className:g.a.rval,varient:"h5"},r.a.createElement(N.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(E.a,{className:g.a.date},new Date(o).toDateString()),r.a.createElement(E.a,{className:g.a.para},"Number of people Recovered from Covid-19"))),r.a.createElement(h.a,{item:!0,component:v.a,xs:12,md:3,className:y()(g.a.card,g.a.deaths)},r.a.createElement(_.a,null,r.a.createElement(E.a,{className:g.a.confi,gutterbuttom:!0},"Deaths"),r.a.createElement(E.a,{className:g.a.dval,varient:"h5"},r.a.createElement(N.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(E.a,{className:g.a.date},new Date(o).toDateString()),r.a.createElement(E.a,{className:g.a.para},"Number of Deaths caused by Covid-19")))))):"Loading..."},O=t(48),k=t(93),x=t(47),D=t.n(x),S="https://covid19.mathdro.id/api",T=function(){var e=Object(u.a)(i.a.mark((function e(a){var t,n,r,c,o,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S,a&&(t="".concat(S,"/countries/").concat(a)),e.prev=2,e.next=5,D.a.get(t);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,l=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:l});case 14:e.prev=14,e.t0=e.catch(2);case 16:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(a){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(i.a.mark((function e(){var a,t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(S,"/daily"));case 3:return a=e.sent,t=a.data,n=t.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(S,"/countries"));case 3:return a=e.sent,t=a.data.countries,e.abrupt("return",t.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),L=t(130),R=t(131),W=t.n(R),I=function(e){var a,t,c=e.data,o=c.confirmed,s=c.recovered,l=c.deaths,m=e.country,d=Object(n.useState)([]),p=Object(k.a)(d,2),f=p[0],h=p[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=h,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=f.length?r.a.createElement(L.a,{className:W.a.chart,data:(t={labels:f.map((function(e){return e.date}))},Object(O.a)(t,"labels",["Confirmed","Recovered","Deaths"]),Object(O.a)(t,"datasets",[(a={data:f.map((function(e){return e.confirmed}))},Object(O.a)(a,"data",f.map((function(e){return e.recovered}))),Object(O.a)(a,"data",f.map((function(e){return e.deaths}))),Object(O.a)(a,"backgroundColor",["red","green","grey"]),Object(O.a)(a,"data",[o.value,s.value,l.value]),Object(O.a)(a,"fill",!0),a)]),t),options:{legend:{display:!1},title:{display:!0,text:"current state in the world",fontColor:"white",fontSize:12},scales:{yAxes:[{ticks:{fontColor:"white"}}],xAxes:[{ticks:{fontColor:"white"}}]}}}):null,_=o?r.a.createElement(L.a,{data:{labels:["confirmed","recovered","deaths"],datasets:[{label:"people",backgroundColor:["red","green","grey"],data:[o.value,s.value,l.value]}]},options:{legend:{display:!1},title:{display:!0,text:"current state in ".concat(m)}}}):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:W.a.container},m?_:v))},U=t(641),J=t(639),P=t(96),z=t.n(P),B=function(e){var a=e.countryChange,t=Object(n.useState)([]),c=Object(k.a)(t,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,F();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{className:z.a.FormControl},r.a.createElement(J.a,{className:z.a.opt,defaultValue:"",onChange:function(e){return a(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,a){return r.a.createElement("option",{className:z.a.global,key:a,value:e},e)})))))},G=t(42),H=t.n(G),Y=t(54),Z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.b,{className:H.a.countLink,activeClassName:"active",exact:!0,to:"/tables"},"Countries Table"))},K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.b,{className:H.a.stateLink,activeClassName:"active",exact:!0,to:"/state"},"India Status"))},M=function(e){Object(p.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={data:{},country:""},e.countryChange=function(){var a=Object(u.a)(i.a.mark((function a(t){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T(t);case 2:n=a.sent,e.setState({data:n,country:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:a=e.sent,this.setState({data:a});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.data,t=e.country,n=(new Date).getFullYear();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:H.a.header},r.a.createElement("p",null,"Covid-",r.a.createElement("span",{className:H.a.span},"19"))),r.a.createElement("div",{className:H.a.container},r.a.createElement(B,{countryChange:this.countryChange}),r.a.createElement(K,null),r.a.createElement(j,{data:a}),r.a.createElement(Z,null),r.a.createElement(I,{data:a,country:t})),r.a.createElement("div",{className:H.a.footer},r.a.createElement("p",null,"Copyright \xa9 ",n," Covid-19")))}}]),t}(r.a.Component),V=t(89),X=t(636),q=t(638),Q=t(634),$=t(635),ee=t(637),ae=t(633),te=t(9),ne=t.n(te),re=function(e){Object(p.a)(t,e);var a=Object(f.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props.countriesData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.a,null,r.a.createElement(Q.a,{className:ne.a.country},e.Country),r.a.createElement(Q.a,{className:ne.a.confirm},e.NewConfirmed),r.a.createElement(Q.a,{className:ne.a.tconfirm},e.TotalConfirmed),r.a.createElement(Q.a,{className:ne.a.recover},e.NewRecovered),r.a.createElement(Q.a,{className:ne.a.trecover},e.TotalRecovered),r.a.createElement(Q.a,{className:ne.a.death},e.NewDeaths),r.a.createElement(Q.a,{className:ne.a.tdeath},e.TotalDeaths)))}}]),t}(r.a.Component);var ce=function(e){Object(p.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={countriesData:[],global:[],currentDate:null,loading:!0},n.state={countriesData:[],term:""},n.onChange=n.onChange.bind(Object(V.a)(n)),n}return Object(d.a)(t,[{key:"onChange",value:function(e){this.setState({term:e.target.value})}},{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get(" https://api.covid19api.com/summary");case 2:a=e.sent,console.log(a),this.setState({countriesData:a.data.Countries}),this.setState({global:a.data.Global}),this.setState({currentDate:a.data.Date}),this.setState({loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?r.a.createElement("h1",null,"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:ne.a.header},r.a.createElement("p",null,"Covid-",r.a.createElement("span",{className:ne.a.span},"19"))),r.a.createElement("div",{className:ne.a.search},r.a.createElement("input",{type:"text",placeholder:"Search...",onChange:this.onChange})),r.a.createElement("div",null,r.a.createElement($.a,{className:ne.a.container},r.a.createElement(X.a,null,r.a.createElement(ee.a,null,r.a.createElement(ae.a,null,r.a.createElement(Q.a,{className:ne.a.head},"Countries"),r.a.createElement(Q.a,{className:ne.a.head},"New Confirmed Cases"),r.a.createElement(Q.a,{className:ne.a.head},"Total Confirmed Cases"),r.a.createElement(Q.a,{className:ne.a.head},"New Recovered"),r.a.createElement(Q.a,{className:ne.a.head},"Total Recovered"),r.a.createElement(Q.a,{className:ne.a.head},"New Deaths"),r.a.createElement(Q.a,{className:ne.a.head},"Total Deaths"))),r.a.createElement(q.a,null,this.state.countriesData.filter((e=this.state.term,function(a){return a.Country.toLowerCase().includes(e.toLowerCase())||!e})).map((function(e){return r.a.createElement(re,{countriesData:e,key:e.Country})})))))));var e}}]),t}(r.a.Component),oe=(t(338),t(18)),se=t.n(oe),le=function(e){Object(p.a)(t,e);var a=Object(f.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props.states;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.a,null,r.a.createElement(Q.a,{className:se.a.state},e.state),r.a.createElement(Q.a,{className:se.a.confirmed},"\u2191 ",e.deltaconfirmed,r.a.createElement("br",null),e.confirmed),r.a.createElement(Q.a,{className:se.a.active},e.active),r.a.createElement(Q.a,{className:se.a.recovered},"\u2191 ",e.deltarecovered,r.a.createElement("br",null),e.recovered),r.a.createElement(Q.a,{className:se.a.deaths},"\u2191 ",e.deltadeaths,r.a.createElement("br",null),e.deaths)))}}]),t}(r.a.Component),ie=function(e){Object(p.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={states:[],loading:!0},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("https://api.covid19india.org/data.json");case 2:a=e.sent,this.setState({states:a.data.statewise}),this.setState({loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?r.a.createElement("h1",null,"loaging..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:se.a.header},r.a.createElement("p",null,"Covid-",r.a.createElement("span",{className:se.a.span},"19"))),r.a.createElement($.a,{className:se.a.container},r.a.createElement(X.a,null,r.a.createElement(ee.a,null,r.a.createElement(ae.a,null,r.a.createElement(Q.a,{className:se.a.head},"States"),r.a.createElement(Q.a,{className:se.a.head},"Confirmed"),r.a.createElement(Q.a,{className:se.a.head},"Active"),r.a.createElement(Q.a,{className:se.a.head},"Recovered"),r.a.createElement(Q.a,{className:se.a.head},"Deaths"))),r.a.createElement(q.a,null,this.state.states.map((function(e){return r.a.createElement(le,{states:e,key:e.state})})))))))}}]),t}(r.a.Component),ue=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/covid-19",component:M}),r.a.createElement(s.a,{exact:!0,path:"/tables",component:ce}),r.a.createElement(s.a,{exact:!0,path:"/state",component:ie})))},me=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function de(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var pe=t(212),fe=t.n(pe);o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,null,r.a.createElement(ue,null),r.a.createElement(fe.a,{onAddToHomescreenClick:function(){alert("Add Covid-19 To HomeScreen")}}))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid-19",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/covid-19","/service-worker.js");me?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):de(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):de(a,e)}))}}()},9:function(e,a,t){e.exports={head:"Table_head__2sJK5",country:"Table_country__ww812",confirm:"Table_confirm__38gvK",tconfirm:"Table_tconfirm__3xhVy",recover:"Table_recover__uSJfW",trecover:"Table_trecover__1kKH4",death:"Table_death__57Ws9",tdeath:"Table_tdeath__3_dz7",container:"Table_container__481kb",header:"Table_header__1wPCD",span:"Table_span__19itR",search:"Table_search__3YApa"}},96:function(e,a,t){e.exports={FormControl:"Country_FormControl__3uUZg",global:"Country_global__2f6G_",opt:"Country_opt__2bBHj"}}},[[220,1,2]]]);
//# sourceMappingURL=main.945b7b32.chunk.js.map