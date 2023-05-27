"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[994],{1309:function(e,s,a){a.d(s,{Z:function(){return y}});var t=a(9439),n=a(2791),r=a(9434),c={modalDiv:"BalanceModal_modalDiv__EwDTa",largeText:"BalanceModal_largeText__JMYgr",littleText:"BalanceModal_littleText__gggvz"},l=a(184),i=function(){return(0,l.jsx)("div",{className:c.fixedModal,children:(0,l.jsxs)("div",{className:c.modalDiv,children:[(0,l.jsx)("p",{className:c.largeText,children:"Hello! To get started, enter the current balance of your account!"}),(0,l.jsx)("p",{className:c.littleText,children:"You can't spend money until you have it :)"})]})})},o="Balance_balance_form__UvNxu",m="Balance_balance_title__1fLzW",u="Balance_balance_submit__bdTky",d="Balance_balance_value__15Q2X",x="Balance_balance_value_span__vYE5M",h=a(5822),j=function(e){var s=e.balanceToUpdate,a=(0,r.I0)();return(0,l.jsx)("button",{type:"button",className:u,onClick:function(){var e=Number(s);console.log(e),e>0?(a((0,h.Hw)({newBalance:e})),setTimeout((function(){a((0,h.nX)())}),200)):alert("The balance must be positive")},children:"Confirm"})},_=a(4289),y=function(){var e=(0,r.v9)(_.QM),s=(0,n.useState)("".concat(e.toFixed(2)," UAH")),a=(0,t.Z)(s,2),c=a[0],u=a[1];return(0,l.jsxs)("div",{className:o,children:[(0,l.jsx)("h2",{className:m,children:"Balance:"}),(0,l.jsx)("span",{className:x,children:(0,l.jsx)("input",{className:d,name:"balance",title:"Field must contain only numbers",type:"number",value:c,onChange:function(e){u(e.target.value)},disabled:0!==e,placeholder:0===e?"00.00 UAH":"".concat(e.toFixed(2)," UAH")})}),!e&&(0,l.jsx)(j,{balanceToUpdate:c}),!e&&(0,l.jsx)(i,{})]})}},166:function(e,s,a){a.r(s),a.d(s,{default:function(){return Te}});var t=a(9439),n=a(1309),r=a(2791);var c,l=a.p+"static/media/diagram.68e03afe713740f7b7e7c5db20717faa.svg",i="ReportsLink_reports__VjAVa",o=a(184),m=function(){return(0,o.jsxs)("div",{to:"/report",className:i,children:["Reports",(0,o.jsx)("img",{src:l,alt:"Diagram"})]})},u=a(1087),d="TransactionsNav_container__q5sT-",x="TransactionsNav_one__m4Ya-",h="TransactionsNav_two__tQ7mV",j=a(9434),_=a(2088),y=function(){var e=(0,j.I0)();return(0,o.jsxs)("div",{className:d,children:[(0,o.jsx)("button",{onClick:function(){return e((0,_.qi)("expenses"))},type:"button",className:x,children:"Expenses"}),(0,o.jsx)("button",{onClick:function(){return e((0,_.qi)("incomes"))},type:"button",className:h,children:"Income"})]})},N="HomeBar_bar__Sk58r",b=function(){return(0,o.jsxs)("section",{children:[(0,o.jsxs)("div",{className:N,children:[(0,o.jsx)(u.OL,{to:"/reports",children:(0,o.jsx)(m,{})}),(0,o.jsx)(n.Z,{})]}),(0,o.jsx)(y,{})]})},p={summaryWrapper:"TransactionsSummary_summaryWrapper__Qbqbu",summaryBody:"TransactionsSummary_summaryBody__8XgKX",summaryTable:"TransactionsSummary_summaryTable__F5XwZ",summaryTableHeading:"TransactionsSummary_summaryTableHeading__6AAW5",summaryLine:"TransactionsSummary_summaryLine__U8dPH",summaryTableCell:"TransactionsSummary_summaryTableCell__-USY7"},f=function(e){switch(e){case"\u042f\u043d\u0432\u0430\u0440\u044c":return"January";case"\u0424\u0435\u0432\u0440\u0430\u043b\u044c":return"February";case"\u041c\u0430\u0440\u0442":return"March";case"\u0410\u043f\u0440\u0435\u043b\u044c":return"April";case"\u041c\u0430\u0439":return"May";case"\u0418\u044e\u043d\u044c":return"June";case"\u0418\u044e\u043b\u044c":return"July";case"\u0410\u0432\u0433\u0443\u0441\u0442":return"August";case"\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c":return"September";case"\u041e\u043a\u0442\u044f\u0431\u0440\u044c":return"October";case"\u041d\u043e\u044f\u0431\u0440\u044c":return"November";case"\u0414\u0435\u043a\u0430\u0431\u0440\u044c":return"December"}},v=function(e){return e.transactions.expensesCategories},T=function(e){return e.transactions.incomesCategories},g=function(e){return e.transactions.incomes},C=function(e){return e.transactions.incomesStats},D=function(e){return e.transactions.expenses},L=function(e){return e.transactions.expensesStats},M=function(e){return e.transactions.currentTransactionType},S=function(){var e=(0,j.v9)(L),s=(0,j.v9)(C),a=(0,j.v9)(M);console.log(e),console.log(s);var n=(0,r.useState)(s),c=(0,t.Z)(n,2),l=c[0],i=c[1],m=(0,r.useState)(e),u=(0,t.Z)(m,2),d=u[0],x=u[1];(0,r.useEffect)((function(){i(s)}),[s]),(0,r.useEffect)((function(){x(e)}),[e]),console.log(s);var h,_,y=[];"incomes"===a?y=null!==(h=Object.entries(l).slice(0,(new Date).getMonth()+1).reverse())&&void 0!==h?h:[]:y=null!==(_=Object.entries(d).slice(0,(new Date).getMonth()+1).reverse())&&void 0!==_?_:[];return(0,o.jsx)("div",{className:p.summaryWrapper,children:(0,o.jsxs)("table",{className:p.summaryTable,children:[(0,o.jsx)("thead",{className:p.summaryHead,children:(0,o.jsx)("tr",{children:(0,o.jsx)("th",{colSpan:"2",className:p.summaryTableHeading,children:"Summary"})})}),(0,o.jsxs)("tbody",{className:p.summaryBody,children:[y.map((function(e){return"N/A"===e[1]&&(e[1]=0),(0,o.jsxs)("tr",{className:p.summaryLine,children:[(0,o.jsx)("td",{className:p.summaryTableCell,children:f(e[0])}),(0,o.jsx)("td",{className:p.summaryTableCell,children:e[1]})]},"".concat(e[0]).concat(e[1]))})),(0,o.jsxs)("tr",{style:{height:38},className:p.summaryLine,children:[(0,o.jsx)("td",{className:p.summaryTableCell}),(0,o.jsx)("td",{className:p.summaryTableCell})]}),(0,o.jsxs)("tr",{style:{height:38},className:p.summaryLine,children:[(0,o.jsx)("td",{className:p.summaryTableCell}),(0,o.jsx)("td",{className:p.summaryTableCell})]}),(0,o.jsxs)("tr",{style:{height:38},className:p.summaryLine,children:[(0,o.jsx)("td",{className:p.summaryTableCell}),(0,o.jsx)("td",{className:p.summaryTableCell})]}),(0,o.jsxs)("tr",{style:{height:38},className:p.summaryLine,children:[(0,o.jsx)("td",{className:p.summaryTableCell}),(0,o.jsx)("td",{className:p.summaryTableCell})]}),(0,o.jsxs)("tr",{style:{height:38},className:p.summaryLine,children:[(0,o.jsx)("td",{className:p.summaryTableCell}),(0,o.jsx)("td",{className:p.summaryTableCell})]}),(0,o.jsxs)("tr",{style:{height:38},className:p.summaryLine,children:[(0,o.jsx)("td",{className:p.summaryTableCell}),(0,o.jsx)("td",{className:p.summaryTableCell})]})]})]})})},w=a(7614),H=a(1951),O=a(5822),A=function(e){switch(e.trim()){case"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b":return"Products";case"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c":return"Alcohol";case"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f":return"Entertainment";case"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435":return"Health";case"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442":return"Transport";case"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430":return"Housing";case"\u0422\u0435\u0445\u043d\u0438\u043a\u0430":return"Technics";case"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c":return"Communal and communication";case"\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438":return"Sport and hobby";case"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435":return"Education";case"\u041f\u0440\u043e\u0447\u0435\u0435":return"Other";case"\u0417/\u041f":return"Salary";case"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434":return"Additional income"}},E="TransactionsList_container__Xc7iz",k="TransactionsList_table__K7Azm",B="TransactionsList_header__i5FZX",X="TransactionsList_header_line__S+Dl8",F="TransactionsList_header_text__uW4rT",I="TransactionsList_header_text_third__91N9-",P="TransactionsList_header_text_fourth__sGl+K",W="TransactionsList_body__WGrty",U="TransactionsList_body_line__Djhdd",Z="TransactionsList_body_item__8oLYC",z="TransactionsList_body_item_second__RDRWX",Q="TransactionsList_body_item_red__DtqXq",R="TransactionsList_icon__8SDLI",J="TransactionsList_button__Ysrc7",K=["title","titleId"];function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},Y.apply(this,arguments)}function q(e,s){if(null==e)return{};var a,t,n=function(e,s){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],s.indexOf(a)>=0||(n[a]=e[a]);return n}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function V(e,s){var a=e.title,t=e.titleId,n=q(e,K);return r.createElement("svg",Y({xmlns:"http://www.w3.org/2000/svg",width:14,height:18,viewBox:"0 0 32 32",ref:s,"aria-labelledby":t},n),void 0===a?r.createElement("title",{id:t},"trashcan"):a?r.createElement("title",{id:t},a):null,c||(c=r.createElement("path",{d:"M8 26c0 1.656 1.343 3 3 3h10c1.656 0 3-1.344 3-3l2-16h-20l2 16zM19 13h2v13h-2v-13zM15 13h2v13h-2v-13zM11 13h2v13h-2v-13zM25.5 6h-6.5c0 0-0.448-2-1-2h-4c-0.553 0-1 2-1 2h-6.5c-0.829 0-1.5 0.671-1.5 1.5s0 1.5 0 1.5h22c0 0 0-0.671 0-1.5s-0.672-1.5-1.5-1.5z"})))}var G=r.forwardRef(V),$=(a.p,function(e){var s,a=e.selectedDate,t=(0,j.v9)(M),n=(0,j.v9)(g),r=(0,j.v9)(D),c=(0,j.I0)(),l=(s=a,(0,H.default)(Date.parse(s),"yyyy-MM-dd")),i="incomes"===t?n.filter((function(e){return e.date===l})):r.filter((function(e){return e.date===l}));return(0,o.jsx)("div",{className:E,children:(0,o.jsxs)("table",{className:k,children:[(0,o.jsx)("thead",{className:B,children:(0,o.jsxs)("tr",{className:X,children:[(0,o.jsx)("th",{className:F,children:"Date"}),(0,o.jsx)("th",{className:F,children:"Description"}),(0,o.jsx)("th",{className:I,children:"Category"}),(0,o.jsx)("th",{className:P,children:"Sum"}),(0,o.jsx)("th",{className:F})]})}),(0,o.jsxs)("tbody",{className:W,children:[i.map((function(e){return(0,o.jsxs)("tr",{className:U,children:[(0,o.jsx)("td",{className:Z,children:e.date}),(0,o.jsx)("td",{className:z,children:e.description}),(0,o.jsx)("td",{className:Z,children:A(e.category)}),(0,o.jsx)("td",{style:{color:"incomes"===t?"#60C470":"#FE4566"},className:Q,children:"".concat(e.amount," UAH")}),(0,o.jsx)("td",{className:Z,children:(0,o.jsx)("button",{type:"button",onClick:function(){return s=e._id,c((0,w.Ks)(s)),c((0,_.J7)(s)),void setTimeout((function(){c((0,O.nX)())}),200);var s},className:J,children:(0,o.jsx)(G,{className:R})})})]},e._id)})),(0,o.jsxs)("tr",{className:U,style:{height:38},children:[(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:z}),(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:Q}),(0,o.jsx)("td",{})]}),(0,o.jsxs)("tr",{className:U,style:{height:38},children:[(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:z}),(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:Q}),(0,o.jsx)("td",{})]}),(0,o.jsxs)("tr",{className:U,style:{height:38},children:[(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:z}),(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:Q}),(0,o.jsx)("td",{})]}),(0,o.jsxs)("tr",{className:U,style:{height:38},children:[(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:z}),(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:Q}),(0,o.jsx)("td",{})]}),(0,o.jsxs)("tr",{className:U,style:{height:38},children:[(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:z}),(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:Q}),(0,o.jsx)("td",{})]}),(0,o.jsxs)("tr",{className:U,style:{height:38},children:[(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:z}),(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:Q}),(0,o.jsx)("td",{})]}),(0,o.jsxs)("tr",{className:U,style:{height:38},children:[(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:z}),(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:Q}),(0,o.jsx)("td",{})]}),(0,o.jsxs)("tr",{className:U,style:{height:38},children:[(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:z}),(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:Q}),(0,o.jsx)("td",{})]}),(0,o.jsxs)("tr",{className:U,style:{height:38},children:[(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:z}),(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:Q}),(0,o.jsx)("td",{})]}),(0,o.jsxs)("tr",{className:U,style:{height:38},children:[(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:z}),(0,o.jsx)("td",{className:Z}),(0,o.jsx)("td",{className:Q}),(0,o.jsx)("td",{})]})]})]})})}),ee=a(4805),se="TransactionListMobile_mobileContainer__uE4Bu",ae="TransactionListMobile_mobileList__-SSwa",te="TransactionListMobile_mobileItem__3QJKX",ne="TransactionListMobile_categoryContainer__8jRZM",re="TransactionListMobile_categoryDescription__X4to-",ce="TransactionListMobile_categoryWrapper__BPgQH",le="TransactionListMobile_transactionDate__RSslA",ie="TransactionListMobile_ammountWrapper__XEOsv",oe="TransactionListMobile_transactionAmount__jQPoP",me=function(e){var s,a=e.selectedDate,t=(0,ee.useMediaQuery)({maxWidth:768}),n=(0,j.v9)(M),r=(0,j.v9)(g),c=(0,j.v9)(D),l=(0,j.I0)(),i=(s=a,(0,H.default)(Date.parse(s),"yyyy-MM-dd")),m="incomes"===n?r.filter((function(e){return e.date===i})):c.filter((function(e){return e.date===i}));return(0,o.jsx)("div",{className:se,children:t&&(0,o.jsx)("ul",{className:ae,children:m.map((function(e){return(0,o.jsxs)("li",{className:te,children:[(0,o.jsxs)("div",{className:ne,children:[(0,o.jsx)("p",{className:re,children:e.description}),(0,o.jsxs)("div",{className:ce,children:[(0,o.jsx)("span",{className:le,children:e.date}),(0,o.jsx)("span",{children:e.category})]})]}),(0,o.jsxs)("div",{className:ie,children:[(0,o.jsxs)("p",{className:oe,children:[e.amount," ","UAH"]}),(0,o.jsx)("button",{onClick:function(){return s=e._id,l((0,w.Ks)(s)),l((0,_.J7)(s)),void setTimeout((function(){l((0,O.nX)())}),200);var s},children:"Delete"})]})]},e._id)}))})})},ue=function(e){var s=e.selectedDate;return(0,o.jsxs)("section",{children:[(0,o.jsx)($,{selectedDate:s}),(0,o.jsx)(S,{}),(0,o.jsx)(me,{selectedDate:s})]})},de="TransactionForm_input__hcPPg",xe="TransactionForm_select__FnciQ",he="TransactionForm_input_calc__PnHCG",je="TransactionForm_btn_input__T6iv1",_e="TransactionForm_btn_clear__V56ge",ye=function(e){var s=e.selectedDate,a=(0,j.v9)(M),t=(0,j.v9)(v),n=(0,j.v9)(T),r=(0,j.I0)(),c=function(e){e.preventDefault();var t=e.target.elements.amount.value,n=e.target.elements.description.value,c=function(e){switch(e.trim()){case"Products":return"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b";case"Alcohol":return"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c";case"Entertainment":return"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f";case"Health":return"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435";case"Transport":return"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442";case"Housing":return"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430";case"Technics":return"\u0422\u0435\u0445\u043d\u0438\u043a\u0430";case"Communal and communication":return"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c";case"Sport and hobby":return"\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438";case"Education":return"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435";case"Other":return"\u041f\u0440\u043e\u0447\u0435\u0435";case"Salary":return"\u0417/\u041f";case"Additional income":return"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434"}}(e.target.elements.categories.value),l=function(e){return(0,H.default)(Date.parse(e),"yyyy-MM-dd")}(s),i={description:n,amount:Number(t),date:l,category:c};console.log("payload",i),"expenses"===a?(r((0,w.ne)(i)),setTimeout((function(){r((0,O.nX)())}),200)):(r((0,w.F8)(i)),setTimeout((function(){r((0,O.nX)())}),200))};return(0,o.jsx)("div",{children:(0,o.jsxs)("form",{onSubmit:function(e){return c(e)},children:[(0,o.jsx)("input",{type:"text",name:"description",placeholder:"Product description",className:de}),(0,o.jsx)("select",{name:"categories",className:xe,children:"expenses"===a?t.map((function(e){return(0,o.jsx)("option",{value:A(e),id:"select-option",children:A(e)})})):n.map((function(e){return(0,o.jsx)("option",{value:A(e),id:"select-option",children:A(e)})}))}),(0,o.jsx)("input",{type:"number",name:"amount",placeholder:"0.00",className:he}),(0,o.jsx)("button",{type:"submit",className:je,children:"Input"}),(0,o.jsx)("button",{type:"reset",className:_e,children:"Clear"})]})})},Ne=a(9513),be=a.n(Ne),pe=(a(8639),a(736)),fe=function(e){var s=e.selectedDate,a=e.setSelectedDate,t=(0,r.forwardRef)((function(e,s){var a=e.value,t=e.onClick,n=e.onChange;return(0,o.jsx)("input",{value:a,className:"icon-input",onClick:t,onChange:n,ref:s,onKeyDown:function(e){e.preventDefault()}})}));return(0,o.jsx)("div",{className:"wrapper-container",children:(0,o.jsx)(be(),{dateFormat:"dd.MM.yyyy",selected:s,onChange:function(e){a(e)},locale:pe.Z,maxDate:new Date,customInput:(0,o.jsx)(t,{})})})},ve=a(3548),Te=function(){var e=(0,r.useState)(new Date),s=(0,t.Z)(e,2),a=s[0],n=s[1],c=(0,j.I0)(),l=(0,j.v9)(M);return console.log(l),(0,r.useEffect)((function(){c((0,ve.p)()),c((0,ve.o)()),c((0,w.f2)()),c((0,w.nu)())}),[c]),(0,o.jsxs)("section",{children:[(0,o.jsx)(b,{}),(0,o.jsx)(fe,{selectedDate:a,setSelectedDate:n}),(0,o.jsx)(ye,{selectedDate:a}),(0,o.jsx)(ue,{selectedDate:a})]})}}}]);
//# sourceMappingURL=994.3d5f5353.chunk.js.map