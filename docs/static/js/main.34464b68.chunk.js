(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t(7),a=t.n(s),o=t(6),l=t(2),r=(t(13),t(8)),i=t(0);var b=function(){var e=Object(c.useState)(r),n=Object(l.a)(e,2),t=n[0],s=n[1],a=Object(c.useState)(""),b=Object(l.a)(a,2),j=b[0],u=b[1],d=Object(c.useState)(!1),O=Object(l.a)(d,2),h=O[0],p=O[1],k=Object(c.useState)(!1),x=Object(l.a)(k,2),m=x[0],f=x[1],v=Object(c.useState)(""),y=Object(l.a)(v,2),W=y[0],g=y[1],w=function(e){g(e.target.id),t.splice(W,1),s(Object(o.a)(t))};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h1",{children:"Mis clubs"}),Object(i.jsx)("form",{children:Object(i.jsxs)("select",{name:"show",id:"show",children:[Object(i.jsx)("option",{value:"all",children:"Todos"}),Object(i.jsx)("option",{value:"week",children:"Los que abren entre semana"}),Object(i.jsx)("option",{value:"weekend",children:"Los que abren el fin de semana"})]})})]}),Object(i.jsxs)("main",{children:[Object(i.jsx)("ul",{children:t.map((function(e,n){var t=e.openOnWeekdays?"Si":"No",c=e.openOnWeekend?"Si":"No";return Object(i.jsxs)("li",{className:"club",id:n,children:[Object(i.jsx)("h3",{children:e.name}),Object(i.jsx)("button",{onClick:w,children:"X"}),Object(i.jsxs)("p",{children:["Abierto entre semana : ",t]}),Object(i.jsxs)("p",{children:["Abierto el fin de semana : ",c]})]},n)}))}),Object(i.jsxs)("section",{children:[Object(i.jsx)("h2",{children:"A\xf1adir un nuevo club"}),Object(i.jsxs)("form",{children:[Object(i.jsx)("label",{htmlFor:"name",children:" Nombre del club"}),Object(i.jsx)("input",{type:"text",value:j,onChange:function(e){u(e.target.value)}}),Object(i.jsx)("label",{htmlFor:"week",children:" \xbfAbre entre semana?"}),Object(i.jsx)("input",{type:"checkbox",checked:h,onChange:function(e){p(e.target.checked),console.log("weekdays",h)}}),Object(i.jsx)("label",{htmlFor:"weekend",children:" \xbfAbre los fines de semana?"}),Object(i.jsx)("input",{type:"checkbox",checked:m,onChange:function(e){f(e.target.checked),console.log("weekend",m)}}),Object(i.jsx)("input",{type:"submit",value:"A\xf1adir un nuevo club",onClick:function(e){e.preventDefault();var n={name:j,openOnWeekdays:h,openOnWeekend:m};s([].concat(Object(o.a)(t),[n]))}}),Object(i.jsx)("input",{type:"button",value:"Reset",onClick:function(e){e.preventDefault(),p(!1),f(!1),u("")}})]})]})]})]})};a.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"name":"Book club","openOnWeekdays":true,"openOnWeekend":true},{"name":"Chess club","openOnWeekdays":false,"openOnWeekend":true},{"name":"Escape room club","openOnWeekdays":false,"openOnWeekend":false},{"name":"Debate club","openOnWeekdays":true,"openOnWeekend":false}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.34464b68.chunk.js.map