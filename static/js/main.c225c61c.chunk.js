(this.webpackJsonpmemegen=this.webpackJsonpmemegen||[]).push([[0],{40:function(e,t,a){e.exports=a.p+"static/media/download.3ee9feae.png"},47:function(e,t,a){e.exports=a.p+"static/media/logo.0137b096.svg"},58:function(e,t,a){e.exports=a.p+"static/media/github-image.192a6620.svg"},59:function(e,t,a){e.exports=a.p+"static/media/linkedin.007eb41a.svg"},61:function(e,t,a){e.exports=a.p+"static/media/jsreactnode.c136860b.svg"},65:function(e,t,a){e.exports=a(84)},70:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(38),l=a.n(o),c=(a(70),a(19)),i=a(96),m=a(16),s=a(13),u=a(3),p=a(93),d=a(86),f=a(46),g=a(40),x=a.n(g);function h(){return r.a.createElement(u.a,{backgroundColor:"blue.900",boxShadow:"5px 5px #1A202C",width:"100%",padding:"2rem 1rem",alignSelf:"flex-start",marginBottom:"2rem",marginTop:"2rem",display:"flex",mx:"auto"},r.a.createElement(u.a,{width:"25%"},r.a.createElement(p.a,{display:"block",size:"2xl",mx:"auto",name:"Segun Adebayo",src:x.a})),r.a.createElement(u.a,{color:"#fff"},r.a.createElement(u.a,null,r.a.createElement(d.a,null," Phillip 1997 ")),r.a.createElement(u.a,null,r.a.createElement(f.a,null," ",r.a.createElement("strong",null,"9"),"  Memes"),r.a.createElement(f.a,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nisi et atque incidunt. Laborum quo rem minus incidunt eius quod!"))))}var b=a(6),E=a(87),v=a(88),w=a(57);function y(e){var t=e.meme,a=function(e){var t=r.a.useState(null),a=Object(b.a)(t,2),n=a[0],o=a[1],l=r.a.useState(!1),c=Object(b.a)(l,2),i=c[0],m=c[1];return r.a.useEffect((function(){var t=new IntersectionObserver((function(e,t){Object(b.a)(e,1)[0].isIntersecting&&(m(!0),t.disconnect())}),e);return n&&t.observe(n),function(){n&&t.unobserve(n)}}),[n,e]),[o,i,n]}({rootMargin:"-120px"}),n=Object(b.a)(a,2),o=n[0],l=n[1],c=r.a.useState(!0),i=Object(b.a)(c,2),s=i[0],u=i[1];return r.a.createElement(E.a,{to:t.isSavedMeme?"meme/".concat(t._id):"meme/".concat(t.id),as:m.b},r.a.createElement(v.a,{position:"relative",direction:"column",maxW:"500px",marginX:"auto",minH:"120px",transition:"all .2s ease-out",className:"meme_box",marginBottom:"20px"},r.a.createElement(w.a,{className:l?"fade_in ":null,opacity:s?0:1,ref:o,width:"100%",onLoad:function(e){u(!1)},src:l?t.url:"",alt:t.name,boxShadow:"5px 5px #1A202C"}),r.a.createElement(f.a,{className:"meme_title",position:"absolute",left:"10px",bottom:"10px",fontWeight:"bold",marginX:"auto",fontFamily:"Ubuntu"},t.name)))}function j(e){var t=e.memes;e.idx;return r.a.createElement(u.a,{flexBasis:0,flexGrow:1,flexShrink:1,marginRight:"20px",justifyContent:"center"},t&&t.length>0?t.map((function(e){return r.a.createElement(y,{key:e.id?e.id:e._id,meme:e})})):null)}var k=a(10),S=a.n(k),O=a(24);function C(e){return M.apply(this,arguments)}function M(){return(M=Object(O.a)(S.a.mark((function e(t){var a,n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.imgflip.com/get_memes");case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.next=9,n.data;case 9:r=e.sent,t(r.memes),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("something went wrong");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}var _=Object(n.createContext)(),A=function(e){var t=e.children,a=Object(n.useState)(""),o=Object(b.a)(a,2),l=o[0],c=o[1],i=Object(n.useState)([]),m=Object(b.a)(i,2),s=m[0],u=m[1],p=Object(n.useState)([]),d=Object(b.a)(p,2),f=d[0],g=d[1],x=Object(n.useState)(null),h=Object(b.a)(x,2),E=h[0],v=h[1];!function(e,t,a,r,o){Object(n.useEffect)((function(){var a=JSON.parse(localStorage.getItem("imgflip"));a.length>0?e(a):t(e)}),[e,t]),Object(n.useEffect)((function(){localStorage.setItem("imgflip",JSON.stringify(a))}),[a]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("imgflipSavedMeme"));e&&r(e)}),[r]),Object(n.useEffect)((function(){localStorage.setItem("imgflipSavedMeme",JSON.stringify(o))}),[o])}(u,C,s,g,f);var w={memes:s,handleSearch:function(e){c(e)},search:l,savedMemes:f,setSavedMemes:g,error:E,setError:v};return r.a.createElement(_.Provider,{value:w},t)},D=function(e,t){var a=e,n=[],r=Math.ceil(e.length/t);if(a.length>0){for(var o=0;o<a.length;o+=r)n.push(a.slice(o,o+r));return n}};function I(){var e=Object(n.useContext)(_).savedMemes,t=D(e,3);return r.a.createElement(u.a,{marginX:"auto",width:"100%",display:"flex",paddingLeft:"20px"},t&&t.length>0?t.map((function(e,t){return r.a.createElement(j,{idx:t,key:t,memes:e})})):null)}function B(){return r.a.createElement(u.a,{as:"main",maxW:"975px",mx:"auto",marginTop:"66px"},r.a.createElement(u.a,{display:"flex",flexDir:"column"},r.a.createElement(h,null),r.a.createElement(I,null)))}var L=a(94),W=a(89);function T(){var e=Object(n.useContext)(_),t=e.error,a=e.setError;return t?r.a.createElement(L.a,{status:"error",className:"slide_up",marginTop:"100px",position:"fixed",bottom:"20px",left:"35%",paddingRight:"50px"},r.a.createElement(L.b,null),t,r.a.createElement(W.a,{position:"absolute",right:"8px",top:"8px",onClick:function(){a(null)}})):null}var N=a(95);function F(){var e=Object(n.useContext)(_).memes[Math.floor(100*Math.random()+1)]||{};return r.a.createElement(E.a,{to:"meme/".concat(e.id),as:m.b},r.a.createElement(N.a,{bg:"blue.700",_hover:{bg:"blue.800"},padding:"10px 14px"},"Random meme template"))}function R(){return r.a.createElement(u.a,{marginTop:"66px",display:"flex",justifyContent:"space-between",alignItems:"center",flexDir:"column",maxH:"500px",minH:"350px",padding:{base:"10px 35px",md:"15px 100px"},as:"header",color:"#fff"},r.a.createElement(u.a,{marginTop:"50px",textAlign:"center"},r.a.createElement(d.a,{fontSize:{base:"2xl",md:"5xl"},marginBottom:"1rem"},"Make memes, make world peace"," "),r.a.createElement(f.a,null," Pick a template and make a meme!! ")),r.a.createElement(F,null),r.a.createElement(f.a,{color:"#ACACAC",textAlign:"center"},"powered by imgflip.com ",r.a.createElement("br",null),"Logo By Jonah Bethlehem, DE"))}var z=a(47),X=a.n(z),J=a(92),q=[{to:"/user",text:"My Memes"},{to:"/login",text:"Login"},{to:"/about",text:"About"}];function H(){return r.a.createElement(u.a,{display:"flex",flexWrap:"wrap",as:"nav",alignItems:"center"},r.a.createElement(E.a,{marginRight:"1rem",href:"/"},r.a.createElement(w.a,{src:X.a,height:"35px"})),q.map((function(e,t){return r.a.createElement(E.a,{_hover:{textDecor:"none",transform:"scale(1.1)"},key:t,to:e.to,as:m.b,marginRight:"1rem"},e.text)})))}var P=a(58),G=a.n(P),Z=a(59),U=a.n(Z),Y=[{href:"https://github.com/philldev",src:G.a},{href:"https://github.com/philldev",src:U.a}];function $(){return r.a.createElement(r.a.Fragment,null,Y.map((function(e,t){return r.a.createElement("a",{key:t,href:e.href},r.a.createElement(w.a,{key:t,marginRight:"1rem",height:"18px",src:e.src}))})))}function K(){return r.a.createElement(J.d,null,r.a.createElement(J.a,{backgroundColor:"#232A34",color:"#000",position:"absolute",right:"0",marginRight:".5rem",padding:"0",display:{base:"block",md:"none"},as:N.a,_hover:{backgroundColor:"transparent"}},r.a.createElement("svg",{width:"30",height:"21",viewBox:"0 0 30 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("rect",{width:"30",height:"5",rx:"2.5",fill:"#D0D0D0"}),r.a.createElement("rect",{y:"8",width:"30",height:"5",rx:"2.5",fill:"#D0D0D0"}),r.a.createElement("rect",{y:"16",width:"30",height:"5",rx:"2.5",fill:"#D0D0D0"}))),r.a.createElement(J.c,{maxW:"10px",color:"#000"},q.map((function(e,t){return r.a.createElement(J.b,{key:t},r.a.createElement(E.a,{key:t,to:e.to,as:m.b,marginRight:"1rem"},e.text))})),r.a.createElement(J.b,null,r.a.createElement($,null))))}var Q=a(97);function V(){var e=Object(n.useContext)(_).handleSearch;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,{marginRight:{base:"6rem",md:"1rem"},width:"auto",display:"block",placeholder:"Search meme template",color:"black",size:"sm",onChange:function(t){e(t.target.value)}}))}function ee(){return r.a.createElement(u.a,{pos:"fixed",top:"0",zIndex:"20",color:"#fff",background:"#232A34",width:"100%",height:"66px",display:"flex",justifyContent:{base:"space-between",md:"center"},alignItems:{base:"center",md:""},minW:"320px"},r.a.createElement(u.a,{width:"975px",display:{base:"none",md:"flex"},justifyContent:"space-between",alignItems:"center",paddingLeft:"20px"},r.a.createElement(H,null),r.a.createElement(u.a,{display:"flex",as:"nav",alignItems:"center"},r.a.createElement(V,null),r.a.createElement($,null))),r.a.createElement(E.a,{display:{base:"block",md:"none"},marginLeft:"1rem",href:"/"},r.a.createElement(w.a,{src:X.a,height:"35px"})),r.a.createElement(u.a,{display:{base:"block",md:"none"}},r.a.createElement(V,null)),r.a.createElement(K,null))}var te=a(63);function ae(e){var t=e.children;return r.a.createElement(u.a,{as:"main",className:"container",paddingLeft:"15px",paddingTop:"2rem",maxW:"975px"},r.a.createElement(v.a,{justifyContent:"center"},t))}function ne(e){var t=e.chunkMemes;return r.a.createElement(r.a.Fragment,null,t&&t.length>0?t.map((function(e,t){return r.a.createElement(j,{idx:t,key:t,memes:e})})):null)}var re=a(14);function oe(e){var t=e.handleSaveMeme,a=e.saved;return r.a.createElement(N.a,{backgroundColor:a?"red.300":"blue.500",_hover:{backgroundColor:"blue.600"},onClick:t},"Save to Favourites")}function le(e){var t=e.selectedMeme,a=e.postedMeme,n=e.handleSaveMeme,o=e.saved;return r.a.createElement(u.a,{padding:"2rem 1rem",textAlign:"center",flexBasis:"0",flexGrow:{base:"1",md:"2"},flexShrink:{base:"1",md:"2"},backgroundColor:"#1E4E8C",boxShadow:"5px 5px #1A202C",marginX:"1rem",paddingBottom:"70px",position:"relative"},r.a.createElement(d.a,{marginBottom:"1rem"},t.name),r.a.createElement(w.a,{className:"meme",maxH:"70vh",marginX:"auto",src:a||t.url,alt:t.name}),a?r.a.createElement(u.a,{position:"absolute",bottom:"10px"}," ",r.a.createElement(oe,{handleSaveMeme:n,saved:o}),r.a.createElement(E.a,{marginLeft:"25px",download:!0,href:a}," Download Meme ")," "):null)}var ce=a(62),ie=a(35),me=a(90),se=a(91);function ue(e){var t=e.idx,a=e.register;return r.a.useEffect((function(){})),r.a.createElement(ie.a,{textAlign:"left",marginTop:"20px"},r.a.createElement(me.a,{htmlFor:"text".concat(t)},"Text","".concat(t+1)),r.a.createElement(Q.a,{ref:a,color:"gray.700",name:"text".concat(t),type:"text",id:"text".concat(t),maxLength:"40",isRequired:!0}),r.a.createElement(se.a,{textAlign:"right"},"max characters : 40"))}function pe(){return(pe=Object(O.a)(S.a.mark((function e(t,a,n,r,o){var l,c,i,m;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=Object.values(a),c=l.map((function(e,t){return"boxes[".concat(t,"][text]=").concat(e)})).join("&"),e.prev=2,e.next=5,fetch("".concat("https://api.imgflip.com/caption_image","?template_id=").concat(t.id,"&username=").concat("phill1976","&password=").concat("Xi0ZYp4hBDx4906EdZdc","&").concat(c));case 5:return i=e.sent,e.next=8,i.json();case 8:m=e.sent,n(m.data.url),r(!1),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),r(!1),o(e.t0.message),console.log("something went wrong");case 18:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}function de(e){var t=e.selectedMeme,a=e.setPostedMeme,o=e.setSaved,l=Object(n.useContext)(_).setError,c=Object(ce.a)(),i=c.register,s=c.handleSubmit,p=c.errors,f=new Array(t.box_count).fill(0),g=r.a.useState(!1),x=Object(b.a)(g,2),h=x[0],v=x[1];return r.a.createElement(u.a,{padding:"2rem 1rem",flexBasis:"0",flexGrow:"1",flexShrink:"1",backgroundColor:"#1E4E8C",boxShadow:"5px 5px #1A202C",textAlign:"center",as:"form",marginX:"1rem",position:"relative",onSubmit:s((function(e,n){var r=Object.keys(e);v(!0),r.length===t.box_count?(n.target.reset(),function(e,t,a,n,r){pe.apply(this,arguments)}(t,e,a,v,l)):(n.target.reset(),v(!1),l("Invalid input!"))}))},h?r.a.createElement(te.a,{className:"spinner"}):r.a.createElement(r.a.Fragment,null," ",r.a.createElement(d.a,{marginBottom:"1rem"}," Caption Meme "),f.map((function(e,t){return r.a.createElement(ue,{errors:p,register:i,key:t,idx:t})})),r.a.createElement(N.a,{bg:"blue.500",_hover:{bg:"blue.600"},display:"inline-block",marginTop:"20px",type:"submit",float:"left"},"Submit")," "),r.a.createElement(E.a,{as:m.b,to:"/"}," ",r.a.createElement(N.a,{onClick:function(){return o(null)},color:"#fff",bg:"transparent",_hover:{bg:"blue.600"},display:"block",position:"absolute",bottom:"10px",right:"15px"},"go back")," "))}function fe(){var e=Object(n.useContext)(_),t=e.memes,a=e.savedMemes,o=e.setSavedMemes,l=Object(s.f)().id,c=a.filter((function(e){return e._id===l}))[0]?a.filter((function(e){return e._id===l}))[0]:t.filter((function(e){return e.id===l}))[0],i=r.a.useState(null),p=Object(b.a)(i,2),d=p[0],f=p[1],g=r.a.useState(null),x=Object(b.a)(g,2),h=x[0],w=x[1];return r.a.createElement(u.a,{marginTop:"6rem",className:"container"},r.a.createElement(v.a,{color:"#fff",flexDirection:{base:"column",md:"row"}},r.a.createElement(E.a,{as:m.b,to:"/user"}," ",r.a.createElement(N.a,{color:"#fff",bg:"transparent",_hover:{bg:"blue.600"},display:"block",position:"absolute",bottom:"10px",right:"15px"},"go back")," "),c&&r.a.createElement(le,{selectedMeme:c,postedMeme:d,handleSaveMeme:function(){var e="_"+Math.random().toString(36).substr(2,9),t=c.name,a=d;w(!0);var n={_id:e,name:t,url:a,isSavedMeme:!0};o((function(e){return[].concat(Object(re.a)(e),[n])}))},saved:h}),c&&!c.isSavedMeme&&r.a.createElement(de,{selectedMeme:c,setPostedMeme:f,setSaved:w})))}function ge(){var e=Object(n.useContext)(_),t=e.search,a=e.memes,o=function(e){var t=Object(n.useState)(!0),a=Object(b.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){e&&o(!1)}),[e]),r}(a),l=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})),c=function(){var e=Object(n.useState)(3),t=Object(b.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){window.innerWidth<=450?r(1):window.innerWidth<=750&&window.innerWidth>=451?r(2):r(3)};return window.addEventListener("load",e),window.addEventListener("resize",e),function(){window.removeEventListener("load",e),window.removeEventListener("resize",e)}})),a}(),i=Object(n.useMemo)((function(){return D(l,c)}),[c,l]);return o?r.a.createElement(te.a,null):r.a.createElement(ae,null,o?r.a.createElement(te.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{exact:!0,path:"/",render:function(e){return i?r.a.createElement(ne,Object.assign({},e,{chunkMemes:i})):null}}),r.a.createElement(s.a,{exact:!0,path:"/meme/:id",render:function(){return r.a.createElement(fe,null)}})))}a(83);var xe=a(61),he=a.n(xe);function be(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{color:"white",backgroundColor:"blue.800",padding:"2rem",as:"main",maxW:"425px",mx:"auto",marginTop:"80px",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"},r.a.createElement(p.a,{width:"255px",height:"255px",display:"block",marginX:"auto",name:"Dan Abrahmov",src:x.a,marginBottom:"2rem",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}),r.a.createElement(f.a,{opacity:".8",as:"em",fontSize:"1.2rem"},"\u201cGood webapp takes time, just like Wine\u201d"),r.a.createElement(f.a,{opacity:".8",as:"p",fontSize:".8rem",marginBottom:"2rem"},"- Definitely not my quotes"),r.a.createElement(f.a,{opacity:".8",lineHeight:" 202.7%"},"This is a website where you can caption 100 top memes from imgflip.com where all good memes come from. I created this website just for my personal project which become a great learning path for me. I want to give a shoutout and big thanks for all people whose code that I used to make this project possible. the web layout is inspired by pexels.com."),r.a.createElement(f.a,{opacity:".8",marginTop:"1rem"},"Deddy Wolley")),r.a.createElement(w.a,{mx:"auto",marginTop:"1.5rem",src:he.a}))}var Ee=function(){return r.a.createElement(c.a,null,r.a.createElement(i.a,null),r.a.createElement(A,null,r.a.createElement(m.a,null,r.a.createElement(ee,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null),r.a.createElement(ge,null)," ")}}),r.a.createElement(s.a,{exact:!0,path:"/meme/:id",render:function(){return r.a.createElement(fe,null)}}),r.a.createElement(s.a,{exact:!0,path:"/user",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(s.a,{exact:!0,path:"/about",render:function(){return r.a.createElement(be,null)}}))),r.a.createElement(T,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.c225c61c.chunk.js.map