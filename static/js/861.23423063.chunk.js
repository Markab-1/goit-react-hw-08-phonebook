"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[861],{4861:function(t,e,n){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function u(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){if(e&&("object"===s(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}n.r(e),n.d(e,{default:function(){return q}});var h=n(3452),p=n(2791),d="Section_title__SLHvV",m=n(184),b=function(t){var e=t.title,n=t.children;return(0,m.jsxs)("section",{children:[(0,m.jsx)("h2",{className:d,children:e}),n]})},y=n(4942),_="Form_input__thumb__hys6Q",v="Form_input__FTtTw",C="Form_btn__0ebGo",j=n(4569),x=n.n(j),g=n(6962);x().defaults.baseURL="https://connections-api.herokuapp.com";var w={fetchContacts:function(){return function(t){t(g.Z.fetchContactsRequest()),x().get("/contacts").then((function(e){var n=e.data;return t(g.Z.fetchContactsSuccess(n))})).catch((function(e){return t(g.Z.fetchContactsError(e))}))}},addContact:function(t){var e=t.name,n=t.number;return function(t){var r={name:e,number:n};console.log("contact= ",r),t(g.Z.addContactRequest()),x().post("/contacts",r).then((function(e){var n=e.data;return t(g.Z.addContactSuccess(n))})).catch((function(e){return t(g.Z.addContactError(e))}))}},deleteContact:function(t){return function(e){e(g.Z.deleteContactRequest()),x().delete("/contacts/".concat(t)).then((function(){return e(g.Z.deleteContactSuccess(t))})).catch((function(t){return e(g.Z.deleteContactError(t))}))}}},S=function(t){u(n,t);var e=f(n);function n(){var t;r(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,r=n.name,o=n.value;t.setState((0,y.Z)({},r,o))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,r={name:n.name,number:n.number};t.props.onSubmit(r),t.resetForm(),console.log("newObj= ",r)},t.resetForm=function(){t.setState({name:"",number:""})},t}return a(n,[{key:"render",value:function(){return(0,m.jsxs)("form",{onSubmit:this.handleSubmit,className:_,children:["Name",(0,m.jsx)("input",{type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:this.handleChange,className:v}),"Phone number",(0,m.jsx)("input",{type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:this.handleChange,className:v}),(0,m.jsx)("button",{type:"submit",className:C,children:"Add contact"})]})}}]),n}(p.Component),Z=(0,h.$j)(null,(function(t){return{onSubmit:function(e){var n=e.name,r=e.number;return t(w.addContact({name:n,number:r}))}}}))(S),N="Filter_text__uqQRu",O="Filter_input__N7T3z",k=(0,h.$j)((function(t){return{value:t.filter}}),(function(t){return{onChange:function(e){return t(g.Z.changeFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:N,children:"Find contacts by name:"}),(0,m.jsx)("input",{type:"text",name:"filter",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:n,className:O})]})})),A="ContactList_contactsName__6rTA7",F="ContactList_item__EZYHO",P="ContactList_list__csErn",R="ContactList_number__2af8f",z="ContactList_btn__6Piat",E=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},L=(0,h.$j)((function(t){var e=t.phonebook,n=e.contacts,r=e.filter;return{visibleContacts:E(n,r)}}),(function(t){return{onDeleteContact:function(e){return t(w.deleteContact(e))}}}))((function(t){var e=t.visibleContacts,n=t.onDeleteContact;return(0,m.jsx)("div",{children:e&&(0,m.jsx)("ul",{className:P,children:e.map((function(t){var e=t.id,r=t.name,o=t.number;return(0,m.jsxs)("li",{className:F,children:[(0,m.jsxs)("span",{className:A,children:[r,": "]}),(0,m.jsx)("span",{className:R,children:o}),(0,m.jsx)("button",{type:"button",onClick:function(){return n(e)},className:z,children:"Delete"})]},e)}))})})})),T=function(t){u(n,t);var e=f(n);function n(){return r(this,n),e.apply(this,arguments)}return a(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return(0,m.jsxs)("div",{children:[(0,m.jsx)(b,{title:"Phonebook",children:(0,m.jsx)(Z,{})}),(0,m.jsxs)(b,{title:"Contacts",children:[(0,m.jsx)(k,{}),(0,m.jsx)(L,{})]})]})}}]),n}(p.Component),q=(0,h.$j)(null,(function(t){return{fetchContacts:function(){return t(w.fetchContacts())}}}))(T)}}]);
//# sourceMappingURL=861.23423063.chunk.js.map