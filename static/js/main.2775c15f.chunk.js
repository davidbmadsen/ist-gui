(this["webpackJsonpgps-gui"]=this["webpackJsonpgps-gui"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var s=n(2),a=n(1),o=n.n(a),c=n(3),i=n.n(c),r=(n(20),n.p,n(21),n(12)),l=n(5),p=n(6),u=n(13),d=n(11),h=n(14),j=n(9),g=n(10),b=n.n(g),f=(n(24),function(t){var e=t.text;return Object(s.jsxs)("div",{className:"pin",children:[Object(s.jsx)(j.Icon,{icon:b.a,className:"pin-icon"}),Object(s.jsx)("p",{className:"pin-text",children:e})]})}),O=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(l.a)(this,n),(s=e.call(this,t)).ws=new WebSocket("ws://35.240.71.0:64000/sub"),s.state={pos:{lat:59.8969,lng:10.575},zoom:14,id:0},s}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.ws.onopen=function(){console.log("Websocket connected")},this.ws.onmessage=function(e){var n=JSON.parse(e.data);if(0!==n.length){console.log(n[0]);var s=Math.random()/1e4,a=Math.random()/1e4,o=Object(r.a)({},t.state.pos),c=n[0].gpsData.gps[0]+s,i=n[0].gpsData.gps[1]+a;o.lat=c,o.lng=i;var l=n[0].trackerID;t.setState({pos:o}),t.setState({id:l})}},this.ws.onclose=function(){console.log("Websocket disconnected")}}},{key:"render",value:function(){return Object(s.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(s.jsx)(h.a,{bootstrapURLKeys:{key:"AIzaSyC88pIBqJfjmoON5zyQnQlGINnaJYG2IKE"},defaultCenter:this.state.pos,defaultZoom:this.state.zoom,children:Object(s.jsx)(f,{lat:this.state.pos.lat,lng:this.state.pos.lng,text:"Tracker (ID:"+this.state.id.toString()+")"})})})}}]),n}(a.Component);O.defaultProps={center:{lat:59.91,lng:10.72},pos:{lat:59.8969,lng:10.575},zoom:16};var m=O;var v=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("header",{className:"App-header",children:Object(s.jsx)(m,{})})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),s(t),a(t),o(t),c(t)}))};i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),x()}},[[25,1,2]]]);
//# sourceMappingURL=main.2775c15f.chunk.js.map