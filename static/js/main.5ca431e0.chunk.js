(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{25:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(2),c=a.n(n),i=a(12),l=a.n(i),r=a(10),d=a(5),o=a(13),m=a(14),b=a(18),u=a(17),x=(a(25),a(3)),j=a(4),g=function(e){return Object(s.jsx)("form",{onSubmit:e.addItem,children:Object(s.jsxs)("div",{className:"new-item-box",style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(s.jsx)("input",{type:"text",onChange:e.changed,value:e.inputValue,className:"form-control mr-2",placeholder:"Enter new item",disabled:e.inputDisabled}),Object(s.jsx)("button",{disabled:e.btnDisabled,className:"btn btn-sm btn-success",onClick:e.addItem,children:Object(s.jsx)(x.a,{icon:j.d})})]})})},h=a(41),f=(a(30),function(e){var t=!1,a="";return e.done&&(t=!0,a="done"),Object(s.jsxs)("li",{className:a,children:[Object(s.jsx)("div",{className:"icheck-primary d-inline ml-2",children:Object(s.jsx)("input",{onChange:e.checkBox,type:"checkbox",checked:t,name:"todo_"+e.id,id:"todo_"+e.id})}),Object(s.jsx)("span",{className:"text",children:e.text}),Object(s.jsxs)("small",{className:"badge badge-danger",id:"time-box",children:[Object(s.jsx)(x.a,{icon:j.a})," ",Object(s.jsx)(h.a,{date:e.time})," "]}),Object(s.jsxs)("div",{className:"tools",children:[Object(s.jsx)(x.a,{icon:j.c,color:"#17a2b8",className:"mr-2",onClick:e.edit}),Object(s.jsx)(x.a,{icon:j.f,onClick:e.delete})]})]})}),p=function(){return Object(s.jsx)("div",{className:"text-center",children:Object(s.jsxs)("h5",{className:"bold",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},children:[Object(s.jsx)(x.a,{size:"2x",color:"#6c757d",icon:j.e,className:"mr-2"})," Nothing yet! "]})})},N=(a(32),function(e){var t=Object(s.jsx)("p",{className:"badge badge-light",children:"You have 0 items"});return 1===e.dataLeft?t=Object(s.jsx)("p",{className:"badge badge-light",children:"You have 1 item "}):e.dataLeft>1&&(t=Object(s.jsxs)("p",{className:"badge badge-light",children:["You have ",e.dataLeft," items"]})),Object(s.jsx)("div",{className:"settings",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("code",{children:"App version: 1.1.0"}),Object(s.jsxs)("div",{className:"st-box mb-2",children:[Object(s.jsx)("label",{children:"Username: "}),Object(s.jsx)("input",{type:"text",name:"username",placeholder:"Enter your name",className:"form-control-sm input-block",onChange:e.changed,value:e.value})]}),Object(s.jsxs)("div",{className:"st-box mb-2",children:[Object(s.jsx)("label",{children:"Email: "}),Object(s.jsx)("input",{type:"email",name:"email",placeholder:"Enter your email",className:"form-control-sm input-block",onChange:e.emailHandler,value:e.email})]}),Object(s.jsxs)("div",{className:"st-box mb-2",children:[Object(s.jsx)("label",{children:"Clear data: "}),Object(s.jsxs)("div",{children:[t," ",Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"btn btn-sm btn-danger block",onClick:e.clearData,children:"Clear all data"})]})]})]})})}),O=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={items:[],newItemText:"",appName:"",appEmail:"",toggleSettings:!1},e.newItemInputHandler=function(t){var a=e.state.newItemText;a=t.target.value,e.setState({newItemText:a})},e.addItemHandler=function(t){if(t.preventDefault(),""!==e.state.newItemText){var a={id:(new Date).getTime(),text:e.state.newItemText,time:new Date,done:!1},s=[].concat(Object(d.a)(e.state.items),[a]);localStorage.setItem("items_stored",JSON.stringify(s)),e.setState({items:s,newItemText:""})}},e.editItemHandler=function(t){var a=e.state.items.findIndex((function(e){return e.id===t})),s=Object(r.a)({},e.state.items[a]),n=prompt("Edit item: ",s.text);s.text=n||s.text;var c=Object(d.a)(e.state.items);c[a]=s,localStorage.setItem("items_stored",JSON.stringify(c)),e.setState({items:c})},e.deleteItemHandler=function(t){var a=e.state.items.findIndex((function(e){return e.id===t})),s=Object(d.a)(e.state.items);s.splice(a,1),localStorage.setItem("items_stored",JSON.stringify(s)),e.setState({items:s})},e.checkBoxHandler=function(t){var a=e.state.items.findIndex((function(e){return e.id===t})),s=Object(r.a)({},e.state.items[a]);s.done=!s.done;var n=Object(d.a)(e.state.items);n[a]=s,localStorage.setItem("items_stored",JSON.stringify(n)),e.setState({items:n})},e.toggleSettingsHandler=function(){var t=e.state.toggleSettings;e.setState({toggleSettings:!t})},e.setNameHandler=function(t){var a=t.target.value;localStorage.setItem("app_name",a),e.setState({appName:a})},e.emailHandler=function(t){var a=t.target.value;localStorage.setItem("app_email",a),e.setState({appEmail:a})},e.clearDataHandler=function(){localStorage.removeItem("items_stored"),e.setState({items:[]})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){if(localStorage.getItem("items_stored")){var e=JSON.parse(localStorage.getItem("items_stored"));this.setState({items:e})}if(localStorage.getItem("app_name")){var t=localStorage.getItem("app_name");this.setState({appName:t})}if(localStorage.getItem("app_email")){var a=localStorage.getItem("app_email");this.setState({appEmail:a})}}},{key:"render",value:function(){var e=this,t=new Date;t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()]+", "+t.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()];var a=null,n=null;n=this.state.items.length<=0?Object(s.jsx)(p,{}):Object(s.jsx)("ul",{className:"todo-list success",children:this.state.items.map((function(t){return Object(s.jsx)(f,{done:t.done,checkBox:function(){return e.checkBoxHandler(t.id)},id:t.id,text:t.text,time:t.time,edit:function(){return e.editItemHandler(t.id)},delete:function(){return e.deleteItemHandler(t.id)}},t.id)}))}),a=this.state.toggleSettings?Object(s.jsx)(N,{dataLeft:this.state.items.length,changed:this.setNameHandler,value:this.state.appName,emailHandler:this.emailHandler,email:this.state.appEmail,clearData:this.clearDataHandler}):Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{className:"badge badge-danger",children:["Items: ",this.state.items.length]}),n]});return Object(s.jsx)("div",{className:"container parent-container",children:Object(s.jsxs)("div",{className:"todo-app card card-outline-success",children:[Object(s.jsxs)("div",{className:"card-header",children:[Object(s.jsxs)("div",{className:"float",children:[Object(s.jsxs)("h4",{className:"float-left",children:[Object(s.jsx)("img",{src:"data:image/png;base64,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",style:{width:"40px"}})," Steady"]}),Object(s.jsxs)("h4",{className:"float-right",children:[" ",Object(s.jsx)(x.a,{onClick:this.toggleSettingsHandler,style:{cursor:"pointer"},icon:j.b,color:"#28a745"})," "]})]}),Object(s.jsx)("div",{className:"clearfix"}),Object(s.jsxs)("div",{className:"float",children:[Object(s.jsx)("p",{className:"float-left",children:""!==this.state.appName?"Welcome,  @"+this.state.appName:Object(s.jsx)("cite",{className:"badge badge-light",children:"New user? Open settings"})}),Object(s.jsxs)("p",{className:"float-right badge badge-light ",children:[" ",Object(s.jsx)("cite",{children:t})," "]})]}),Object(s.jsx)("div",{className:"clearfix"})]}),Object(s.jsx)("div",{className:"card-body",children:a}),Object(s.jsx)("div",{className:"card-footer",children:Object(s.jsx)(g,{changed:this.newItemInputHandler,inputValue:this.state.newItemText,inputDisabled:this.state.toggleSettings,btnDisabled:""===this.state.newItemText,addItem:this.addItemHandler})})]})})}}]),a}(n.Component),v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))},w=a(40),A=a(15),I=a(16);a(33),a(34);w.a.addDefaultLocale(A),w.a.addLocale(I),l.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),v()}},[[35,1,2]]]);
//# sourceMappingURL=main.5ca431e0.chunk.js.map