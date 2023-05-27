"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[592],{1309:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(9439),r=t(2791),s=t(9434),c={modalDiv:"BalanceModal_modalDiv__EwDTa",largeText:"BalanceModal_largeText__JMYgr",littleText:"BalanceModal_littleText__gggvz"},i=t(184),o=function(){return(0,i.jsx)("div",{className:c.fixedModal,children:(0,i.jsxs)("div",{className:c.modalDiv,children:[(0,i.jsx)("p",{className:c.largeText,children:"Hello! To get started, enter the current balance of your account!"}),(0,i.jsx)("p",{className:c.littleText,children:"You can't spend money until you have it :)"})]})})},l="Balance_balance_form__UvNxu",u="Balance_balance_title__1fLzW",d="Balance_balance_submit__bdTky",m="Balance_balance_value__15Q2X",_="Balance_balance_value_span__vYE5M",h=t(5822),x=function(e){var n=e.balanceToUpdate,t=(0,s.I0)();return(0,i.jsx)("button",{type:"button",className:d,onClick:function(){var e=Number(n);console.log(e),e>0?(t((0,h.Hw)({newBalance:e})),setTimeout((function(){t((0,h.nX)())}),200)):alert("The balance must be positive")},children:"Confirm"})},p=t(4289),f=function(){var e=(0,s.v9)(p.QM),n=(0,r.useState)("".concat(e.toFixed(2)," UAH")),t=(0,a.Z)(n,2),c=t[0],d=t[1];return(0,i.jsxs)("div",{className:l,children:[(0,i.jsx)("h2",{className:u,children:"Balance:"}),(0,i.jsx)("span",{className:_,children:(0,i.jsx)("input",{className:m,name:"balance",title:"Field must contain only numbers",type:"number",value:c,onChange:function(e){d(e.target.value)},disabled:0!==e,placeholder:0===e?"00.00 UAH":"".concat(e.toFixed(2)," UAH")})}),!e&&(0,i.jsx)(x,{balanceToUpdate:c}),!e&&(0,i.jsx)(o,{})]})}},9209:function(e,n,t){t.r(n),t.d(n,{default:function(){return ae}});var a=t(9439),r=t(1309),s=t(2791);var c=t.p+"static/media/diagram.68e03afe713740f7b7e7c5db20717faa.svg",i="ReportsLink_reports__VjAVa",o=t(184),l=function(){return(0,o.jsxs)("div",{to:"/report",className:i,children:["Reports",(0,o.jsx)("img",{src:c,alt:"Diagram"})]})},u=t(1087),d="TransactionsNav_container__q5sT-",m="TransactionsNav_one__m4Ya-",_="TransactionsNav_two__tQ7mV",h=t(9434),x=t(2088),p=function(){var e=(0,h.I0)();return(0,o.jsxs)("div",{className:d,children:[(0,o.jsx)("button",{onClick:function(){return e((0,x.qi)("expenses"))},type:"button",className:m,children:"Expenses"}),(0,o.jsx)("button",{onClick:function(){return e((0,x.qi)("incomes"))},type:"button",className:_,children:"Income"})]})},f="HomeBar_bar__Sk58r",j=function(){return(0,o.jsxs)("section",{children:[(0,o.jsxs)("div",{className:f,children:[(0,o.jsx)(u.OL,{to:"/reports",children:(0,o.jsx)(l,{})}),(0,o.jsx)(r.Z,{})]}),(0,o.jsx)(p,{})]})},v={summaryWrapper:"TransactionsSummary_summaryWrapper__sQ0lX",summaryTable:"TransactionsSummary_summaryTable__rDROt",summaryTableHeading:"TransactionsSummary_summaryTableHeading__SIk7N",summaryTableCell:"TransactionsSummary_summaryTableCell__JvlXi"},b=function(e){switch(e){case"\u042f\u043d\u0432\u0430\u0440\u044c":return"January";case"\u0424\u0435\u0432\u0440\u0430\u043b\u044c":return"February";case"\u041c\u0430\u0440\u0442":return"March";case"\u0410\u043f\u0440\u0435\u043b\u044c":return"April";case"\u041c\u0430\u0439":return"May";case"\u0418\u044e\u043d\u044c":return"June";case"\u0418\u044e\u043b\u044c":return"July";case"\u0410\u0432\u0433\u0443\u0441\u0442":return"August";case"\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c":return"September";case"\u041e\u043a\u0442\u044f\u0431\u0440\u044c":return"October";case"\u041d\u043e\u044f\u0431\u0440\u044c":return"November";case"\u0414\u0435\u043a\u0430\u0431\u0440\u044c":return"December"}},y=function(e){return e.transactions.expensesCategories},T=function(e){return e.transactions.incomesCategories},g=function(e){return e.transactions.incomes},N=function(e){return e.transactions.incomesStats},D=function(e){return e.transactions.expenses},M=function(e){return e.transactions.expensesStats},C=function(e){return e.transactions.currentTransactionType},S=function(){var e=(0,h.v9)(M),n=(0,h.v9)(N),t=(0,h.v9)(C);console.log(e),console.log(n);var r=(0,s.useState)(n),c=(0,a.Z)(r,2),i=c[0],l=c[1],u=(0,s.useState)(e),d=(0,a.Z)(u,2),m=d[0],_=d[1];(0,s.useEffect)((function(){l(n)}),[n]),(0,s.useEffect)((function(){_(e)}),[e]),console.log(n);var x,p,f=[];"incomes"===t?f=null!==(x=Object.entries(i).slice(0,(new Date).getMonth()+1).reverse())&&void 0!==x?x:[]:f=null!==(p=Object.entries(m).slice(0,(new Date).getMonth()+1).reverse())&&void 0!==p?p:[];return(0,o.jsxs)(o.Fragment,{children:["(",(0,o.jsx)("div",{className:v.summaryWrapper,children:(0,o.jsxs)("table",{className:v.summaryTable,children:[(0,o.jsx)("thead",{className:v.summaryHead,children:(0,o.jsx)("tr",{children:(0,o.jsx)("th",{colSpan:"2",className:v.summaryTableHeading,children:"Summary"})})}),(0,o.jsx)("tbody",{children:f.map((function(e){return"N/A"===e[1]&&(e[1]=0),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{className:v.summaryTableCell,children:b(e[0])}),(0,o.jsx)("td",{className:v.summaryTableCell,children:e[1]})]},"".concat(e[0]).concat(e[1]))}))})]})}),")"]})},w=t(7614),H=t(1951),k=t(5822),A=function(e){switch(e.trim()){case"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b":return"Products";case"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c":return"Alcohol";case"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f":return"Entertainment";case"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435":return"Health";case"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442":return"Transport";case"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430":return"Housing";case"\u0422\u0435\u0445\u043d\u0438\u043a\u0430":return"Technics";case"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c":return"Communal and communication";case"\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438":return"Sport and hobby";case"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435":return"Education";case"\u041f\u0440\u043e\u0447\u0435\u0435":return"Other";case"\u0417/\u041f":return"Salary";case"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434":return"Additional income"}},B=function(e){var n,t=e.selectedDate,a=(0,h.v9)(C),r=(0,h.v9)(g),s=(0,h.v9)(D),c=(0,h.I0)(),i=(n=t,(0,H.default)(Date.parse(n),"yyyy-MM-dd")),l="incomes"===a?r.filter((function(e){return e.date===i})):s.filter((function(e){return e.date===i})),u=function(e){c((0,w.Ks)(e)),c((0,x.J7)(e)),setTimeout((function(){c((0,k.nX)())}),200)};return(0,o.jsx)("div",{children:(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Date"}),(0,o.jsx)("th",{children:"Description"}),(0,o.jsx)("th",{children:"Category"}),(0,o.jsx)("th",{children:"Sum"}),(0,o.jsx)("th",{children:" "})]})}),(0,o.jsx)("tbody",{children:l.map((function(e){return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:e.date}),(0,o.jsx)("td",{children:e.description}),(0,o.jsx)("td",{children:A(e.category)}),(0,o.jsx)("td",{children:"".concat(e.amount," UAH")}),(0,o.jsx)("td",{children:(0,o.jsx)("button",{type:"button",onClick:function(){return u(e._id)},children:"delete"})})]},e._id)}))})]})})},F=t(4805),L="TransactionListMobile_mobileContainer__uE4Bu",E="TransactionListMobile_mobileList__-SSwa",I="TransactionListMobile_mobileItem__3QJKX",X="TransactionListMobile_categoryContainer__8jRZM",P="TransactionListMobile_categoryDescription__X4to-",Q="TransactionListMobile_categoryWrapper__BPgQH",J="TransactionListMobile_transactionDate__RSslA",O="TransactionListMobile_ammountWrapper__XEOsv",U="TransactionListMobile_transactionAmount__jQPoP",Z=function(e){var n,t=e.selectedDate,a=(0,F.useMediaQuery)({maxWidth:768}),r=(0,h.v9)(C),s=(0,h.v9)(g),c=(0,h.v9)(D),i=(0,h.I0)(),l=(n=t,(0,H.default)(Date.parse(n),"yyyy-MM-dd")),u="incomes"===r?s.filter((function(e){return e.date===l})):c.filter((function(e){return e.date===l}));return(0,o.jsx)("div",{className:L,children:a&&(0,o.jsx)("ul",{className:E,children:u.map((function(e){return(0,o.jsxs)("li",{className:I,children:[(0,o.jsxs)("div",{className:X,children:[(0,o.jsx)("p",{className:P,children:e.description}),(0,o.jsxs)("div",{className:Q,children:[(0,o.jsx)("span",{className:J,children:e.date}),(0,o.jsx)("span",{children:e.category})]})]}),(0,o.jsxs)("div",{className:O,children:[(0,o.jsxs)("p",{className:U,children:[e.amount," ","UAH"]}),(0,o.jsx)("button",{onClick:function(){return n=e._id,i((0,w.Ks)(n)),i((0,x.J7)(n)),void setTimeout((function(){i((0,k.nX)())}),200);var n},children:"Delete"})]})]},e._id)}))})})},W=function(e){var n=e.selectedDate;return(0,o.jsxs)("section",{children:[(0,o.jsx)(B,{selectedDate:n}),(0,o.jsx)(S,{}),(0,o.jsx)(Z,{selectedDate:n})]})},R="TransactionForm_input__hcPPg",K="TransactionForm_select__FnciQ",V="TransactionForm_input_calc__PnHCG",Y="TransactionForm_btn_input__T6iv1",q="TransactionForm_btn_clear__V56ge",z=function(e){var n=e.selectedDate,t=(0,h.v9)(C),a=(0,h.v9)(y),r=(0,h.v9)(T),s=(0,h.I0)(),c=function(e){e.preventDefault();var a=e.target.elements.amount.value,r=e.target.elements.description.value,c=function(e){switch(e.trim()){case"Products":return"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b";case"Alcohol":return"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c";case"Entertainment":return"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f";case"Health":return"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435";case"Transport":return"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442";case"Housing":return"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430";case"Technics":return"\u0422\u0435\u0445\u043d\u0438\u043a\u0430";case"Communal and communication":return"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c";case"Sport and hobby":return"\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438";case"Education":return"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435";case"Other":return"\u041f\u0440\u043e\u0447\u0435\u0435";case"Salary":return"\u0417/\u041f";case"Additional income":return"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434"}}(e.target.elements.categories.value),i=function(e){return(0,H.default)(Date.parse(e),"yyyy-MM-dd")}(n),o={description:r,amount:Number(a),date:i,category:c};console.log("payload",o),"expenses"===t?(s((0,w.ne)(o)),setTimeout((function(){s((0,k.nX)())}),200)):(s((0,w.F8)(o)),setTimeout((function(){s((0,k.nX)())}),200))};return(0,o.jsx)("div",{children:(0,o.jsxs)("form",{onSubmit:function(e){return c(e)},children:[(0,o.jsx)("input",{type:"text",name:"description",placeholder:"Product description",className:R}),(0,o.jsx)("select",{name:"categories",className:K,children:"expenses"===t?a.map((function(e){return(0,o.jsx)("option",{value:A(e),children:A(e)})})):r.map((function(e){return(0,o.jsx)("option",{value:A(e),children:A(e)})}))}),(0,o.jsx)("input",{type:"number",name:"amount",placeholder:"0.00",className:V}),(0,o.jsx)("button",{type:"submit",className:Y,children:"Input"}),(0,o.jsx)("button",{type:"reset",className:q,children:"Clear"})]})})},G=t(9513),$=t.n(G),ee=(t(8639),t(736)),ne=function(e){var n=e.selectedDate,t=e.setSelectedDate,a=(0,s.forwardRef)((function(e,n){var t=e.value,a=e.onClick,r=e.onChange;return(0,o.jsx)("input",{value:t,className:"icon-input",onClick:a,onChange:r,ref:n,onKeyDown:function(e){e.preventDefault()}})}));return(0,o.jsx)("div",{className:"wrapper-container",children:(0,o.jsx)($(),{dateFormat:"dd.MM.yyyy",selected:n,onChange:function(e){t(e)},locale:ee.Z,maxDate:new Date,customInput:(0,o.jsx)(a,{})})})},te=t(3548),ae=function(){var e=(0,s.useState)(new Date),n=(0,a.Z)(e,2),t=n[0],r=n[1],c=(0,h.I0)(),i=(0,h.v9)(C);return console.log(i),(0,s.useEffect)((function(){c((0,te.p)()),c((0,te.o)()),c((0,w.f2)()),c((0,w.nu)())}),[c]),(0,o.jsxs)("section",{children:[(0,o.jsx)(j,{}),(0,o.jsx)(ne,{selectedDate:t,setSelectedDate:r}),(0,o.jsx)(z,{selectedDate:t}),(0,o.jsx)(W,{selectedDate:t})]})}}}]);
//# sourceMappingURL=592.0b229aa6.chunk.js.map