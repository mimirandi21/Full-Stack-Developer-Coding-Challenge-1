(this.webpackJsonprocketfront=this.webpackJsonprocketfront||[]).push([[0],{65:function(e,t,r){},73:function(e,t,r){"use strict";r.r(t);var n=r(12),s=r(0),c=r.n(s),a=r(24),i=r.n(a),l=r(41),o=r(49),u=r(14),d=r(33),j=r(52),h=r(53),b=r.n(h),x="SET_ALERTS",O="START_ADDING_ALERTS",m="SET_SATELLITES",p="START_ADDING_SATELLITES",f="LOGOUT",g="AUTH_SUCCESS",v="AUTH_FAILURE";var _=Object(d.c)({alerts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{alerts:[],requesting:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(n.a)(Object(n.a)({},e),{},{requesting:!0});case x:return Object(n.a)(Object(n.a)({},e),{},{alerts:t.alerts,requesting:!1});default:return e}},satellites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{satellites:[],requesting:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(n.a)(Object(n.a)({},e),{},{requesting:!0});case m:return Object(n.a)(Object(n.a)({},e),{},{satellites:t.satellites,requesting:!1});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loggedIn:!1,currentUser:{},errors:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(n.a)(Object(n.a)({},e),{},{loggedIn:!1,errors:t.payload.errors});case g:return Object(n.a)(Object(n.a)({},e),{},{loggedIn:!0,currentUser:t.payload.currentUser});case f:return Object(n.a)(Object(n.a)({},e),{},{loggedIn:!1,currentUser:{}});default:return e}}}),S=Object(d.e)(_,Object(d.d)(Object(d.a)(j.a,b.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),y=(r(65),r(2)),N=r(3),C=r(4),T=r(5),E=r(26),k=r(11),I=r(34),w="https://randirocket.herokuapp.com/",D=r(1),A=function(e){Object(C.a)(r,e);var t=Object(T.a)(r);function r(){var e;Object(y.a)(this,r);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={username:"",email:"",password:""},e.handleChange=function(t){e.setState(Object(I.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.state.errors||(e.props.signup(e.state),e.props.history.push("/"))},e.handleErrors=function(){return Object(D.jsx)("div",{className:"home",children:Object(D.jsx)("ul",{children:e.state.errors.map((function(e){return Object(D.jsx)("li",{children:e},e)}))})})},e}return Object(N.a)(r,[{key:"render",value:function(){return this.props.errors&&this.props.errors.map((function(e){return Object(D.jsx)("div",{className:"rux-modal-container",children:Object(D.jsxs)("rux-modal",{title:"error",message:e,confirmText:"Ok",denyText:"Cancel",customEvent:"listen-for-me",children:[Object(D.jsx)("div",{className:"rux-modal__titlebar",children:Object(D.jsx)("h1",{children:"Error"})}),Object(D.jsxs)("div",{className:"rux-modal__content",children:[Object(D.jsx)("div",{className:"rux-modal__message",children:e}),Object(D.jsxs)("div",{className:"rux-button-group",children:[Object(D.jsx)("rux-button",{"data-value":"false",tabindex:"-1",children:"Cancel"}),Object(D.jsx)("rux-button",{"data-value":"true",tabindex:"0",children:"OK"})]})]})]})})})),Object(D.jsx)("div",{className:"home",children:Object(D.jsxs)("div",{className:"inForm",children:[Object(D.jsx)("h1",{children:"Sign Up"}),Object(D.jsxs)("form",{className:"rux-form-field",onSubmit:this.handleSubmit,children:[Object(D.jsxs)("div",{className:"rux-form-field",children:[Object(D.jsx)("label",{for:"input__text",children:"Username"}),Object(D.jsx)("input",{id:"input__text",class:"rux-input",required:!0,placeholder:"username",type:"text",name:"username",value:this.state.username,onChange:this.handleChange})]}),Object(D.jsxs)("div",{className:"rux-form-field",children:[Object(D.jsx)("label",{for:"input__text",children:"Email"}),Object(D.jsx)("input",{id:"input__text",class:"rux-input",required:!0,placeholder:"email",type:"text",name:"email",value:this.state.email,onChange:this.handleChange})]}),Object(D.jsxs)("div",{className:"rux-form-field",children:[Object(D.jsx)("label",{for:"input__text",children:"Password"}),Object(D.jsx)("input",{id:"input__text",class:"rux-input",required:!0,placeholder:"password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("rux-button",{size:"large",placeholder:"submit",type:"submit",onClick:this.handleSubmit,children:"Sign Up"}),Object(D.jsx)("span",{children:"or"}),Object(D.jsx)("rux-button",{size:"large",children:Object(D.jsx)(E.b,{to:"/login",className:"cufflinks",children:"Log In"})})]})]}),Object(D.jsx)("div",{children:this.state.errors?this.handleErrors():null})]})})}}]),r}(s.Component),L=Object(u.b)(null,{signup:function(e){return function(t){fetch(w+"users",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({user:e})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.errors&&""!==e.errors?t({type:v,payload:{loggedIn:!1,errors:[e.errors]}}):t({type:g,payload:{loggedIn:!0,currentUser:e.user}})}))}}})(A),U=function(e){Object(C.a)(r,e);var t=Object(T.a)(r);function r(e){var n;return Object(y.a)(this,r),(n=t.call(this,e)).handleChange=function(e){var t=e.target,r=t.name,s=t.value;n.setState(Object(I.a)({},r,s))},n.handleSubmit=function(e){e.preventDefault(),n.props.login({user:n.state}),n.props.history.push("/main")},n.handleErrors=function(){return Object(D.jsx)("div",{children:Object(D.jsx)("ul",{children:n.state.error.map((function(e){return Object(D.jsx)("li",{children:e},e)}))})})},n.state={username:"",email:"",password:"",error:""},n}return Object(N.a)(r,[{key:"render",value:function(){return this.props.errors&&this.props.errors.map((function(e){return Object(D.jsx)("div",{className:"rux-modal-container",children:Object(D.jsxs)("rux-modal",{title:"error",message:e,confirmText:"Ok",denyText:"Cancel",customEvent:"listen-for-me",children:[Object(D.jsx)("div",{className:"rux-modal__titlebar",children:Object(D.jsx)("h1",{children:"Error"})}),Object(D.jsxs)("div",{className:"rux-modal__content",children:[Object(D.jsx)("div",{className:"rux-modal__message",children:e}),Object(D.jsxs)("div",{className:"rux-button-group",children:[Object(D.jsx)("rux-button",{"data-value":"false",tabindex:"-1",children:"Cancel"}),Object(D.jsx)("rux-button",{"data-value":"true",tabindex:"0",children:"OK"})]})]})]})})})),Object(D.jsx)("div",{className:"home",children:Object(D.jsxs)("div",{className:"inForm",children:[Object(D.jsx)("h1",{children:"Log In"}),Object(D.jsxs)("form",{className:"rux-form-field",onSubmit:this.handleSubmit,children:[Object(D.jsxs)("div",{className:"rux-form-field",children:[Object(D.jsx)("label",{for:"input__text",children:"Username"}),Object(D.jsx)("input",{id:"input__text",class:"rux-input",required:!0,placeholder:"username",type:"text",name:"username",value:this.state.username,onChange:this.handleChange})]}),Object(D.jsxs)("div",{className:"rux-form-field",children:[Object(D.jsx)("label",{for:"input__text",children:"Email"}),Object(D.jsx)("input",{id:"input__text",class:"rux-input",required:!0,placeholder:"email",type:"text",name:"email",value:this.state.email,onChange:this.handleChange})]}),Object(D.jsxs)("div",{className:"rux-form-field",children:[Object(D.jsx)("label",{for:"input__text",children:"Password"}),Object(D.jsx)("input",{id:"input__text",class:"rux-input",required:!0,placeholder:"password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("rux-button",{size:"large",placeholder:"submit",type:"submit",onClick:this.handleSubmit,children:"Log In"}),Object(D.jsx)("span",{children:"or"}),Object(D.jsx)("rux-button",{size:"large",children:Object(D.jsx)(E.b,{to:"/signup",className:"cufflinks",children:"Sign Up"})})]})]}),Object(D.jsx)("div",{children:this.state.error?this.handleErrors():null})]})})}}]),r}(s.Component),F=Object(u.b)((function(e){return{loggedIn:e.users.loggedIn,errors:e.users.errors}}),{login:function(e){return function(t){fetch(w+"user",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.errors&&""!==e.errors?t({type:v,payload:{loggedIn:!1,errors:e.errors}}):t({type:g,payload:{loggedIn:!0,currentUser:e.user}})}))}}})(U),q=(r(72),r(71),function(e){Object(C.a)(r,e);var t=Object(T.a)(r);function r(e){var n;return Object(y.a)(this,r),(n=t.call(this,e)).state={time:(new Date).toLocaleString()},n}return Object(N.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){this.setState({time:(new Date).toLocaleString()})}},{key:"render",value:function(){return Object(D.jsx)("div",{className:"grid-zone grid-zone--header",children:Object(D.jsxs)("rux-global-status-bar",{className:"rux-global-staus-bar",appname:"The Final Frontier",theme:"dark",children:[Object(D.jsx)("rux-clock",{class:"dark-theme",small:!0,children:this.state.time}),Object(D.jsxs)("div",{children:[this.props.user.username,Object(D.jsx)("br",{}),Object(D.jsx)("a",{href:"/logout",children:"Log Out"})]})]})})}}]),r}(s.Component)),z=Object(u.b)((function(e){return{user:e.users.currentUser}}))(q),R=r(29),M=(r(48),function(e){Object(C.a)(r,e);var t=Object(T.a)(r);function r(e){var n;return Object(y.a)(this,r),(n=t.call(this,e)).handleChange=function(e){n.setState({search:e.target.value})},n.handleSearch=function(e){n.setState({search:e.target.value}),n.filterContacts()},n.state={search:""},n}return Object(N.a)(r,[{key:"componentDidMount",value:function(e){this.props!==e&&this.props.getAlerts()}},{key:"findDistinctCategories",value:function(){return Object(R.a)(new Set(this.props.alerts.map((function(e){return e.errorCategory}))))}},{key:"filterContacts",value:function(){var e=this;return""!==this.state.search&&this.state.search?this.props.alerts.filter((function(t){return t.errorCategory.includes(e.state.search)})):this.props.alerts}},{key:"convertTime",value:function(e){return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)}},{key:"render",value:function(){var e=this;return Object(D.jsxs)("div",{className:"grid-zone grid-zone--sidebar",children:[Object(D.jsxs)("div",{className:"grid-zone-sidebar__subheader",children:[Object(D.jsx)("h2",{className:"alert-title",children:"Alerts"}),Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{className:"alert-summary",children:[Object(D.jsx)("h1",{children:this.props.alerts.length})," Total Alerts"]}),Object(D.jsxs)("div",{class:"alert-filter",children:[Object(D.jsx)("label",{class:"classy",for:"categoryFilter",children:"Category Filter"}),Object(D.jsxs)("select",{class:"rux-select",id:"category-filter",onChange:this.handleSearch,children:[Object(D.jsx)("option",{value:"",children:"All"}),this.findDistinctCategories().map((function(e){return Object(D.jsx)("option",{value:e,children:e})}))]})]})]})]}),Object(D.jsxs)("table",{className:"rux-table",children:[Object(D.jsxs)("tr",{className:"rux-table__column-head",children:[Object(D.jsx)("th",{children:"Category"}),Object(D.jsx)("th",{children:"Status"}),Object(D.jsx)("th",{children:"Message"}),Object(D.jsx)("th",{children:"Time"})]}),this.filterContacts().map((function(t){return Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{children:t.errorCategory}),Object(D.jsx)("td",{children:Object(D.jsx)("rux-status",{status:t.errorSeverity})}),Object(D.jsx)("td",{children:t.errorMessage}),Object(D.jsx)("td",{children:e.convertTime(t.errorTime)})]})}))]})]})}}]),r}(s.Component)),P=Object(u.b)((function(e){return{alerts:e.alerts.alerts}}),(function(e){return{getAlerts:function(t){return e((function(e){e({type:"START_ADDING_ALERTS"}),fetch("https://randirocket.herokuapp.com/alerts").then((function(e){return e.json()})).then((function(t){e({type:"SET_ALERTS",alerts:t})})).catch((function(e){throw e}))}))}}}))(M),B=function(e){Object(C.a)(r,e);var t=Object(T.a)(r);function r(e){var n;return Object(y.a)(this,r),(n=t.call(this,e)).handleChange=function(e){n.setState({search:e.target.value})},n.handleSearch=function(e){n.setState({filtered:e.target.value}),console.log(n.state),n.filterContacts()},n.countStates=function(e){return n.props.satellites.filter((function(t){return t.contactState===e})).length},n.state={search:"",filtered:""},n}return Object(N.a)(r,[{key:"componentDidMount",value:function(e){this.props!==e&&this.props.getSatellites()}},{key:"filterContacts",value:function(){var e=this;return this.props.satellites.filter((function(t){return t.contactName.toString().includes(e.state.search)&&t.contactState.includes(e.state.filtered)}))}},{key:"convertTime",value:function(e){return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)}},{key:"findDistinctStates",value:function(){return Object(R.a)(new Set(this.props.satellites.map((function(e){return e.contactState}))))}},{key:"render",value:function(){var e=this;return Object(D.jsxs)("div",{className:"grid-zone grid-zone--main",children:[Object(D.jsxs)("div",{className:"grid-zone-main__subheader",children:[Object(D.jsx)("h2",{className:"contact-title",children:"Contacts"}),Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{className:"contact-summary",children:[Object(D.jsx)("h1",{children:this.props.satellites.length})," Total Contacts"]}),this.findDistinctStates().map((function(t){return Object(D.jsxs)("div",{className:"contact-summary",id:t,children:[Object(D.jsx)("h1",{children:e.countStates(t)}),t]})})),Object(D.jsx)("div",{className:"rux-form-field-div-search",children:Object(D.jsx)("div",{className:"rux-form-field search",children:Object(D.jsx)("input",{className:"rux-form-field__text-input search",placeholder:"Search by name",type:"search",onChange:this.handleChange})})}),Object(D.jsxs)("div",{class:"alert-filter",children:[Object(D.jsx)("label",{class:"classy",for:"stateFilter",children:"State Filter"}),Object(D.jsxs)("select",{class:"rux-select",id:"state-filter",onChange:this.handleSearch,children:[Object(D.jsx)("option",{value:"",children:"All"}),this.findDistinctStates().map((function(e){return Object(D.jsx)("option",{value:e,children:e})}))]})]})]})]}),Object(D.jsxs)("table",{className:"rux-table",children:[Object(D.jsxs)("tr",{className:"rux-table__column-head",children:[Object(D.jsx)("th",{children:"Name"}),Object(D.jsx)("th",{children:"Status"}),Object(D.jsx)("th",{children:"Begin"}),Object(D.jsx)("th",{children:"End"})]}),this.filterContacts().map((function(t){return Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{children:t.contactName}),Object(D.jsx)("td",{children:Object(D.jsx)("rux-status",{status:t.contactStatus})}),Object(D.jsx)("td",{children:e.convertTime(t.contactBeginTimestamp)}),Object(D.jsx)("td",{children:e.convertTime(t.contactEndTimestamp)})]})}))]})]})}}]),r}(s.Component),G=Object(u.b)((function(e){return{satellites:e.satellites.satellites}}),(function(e){return{getSatellites:function(t){return e((function(e){e({type:"START_ADDING_SATELLITES"}),fetch("https://randirocket.herokuapp.com/satellites").then((function(e){return e.json()})).then((function(t){e({type:"SET_SATELLITES",satellites:t})}))}))}}}))(B),J=function(e){Object(C.a)(r,e);var t=Object(T.a)(r);function r(e){var n;return Object(y.a)(this,r),(n=t.call(this,e)).componentDidMount=function(){console.log(n.props.errors)},n.state={loggedIn:!1},n}return Object(N.a)(r,[{key:"render",value:function(){return this.props.errors&&this.props.errors.map((function(e){return Object(D.jsx)("div",{className:"rux-modal-container",children:Object(D.jsxs)("rux-modal",{title:"error",message:e,confirmText:"Ok",denyText:"Cancel",customEvent:"listen-for-me",children:[Object(D.jsx)("div",{className:"rux-modal__titlebar",children:Object(D.jsx)("h1",{children:"Error"})}),Object(D.jsxs)("div",{className:"rux-modal__content",children:[Object(D.jsx)("div",{className:"rux-modal__message",children:e}),Object(D.jsxs)("div",{className:"rux-button-group",children:[Object(D.jsx)("rux-button",{"data-value":"false",tabindex:"-1",children:"Cancel"}),Object(D.jsx)("rux-button",{"data-value":"true",tabindex:"0",children:"OK"})]})]})]})})})),Object(D.jsxs)("div",{className:"app-grid",children:[Object(D.jsx)(z,{}),Object(D.jsx)(P,{}),Object(D.jsx)(G,{})]})}}]),r}(s.Component),K=Object(u.b)((function(e){return{loggedIn:e.users.loggedIn,errors:e.users.errors}}))(J),X=(r(74),function(e){Object(C.a)(r,e);var t=Object(T.a)(r);function r(){return Object(y.a)(this,r),t.apply(this,arguments)}return Object(N.a)(r,[{key:"render",value:function(){return this.props.errors&&this.props.errors.map((function(e){return Object(D.jsx)("div",{className:"rux-modal-container",children:Object(D.jsxs)("rux-modal",{title:"error",message:e,confirmText:"Ok",denyText:"Cancel",customEvent:"listen-for-me",children:[Object(D.jsx)("div",{className:"rux-modal__titlebar",children:Object(D.jsx)("h1",{children:"Error"})}),Object(D.jsxs)("div",{className:"rux-modal__content",children:[Object(D.jsx)("div",{className:"rux-modal__message",children:e}),Object(D.jsxs)("div",{className:"rux-button-group",children:[Object(D.jsx)("rux-button",{"data-value":"false",tabindex:"-1",children:"Cancel"}),Object(D.jsx)("rux-button",{"data-value":"true",tabindex:"0",children:"OK"})]})]})]})})})),Object(D.jsx)("div",{className:"home",children:Object(D.jsxs)("div",{className:"hbo",children:[Object(D.jsxs)("h3",{children:["Are you a ",Object(D.jsx)(E.b,{to:"/Login",children:"returning"})," user?"]}),Object(D.jsx)("br",{}),Object(D.jsxs)("h3",{children:["Or ",Object(D.jsx)(E.b,{to:"/Signup",children:"new"})," to the site?"]})]})})}}]),r}(s.Component)),H=Object(u.b)((function(e){return{loggedIn:e.users.loggedIn,errors:e.users.errors}}))(X),V=function(e){Object(C.a)(r,e);var t=Object(T.a)(r);function r(e){var n;return Object(y.a)(this,r),(n=t.call(this,e)).state={loggedIn:!1},n}return Object(N.a)(r,[{key:"render",value:function(){return Object(D.jsxs)(E.a,{children:[Object(D.jsxs)(k.d,{children:[Object(D.jsx)(k.b,{exact:!0,path:"/",component:H}),Object(D.jsx)(k.b,{exact:!0,path:"/Session",component:H}),Object(D.jsx)(k.b,{exact:!0,path:"/main",component:K}),Object(D.jsx)(k.b,{exact:!0,path:"/Signup",component:L}),Object(D.jsx)(k.b,{exact:!0,path:"/Login",component:F})]}),this.props.loggedIn?Object(D.jsx)(k.a,{to:!0,component:"/main"}):Object(D.jsx)(k.a,{to:"/Session"})]})}}]),r}(s.Component),W=Object(u.b)((function(e){return{loggedIn:e.loggedIn}}))(V),Q=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,79)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;r(e),n(e),s(e),c(e),a(e)}))},Y={position:l.b.BOTTOM_CENTER,timeout:5e3,offset:"30px",transition:l.c.SCALE};i.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(u.a,{store:S,children:Object(D.jsx)(l.a,Object(n.a)(Object(n.a)({template:o.a},Y),{},{children:Object(D.jsx)(W,{})}))})}),document.getElementById("root")),Q()}},[[73,1,2]]]);
//# sourceMappingURL=main.dcd1e425.chunk.js.map