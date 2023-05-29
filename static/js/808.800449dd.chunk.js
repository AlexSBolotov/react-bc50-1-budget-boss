"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[808],{3795:function(e,s,t){t.d(s,{Z:function(){return y}});var a=t(9439),n=t(2791),r=t(9434),c={modalDiv:"BalanceModal_modalDiv__d8BCE",largeText:"BalanceModal_largeText__2+Edk",littleText:"BalanceModal_littleText__KKvb0"},i=t(184),l=function(){return(0,i.jsx)("div",{className:c.fixedModal,children:(0,i.jsxs)("div",{className:c.modalDiv,children:[(0,i.jsx)("p",{className:c.largeText,children:"Hello! To get started, enter the current balance of your account!"}),(0,i.jsx)("p",{className:c.littleText,children:"You can't spend money until you have it :)"})]})})},o="Balance_balance_title__mxOKl",m="Balance_balance_submit__Wo-7P",u="Balance_balance_value__r0RMn",d="Balance_balance_form__y-ZnM",x=t(5822),_=function(e){var s=e.balanceToUpdate,t=(0,r.I0)();return(0,i.jsx)("button",{type:"button",className:m,onClick:function(){var e=Number(s);console.log(e),e>0?(t((0,x.Hw)({newBalance:e})),setTimeout((function(){t((0,x.nX)())}),200)):alert("The balance must be positive")},children:"Confirm"})},h=t(4289),j=t(1941),N=function(e){return new Intl.NumberFormat("ru-RU",{style:"decimal",minimumFractionDigits:2,useGrouping:"min2",unitDisplay:"short"}).format(e).replace(",",".")},y=function(){var e=(0,r.v9)(h.QM),s=(0,r.v9)(j.Ne),t=0===s?e:s,c=(0,n.useState)("".concat(N(e.toFixed(2))," UAH")),m=(0,a.Z)(c,2),x=m[0],y=m[1];return(0,i.jsxs)("div",{className:d,children:[(0,i.jsx)("h2",{className:o,children:"Balance:"}),(0,i.jsx)("input",{className:u,name:"balance",title:"Field must contain only numbers",type:"number",value:x,onChange:function(e){y(e.target.value)},disabled:0!==e,style:{borderRadius:0===e?"22px 0px 0px 22px":"22px",borderRight:0===e?"none":"2px solid #80848F",boxSizing:0===e?"border-box":"content-box,"},placeholder:0===e?"00.00 UAH":"".concat(N(t.toFixed(2))," UAH")}),!e&&(0,i.jsx)(_,{balanceToUpdate:x}),!e&&(0,i.jsx)(l,{})]})}},808:function(e,s,t){t.r(s),t.d(s,{default:function(){return Ue}});var a=t(9439),n=t(4805),r=t(3795),c=t(2791);var i,l=t.p+"static/media/diagram.68e03afe713740f7b7e7c5db20717faa.svg",o="ReportsLink_reports__OWJSL",m=t(184),u=function(){return(0,m.jsx)("div",{to:"/report",children:(0,m.jsxs)("span",{className:o,width:"24px",height:"24px",children:["Reports",(0,m.jsx)("img",{src:l,alt:"Diagram"})]})})},d=t(1087),x="TransactionsNav_container__UNgNG",_="TransactionsNav_one__UwTja",h="TransactionsNav_two__dYkGa",j=t(9434),N=t(1941),y=t(2088),p=function(){var e=(0,j.I0)(),s=(0,j.v9)(N.d6);return(0,m.jsxs)("div",{className:x,children:[(0,m.jsx)("button",{style:{boxShadow:"expenses"===s?"0px 0px 6px #41A350":"none",backgroundColor:"expenses"===s?"#383847":"#2D2D38",color:"expenses"===s?"#60C470":"#F6F7FB",borderColor:"expenses"===s?"#60C470":"transparent"},onClick:function(){return e((0,y.qi)("expenses"))},type:"button",className:_,children:"Expenses"}),(0,m.jsx)("button",{style:{boxShadow:"incomes"===s?"0px 0px 6px #41A350":"none",backgroundColor:"incomes"===s?"#383847":"#2D2D38",color:"incomes"===s?"#60C470":"#F6F7FB",borderColor:"incomes"===s?"#60C470":"transparent"},onClick:function(){return e((0,y.qi)("incomes"))},type:"button",className:h,children:"Income"})]})},b="HomeBar_bar__xjc9R",f=t(4289),v=function(){var e=(0,j.v9)(f.QM);return(0,m.jsxs)("section",{children:[(0,m.jsxs)("div",{className:b,style:{gap:0===e?"251px":"391px"},children:[(0,m.jsx)(d.OL,{to:"/reports",style:{pointerEvents:0===e?"none":"auto"},children:(0,m.jsx)(u,{})}),(0,m.jsx)(r.Z,{})]}),(0,m.jsx)(p,{})]})},g="TransactionContainer_tab_deskContainer__-+EXK",T="TransactionContainer_sectionContainer__cTzvk",C={summaryWrapper:"TransactionsSummary_summaryWrapper__Qbqbu",summaryBody:"TransactionsSummary_summaryBody__8XgKX",summaryTable:"TransactionsSummary_summaryTable__F5XwZ",summaryTableHeading:"TransactionsSummary_summaryTableHeading__6AAW5",summaryLine:"TransactionsSummary_summaryLine__U8dPH",summaryTableCell:"TransactionsSummary_summaryTableCell__-USY7"},D=function(e){switch(e){case"\u042f\u043d\u0432\u0430\u0440\u044c":return"January";case"\u0424\u0435\u0432\u0440\u0430\u043b\u044c":return"February";case"\u041c\u0430\u0440\u0442":return"March";case"\u0410\u043f\u0440\u0435\u043b\u044c":return"April";case"\u041c\u0430\u0439":return"May";case"\u0418\u044e\u043d\u044c":return"June";case"\u0418\u044e\u043b\u044c":return"July";case"\u0410\u0432\u0433\u0443\u0441\u0442":return"August";case"\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c":return"September";case"\u041e\u043a\u0442\u044f\u0431\u0440\u044c":return"October";case"\u041d\u043e\u044f\u0431\u0440\u044c":return"November";case"\u0414\u0435\u043a\u0430\u0431\u0440\u044c":return"December"}},w=function(){var e=(0,j.v9)(N.w4),s=(0,j.v9)(N.Lm),t=(0,j.v9)(N.d6),n=(0,c.useState)(s),r=(0,a.Z)(n,2),i=r[0],l=r[1],o=(0,c.useState)(e),u=(0,a.Z)(o,2),d=u[0],x=u[1];(0,c.useEffect)((function(){l(s)}),[s]),(0,c.useEffect)((function(){x(e)}),[e]);var _,h,y=[];"incomes"===t?y=null!==(_=Object.entries(i).slice(0,(new Date).getMonth()+1).reverse())&&void 0!==_?_:[]:y=null!==(h=Object.entries(d).slice(0,(new Date).getMonth()+1).reverse())&&void 0!==h?h:[];return(0,m.jsx)("div",{className:C.summaryWrapper,children:(0,m.jsxs)("table",{className:C.summaryTable,children:[(0,m.jsx)("thead",{className:C.summaryHead,children:(0,m.jsx)("tr",{children:(0,m.jsx)("th",{colSpan:"2",className:C.summaryTableHeading,children:"Summary"})})}),(0,m.jsxs)("tbody",{className:C.summaryBody,children:[y.map((function(e){return"N/A"===e[1]&&(e[1]=0),(0,m.jsxs)("tr",{className:C.summaryLine,children:[(0,m.jsx)("td",{className:C.summaryTableCell,children:D(e[0])}),(0,m.jsx)("td",{className:C.summaryTableCell,children:(s=e[1],new Intl.NumberFormat("ru-RU",{style:"decimal",currency:"UAH",minimumFractionDigits:2,useGrouping:"min2"}).format(s).replace(",","."))})]},"".concat(e[0]).concat(e[1]));var s})),(0,m.jsxs)("tr",{style:{height:38},className:C.summaryLine,children:[(0,m.jsx)("td",{className:C.summaryTableCell}),(0,m.jsx)("td",{className:C.summaryTableCell})]}),(0,m.jsxs)("tr",{style:{height:38},className:C.summaryLine,children:[(0,m.jsx)("td",{className:C.summaryTableCell}),(0,m.jsx)("td",{className:C.summaryTableCell})]}),(0,m.jsxs)("tr",{style:{height:38},className:C.summaryLine,children:[(0,m.jsx)("td",{className:C.summaryTableCell}),(0,m.jsx)("td",{className:C.summaryTableCell})]}),(0,m.jsxs)("tr",{style:{height:38},className:C.summaryLine,children:[(0,m.jsx)("td",{className:C.summaryTableCell}),(0,m.jsx)("td",{className:C.summaryTableCell})]}),(0,m.jsxs)("tr",{style:{height:38},className:C.summaryLine,children:[(0,m.jsx)("td",{className:C.summaryTableCell}),(0,m.jsx)("td",{className:C.summaryTableCell})]}),(0,m.jsxs)("tr",{style:{height:38},className:C.summaryLine,children:[(0,m.jsx)("td",{className:C.summaryTableCell}),(0,m.jsx)("td",{className:C.summaryTableCell})]})]})]})})},S=t(7614),M=t(1951),L=function(e){switch(e.trim()){case"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b":return"Products";case"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c":return"Alcohol";case"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f":return"Entertainment";case"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435":return"Health";case"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442":return"Transport";case"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430":return"Housing";case"\u0422\u0435\u0445\u043d\u0438\u043a\u0430":return"Technics";case"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c":return"Communal and communication";case"\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438":return"Sport and hobby";case"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435":return"Education";case"\u041f\u0440\u043e\u0447\u0435\u0435":return"Other";case"\u0417/\u041f":return"Salary";case"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434":return"Additional income"}},F="TransactionsList_container__Xc7iz",H="TransactionsList_table__K7Azm",k="TransactionsList_header__i5FZX",A="TransactionsList_header_line__S+Dl8",E="TransactionsList_header_text__uW4rT",B="TransactionsList_header_text_third__91N9-",I="TransactionsList_header_text_fourth__sGl+K",O="TransactionsList_body__WGrty",U="TransactionsList_body_line__Djhdd",R="TransactionsList_body_item__8oLYC",Z="TransactionsList_body_item_second__RDRWX",W="TransactionsList_body_item_red__DtqXq",P="TransactionsList_icon__8SDLI",K="TransactionsList_button__Ysrc7",X=["title","titleId"];function J(){return J=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},J.apply(this,arguments)}function Q(e,s){if(null==e)return{};var t,a,n=function(e,s){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],s.indexOf(t)>=0||(n[t]=e[t]);return n}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function z(e,s){var t=e.title,a=e.titleId,n=Q(e,X);return c.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",width:14,height:18,viewBox:"0 0 32 32",ref:s,"aria-labelledby":a},n),void 0===t?c.createElement("title",{id:a},"trashcan"):t?c.createElement("title",{id:a},t):null,i||(i=c.createElement("path",{d:"M8 26c0 1.656 1.343 3 3 3h10c1.656 0 3-1.344 3-3l2-16h-20l2 16zM19 13h2v13h-2v-13zM15 13h2v13h-2v-13zM11 13h2v13h-2v-13zM25.5 6h-6.5c0 0-0.448-2-1-2h-4c-0.553 0-1 2-1 2h-6.5c-0.829 0-1.5 0.671-1.5 1.5s0 1.5 0 1.5h22c0 0 0-0.671 0-1.5s-0.672-1.5-1.5-1.5z"})))}var G=c.forwardRef(z),q=(t.p,t(5341)),Y=function(e){var s=new Intl.NumberFormat("ru-RU",{style:"decimal",currency:"UAH",minimumFractionDigits:2,useGrouping:"min2"}).format(e).replace(",",".");return s.substring(0,1)+" "+s.substring(1)},V=function(e){var s,t=e.selectedDate,n=(0,c.useState)(!1),r=(0,a.Z)(n,2),i=r[0],l=r[1],o=(0,c.useState)(null),u=(0,a.Z)(o,2),d=u[0],x=u[1],_=(0,j.v9)(N.d6),h=(0,j.v9)(N.nH),p=(0,j.v9)(N.Dt),b=(0,j.I0)(),f=(s=t,(0,M.default)(Date.parse(s),"yyyy-MM-dd")),v="incomes"===_?h.filter((function(e){return e.date===f})):p.filter((function(e){return e.date===f})),g=function(e){x(e),l((function(e){return!e}))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:F,children:(0,m.jsxs)("table",{className:H,children:[(0,m.jsx)("thead",{className:k,children:(0,m.jsxs)("tr",{className:A,children:[(0,m.jsx)("th",{className:E,children:"Date"}),(0,m.jsx)("th",{className:E,children:"Description"}),(0,m.jsx)("th",{className:B,children:"Category"}),(0,m.jsx)("th",{className:I,children:"Sum"}),(0,m.jsx)("th",{className:E})]})}),(0,m.jsxs)("tbody",{className:O,children:[v.map((function(e){return(0,m.jsxs)("tr",{className:U,children:[(0,m.jsx)("td",{className:R,children:e.date}),(0,m.jsx)("td",{className:Z,children:e.description}),(0,m.jsx)("td",{className:R,children:L(e.category)}),(0,m.jsx)("td",{style:{color:"incomes"===_?"#60C470":"#FE4566"},className:W,children:"incomes"===_?"".concat(Y(e.amount)," UAH"):"- ".concat(Y(e.amount)," UAH")}),(0,m.jsx)("td",{className:R,children:(0,m.jsx)("button",{type:"button",onClick:function(){return g(e._id)},className:K,children:(0,m.jsx)(G,{className:P})})})]},e._id)})),(0,m.jsxs)("tr",{className:U,style:{height:38},children:[(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:Z}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:W}),(0,m.jsx)("td",{})]}),(0,m.jsxs)("tr",{className:U,style:{height:38},children:[(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:Z}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:W}),(0,m.jsx)("td",{})]}),(0,m.jsxs)("tr",{className:U,style:{height:38},children:[(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:Z}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:W}),(0,m.jsx)("td",{})]}),(0,m.jsxs)("tr",{className:U,style:{height:38},children:[(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:Z}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:W}),(0,m.jsx)("td",{})]}),(0,m.jsxs)("tr",{className:U,style:{height:38},children:[(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:Z}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:W}),(0,m.jsx)("td",{})]}),(0,m.jsxs)("tr",{className:U,style:{height:38},children:[(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:Z}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:W}),(0,m.jsx)("td",{})]}),(0,m.jsxs)("tr",{className:U,style:{height:38},children:[(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:Z}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:W}),(0,m.jsx)("td",{})]}),(0,m.jsxs)("tr",{className:U,style:{height:38},children:[(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:Z}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:W}),(0,m.jsx)("td",{})]}),(0,m.jsxs)("tr",{className:U,style:{height:38},children:[(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:Z}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:W}),(0,m.jsx)("td",{})]}),(0,m.jsxs)("tr",{className:U,style:{height:38},children:[(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:Z}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{className:W}),(0,m.jsx)("td",{})]})]})]})}),i&&(0,m.jsx)(q.Z,{closeModal:g,onSubmit:function(){b((0,S.Ks)(d)),b((0,y.J7)(d))},title:"Are you sure?"})]})},$="TransactionListMobile_mobileContainer__uE4Bu",ee="TransactionListMobile_mobileList__-SSwa",se="TransactionListMobile_mobileItem__3QJKX",te="TransactionListMobile_categoryContainer__8jRZM",ae="TransactionListMobile_categoryDescription__X4to-",ne="TransactionListMobile_categoryWrapper__BPgQH",re="TransactionListMobile_transactionDate__RSslA",ce="TransactionListMobile_ammountWrapper__XEOsv",ie="TransactionListMobile_transactionAmount__jQPoP",le="TransactionListMobile_button__gJFpl",oe="TransactionListMobile_icon__DyRIm",me=function(e){var s=new Intl.NumberFormat("ru-RU",{style:"decimal",currency:"UAH",minimumFractionDigits:2,useGrouping:"min2"}).format(e).replace(",",".");return s.substring(0,1)+" "+s.substring(1)},ue=function(e){var s,t=e.selectedDate,r=(0,c.useState)(!1),i=(0,a.Z)(r,2),l=i[0],o=i[1],u=(0,c.useState)(null),d=(0,a.Z)(u,2),x=d[0],_=d[1],h=(0,n.useMediaQuery)({maxWidth:768}),p=(0,j.v9)(N.d6),b=(0,j.v9)(N.nH),f=(0,j.v9)(N.Dt),v=(0,j.I0)(),g=(s=t,(0,M.default)(Date.parse(s),"yyyy-MM-dd")),T="incomes"===p?b.filter((function(e){return e.date===g})):f.filter((function(e){return e.date===g})),C=function(e){_(e),o((function(e){return!e}))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:$,children:h&&(0,m.jsx)("ul",{className:ee,children:T.map((function(e){return(0,m.jsxs)("li",{className:se,children:[(0,m.jsxs)("div",{className:te,children:[(0,m.jsx)("p",{className:ae,children:e.description}),(0,m.jsxs)("div",{className:ne,children:[(0,m.jsx)("span",{className:re,children:e.date}),(0,m.jsx)("span",{children:L(e.category)})]})]}),(0,m.jsxs)("div",{className:ce,children:[(0,m.jsx)("p",{className:ie,style:{color:"incomes"===p?"#60C470":"#FE4566"},children:"incomes"===p?"".concat(me(e.amount)," UAH"):"- ".concat(me(e.amount)," UAH")}),(0,m.jsx)("button",{onClick:function(){return C(e._id)},className:le,children:(0,m.jsx)(G,{className:oe})})]})]},e._id)}))})}),l&&(0,m.jsx)(q.Z,{closeModal:C,onSubmit:function(){v((0,S.Ks)(x)),v((0,y.J7)(x))},title:"Are you sure?"})]})},de=function(e){var s=e.selectedDate,t=(0,n.useMediaQuery)({maxWidth:767});return(0,m.jsx)("section",{className:T,children:t?(0,m.jsx)(ue,{selectedDate:s}):(0,m.jsxs)("div",{className:g,children:[(0,m.jsx)(V,{selectedDate:s}),(0,m.jsx)(w,{})]})})},xe="TransactionForm_mobileForm__hPZ8R",_e="TransactionForm_form__fydIk",he="TransactionForm_btn_container__PLLa0",je="TransactionForm_input__hcPPg",Ne="TransactionForm_select__FnciQ",ye="TransactionForm_input_calc__PnHCG",pe="TransactionForm_btn_input__T6iv1",be="TransactionForm_btn_clear__V56ge",fe=t(8813),ve=function(e){var s=e.selectedDate,t=(0,j.v9)(N.d6),a=(0,j.v9)(N.AN),n=(0,j.v9)(N.JY),r=(0,j.I0)(),c=function(e){e.preventDefault();var a=e.target.elements.amount.value;console.log(a);var n=e.target.elements.description.value,c=function(e){switch(e.trim()){case"Products":return"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b";case"Alcohol":return"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c";case"Entertainment":return"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f";case"Health":return"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435";case"Transport":return"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442";case"Housing":return"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430";case"Technics":return"\u0422\u0435\u0445\u043d\u0438\u043a\u0430";case"Communal and communication":return"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c";case"Sport and hobby":return"\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438";case"Education":return"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435";case"Other":return"\u041f\u0440\u043e\u0447\u0435\u0435";case"Salary":return"\u0417/\u041f";case"Additional income":return"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434"}}(e.target.elements.categories.value),i=function(e){return(0,M.default)(Date.parse(e),"yyyy-MM-dd")}(s),l={description:n,amount:Number(a),date:i,category:c};console.log("payload",l),r("expenses"===t?(0,S.ne)(l):(0,S.F8)(l))};return(0,m.jsx)("div",{className:xe,children:(0,m.jsxs)("form",{onSubmit:function(e){return c(e)},className:_e,children:[(0,m.jsx)("input",{type:"text",name:"description",placeholder:"Product description",className:je}),(0,m.jsx)("select",{name:"categories",className:Ne,children:"expenses"===t?a.map((function(e){return(0,m.jsx)("option",{value:L(e),id:"select-option",children:L(e)},(0,fe.x0)())})):n.map((function(e){return(0,m.jsx)("option",{value:L(e),id:"select-option",children:L(e)},(0,fe.x0)())}))}),(0,m.jsx)("input",{type:"number",name:"amount",placeholder:"0.00",className:ye}),(0,m.jsxs)("div",{className:he,children:[(0,m.jsx)("button",{type:"submit",className:pe,children:"Input"}),(0,m.jsx)("button",{type:"reset",className:be,children:"Clear"})]})]})})},ge=t(9513),Te=t.n(ge),Ce=(t(8639),t(736)),De=function(e){var s=e.selectedDate,t=e.setSelectedDate,a=(0,c.forwardRef)((function(e,s){var t=e.value,a=e.onClick,n=e.onChange;return(0,m.jsx)("input",{value:t,className:"input",onClick:a,onChange:n,ref:s,onKeyDown:function(e){e.preventDefault()}})}));return(0,m.jsx)("div",{className:"container",children:(0,m.jsx)(Te(),{className:"datepicker",dateFormat:"dd.MM.yyyy",selected:s,onChange:function(e){t(e)},locale:Ce.Z,maxDate:new Date,calendarClassName:"calendar",customInput:(0,m.jsx)(a,{})})})},we=t(3548),Se="Home_container__qRlyu",Me="Home_mobWrap__mwq3l",Le="Home_tab_deskWrap__xmUBC",Fe="Home_form_wrap__NjNx+",He="Home_open_modal__RNyVW",ke=t(4164),Ae=t(3211),Ee="MobileTransactionModal_backdrop__KQwBV",Be="MobileTransactionModal_modalWindow__fCYbh",Ie="MobileTransactionModal_button__USDS3",Oe=function(e){var s=e.onClose,t=e.selectedDate,a=document.querySelector("#modal-root"),n=function(e){"Escape"===e.code&&s()};return(0,c.useEffect)((function(){return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}})),(0,ke.createPortal)((0,m.jsx)("div",{onClick:function(e){e.currentTarget===e.target&&s()},className:Ee,children:(0,m.jsxs)("div",{className:Be,children:[(0,m.jsx)("button",{onClick:s,className:Ie,children:(0,m.jsx)("img",{src:Ae.Z,width:"12",alt:"closeicon"})}),(0,m.jsx)(ve,{selectedDate:t})]})}),a)},Ue=function(){var e=(0,c.useState)(!1),s=(0,a.Z)(e,2),t=s[0],r=s[1],i=(0,n.useMediaQuery)({maxWidth:767}),l=new Date,o=sessionStorage.getItem("date")||l,u=new Date(o),d=u||l,x=(0,c.useState)(d),_=(0,a.Z)(x,2),h=_[0],N=_[1],y=(0,j.I0)();(0,c.useEffect)((function(){y((0,we.p)()),y((0,we.o)()),y((0,S.f2)()),y((0,S.nu)())}),[y]);var p=function(e){sessionStorage.setItem("date",JSON.stringify(e.toString())),N(e)},b=function(){r((function(e){return!e}))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{}),(0,m.jsx)("div",{className:Se,children:i?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:Me,children:[(0,m.jsx)(De,{selectedDate:h,setSelectedDate:function(e){return p(e)}}),(0,m.jsx)("button",{type:"button",className:He,onClick:b,children:"Add transaction"}),(0,m.jsx)(de,{selectedDate:h})]}),t&&(0,m.jsx)(Oe,{selectedDate:h,closeModal:b,onClose:b})]}):(0,m.jsxs)("div",{className:Le,children:[(0,m.jsxs)("div",{className:Fe,children:[(0,m.jsx)(De,{selectedDate:h,setSelectedDate:function(e){return p(e)}}),(0,m.jsx)(ve,{selectedDate:h})]}),(0,m.jsx)(de,{selectedDate:h})]})})]})}},1941:function(e,s,t){t.d(s,{AN:function(){return a},Dt:function(){return i},JY:function(){return n},Lm:function(){return c},Ne:function(){return m},d6:function(){return o},nH:function(){return r},w4:function(){return l}});var a=function(e){return e.transactions.expensesCategories},n=function(e){return e.transactions.incomesCategories},r=function(e){return e.transactions.incomes},c=function(e){return e.transactions.incomesStats},i=function(e){return e.transactions.expenses},l=function(e){return e.transactions.expensesStats},o=function(e){return e.transactions.currentTransactionType},m=function(e){return e.transactions.newBalance}}}]);
//# sourceMappingURL=808.800449dd.chunk.js.map