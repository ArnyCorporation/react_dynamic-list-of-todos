(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(4),s=a.n(o),i=a(5),c=a(2),u=a(6),l=a(7),m=a(9),d=a(8),p=a(10),h=(a(16),a(17),a(18),a(19),a(1)),f=a.n(h),b=(f.a.string.isRequired,f.a.string.isRequired,f.a.string.isRequired,f.a.bool.isRequired,f.a.shape({name:f.a.string}).isRequired);f.a.shape({key:f.a.number,title:f.a.string,completed:f.a.bool,user:f.a.object}).isRequired,f.a.arrayOf(f.a.shape({id:f.a.number,userId:f.a.number,title:f.a.string,completed:f.a.bool,user:b})).isRequired;var g=function(e){var t=e.name,a=e.username,r=e.email,o=e.completed;return n.a.createElement("div",{className:"user-item".concat(o?" green":" red")},n.a.createElement("p",{className:"user-item__name"},t),n.a.createElement("h2",{className:"user-item__username"},a),n.a.createElement("p",{className:"user-item__mail"},r))};var E=function(e){var t=e.todo,a=t.key,r=t.title,o=t.completed,s=t.user;return n.a.createElement("div",{className:"todo-item",key:a},n.a.createElement("h2",{className:"todo-item__title"},r),n.a.createElement("p",{className:"todo-item__check"},o?"\u2705":"\u274c"),n.a.createElement(g,Object.assign({},s,{completed:o})))};var O=function(e){var t=e.todos;return n.a.createElement(n.a.Fragment,null,t.map(function(e){return n.a.createElement(E,{key:e.id,todo:e})}))};function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={users:[],todos:[],hasError:null,isLoaded:!1,isButtonShow:!0},a.handleGetData=function(){a.setState({isButtonShow:!1,isLoaded:!0}),Promise.all([fetch("https://jsonplaceholder.typicode.com/users"),fetch("https://jsonplaceholder.typicode.com/todos")]).then(function(e){var t=Object(c.a)(e,2),a=t[0],r=t[1];return Promise.all([a.json(),r.json()])}).then(function(e){var t=Object(c.a)(e,2),r=t[0],n=t[1];return a.setState({isLoaded:!1,users:r,todos:n})}).catch(function(){a.setState({hasError:!0})})},a.getTodoWithUser=function(e,t){return e.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach(function(t){Object(i.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{user:t.find(function(t){return t.id===e.userId})})})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){console.log(this.state.todos);var e=this.getTodoWithUser(this.state.todos,this.state.users);return this.state.hasError?n.a.createElement("div",null,"Error: omg wtf something wrong go away"):this.state.isLoaded?n.a.createElement("div",{className:"loading"},"Loading..."):n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Static list of todos"),n.a.createElement("div",{className:"wrapper"},this.state.isButtonShow&&n.a.createElement("button",{className:"btnLoad",type:"button",onClick:this.handleGetData},"get Data"),n.a.createElement(O,{todos:e})))}}]),t}(n.a.Component);s.a.render(n.a.createElement(y,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.79e26dfc.chunk.js.map