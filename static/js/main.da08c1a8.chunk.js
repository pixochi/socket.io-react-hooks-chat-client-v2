(this["webpackJsonpsocket.io-react-hooks-chat"]=this["webpackJsonpsocket.io-react-hooks-chat"]||[]).push([[0],{53:function(e,t,a){e.exports=a(95)},58:function(e,t,a){},59:function(e,t,a){},64:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(48),r=a.n(c),s=a(19),m=a(1),i=(a(58),a(10)),u=(a(59),function(){var e=o.a.useState(""),t=Object(i.a)(e,2),a=t[0],n=t[1];return o.a.createElement("div",{className:"home-container"},o.a.createElement("input",{type:"text",placeholder:"Room",value:a,onChange:function(e){n(e.target.value)},className:"text-input-field"}),o.a.createElement(s.b,{to:"/".concat(a),className:"enter-room-button"},"Join room"))}),l=(a(64),a(51)),d=a(52),h=a(50),f=a.n(h),g=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),o=a[0],c=a[1],r=Object(n.useRef)();Object(n.useEffect)((function(){return r.current=f()("http://localhost:4000",{query:{roomId:e}}),r.current.on("newChatMessage",(function(e){var t=Object(d.a)({},e,{ownedByCurrentUser:e.senderId===r.current.id});c((function(e){return[].concat(Object(l.a)(e),[t])}))})),function(){r.current.disconnect()}}),[e]);return{messages:o,sendMessage:function(e){r.current.emit("newChatMessage",{body:e,senderId:r.current.id})}}},p=function(e){var t=e.match.params.roomId,a=g(t),n=a.messages,c=a.sendMessage,r=o.a.useState(""),s=Object(i.a)(r,2),m=s[0],u=s[1];return o.a.createElement("div",{className:"chat-room-container"},o.a.createElement("h1",{className:"room-name"},"Room: ",t),o.a.createElement("div",{className:"messages-container"},o.a.createElement("ol",{className:"messages-list"},n.map((function(e,t){return o.a.createElement("li",{key:t,className:"message-item ".concat(e.ownedByCurrentUser?"my-message":"received-message")},e.body)})))),o.a.createElement("textarea",{value:m,onChange:function(e){u(e.target.value)},placeholder:"Write message...",className:"new-message-input-field"}),o.a.createElement("button",{onClick:function(){c(m),u("")},className:"send-message-button"},"Send"))};var v=function(){return o.a.createElement(s.a,null,o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:"/",component:u}),o.a.createElement(m.a,{exact:!0,path:"/:roomId",component:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.da08c1a8.chunk.js.map