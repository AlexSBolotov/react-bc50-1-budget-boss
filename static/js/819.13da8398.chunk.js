"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[819],{1309:function(e,n,t){t.d(n,{Z:function(){return j}});var a=t(9439),s=t(2791),r=t(9434),c={modalDiv:"BalanceModal_modalDiv__EwDTa",largeText:"BalanceModal_largeText__JMYgr",littleText:"BalanceModal_littleText__gggvz"},i=t(184),l=function(){return(0,i.jsx)("div",{className:c.fixedModal,children:(0,i.jsxs)("div",{className:c.modalDiv,children:[(0,i.jsx)("p",{className:c.largeText,children:"Hello! To get started, enter the current balance of your account!"}),(0,i.jsx)("p",{className:c.littleText,children:"You can't spend money until you have it :)"})]})})},o=t(2433),u="Balance_balance_title__1fLzW",d="Balance_balance_submit__bdTky",m="Balance_balance_value__15Q2X",x="Balance_balance_value_span__vYE5M",h="Balance_balance_form__UvNxu",p=function(e){var n=e.input,t=(e.displayStyle,(0,r.I0)());return(0,i.jsx)("button",{type:"button",className:d,onClick:function(){var e=Number(n);e>0?t(o.uP.handleUpdateUserBalance({newBalance:e})):alert("The balance must be positive")},children:"Confirm"})},_=t(4289),j=function(e){var n=e.displayStyle,t=(0,r.v9)(_.QM),c=(0,s.useState)(t),o=(0,a.Z)(c,2),d=o[0],j=o[1];return(0,s.useEffect)((function(){j(t)}),[t]),(0,i.jsxs)("div",{className:h,children:[(0,i.jsx)("h2",{className:u,children:"Balance:"}),(0,i.jsx)("span",{className:x,children:(0,i.jsx)("input",{className:m,name:"balance",pattern:"[0-9, .UAH]*",title:"Field must contain only numbers",type:"number",value:d.toFixed(2),onChange:function(e){j(e.target.value)},placeholder:"00.00 UAH"})}),!t&&(0,i.jsx)(p,{input:d,displayStyle:n}),!t&&(0,i.jsx)(l,{})]})}},3366:function(e,n,t){t.r(n),t.d(n,{default:function(){return ee}});var a=t(9439),s=t(1309),r={reports:"ReportsLink_reports__VjAVa"},c=t(184),i=function(){return(0,c.jsx)("div",{className:r.divToReports,children:(0,c.jsx)("span",{to:"/report",className:r.reports,children:"Reports"})})},l=t(1087),o=t(2791),u="TransactionsNav_container__q5sT-",d="TransactionsNav_one__m4Ya-",m="TransactionsNav_two__tQ7mV",x=t(9434),h=t(2088),p=function(){var e=(0,x.I0)();return(0,c.jsxs)("div",{className:u,children:[(0,c.jsx)("button",{onClick:function(){return e((0,h.qi)("expenses"))},type:"button",className:d,children:"Expenses"}),(0,c.jsx)("button",{onClick:function(){return e((0,h.qi)("incomes"))},type:"button",className:m,children:"Income"})]})},_=function(){return(0,c.jsxs)("section",{children:[(0,c.jsx)(s.Z,{}),(0,c.jsx)(l.OL,{to:"/reports",children:(0,c.jsx)(i,{})}),(0,c.jsx)(p,{})]})},j={summaryWrapper:"TransactionsSummary_summaryWrapper__sQ0lX",summaryTable:"TransactionsSummary_summaryTable__rDROt",summaryTableHeading:"TransactionsSummary_summaryTableHeading__SIk7N",summaryTableCell:"TransactionsSummary_summaryTableCell__JvlXi"},v=function(e){switch(e){case"\u042f\u043d\u0432\u0430\u0440\u044c":return"January";case"\u0424\u0435\u0432\u0440\u0430\u043b\u044c":return"February";case"\u041c\u0430\u0440\u0442":return"March";case"\u0410\u043f\u0440\u0435\u043b\u044c":return"April";case"\u041c\u0430\u0439":return"May";case"\u0418\u044e\u043d\u044c":return"June";case"\u0418\u044e\u043b\u044c":return"July";case"\u0410\u0432\u0433\u0443\u0441\u0442":return"August";case"\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c":return"September";case"\u041e\u043a\u0442\u044f\u0431\u0440\u044c":return"October";case"\u041d\u043e\u044f\u0431\u0440\u044c":return"November";case"\u0414\u0435\u043a\u0430\u0431\u0440\u044c":return"December"}},f=function(e){return e.transactions.expensesCategories},y=function(e){return e.transactions.incomesCategories},b=function(e){return e.transactions.incomes},T=function(e){return e.transactions.incomesStats},N=function(e){return e.transactions.expenses},g=function(e){return e.transactions.expensesStats},D=function(e){return e.transactions.currentTransactionType},M=function(){var e=(0,x.v9)(g),n=(0,x.v9)(T),t=(0,x.v9)(D),s=(0,o.useState)(n),r=(0,a.Z)(s,2),i=r[0],l=r[1],u=(0,o.useState)(e),d=(0,a.Z)(u,2),m=d[0],h=d[1];(0,o.useEffect)((function(){l(n)}),[n]),(0,o.useEffect)((function(){h(e)}),[e]),console.log(n);var p,_,f=[];"incomes"===t?f=null!==(p=Object.entries(i))&&void 0!==p?p:[]:f=null!==(_=Object.entries(m))&&void 0!==_?_:[];return(0,c.jsx)(c.Fragment,{children:f.map((function(e){return"N/A"!==e}))&&(0,c.jsx)("div",{className:j.summaryWrapper,children:(0,c.jsxs)("table",{className:j.summaryTable,children:[(0,c.jsx)("thead",{className:j.summaryHead,children:(0,c.jsx)("tr",{children:(0,c.jsx)("th",{colSpan:"2",className:j.summaryTableHeading,children:"Summary"})})}),(0,c.jsx)("tbody",{children:f.map((function(e){return"N/A"!==e[1]&&(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{className:j.summaryTableCell,children:v(e[0])}),(0,c.jsx)("td",{className:j.summaryTableCell,children:e[1]})]},"".concat(e[0]).concat(e[1]))}))})]})})})},S=t(7614),C=t(1951),k=t(5822),w=function(e){var n,t=e.selectedDate,a=(0,x.v9)(D),s=(0,x.v9)(b),r=(0,x.v9)(N),i=(0,x.I0)(),l=(n=t,(0,C.default)(Date.parse(n),"yyyy-MM-dd")),o="incomes"===a?s.filter((function(e){return e.date===l})):r.filter((function(e){return e.date===l}));console.log(o);return(0,c.jsx)("div",{children:(0,c.jsxs)("table",{children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"Date"}),(0,c.jsx)("th",{children:"Description"}),(0,c.jsx)("th",{children:"Category"}),(0,c.jsx)("th",{children:"Sum"}),(0,c.jsx)("th",{children:" "})]})}),(0,c.jsx)("tbody",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"21.11.2019"}),(0,c.jsx)("td",{children:"My salary"}),(0,c.jsx)("td",{children:"Salary"}),(0,c.jsx)("td",{children:"20 000.00 UAH."}),(0,c.jsx)("td",{children:(0,c.jsx)("button",{type:"button",onClick:function(){return e="64707566eb03bb3d9868c89d",i((0,S.Ks)(e)),i((0,h.J7)(e)),void setTimeout((function(){i((0,k.nX)())}),200);var e},children:"delete"})})]})})]})})},A=t(4805),B="TransactionListMobile_mobileContainer__uE4Bu",H="TransactionListMobile_mobileList__-SSwa",L="TransactionListMobile_mobileItem__3QJKX",F="TransactionListMobile_categoryContainer__8jRZM",E="TransactionListMobile_categoryDescription__X4to-",I="TransactionListMobile_categoryWrapper__BPgQH",P="TransactionListMobile_transactionDate__RSslA",Q="TransactionListMobile_ammountWrapper__XEOsv",X="TransactionListMobile_transactionAmount__jQPoP",J=function(e){var n,t=e.selectedDate,a=(0,A.useMediaQuery)({maxWidth:768}),s=(0,x.v9)(D),r=(0,x.v9)(b),i=(0,x.v9)(N),l=(0,x.I0)(),o=(n=t,(0,C.default)(Date.parse(n),"yyyy-MM-dd")),u="incomes"===s?r.filter((function(e){return e.date===o})):i.filter((function(e){return e.date===o}));return(0,c.jsx)("div",{className:B,children:a&&(0,c.jsx)("ul",{className:H,children:u.map((function(e){return(0,c.jsxs)("li",{className:L,children:[(0,c.jsxs)("div",{className:F,children:[(0,c.jsx)("p",{className:E,children:e.description}),(0,c.jsxs)("div",{className:I,children:[(0,c.jsx)("span",{className:P,children:e.date}),(0,c.jsx)("span",{children:e.category})]})]}),(0,c.jsxs)("div",{className:Q,children:[(0,c.jsxs)("p",{className:X,children:[e.amount," ","UAH"]}),(0,c.jsx)("button",{onClick:function(){return n=e.id,l((0,S.Ks)(n)),l((0,h.J7)(n)),void setTimeout((function(){l((0,k.nX)())}),200);var n},children:"Delete"})]})]},e._id)}))})})},Z=function(e){var n=e.selectedDate;return(0,c.jsxs)("section",{children:[(0,c.jsx)(w,{selectedDate:n}),(0,c.jsx)(M,{}),(0,c.jsx)(J,{selectedDate:n})]})},O="TransactionForm_input__hcPPg",R="TransactionForm_select__FnciQ",U="TransactionForm_input_calc__PnHCG",W="TransactionForm_btn_input__T6iv1",q="TransactionForm_btn_clear__V56ge",K=function(e){var n=e.selectedDate,t=(0,x.v9)(D),a=(0,x.v9)(f),s=(0,x.v9)(y);console.log(t,a,s);var r=(0,x.I0)(),i=function(e){e.preventDefault();var t=e.target.elements.amount.value,a=e.target.elements.description.value,s=e.target.elements.categories.value,c=function(e){return(0,C.default)(Date.parse(e),"yyyy-MM-dd")}(n),i={description:a,amount:Number(t),date:c,category:s};console.log(i),r((0,S.F8)(i)),setTimeout((function(){r((0,k.nX)())}),200)};return(0,c.jsx)("div",{children:(0,c.jsxs)("form",{onSubmit:function(e){return i(e)},children:[(0,c.jsx)("input",{type:"text",name:"description",placeholder:"Product description",className:O}),(0,c.jsxs)("select",{name:"categories",className:R,children:[(0,c.jsx)("option",{value:"\u0417/\u041f",children:"Salary"}),(0,c.jsx)("option",{value:"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434",children:"Add. income"}),(0,c.jsx)("option",{value:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",children:"Products"}),(0,c.jsx)("option",{value:"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c",children:"Alcohol"}),(0,c.jsx)("option",{value:"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f",children:"Entertainment"}),(0,c.jsx)("option",{value:"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435",children:"Health"}),(0,c.jsx)("option",{value:"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442",children:"Transport"}),(0,c.jsx)("option",{value:"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430",children:"Housing"}),(0,c.jsx)("option",{value:"\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438",children:"Sports, hobbies"}),(0,c.jsx)("option",{value:"\u0422\u0435\u0445\u043d\u0438\u043a\u0430",children:"Technique"}),(0,c.jsx)("option",{value:"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c",children:"Communal, communication"}),(0,c.jsx)("option",{value:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435",children:"Education"}),(0,c.jsx)("option",{value:"\u041f\u0440\u043e\u0447\u0435\u0435",children:"Other"})]}),(0,c.jsx)("input",{type:"number",name:"amount",placeholder:"0.00",className:U}),(0,c.jsx)("button",{type:"submit",className:W,children:"Input"}),(0,c.jsx)("button",{type:"reset",className:q,children:"Clear"})]})})},V=t(9513),Y=t.n(V),z=(t(8639),t(736)),G=function(e){var n=e.selectedDate,t=e.setSelectedDate,a=(0,o.forwardRef)((function(e,n){var t=e.value,a=e.onClick,s=e.onChange;return(0,c.jsx)("input",{value:t,className:"icon-input",onClick:a,onChange:s,ref:n,onKeyDown:function(e){e.preventDefault()}})}));return(0,c.jsx)("div",{className:"wrapper-container",children:(0,c.jsx)(Y(),{dateFormat:"dd.MM.yyyy",selected:n,onChange:function(e){t(e)},locale:z.Z,maxDate:new Date,customInput:(0,c.jsx)(a,{})})})},$=t(3548),ee=function(){var e=(0,o.useState)(new Date),n=(0,a.Z)(e,2),t=n[0],s=n[1],r=(0,x.I0)(),i=(0,x.v9)(D);return console.log(i),(0,o.useEffect)((function(){r((0,$.p)()),r((0,$.o)()),r((0,S.f2)()),r((0,S.nu)())}),[r]),(0,c.jsxs)("section",{children:[(0,c.jsx)(_,{}),(0,c.jsx)(G,{selectedDate:t,setSelectedDate:s}),(0,c.jsx)(K,{selectedDate:t}),(0,c.jsx)(Z,{selectedDate:t})]})}}}]);
//# sourceMappingURL=819.13da8398.chunk.js.map