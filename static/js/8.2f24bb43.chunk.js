(this["webpackJsonppodberu-fe"]=this["webpackJsonppodberu-fe"]||[]).push([[8],{264:function(e,n,t){"use strict";t.d(n,"c",(function(){return q})),t.d(n,"d",(function(){return D})),t.d(n,"e",(function(){return M})),t.d(n,"a",(function(){return _})),t.d(n,"b",(function(){return Y}));var a,i,l=t(5),c=t(31),r=t(23),d=t(14),o=t(0),s=t(13),b=t(322),u=t(327),j=t(329),h=t(325),O=t(346),x=t(338),p=t(347),v=t(326),f=t(332),m=t(342),g=t(330),y=t(331),C=t(333),z=t(334),w=t(24),S=t(1),k=s.default.div(a||(a=Object(d.a)(["\n  padding-bottom: 24px;\n  font-weight: 300;\n  font-size: 24px;\n\n  label {\n    font-size: 24px;\n    line-height: 40px;\n    font-weight: 300;\n    padding-left: 3px;\n    background-color: #f2f2f2;\n    cursor: pointer;\n  }\n  input::placeholder {\n    font-size: 24px;\n    line-height: 64px;\n  }\n  ul li {\n    font-size: 14px;\n    font-weight: 300;\n  }\n\n  input,\n  select {\n    height: 64px;\n    font-size: 24px;\n    line-height: 64px;\n  }\n\n  textarea {\n  }\n\n  input,\n  select,\n  textarea {\n    border-radius: 10px;\n    font-weight: 300;\n    cursor: pointer;\n  }\n\n  fieldset {\n    border: 2px solid #4185e9;\n    border-radius: 10px;\n  }\n\n  > div {\n    width: 100%;\n  }\n\n  .MuiSelect-select {\n    box-sizing: border-box;\n    height: 40px;\n\n    &:focus {\n      border-radius: 10px;\n    }\n  }\n\n  .MuiOutlinedInput-multiline {\n    height: auto !important;\n  }\n\n  .MuiFormControlLabel-root {\n    align-items: flex-start;\n    span {\n      font-size: 12px;\n    }\n  }\n  .MuiInputLabel-shrink {\n    transform: translate(14px, -14px) scale(0.75) !important;\n  }\n  .MuiCheckbox-root {\n    padding: 0;\n    margin-right: 8px;\n\n    .MuiSvgIcon-root {\n      color: #4185e9 !important;\n    }\n  }\n  input[type='file'] {\n    visibility: hidden;\n  }\n"]))),V=s.default.div(i||(i=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 24px;\n  font-size: 24px;\n"]))),q=function(e){var n=e.label,t=e.placeholder,a=void 0===t?"":t,i=e.disabled,d=void 0!==i&&i,s=e.type,u=void 0===s?"text":s,j=e.variant,h=void 0===j?"outlined":j,O=e.hint,x=e.name,p=e.size,v=void 0===p?"small":p,f=e.defaultValue,m=void 0===f?"":f,g=e.multiline,y=void 0!==g&&g,C=e.rows,z=void 0===C?3:C,q=e.onChange,D=e.validate,M=Object(r.a)(e,["label","placeholder","disabled","type","variant","hint","name","size","defaultValue","multiline","rows","onChange","validate"]),_=Object(o.useState)(m),I=Object(c.a)(_,2),Y=I[0],E=I[1],B=Object(o.useState)(null),T=Object(c.a)(B,2),A=T[0],F=T[1],H=function(e){var n,t=e.target,a=t.name,i=t.value;E(i),D&&(n=D?Object(w.e)(i,D):null,F(n)),q&&q({name:a,value:i,error:n})};return Object(S.jsxs)(k,{children:[Object(S.jsx)(b.a,Object(l.a)({size:v,name:x,defaultValue:m,label:n,type:u,placeholder:a,disabled:d,variant:h,"aria-label":n,"aria-describedby":n,multiline:y,rows:z,value:Y,onChange:H,onBlur:D?H:null,error:A&&A.length>0,helperText:A&&A.length>0?A[0]:"",required:!!D},M)),O&&Object(S.jsx)(V,{children:O})]})},D=function(e){var n=e.label,t=e.placeholder,a=void 0===t?"":t,i=e.disabled,d=void 0!==i&&i,s=e.variant,h=void 0===s?"outlined":s,O=e.size,x=void 0===O?"small":O,p=e.hint,v=e.name,f=e.defaultValue,m=void 0===f?"":f,C=e.onChange,z=e.validate,q=Object(r.a)(e,["label","placeholder","disabled","variant","size","hint","name","defaultValue","onChange","validate"]),D=Object(o.useState)(m),M=Object(c.a)(D,2),_=M[0],I=M[1],Y=Object(o.useState)(null),E=Object(c.a)(Y,2),B=E[0],T=E[1],A=Object(o.useState)(!1),F=Object(c.a)(A,2),H=F[0],J=F[1],L=function(e){var n,t=e.target,a=t.name,i=t.value;I(i),z&&(n=z?Object(w.e)(i,z):null,T(n)),C&&C({name:a,value:i,error:n})};return Object(S.jsxs)(k,{children:[Object(S.jsx)(b.a,Object(l.a)({name:v,defaultValue:m,label:n,size:x,type:H?"text":"password",placeholder:a||n,disabled:d,variant:h,"aria-label":n,"aria-describedby":n,value:_,onChange:L,onBlur:z?L:null,error:B&&B.length>0,helperText:B&&B.length>0?B[0]:"",required:!!z,InputProps:{endAdornment:Object(S.jsx)(u.a,{position:"end",children:Object(S.jsx)(j.a,{"aria-label":"toggle password visibility",onClick:function(){J((function(e){return!e}))},edge:"end",children:H?Object(S.jsx)(g.a,{}):Object(S.jsx)(y.a,{})})})}},q)),p&&Object(S.jsx)(V,{children:p})]})},M=function(e){var n=e.label,t=e.placeholder,a=void 0===t?"":t,i=e.disabled,d=void 0!==i&&i,s=e.variant,b=void 0===s?"outlined":s,u=e.hint,j=e.value,f=void 0===j?"":j,m=e.size,g=void 0===m?"small":m,y=e.name,C=e.validate,z=e.onChange,q=e.defaultValue,D=e.options,M=void 0===D?[{value:"a",label:"a"},{value:"b",label:"b"},{value:"c",label:"c"}]:D,_=Object(r.a)(e,["label","placeholder","disabled","variant","hint","value","size","name","validate","onChange","defaultValue","options"]),I=Object(o.useState)([]),Y=Object(c.a)(I,2),E=Y[0],B=Y[1],T=Object(o.useState)(f),A=Object(c.a)(T,2),F=A[0],H=A[1];return Object(S.jsxs)(k,{children:[Object(S.jsxs)(h.a,{defaultValue:q,variant:b,"aria-label":n,"aria-describedby":n,size:g,children:[Object(S.jsx)(O.a,{id:"demo-simple-select-outlined-label",children:n}),Object(S.jsx)(x.a,Object(l.a)(Object(l.a)({name:y,placeholder:null!==a&&void 0!==a?a:n,disabled:d,id:y,label:n,value:F,onChange:function(e){var n=e.target,t=n.name,a=n.value;H(a),z&&z({name:t,value:a})},onBlur:function(e){var n=e.target.value;B(C?Object(w.e)(n,C):[])},error:E.length>0,required:!!C},_),{},{children:M.map((function(e,n){return Object(S.jsx)(p.a,{value:e.value,children:e.label},n)}))})),E.length>0&&Object(S.jsx)(v.a,{style:{color:"#f44336"},children:E.length>0?E[0]:""})]}),u&&Object(S.jsx)(V,{children:u})]})},_=function(e){var n=e.label,t=e.disabled,a=void 0!==t&&t,i=(e.variant,e.hint,e.value),l=e.name,c=(e.defaultValue,e.onChange),d=e.validate;Object(r.a)(e,["label","disabled","variant","hint","value","name","defaultValue","onChange","validate"]);return Object(S.jsx)(k,{style:{padding:0},children:Object(S.jsx)(f.a,{control:Object(S.jsx)(m.a,{color:"primary",checked:i,onChange:function(e){var n=e.target,t=n.name,a=n.checked;c&&c({name:t,value:a})},name:l,icon:Object(S.jsx)(C.a,{}),checkedIcon:Object(S.jsx)(z.a,{}),required:!!d}),disabled:a,label:n,"aria-label":n,"aria-describedby":n,style:{margin:0}})})},I=t(52),Y=function(e){var n=e.render,t=e.onSubmit,a=e.initialDataState,i=void 0===a?{}:a,d=e.initialErrorState,s=void 0===d||d,b=Object(r.a)(e,["render","onSubmit","initialDataState","initialErrorState"]),u=Object(o.useState)(i),j=Object(c.a)(u,2),h=j[0],O=j[1],x=Object(o.useState)({}),p=Object(c.a)(x,2),v=p[0],f=p[1],m=Object(o.useState)(s),g=Object(c.a)(m,2),y=g[0],C=g[1],z=function(e){O((function(n){return Object(l.a)(Object(l.a)({},n),e)}))},w=Object(o.useCallback)((function(e){var n=e.name,t=e.value,a=e.error,i=void 0===a?void 0:a;z(Object(I.a)({},n,t)),f((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(I.a)({},n,i))}))}),[]);Object(o.useEffect)((function(){Object.keys(v).length>0&&C(Object.values(v).some((function(e){return e&&e.length>0})))}),[v]);return Object(S.jsx)("form",Object(l.a)(Object(l.a)({},b),{},{onSubmit:function(e){e.preventDefault(),t&&(z({fetching:!0}),t(h).finally((function(){return z({fetching:!1})})))},children:n({hasError:y,isFetching:h.fetching,handleInputChange:w})}))}},267:function(e,n,t){"use strict";var a,i=t(23),l=t(5),c=t(14),r=t(13),d=t(10),o=t(16),s=t(1),b=r.default.div.attrs((function(e){return Object(l.a)({},e)}))(a||(a=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  font-weight: 500;\n  cursor: pointer;\n  span {\n    ","\n  }\n"])),(function(e){return e.lineHeight?"line-height: ".concat(e.lineHeight,";"):""}));n.a=function(e){var n=e.icon,t=void 0===n?"caretleft":n,a=e.value,c=void 0===a?"\u041d\u0430\u0437\u0430\u0434":a,r=e.onClick,u=Object(i.a)(e,["icon","value","onClick"]),j=Object(d.g)();return Object(s.jsxs)(b,Object(l.a)(Object(l.a)({onClick:function(){r?r():j.goBack()}},u),{},{children:[t&&Object(s.jsx)(o.a,{name:t,width:8,margin:[0,10,0,0]}),c&&Object(s.jsx)("span",{children:c})]}))}},337:function(e,n,t){"use strict";t.r(n);var a,i=t(31),l=t(14),c=t(0),r=t(13),d=t(257),o=t(258),s=t(10),b=t(267),u=t(61),j=t(264),h=t(7),O=t(24),x=t(36),p=t(1),v=r.default.div(a||(a=Object(l.a)(["\n  section {\n    min-height: 500px;\n    padding: 70px;\n\n    > * {\n      max-width: 1156px;\n      margin: auto;\n    }\n\n    @media only screen and (max-width: 767px) {\n      padding: 40px;\n    }\n\n    > h2 {\n      font-size: 28px;\n      font-weight: 500;\n      margin-bottom: 34px;\n      text-align: center;\n      line-height: 1.4;\n      position: relative;\n      width: 100%;\n      > div {\n        position: absolute;\n        top: 10px;\n      }\n    }\n\n    > p {\n      font-size: 20px;\n      margin-bottom: 30px;\n      text-align: center;\n    }\n  }\n"])));n.default=function(){var e=Object(c.useContext)(x.a).user,n=Object(c.useState)(e.role===h.c.AGENT?"initial":"fill-form"),t=Object(i.a)(n,2),a=t[0],l=t[1],r=Object(s.h)().bankName;return Object(p.jsxs)(v,{children:["initial"===a&&Object(p.jsxs)("section",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(p.jsxs)("h2",{children:[Object(p.jsx)(b.a,{}),"\u0414\u0435\u0431\u0435\u0442\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0442\u0430 \u0410\u043b\u044c\u0444\u0430-\u0431\u0430\u043d\u043a"]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("div",{children:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e"}),Object(p.jsx)("div",{children:"\u043b\u0438\u0431\u043e \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u043d\u0435\u0451 \u0441\u0441\u044b\u043b\u043a\u0443"}),Object(p.jsx)("div",{children:"\u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430."})]}),Object(p.jsx)(u.b,{value:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443",size:"lg",group:"outline",margin:[0,0,20,0]}),Object(p.jsx)("span",{style:{marginBottom:-8},children:"\u0418\u043b\u0438"}),Object(p.jsx)(u.b,{value:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0435",size:"lg",margin:[30,0,20,0],onClick:function(){return l("fill-form")}})]}),"fill-form"===a&&Object(p.jsxs)("section",{children:[Object(p.jsxs)("h2",{children:[Object(p.jsx)(b.a,{}),"\u0414\u0435\u0431\u0435\u0442\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0442\u0430 \u0410\u043b\u044c\u0444\u0430-\u0431\u0430\u043d\u043a"]}),Object(p.jsx)("p",{children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e"}),Object(p.jsxs)("form",{style:{width:260,margin:"auto"},onSubmit:function(e){e.preventDefault(),l("complete")},children:[Object(p.jsx)(d.a,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(j.c,{label:"\u0424\u0418\u041e",placeholder:"\u0424\u0418\u041e",name:"full_name",type:"text",validate:"required"})})}),Object(p.jsx)(d.a,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(j.c,{label:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435",placeholder:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435",name:"date_of_birth",type:"date",defaultValue:Object(O.a)(Date.now(),"YYYY-MM-DD"),validate:"required"})})}),Object(p.jsx)(d.a,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(j.c,{label:"\u0421\u0435\u0440\u0438\u044f \u0438 \u043d\u043e\u043c\u0435\u0440 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430",placeholder:"\u0421\u0435\u0440\u0438\u044f \u0438 \u043d\u043e\u043c\u0435\u0440 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430",name:"passport_number",type:"text",validate:"required"})})}),Object(p.jsx)(d.a,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(j.c,{label:"\u041a\u0435\u043c \u0432\u044b\u0434\u0430\u043d",placeholder:"\u041a\u0435\u043c \u0432\u044b\u0434\u0430\u043d",name:"issued_by",type:"text",validate:"required"})})}),Object(p.jsx)(d.a,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(j.c,{label:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438",placeholder:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438",name:"date_of_issue",type:"date",defaultValue:Object(O.a)(Date.now(),"YYYY-MM-DD"),validate:"required"})})}),Object(p.jsx)(d.a,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(j.c,{label:"\u0410\u0434\u0440\u0435\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",placeholder:"\u0410\u0434\u0440\u0435\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",name:"address",type:"text",validate:"required"})})}),Object(p.jsx)(d.a,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(j.c,{label:"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",placeholder:"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",name:"phone_number",type:"number",validate:"required|phone_number"})})}),Object(p.jsx)(d.a,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(j.c,{label:"E-mail",placeholder:"E-mail",name:"email",type:"email",validate:"required"})})}),Object(p.jsx)(d.a,{children:Object(p.jsx)(o.a,{style:{display:"flex",justifyContent:"center",marginTop:20},children:Object(p.jsx)(u.b,{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",size:"md",width:100})})})]})]}),"complete"===a&&Object(p.jsxs)("section",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(p.jsxs)("h2",{children:["\u0414\u0435\u0431\u0435\u0442\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0442\u0430 $",r]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("div",{children:"\u0417\u0430\u044f\u0432\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430!"}),Object(p.jsx)("div",{children:"\u0415\u0451 \u0441\u0442\u0430\u0442\u0443\u0441 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u0441\u043b\u0435\u0434\u0438\u0442\u044c \u0432 \u0441\u0432\u043e\u0451\u043c"}),Object(p.jsx)("div",{children:"\u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435."})]}),Object(p.jsx)(u.b,{value:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",size:"lg",margin:[20,0]})]})]})}}}]);
//# sourceMappingURL=8.2f24bb43.chunk.js.map