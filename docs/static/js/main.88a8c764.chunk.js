(this.webpackJsonptrivialing=this.webpackJsonptrivialing||[]).push([[0],{29:function(t,n,e){},46:function(t,n,e){},48:function(t,n,e){},49:function(t,n,e){"use strict";e.r(n);var i,c,a,r,s,o,l,u,j,d,b,A,x,p,I,O,f,h,m,g,v,R,E,w,B,V,W,L,C,F,Q,z,X=e(0),S=e(30),q=e.n(S),y=e(34),N=e(4),T=e(2),U=e.p+"static/media/Trivialis2.c97a0504.png",K=e(25),D=e(3),Z=e.p+"static/media/react.d32b912d.png",P=e(1),Y=D.a.footer(i||(i=Object(T.a)(["\n  background: black;\n  color: white;\n  padding: 20px;\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  vertical-align: baseline;\n"]))),k=D.a.div(c||(c=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),M=D.a.img(a||(a=Object(T.a)(["\n  width: 25px;\n"]))),H=function(){return Object(P.jsxs)(Y,{children:[Object(P.jsx)("small",{children:"CrisBIB \xa9 2021"}),Object(P.jsxs)(k,{children:[Object(P.jsx)("small",{children:"Powered by"}),Object(P.jsx)("a",{href:"https://es.reactjs.org/",target:"_blank",children:Object(P.jsx)(M,{src:Z,title:"Logo React",alt:"logo-reactjs"})})]})]})},J=e(22),G=D.a.main(r||(r=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  height: 90vh;\n"]))),_=D.a.div(s||(s=Object(T.a)(["\n  display: flex;\n"]))),$=D.a.h1(o||(o=Object(T.a)(["\n  font-size: 3em;\n  margin-top: 1em;\n  color: #007787;\n"]))),tt=D.a.img(l||(l=Object(T.a)(["\n  width: 30%;\n  display: inline-block;\n  position: absolute;\n  right: 5px;\n  top: 70px;\n  z-index: -1;\n"]))),nt=D.a.h2(u||(u=Object(T.a)(["\n  font-size: 1.7em;\n  text-align: center;\n  margin-top: 1em;\n  color: #007787;\n"]))),et=D.a.h3(j||(j=Object(T.a)(["\n  font-size: 1.5em;\n  text-align: center;\n  margin-top: 0em;\n  color: #e685c3s;\n"]))),it=function(){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(G,{children:[Object(P.jsxs)(_,{children:[Object(P.jsx)($,{children:"TRIVIALIS"}),Object(P.jsx)(tt,{title:"Logo Trivialis",src:U,alt:"logo-trivialis"})]}),Object(P.jsx)(nt,{children:"Wellcome to the amazing world of numbers!"}),Object(P.jsx)("div",{children:Object(P.jsx)(et,{children:"Ver instrucciones"})}),Object(P.jsx)(J.a,{variant:"warning",class:"btn btn-success",style:{marginBottom:30},children:Object(P.jsx)(K.a,{to:"/quizpage",style:{textDecoration:"none",color:"#fff"},children:"READY TO QUIZ?"})})]}),Object(P.jsx)(H,{})]})},ct=e(23),at=e(6),rt=D.a.header(d||(d=Object(T.a)(["\n  height: 15vh;\n  @media (max-width: 768px) {\n    height: 10vh;\n  }\n"]))),st=D.a.div(b||(b=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 0.8em;\n  border-bottom: solid 1px #007787;\n"]))),ot=D.a.h1(A||(A=Object(T.a)(["\n  font-size: 3em;\n  color: #007787;\n  margin-top: 0.8em;\n  @media (max-width: 768px) {\n    font-size: 1em;\n  }\n"]))),lt=D.a.img(x||(x=Object(T.a)(["\n  text-align: right;\n  @media (max-width: 768px) {\n    width: 10%;\n  }\n  width: 5%;\n"]))),ut=function(){return Object(P.jsx)(rt,{children:Object(P.jsxs)(st,{children:[Object(P.jsx)(ot,{children:"TRIVIALIS"}),Object(P.jsx)(lt,{title:"Logo Trivialis",src:U,alt:"logo_trivialis"})]})})},jt=function(){return fetch("http://numbersapi.com/random/trivia?json").then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){return console.log("Ha sucedido un error: ".concat(t))}))},dt=function(t){return fetch("http://numbersapi.com/".concat(t,"/trivia?fragment")).then((function(t){return t.text()})).then((function(t){return t})).catch((function(t){return console.log("Ha sucedido un error: ".concat(t))}))},bt=D.a.small(p||(p=Object(T.a)(["\n  font-size: 30px;\n  @media (max-width: 768px) {\n    font-size: 20px;\n  }\n"]))),At=function(t){return Object(P.jsx)("div",{children:Object(P.jsxs)(bt,{children:[" Question ",t.counter," of 10"]})})},xt=e(19),pt=(e(46),D.a.div(I||(I=Object(T.a)(["\n  width: 70%;\n  text-align: center;\n  margin: 5%;\n"])))),It=function(t){var n=Object(X.useState)("start"),e=Object(at.a)(n,2),i=e[0],c=e[1],a=Object(X.useState)("start"),r=Object(at.a)(a,2),s=r[0],o=r[1],l=Object(X.useState)("start"),u=Object(at.a)(l,2),j=u[0],d=u[1];return Object(X.useEffect)((function(){setTimeout((function(){c("end animation")}),0);setTimeout((function(){o("end animation")}),1e4);setTimeout((function(){d("end animation")}),2e4);setTimeout((function(){c("start"),o("start"),d("start")}),3e4)}),[t.trivia]),Object(P.jsx)(pt,{children:Object(P.jsxs)(xt.a,{children:[Object(P.jsx)(xt.a,{className:i,striped:!0,variant:"success",animated:!0},1),Object(P.jsx)(xt.a,{className:s,variant:"warning",animated:!0},2),Object(P.jsx)(xt.a,{className:j,striped:!0,variant:"danger",animated:!0},3)]})})},Ot=D.a.input(O||(O=Object(T.a)(["\n  margin-right: 8px;\n"]))),ft=D.a.label(f||(f=Object(T.a)(["\n  text-align: left;\n"]))),ht=function(t){var n=Object(X.useState)(null),e=Object(at.a)(n,2),i=e[0],c=e[1];Object(X.useEffect)((function(){c(Math.ceil(1e4*Math.random()))}),[t.trivia]);return Object(P.jsxs)(ft,{children:[Object(P.jsx)(Ot,{onChange:function(n){var e=parseInt(n.target.id);t.handleInput(e)},value:"",id:i,type:"radio",name:"options"})," ",i]})},mt=D.a.input(h||(h=Object(T.a)(["\n  margin-right: 8px;\n  margin-left: 0px;\n"]))),gt=D.a.label(m||(m=Object(T.a)(["\n  text-align: left;\n"]))),vt=function(t){var n=parseInt(t.trivia.number),e=t.trivia.number;return Object(P.jsxs)(gt,{children:[Object(P.jsx)(mt,{onChange:function(n){var e=parseInt(n.target.id);t.handleInput(e)},type:"radio",name:"options",id:e,value:""})," ",n]})},Rt=D.a.form(g||(g=Object(T.a)(["\n  color: #007787;\n  margin: 1em;\n  text-align: center;\n  font-size: 30px;\n  @media (max-width: 768px) {\n    font-size: 15px;\n  }\n"]))),Et=D.a.label(v||(v=Object(T.a)(["\n  width: 90%;\n  align-items: center;\n"]))),wt=D.a.div(R||(R=Object(T.a)(["\n  display: grid;\n  color: black;\n  grid-template-columns: 70% 30%;\n  margin: 1em;\n"]))),Bt=D.a.div(E||(E=Object(T.a)(["\n  margin: 2em;\n  margin-top: 0;\n  text-align: center;\n  font-size: 25px;\n  @media (max-width: 768px) {\n    font-size: 15px;\n  }\n"]))),Vt=D.a.p(w||(w=Object(T.a)(["\n  text-align: center;\n  margin-bottom: 4%;\n"]))),Wt=function(t){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(Rt,{children:Object(P.jsxs)(Et,{htmlFor:"options",children:["What is ",t.text,"?",Object(P.jsxs)(wt,{children:[Object(P.jsx)(ht,{trivia:t.trivia,handleInput:t.handleInput}),Object(P.jsx)(ht,{trivia:t.trivia,handleInput:t.handleInput}),Object(P.jsx)(vt,{trivia:t.trivia,handleInput:t.handleInput}),Object(P.jsx)(ht,{trivia:t.trivia,handleInput:t.handleInput})]})]})}),Object(P.jsxs)(Bt,{children:[Object(P.jsx)(Vt,{children:"The correct answer is..."}),Object(P.jsx)(Vt,{children:t.correctAnswer})]})]})},Lt=function(t){var n=function(){t.next()};return Object(P.jsx)("div",{children:function(){if(t.counter<10)return Object(P.jsx)(J.a,{style:{color:"#fff",marginBottom:30},variant:"warning",onClick:n,disabled:t.disabled,children:"Next question"})}()})},Ct=D.a.h3(B||(B=Object(T.a)(["\n  color: #007787;\n  text-align: center;\n  font-size: 30px;\n  @media (max-width: 768px) {\n    font-size: 15px;\n  }\n"]))),Ft=D.a.ul(V||(V=Object(T.a)(["\n  list-style: none;\n  padding-right: 3%;\n  margin-right: 2%;\n"]))),Qt=D.a.li(W||(W=Object(T.a)(["\n  display: flex;\n  padding-top: 4%;\n  border-bottom: 1px solid #3f3f3f;\n"]))),zt=D.a.img(L||(L=Object(T.a)(["\n  width: 25px;\n  height: 25px;\n  margin-right: 5px;\n"]))),Xt=D.a.p(C||(C=Object(T.a)(["\n  text-align: center;\n  margin-bottom: 4%;\n  font-size: 30px;\n  @media (max-width: 768px) {\n    font-size: 20px;\n  }\n"]))),St=D.a.p(F||(F=Object(T.a)(["\n  text-align: center;\n  margin-bottom: 4%;\n  font-size: 25px;\n  @media (max-width: 768px) {\n    font-size: 15px;\n  }\n"]))),qt=D.a.div(Q||(Q=Object(T.a)([""]))),yt=function(t){var n=t.answers.map((function(t,n){return Object(P.jsx)(Qt,{children:Object(P.jsxs)(qt,{children:[Object(P.jsxs)(Xt,{children:[Object(P.jsx)(zt,{}),"Question ",n+1,":"]}),Object(P.jsx)(St,{children:t})]})},n)}));return Object(P.jsxs)("div",{children:[Object(P.jsx)(Ct,{children:"Take a look to your results:"}),Object(P.jsx)(Ft,{children:n}),";"]})},Nt=e.p+"static/media/Incorrect_Icon.72b80c81.jpeg",Tt=D.a.main(z||(z=Object(T.a)(["\n  width: 70%;\n  padding-top: 3%;\n  display: flex;\n  margin: auto;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 90px;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),Ut=function(){var t=Object(X.useState)({}),n=Object(at.a)(t,2),e=n[0],i=n[1],c=Object(X.useState)(""),a=Object(at.a)(c,2),r=a[0],s=a[1],o=Object(X.useState)(0),l=Object(at.a)(o,2),u=l[0],j=l[1],d=Object(X.useState)(""),b=Object(at.a)(d,2),A=b[0],x=b[1],p=Object(X.useState)(!0),I=Object(at.a)(p,2),O=I[0],f=I[1],h=Object(X.useState)([]),m=Object(at.a)(h,2),g=m[0],v=m[1],R=Object(X.useState)(1),E=Object(at.a)(R,2),w=E[0],B=E[1],V=Object(X.useState)([]),W=Object(at.a)(V,2),L=W[0],C=W[1];Object(X.useEffect)((function(){jt().then((function(t){i(t)})),f(!0)}),[]),Object(X.useEffect)((function(){if(e.number){var t=e.number.toString();t.includes("+")||NaN===typeof e.number?jt().then((function(t){i(t)})):dt(t).then((function(t){s(t.toLowerCase())}))}}),[e]),Object(X.useEffect)((function(){f(!0)}),[e]),Object(X.useEffect)((function(){setTimeout((function(){x(e.text),f(!1),F()}),3e4)}),[e]);var F=function(){return C([].concat(Object(ct.a)(L),[e.text])),e.number===u?v.apply(void 0,Object(ct.a)(g).concat(["data:image/jpeg;base64,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"])):v.apply(void 0,Object(ct.a)(g).concat([Nt]))};return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(ut,{}),Object(P.jsxs)(Tt,{children:[Object(P.jsx)(At,{counter:w}),Object(P.jsx)(It,{trivia:e}),Object(P.jsx)(Wt,{trivia:e,text:r,handleInput:function(t){return j(t)},counter:w,correctAnswer:A}),Object(P.jsx)(Lt,{counter:w,next:function(){!function(){var t;w<10?t=w+1:(B(1),C([])),B(t)}(),x(""),jt().then((function(t){i(t)}))},disabled:O}),Object(P.jsx)(yt,{inputId:u,answers:L,trivia:e})]}),Object(P.jsx)(H,{})]})},Kt=(e(29),function(){return Object(P.jsxs)(N.Switch,{children:[Object(P.jsx)(N.Route,{exact:!0,path:"/",children:Object(P.jsx)(it,{})}),Object(P.jsx)(N.Route,{path:"/quizpage",children:Object(P.jsx)(Ut,{})})]})});e(47),e(48);q.a.render(Object(P.jsx)(y.HashRouter,{children:Object(P.jsx)(Kt,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.88a8c764.chunk.js.map