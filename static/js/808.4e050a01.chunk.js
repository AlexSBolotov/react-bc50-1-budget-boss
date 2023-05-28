/*! For license information please see 808.4e050a01.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[808],{3795:function(e,s,a){a.d(s,{Z:function(){return y}});var t=a(9439),n=a(2791),r=a(9434),c={modalDiv:"BalanceModal_modalDiv__d8BCE",largeText:"BalanceModal_largeText__2+Edk",littleText:"BalanceModal_littleText__KKvb0"},l=a(184),i=function(){return(0,l.jsx)("div",{className:c.fixedModal,children:(0,l.jsxs)("div",{className:c.modalDiv,children:[(0,l.jsx)("p",{className:c.largeText,children:"Hello! To get started, enter the current balance of your account!"}),(0,l.jsx)("p",{className:c.littleText,children:"You can't spend money until you have it :)"})]})})},o="Balance_balance_title__mxOKl",m="Balance_balance_submit__Wo-7P",d="Balance_balance_value__r0RMn",u="Balance_balance_form__y-ZnM",x="Balance_balance_value_span__OWdtd",_=a(5822),h=function(e){var s=e.balanceToUpdate,a=(0,r.I0)();return(0,l.jsx)("button",{type:"button",className:m,onClick:function(){var e=Number(s);console.log(e),e>0?(a((0,_.Hw)({newBalance:e})),setTimeout((function(){a((0,_.nX)())}),200)):alert("The balance must be positive")},children:"Confirm"})},j=a(4289),N=a(1941),y=function(){var e=(0,r.v9)(j.QM),s=(0,r.v9)(N.Ne),a=0===s?e:s;console.log(a);var c=(0,n.useState)("".concat(e.toFixed(2)," UAH")),m=(0,t.Z)(c,2),_=m[0],y=m[1];return(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("h2",{className:o,children:"Balance:"}),(0,l.jsx)("span",{className:x,children:(0,l.jsx)("input",{className:d,name:"balance",title:"Field must contain only numbers",type:"number",value:_,onChange:function(e){y(e.target.value)},disabled:0!==e,style:{borderRadius:0===e?"22px 0px 0px 22px":"22px",borderRight:0===e?"none":"2px solid #80848F",textAlign:0===e?"right":"center"},placeholder:0===e?"00.00 UAH":"".concat(a.toFixed(2)," UAH")})}),!e&&(0,l.jsx)(h,{balanceToUpdate:_}),!e&&(0,l.jsx)(i,{})]})}},808:function(e,s,a){a.r(s),a.d(s,{default:function(){return Oe}});var t=a(9439),n=a(4805),r=a(3795),c=a(2791);var l,i=a.p+"static/media/diagram.68e03afe713740f7b7e7c5db20717faa.svg",o="ReportsLink_reports__OWJSL",m=a(184),d=function(){return(0,m.jsx)("div",{to:"/report",children:(0,m.jsxs)("span",{className:o,children:["Reports",(0,m.jsx)("img",{src:i,alt:"Diagram"})]})})},u=a(1087),x="TransactionsNav_container__UNgNG",_="TransactionsNav_one__UwTja",h="TransactionsNav_two__dYkGa",j=a(9434),N=a(1941),y=a(2088),b=function(){var e=(0,j.I0)(),s=(0,j.v9)(N.d6);return(0,m.jsxs)("div",{className:x,children:[(0,m.jsx)("button",{style:{boxShadow:"expenses"===s?"0px 0px 6px #41A350":"none",backgroundColor:"expenses"===s?"#383847":"#2D2D38",color:"expenses"===s?"#60C470":"#F6F7FB",borderColor:"expenses"===s?"#60C470":"transparent"},onClick:function(){return e((0,y.qi)("expenses"))},type:"button",className:_,children:"Expenses"}),(0,m.jsx)("button",{style:{boxShadow:"incomes"===s?"0px 0px 6px #41A350":"none",backgroundColor:"incomes"===s?"#383847":"#2D2D38",color:"incomes"===s?"#60C470":"#F6F7FB",borderColor:"incomes"===s?"#60C470":"transparent"},onClick:function(){return e((0,y.qi)("incomes"))},type:"button",className:h,children:"Income"})]})},p="HomeBar_bar__xjc9R",f=a(4289),v=function(){var e=(0,j.v9)(f.QM);return(0,m.jsxs)("section",{children:[(0,m.jsxs)("div",{className:p,children:[(0,m.jsx)(u.OL,{to:"/reports",style:{pointerEvents:0===e?"none":"auto"},children:(0,m.jsx)(d,{})}),(0,m.jsx)(r.Z,{})]}),(0,m.jsx)(b,{})]})},T="TransactionContainer_tab_deskContainer__-+EXK",g="TransactionContainer_sectionContainer__cTzvk",C={summaryWrapper:"TransactionsSummary_summaryWrapper__Qbqbu",summaryBody:"TransactionsSummary_summaryBody__8XgKX",summaryTable:"TransactionsSummary_summaryTable__F5XwZ",summaryTableHeading:"TransactionsSummary_summaryTableHeading__6AAW5",summaryLine:"TransactionsSummary_summaryLine__U8dPH",summaryTableCell:"TransactionsSummary_summaryTableCell__-USY7"},D=function(e){switch(e){case"\u042f\u043d\u0432\u0430\u0440\u044c":return"January";case"\u0424\u0435\u0432\u0440\u0430\u043b\u044c":return"February";case"\u041c\u0430\u0440\u0442":return"March";case"\u0410\u043f\u0440\u0435\u043b\u044c":return"April";case"\u041c\u0430\u0439":return"May";case"\u0418\u044e\u043d\u044c":return"June";case"\u0418\u044e\u043b\u044c":return"July";case"\u0410\u0432\u0433\u0443\u0441\u0442":return"August";case"\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c":return"September";case"\u041e\u043a\u0442\u044f\u0431\u0440\u044c":return"October";case"\u041d\u043e\u044f\u0431\u0440\u044c":return"November";case"\u0414\u0435\u043a\u0430\u0431\u0440\u044c":return"December"}},M=function(){var e=(0,j.v9)(N.w4),s=(0,j.v9)(N.Lm),a=(0,j.v9)(N.d6),n=(0,c.useState)(s),r=(0,t.Z)(n,2),l=r[0],i=r[1],o=(0,c.useState)(e),d=(0,t.Z)(o,2),u=d[0],x=d[1];(0,c.useEffect)((function(){i(s)}),[s]),(0,c.useEffect)((function(){x(e)}),[e]);var _,h,y=[];"incomes"===a?y=null!==(_=Object.entries(l).slice(0,(new Date).getMonth()+1).reverse())&&void 0!==_?_:[]:y=null!==(h=Object.entries(u).slice(0,(new Date).getMonth()+1).reverse())&&void 0!==h?h:[];return(0,m.jsx)("div",{className:C.summaryWrapper,children:(0,m.jsxs)("table",{className:C.summaryTable,children:[(0,m.jsx)("thead",{className:C.summaryHead,children:(0,m.jsx)("tr",{children:(0,m.jsx)("th",{colSpan:"2",className:C.summaryTableHeading,children:"Summary"})})}),(0,m.jsxs)("tbody",{className:C.summaryBody,children:[y.map((function(e){return"N/A"===e[1]&&(e[1]=0),(0,m.jsxs)("tr",{className:C.summaryLine,children:[(0,m.jsx)("td",{className:C.summaryTableCell,children:D(e[0])}),(0,m.jsx)("td",{className:C.summaryTableCell,children:e[1]})]},"".concat(e[0]).concat(e[1]))})),(0,m.jsxs)("tr",{style:{height:38},className:C.summaryLine,children:[(0,m.jsx)("td",{className:C.summaryTableCell}),(0,m.jsx)("td",{className:C.summaryTableCell})]}),(0,m.jsxs)("tr",{style:{height:38},className:C.summaryLine,children:[(0,m.jsx)("td",{className:C.summaryTableCell}),(0,m.jsx)("td",{className:C.summaryTableCell})]}),(0,m.jsxs)("tr",{style:{height:38},className:C.summaryLine,children:[(0,m.jsx)("td",{className:C.summaryTableCell}),(0,m.jsx)("td",{className:C.summaryTableCell})]}),(0,m.jsxs)("tr",{style:{height:38},className:C.summaryLine,children:[(0,m.jsx)("td",{className:C.summaryTableCell}),(0,m.jsx)("td",{className:C.summaryTableCell})]}),(0,m.jsxs)("tr",{style:{height:38},className:C.summaryLine,children:[(0,m.jsx)("td",{className:C.summaryTableCell}),(0,m.jsx)("td",{className:C.summaryTableCell})]}),(0,m.jsxs)("tr",{style:{height:38},className:C.summaryLine,children:[(0,m.jsx)("td",{className:C.summaryTableCell}),(0,m.jsx)("td",{className:C.summaryTableCell})]})]})]})})},L=a(7614),w=a(1951),S=function(e){switch(e.trim()){case"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b":return"Products";case"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c":return"Alcohol";case"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f":return"Entertainment";case"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435":return"Health";case"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442":return"Transport";case"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430":return"Housing";case"\u0422\u0435\u0445\u043d\u0438\u043a\u0430":return"Technics";case"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c":return"Communal and communication";case"\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438":return"Sport and hobby";case"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435":return"Education";case"\u041f\u0440\u043e\u0447\u0435\u0435":return"Other";case"\u0417/\u041f":return"Salary";case"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434":return"Additional income"}},F="TransactionsList_container__Xc7iz",k="TransactionsList_table__K7Azm",H="TransactionsList_header__i5FZX",A="TransactionsList_header_line__S+Dl8",E="TransactionsList_header_text__uW4rT",B="TransactionsList_header_text_third__91N9-",O="TransactionsList_header_text_fourth__sGl+K",Z="TransactionsList_body__WGrty",W="TransactionsList_body_line__Djhdd",P="TransactionsList_body_item__8oLYC",I="TransactionsList_body_item_second__RDRWX",R="TransactionsList_body_item_red__DtqXq",U="TransactionsList_icon__8SDLI",K="TransactionsList_button__Ysrc7",X=["title","titleId"];function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},Q.apply(this,arguments)}function J(e,s){if(null==e)return{};var a,t,n=function(e,s){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],s.indexOf(a)>=0||(n[a]=e[a]);return n}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function q(e,s){var a=e.title,t=e.titleId,n=J(e,X);return c.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",width:14,height:18,viewBox:"0 0 32 32",ref:s,"aria-labelledby":t},n),void 0===a?c.createElement("title",{id:t},"trashcan"):a?c.createElement("title",{id:t},a):null,l||(l=c.createElement("path",{d:"M8 26c0 1.656 1.343 3 3 3h10c1.656 0 3-1.344 3-3l2-16h-20l2 16zM19 13h2v13h-2v-13zM15 13h2v13h-2v-13zM11 13h2v13h-2v-13zM25.5 6h-6.5c0 0-0.448-2-1-2h-4c-0.553 0-1 2-1 2h-6.5c-0.829 0-1.5 0.671-1.5 1.5s0 1.5 0 1.5h22c0 0 0-0.671 0-1.5s-0.672-1.5-1.5-1.5z"})))}var z=c.forwardRef(q),Y=(a.p,a(5341)),G=function(e){var s,a=e.selectedDate,n=(0,c.useState)(!1),r=(0,t.Z)(n,2),l=r[0],i=r[1],o=(0,c.useState)(null),d=(0,t.Z)(o,2),u=d[0],x=d[1],_=(0,j.v9)(N.d6),h=(0,j.v9)(N.nH),b=(0,j.v9)(N.Dt),p=(0,j.I0)(),f=(s=a,(0,w.default)(Date.parse(s),"yyyy-MM-dd")),v="incomes"===_?h.filter((function(e){return e.date===f})):b.filter((function(e){return e.date===f})),T=function(e){x(e),i((function(e){return!e}))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:F,children:(0,m.jsxs)("table",{className:k,children:[(0,m.jsx)("thead",{className:H,children:(0,m.jsxs)("tr",{className:A,children:[(0,m.jsx)("th",{className:E,children:"Date"}),(0,m.jsx)("th",{className:E,children:"Description"}),(0,m.jsx)("th",{className:B,children:"Category"}),(0,m.jsx)("th",{className:O,children:"Sum"}),(0,m.jsx)("th",{className:E})]})}),(0,m.jsxs)("tbody",{className:Z,children:[v.map((function(e){return(0,m.jsxs)("tr",{className:W,children:[(0,m.jsx)("td",{className:P,children:e.date}),(0,m.jsx)("td",{className:I,children:e.description}),(0,m.jsx)("td",{className:P,children:S(e.category)}),(0,m.jsx)("td",{style:{color:"incomes"===_?"#60C470":"#FE4566"},className:R,children:"incomes"===_?"".concat(e.amount," UAH"):"- ".concat(e.amount," UAH")}),(0,m.jsx)("td",{className:P,children:(0,m.jsx)("button",{type:"button",onClick:function(){return T(e._id)},className:K,children:(0,m.jsx)(z,{className:U})})})]},e._id)})),(0,m.jsxs)("tr",{className:W,style:{height:38},children:[(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:I}),(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{})]}),(0,m.jsxs)("tr",{className:W,style:{height:38},children:[(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:I}),(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{})]}),(0,m.jsxs)("tr",{className:W,style:{height:38},children:[(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:I}),(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{})]}),(0,m.jsxs)("tr",{className:W,style:{height:38},children:[(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:I}),(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{})]}),(0,m.jsxs)("tr",{className:W,style:{height:38},children:[(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:I}),(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{})]}),(0,m.jsxs)("tr",{className:W,style:{height:38},children:[(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:I}),(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{})]}),(0,m.jsxs)("tr",{className:W,style:{height:38},children:[(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:I}),(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{})]}),(0,m.jsxs)("tr",{className:W,style:{height:38},children:[(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:I}),(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{})]}),(0,m.jsxs)("tr",{className:W,style:{height:38},children:[(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:I}),(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{})]}),(0,m.jsxs)("tr",{className:W,style:{height:38},children:[(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:I}),(0,m.jsx)("td",{className:P}),(0,m.jsx)("td",{className:R}),(0,m.jsx)("td",{})]})]})]})}),l&&(0,m.jsx)(Y.Z,{closeModal:T,onSubmit:function(){p((0,L.Ks)(u)),p((0,y.J7)(u))},title:"Are you sure?"})]})},V="TransactionListMobile_mobileContainer__uE4Bu",$="TransactionListMobile_mobileList__-SSwa",ee="TransactionListMobile_mobileItem__3QJKX",se="TransactionListMobile_categoryContainer__8jRZM",ae="TransactionListMobile_categoryDescription__X4to-",te="TransactionListMobile_categoryWrapper__BPgQH",ne="TransactionListMobile_transactionDate__RSslA",re="TransactionListMobile_ammountWrapper__XEOsv",ce="TransactionListMobile_transactionAmount__jQPoP",le="TransactionListMobile_button__gJFpl",ie="TransactionListMobile_icon__DyRIm",oe=function(e){var s,a=e.selectedDate,r=(0,c.useState)(!1),l=(0,t.Z)(r,2),i=l[0],o=l[1],d=(0,c.useState)(null),u=(0,t.Z)(d,2),x=u[0],_=u[1],h=(0,n.useMediaQuery)({maxWidth:768}),b=(0,j.v9)(N.d6),p=(0,j.v9)(N.nH),f=(0,j.v9)(N.Dt),v=(0,j.I0)(),T=(s=a,(0,w.default)(Date.parse(s),"yyyy-MM-dd")),g="incomes"===b?p.filter((function(e){return e.date===T})):f.filter((function(e){return e.date===T})),C=function(e){_(e),o((function(e){return!e}))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:V,children:h&&(0,m.jsx)("ul",{className:$,children:g.map((function(e){return(0,m.jsxs)("li",{className:ee,children:[(0,m.jsxs)("div",{className:se,children:[(0,m.jsx)("p",{className:ae,children:e.description}),(0,m.jsxs)("div",{className:te,children:[(0,m.jsx)("span",{className:ne,children:e.date}),(0,m.jsx)("span",{children:e.category})]})]}),(0,m.jsxs)("div",{className:re,children:[(0,m.jsx)("p",{className:ce,style:{color:"incomes"===b?"#60C470":"#FE4566"},children:"incomes"===b?"".concat(e.amount," UAH"):"- ".concat(e.amount," UAH")}),(0,m.jsx)("button",{onClick:function(){return C(e._id)},className:le,children:(0,m.jsx)(z,{className:ie})})]})]},e._id)}))})}),i&&(0,m.jsx)(Y.Z,{closeModal:C,onSubmit:function(){v((0,L.Ks)(x)),v((0,y.J7)(x))},title:"Are you sure?"})]})},me=function(e){var s=e.selectedDate,a=(0,n.useMediaQuery)({maxWidth:767});return(0,m.jsx)("section",{className:g,children:a?(0,m.jsx)(oe,{selectedDate:s}):(0,m.jsxs)("div",{className:T,children:[(0,m.jsx)(G,{selectedDate:s}),(0,m.jsx)(M,{})]})})},de="TransactionForm_mobileForm__hPZ8R",ue="TransactionForm_form__fydIk",xe="TransactionForm_btn_container__PLLa0",_e="TransactionForm_input__hcPPg",he="TransactionForm_select__FnciQ",je="TransactionForm_input_calc__PnHCG",Ne="TransactionForm_btn_input__T6iv1",ye="TransactionForm_btn_clear__V56ge",be=a(8813),pe=function(e){var s=e.selectedDate,a=(0,j.v9)(N.d6),t=(0,j.v9)(N.AN),n=(0,j.v9)(N.JY),r=(0,j.I0)(),c=function(e){e.preventDefault();var t=e.target.elements.amount.value;console.log(t);var n=e.target.elements.description.value,c=function(e){switch(e.trim()){case"Products":return"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b";case"Alcohol":return"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c";case"Entertainment":return"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f";case"Health":return"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435";case"Transport":return"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442";case"Housing":return"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430";case"Technics":return"\u0422\u0435\u0445\u043d\u0438\u043a\u0430";case"Communal and communication":return"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c";case"Sport and hobby":return"\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438";case"Education":return"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435";case"Other":return"\u041f\u0440\u043e\u0447\u0435\u0435";case"Salary":return"\u0417/\u041f";case"Additional income":return"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434"}}(e.target.elements.categories.value),l=function(e){return(0,w.default)(Date.parse(e),"yyyy-MM-dd")}(s),i={description:n,amount:Number(t),date:l,category:c};console.log("payload",i),r("expenses"===a?(0,L.ne)(i):(0,L.F8)(i))};return(0,m.jsx)("div",{className:de,children:(0,m.jsxs)("form",{onSubmit:function(e){return c(e)},className:ue,children:[(0,m.jsx)("input",{type:"text",name:"description",placeholder:"Product description",className:_e}),(0,m.jsx)("select",{name:"categories",className:he,children:"expenses"===a?t.map((function(e){return(0,m.jsx)("option",{value:S(e),id:"select-option",children:S(e)},(0,be.x0)())})):n.map((function(e){return(0,m.jsx)("option",{value:S(e),id:"select-option",children:S(e)},(0,be.x0)())}))}),(0,m.jsx)("input",{type:"number",name:"amount",placeholder:"0.00",className:je}),(0,m.jsxs)("div",{className:xe,children:[(0,m.jsx)("button",{type:"submit",className:Ne,children:"Input"}),(0,m.jsx)("button",{type:"reset",className:ye,children:"Clear"})]})]})})},fe=a(9513),ve=a.n(fe),Te=(a(8639),a(736)),ge=function(e){var s=e.selectedDate,a=e.setSelectedDate,t=(0,c.forwardRef)((function(e,s){var a=e.value,t=e.onClick,n=e.onChange;return(0,m.jsx)("input",{value:a,className:"input",onClick:t,onChange:n,ref:s,onKeyDown:function(e){e.preventDefault()}})}));return(0,m.jsx)("div",{className:"container",children:(0,m.jsx)(ve(),{className:"datepicker",dateFormat:"dd.MM.yyyy",selected:s,onChange:function(e){a(e)},locale:Te.Z,maxDate:new Date,calendarClassName:"calendar",customInput:(0,m.jsx)(t,{})})})},Ce=a(3548),De="Home_container__qRlyu",Me="Home_mobWrap__mwq3l",Le="Home_tab_deskWrap__xmUBC",we="Home_form_wrap__NjNx+",Se="Home_open_modal__RNyVW",Fe=a(4164),ke=a(3211),He="MobileTransactionModal_backdrop__KQwBV",Ae="MobileTransactionModal_modalWindow__fCYbh",Ee="MobileTransactionModal_button__USDS3",Be=function(e){var s=e.onClose,a=e.selectedDate,t=document.querySelector("#modal-root"),n=function(e){"Escape"===e.code&&s()};return(0,c.useEffect)((function(){return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}})),(0,Fe.createPortal)((0,m.jsx)("div",{onClick:function(e){e.currentTarget===e.target&&s()},className:He,children:(0,m.jsxs)("div",{className:Ae,children:[(0,m.jsx)("button",{onClick:s,className:Ee,children:(0,m.jsx)("img",{src:ke.Z,width:"12",alt:"closeicon"})}),(0,m.jsx)(pe,{selectedDate:a})]})}),t)},Oe=function(){var e=(0,c.useState)(!1),s=(0,t.Z)(e,2),a=s[0],r=s[1],l=(0,n.useMediaQuery)({maxWidth:767}),i=(0,c.useState)(new Date),o=(0,t.Z)(i,2),d=o[0],u=o[1],x=(0,j.I0)(),_=(0,j.v9)(N.d6);console.log(_),(0,c.useEffect)((function(){x((0,Ce.p)()),x((0,Ce.o)()),x((0,L.f2)()),x((0,L.nu)())}),[x]);var h=function(){r((function(e){return!e}))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{}),(0,m.jsx)("div",{className:De,children:l?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:Me,children:[(0,m.jsx)(ge,{selectedDate:d,setSelectedDate:u}),(0,m.jsx)("button",{type:"button",className:Se,onClick:h,children:"Add transaction"}),(0,m.jsx)(me,{selectedDate:d})]}),a&&(0,m.jsx)(Be,{selectedDate:d,closeModal:h,onClose:h})]}):(0,m.jsxs)("div",{className:Le,children:[(0,m.jsxs)("div",{className:we,children:[(0,m.jsx)(ge,{selectedDate:d,setSelectedDate:u}),(0,m.jsx)(pe,{selectedDate:d})]}),(0,m.jsx)(me,{selectedDate:d})]})})]})}},1941:function(e,s,a){a.d(s,{AN:function(){return t},Dt:function(){return l},JY:function(){return n},Lm:function(){return c},Ne:function(){return m},d6:function(){return o},nH:function(){return r},w4:function(){return i}});var t=function(e){return e.transactions.expensesCategories},n=function(e){return e.transactions.incomesCategories},r=function(e){return e.transactions.incomes},c=function(e){return e.transactions.incomesStats},l=function(e){return e.transactions.expenses},i=function(e){return e.transactions.expensesStats},o=function(e){return e.transactions.currentTransactionType},m=function(e){return e.transactions.newBalance}}}]);
//# sourceMappingURL=808.4e050a01.chunk.js.map