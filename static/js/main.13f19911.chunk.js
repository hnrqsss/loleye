(this["webpackJsonpfront-lol-pandascore"]=this["webpackJsonpfront-lol-pandascore"]||[]).push([[0],{152:function(e,t,n){},154:function(e,t,n){},174:function(e,t,n){},184:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(28),i=n.n(s),r=(n(152),n(153),n(255)),o=(n(154),n(41)),l=n.n(o),d=n(67),u=n(46),v=n(135),j=n.n(v),h=Object({NODE_ENV:"production",PUBLIC_URL:"/loleye",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://api.pandascore.co",REACT_APP_API_KEY:"k8-lXEiRzndKpjPaFlcABSkclNvsRBE0wcjJPuhslxjvNW7shvI",REACT_APP_WSS:"wss://live.pandascore.co"}),p=h.REACT_APP_API_URL,f=h.REACT_APP_API_KEY,m=j.a.create({baseURL:p,headers:{Authorization:"Bearer ".concat(f)},timeout:1e4}),b=n(6),x=c.a.createContext({tournaments:[],selectedToournament:null,matches:[],selectedMatch:null,error:null,isLoading:!1,standings:[],fetchTournaments:function(){},fetchTournament:function(){},fetchMatches:function(){},fetchMatch:function(){},fetchStandings:function(){},setError:function(){}});function O(e){var t=e.children,n=c.a.useState([]),a=Object(u.a)(n,2),s=a[0],i=a[1],r=c.a.useState(null),o=Object(u.a)(r,2),v=o[0],j=o[1],h=c.a.useState([]),p=Object(u.a)(h,2),f=p[0],O=p[1],g=c.a.useState(null),_=Object(u.a)(g,2),S=_[0],E=_[1],P=c.a.useState([]),T=Object(u.a)(P,2),A=T[0],C=T[1],k=c.a.useState(null),R=Object(u.a)(k,2),w=R[0],N=R[1],y=c.a.useState(!1),I=Object(u.a)(y,2),M=I[0],L=I[1],D=c.a.useCallback(function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,c,s,r,o,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.param,a=void 0===n?"":n,c=t.value,s=void 0===c?"":c,e.prev=1,L(!0),r="tournaments?search[slug]=league-of-legends",""!==a&&""!==s&&(r+="&search[".concat(a,"]=").concat(s)),e.next=7,m.get(r);case 7:o=e.sent,d=o.data,i(d),L(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),N(e.t0.message),L(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),[N,i,L]),K=c.a.useCallback(function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,L(!0),n="tournaments/".concat(t),e.next=5,m.get(n);case 5:a=e.sent,c=a.data,j(c),L(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),N(e.t0.message),L(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),[N,j,L]),W=c.a.useCallback(function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,L(!0),n="tournaments/".concat(t,"/standings"),e.next=5,m.get(n);case 5:a=e.sent,c=a.data,C(c),L(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),N(e.t0.message),L(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),[N,C,L]),F=c.a.useCallback(function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,L(!0),n="/leagues/".concat(t,"/matches/upcoming"),e.next=5,m.get(n);case 5:a=e.sent,c=a.data,O(c),L(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),N(e.t0.message),L(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),[N,O,L]),B=c.a.useCallback(function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,L(!0),n="/matches/".concat(t),e.next=5,m.get(n);case 5:a=e.sent,c=a.data,E(c),L(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),N(e.t0.message),L(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),[N,E,L]);return Object(b.jsx)(x.Provider,{value:{tournaments:s,selectedTournament:v,matches:f,selectedMatch:S,isLoading:M,standings:A,error:w,fetchTournaments:D,fetchTournament:K,fetchMatches:F,fetchMatch:B,fetchStandings:W,setError:N},children:t})}var g=n(53),_=n(24);function S(){var e=c.a.useContext(x);return{tournaments:e.tournaments,selectedTournament:e.selectedTournament,matches:e.matches,selectedMatch:e.selectedMatch,isLoading:e.isLoading,standings:e.standings,error:e.error,fetchTournaments:e.fetchTournaments,fetchTournament:e.fetchTournament,fetchMatches:e.fetchMatches,fetchMatch:e.fetchMatch,fetchStandings:e.fetchStandings,setError:e.setError}}var E=n(259),P=n(257);n(174);function T(){var e=S().tournaments;return Object(b.jsx)("main",{className:"leagues-wrapper",children:Object(b.jsx)(E.b,{dataSource:e,grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:4},renderItem:function(e){var t,n;return Object(b.jsx)(E.b.Item,{children:Object(b.jsx)(P.a,{title:null===e||void 0===e||null===(t=e.league)||void 0===t?void 0:t.name,children:Object(b.jsx)(g.b,{to:"/partidas/".concat(null===e||void 0===e?void 0:e.id),children:Object(b.jsx)("img",{src:null===e||void 0===e||null===(n=e.league)||void 0===n?void 0:n.image_url,alt:null===e||void 0===e?void 0:e.league_id})})})})}})})}function A(){var e=S().fetchTournaments;return c.a.useEffect((function(){e({})}),[e]),Object(b.jsx)(T,{})}var C=n(258),k=n(68),R=n(42),w=n(58),N=n(256),y=(n(184),C.a.Panel);function I(){var e,t,n=S(),a=n.selectedTournament,c=n.matches,s=n.standings;return Object(b.jsxs)("main",{className:"matches-wrapper",children:[Object(b.jsxs)(k.a,{children:[Object(b.jsx)(R.a,{xl:8,xs:0}),Object(b.jsxs)(R.a,{xl:8,xs:24,children:[Object(b.jsx)("img",{className:"matches-main-image",src:null===a||void 0===a||null===(e=a.league)||void 0===e?void 0:e.image_url,alt:null===a||void 0===a?void 0:a.id}),Object(b.jsx)("h2",{children:null===a||void 0===a||null===(t=a.league)||void 0===t?void 0:t.name})]})]}),Object(b.jsxs)(k.a,{children:[Object(b.jsx)(R.a,{xl:12,xs:24,children:Object(b.jsx)(E.b,{dataSource:c,renderItem:function(e){var t,n,a,c,s=(null===e||void 0===e?void 0:e.rescheduled)?new Date(null===e||void 0===e?void 0:e.scheduled_at):new Date(null===e||void 0===e?void 0:e.original_scheduled_at);return Object(b.jsx)(C.a,{collapsible:"header",defaultActiveKey:["1"],children:Object(b.jsx)(y,{header:"\n                                        ".concat(null===e||void 0===e||null===(t=e.opponents[0])||void 0===t||null===(n=t.opponent)||void 0===n?void 0:n.name," \n                                            VS \n                                        ").concat(null===e||void 0===e||null===(a=e.opponents[1])||void 0===a||null===(c=a.opponent)||void 0===c?void 0:c.name," \n                                        - MD").concat(null===e||void 0===e?void 0:e.number_of_games," \n                                        - ").concat(s.toLocaleDateString("pt-BR"),"\n                                    "),children:Object(b.jsxs)(k.a,{children:[Object(b.jsx)(R.a,{span:12,children:Object(b.jsx)(g.b,{to:"/partida/".concat(null===e||void 0===e?void 0:e.id),children:"Estat\xedsticas"})}),Object(b.jsx)(R.a,{span:12,children:Object(b.jsx)("div",{className:"info-match",children:Object(b.jsx)(w.a,{target:"_blank",href:null===e||void 0===e?void 0:e.official_stream_url,type:"link",children:"Assistir"})})})]})},null===e||void 0===e?void 0:e.id)})}})}),Object(b.jsx)(R.a,{xl:12,xs:24,children:Object(b.jsx)(N.a,{className:"standings-table",columns:[{title:"Time",dataIndex:"team",render:function(e){return Object(b.jsx)("img",{src:null===e||void 0===e?void 0:e.image_url,alt:null===e||void 0===e?void 0:e.name})},key:"team"},{title:"Jogos",dataIndex:"total",key:"total"},{title:"Vit\xf3rias",dataIndex:"wins",key:"wins"},{title:"Derrotas",dataIndex:"losses",key:"losses"}],dataSource:s,pagination:!1})})]})]})}function M(){var e=Object(_.f)(),t=S(),n=t.selectedTournament,a=t.fetchTournament,s=t.fetchMatches,i=t.fetchStandings;return c.a.useEffect((function(){if(null===e||void 0===e?void 0:e.params){var t=e.params.id;a(t),i(t)}}),[e,a,i]),c.a.useEffect((function(){var e;n&&s(null===n||void 0===n||null===(e=n.league)||void 0===e?void 0:e.id)}),[n,s]),Object(b.jsx)(I,{})}n(250);function L(){var e,t,n,a,c,s,i,r,o,l,d,u=S().selectedMatch;return Object(b.jsxs)("main",{className:"match-wrapper",children:[Object(b.jsx)(k.a,{children:Object(b.jsx)(R.a,{offset:8,span:8,children:Object(b.jsxs)("div",{className:"header",children:[Object(b.jsxs)("div",{className:"iamge-container",children:[Object(b.jsx)("img",{src:null===u||void 0===u||null===(e=u.opponents[0])||void 0===e?void 0:e.opponent.image_url,alt:null===u||void 0===u||null===(t=u.opponents[0])||void 0===t?void 0:t.opponent.name}),Object(b.jsx)("p",{children:null===u||void 0===u||null===(n=u.opponents[0])||void 0===n?void 0:n.opponent.name})]}),null===u||void 0===u||null===(a=u.results[0])||void 0===a?void 0:a.score," ",Object(b.jsx)("span",{children:" x "})," ",null===u||void 0===u||null===(c=u.results[1])||void 0===c?void 0:c.score,Object(b.jsxs)("div",{className:"iamge-container",children:[Object(b.jsx)("img",{src:null===u||void 0===u||null===(s=u.opponents[1])||void 0===s?void 0:s.opponent.image_url,alt:null===u||void 0===u||null===(i=u.opponents[1])||void 0===i?void 0:i.opponent.name}),Object(b.jsx)("p",{children:null===u||void 0===u||null===(r=u.opponents[1])||void 0===r?void 0:r.opponent.name})]})]})})}),Object(b.jsx)(k.a,{children:Object(b.jsxs)(R.a,{offset:8,span:8,children:[Object(b.jsxs)("h3",{children:["Status: ",null===u||void 0===u||null===(o=u.games[(null===u||void 0===u||null===(l=u.games)||void 0===l?void 0:l.length)-1])||void 0===o?void 0:o.status]}),Object(b.jsxs)("h3",{children:["Possui API: ",(null===u||void 0===u||null===(d=u.live)||void 0===d?void 0:d.supported)?"Sim":"N\xe3o"]})]})})]})}function D(){var e=c.a.useState(null),t=Object(u.a)(e,2),n=t[0],a=t[1],s=S(),i=s.selectedMatch,r=s.fetchMatch,o=Object(_.f)();return c.a.useEffect((function(){var e;if(null===o||void 0===o||null===(e=o.params)||void 0===e?void 0:e.id){var t=o.params.id;r(t)}}),[o,r]),c.a.useEffect((function(){var e;if(null===i||void 0===i||null===(e=i.live)||void 0===e?void 0:e.supported){var t=Object({NODE_ENV:"production",PUBLIC_URL:"/loleye",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://api.pandascore.co",REACT_APP_API_KEY:"k8-lXEiRzndKpjPaFlcABSkclNvsRBE0wcjJPuhslxjvNW7shvI",REACT_APP_WSS:"wss://live.pandascore.co"}),n=t.REACT_APP_WSS,c=t.REACT_APP_API_KEY;a(new WebSocket("".concat(n,"/matches/").concat(i.id,"?token=").concat(c)))}}),[i,a]),c.a.useEffect((function(){n&&(n.onmessage=function(e){console.log(JSON.parse(e.data))},n.onopen=function(e){var t,a;n.send(JSON.stringify({type:"recover",payload:{game_id:null===i||void 0===i||null===(t=i.games[(null===i||void 0===i||null===(a=i.games)||void 0===a?void 0:a.length)-1])||void 0===t?void 0:t.id}}))})}),[null===i||void 0===i?void 0:i.games,n]),Object(b.jsx)(L,{})}function K(){return Object(b.jsx)(g.a,{children:Object(b.jsx)("div",{children:Object(b.jsxs)(_.c,{children:[Object(b.jsx)(_.a,{path:"/",exact:!0,children:Object(b.jsx)(A,{})}),Object(b.jsx)(_.a,{path:"/partidas/:id",children:Object(b.jsx)(M,{})}),Object(b.jsx)(_.a,{path:"/partida/:id",children:Object(b.jsx)(D,{})})]})})})}var W=r.a.Header,F=r.a.Content,B=r.a.Footer,H=r.a.Sider;var U=function(){return Object(b.jsxs)(r.a,{className:"layout",children:[Object(b.jsx)(W,{children:"Header"}),Object(b.jsxs)(r.a,{children:[Object(b.jsx)(F,{style:{padding:"30px 30px",minHeight:"calc(100vh - 134px)"},children:Object(b.jsx)("main",{className:"App",children:Object(b.jsx)(O,{children:Object(b.jsx)(K,{})})})}),Object(b.jsx)(H,{children:"Sider"})]}),Object(b.jsxs)(B,{style:{textAlign:"center"},children:["\xa92021 Created by ",Object(b.jsx)("a",{href:"mailto:hnrq.assuncao@gmail.com",children:"HnrqSs"})]})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,260)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(U,{})}),document.getElementById("root")),J()}},[[251,1,2]]]);
//# sourceMappingURL=main.13f19911.chunk.js.map