(this["webpackJsonpweb-3d"]=this["webpackJsonpweb-3d"]||[]).push([[0],{41:function(e,t,a){e.exports=a(54)},45:function(e,t,a){},46:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(18),i=a.n(r),c=(a(45),a(10)),s=a(7),l=a(27),m=a(31);a(46);Object(l.c)();var h=function(e){var t=e.position,a=e.args,r=e.color,i=e.speed,h=Object(n.useRef)(null);Object(s.g)((function(){return h.current.rotation.x=h.current.rotation.y+=.01}));var p=Object(n.useState)(!1),u=Object(c.a)(p,2),d=u[0],w=u[1],g=Object(m.b)({scale:d?[1.4,1.4,1.4]:[1,1,1]});return o.a.createElement(m.a.mesh,{onClick:function(){return w(!d)},scale:g.scale,castShadow:!0,position:t,ref:h},o.a.createElement("boxBufferGeometry",{attach:"geometry",args:a}),o.a.createElement(l.a,{attach:"material",color:r,speed:i,factor:.6}))};var p=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{shadowMap:!0,colorManagement:!0,camera:{position:[-5,2,10],fov:60}},o.a.createElement("ambientLight",{intensity:.3}),o.a.createElement("directionalLight",{castShadow:!0,position:[0,10,0],intensity:1.5,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),o.a.createElement("pointLight",{position:[-10,0,-20],intensity:.5}),o.a.createElement("pointLight",{position:[0,-10,0],intensity:1.5}),o.a.createElement("group",null,o.a.createElement("mesh",{receiveShadow:!0,rotation:[-Math.PI/2,0,0],position:[0,-3,0]},o.a.createElement("planeBufferGeometry",{attach:"geometry",args:[100,100]}),o.a.createElement("shadowMaterial",{attach:"material",opacity:.3})),o.a.createElement(h,{args:[3,2,1],position:[0,1,0],color:"lightblue",speed:2}),o.a.createElement(h,{position:[-2,1,-5],color:"pink",speed:6}),o.a.createElement(h,{position:[5,1,-2],color:"pink",speed:6})),o.a.createElement(l.b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.6b7f23f1.chunk.js.map