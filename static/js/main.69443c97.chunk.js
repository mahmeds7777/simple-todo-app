(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(7),i=n.n(r),c=n(5),l=n(1),s=n(2),d=n(4),p=n(3),u=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement("li",{className:"todo-item"},a.a.createElement("input",{type:"checkbox",checked:this.props.todo.completed,onChange:function(){return t.props.handleChangeProps(t.props.todo.id)}}),a.a.createElement("button",{onClick:function(){return t.props.deleteTodoProps(t.props.todo.id)}},"Delete"),a.a.createElement("span",{style:this.props.todo.completed?{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null},this.props.todo.title))}}]),n}(a.a.Component),m=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement("div",null,this.props.todos.map((function(e){return a.a.createElement(u,{key:e.id,todo:e,handleChangeProps:t.props.handleChangeProps,deleteTodoProps:t.props.deleteTodoProps})})))}}]),n}(a.a.Component),h=function(){return a.a.createElement("header",{style:{padding:"20px 0",lineHeight:"2em"}},a.a.createElement("h1",{style:{fontSize:"25px",marginBottom:"15px"}},"Simple Todo App"),a.a.createElement("p",{style:{fontSize:"19px"}},"Please add to-dos item(s) through the input field"))},f=n(8),b=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onChange=function(e){t.setState(Object(f.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.addTodoProps(t.state.title),t.setState({title:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-container"},a.a.createElement("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:this.state.title,name:"title",onChange:this.onChange}),a.a.createElement("input",{type:"submit",className:"input-submit",value:"Submit"}))}}]),n}(o.Component),j=n(17),y=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[{id:Object(j.a)(),title:"Train for half marathon",completed:!0},{id:Object(j.a)(),title:"Workout and regain your strength",completed:!1},{id:Object(j.a)(),title:"fast and cleanse your soul",completed:!1}]},t.handleChange=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){t.setState({todos:Object(c.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodoItem=function(e){var n={id:Object(j.a)(),title:e,completed:!1};t.setState({todos:[].concat(Object(c.a)(t.state.todos),[n])})},t}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement(h,null),a.a.createElement(b,{addTodoProps:this.addTodoItem}),a.a.createElement(m,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.delTodo}))}}]),n}(a.a.Component);n(14);i.a.render(a.a.createElement(y,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.69443c97.chunk.js.map