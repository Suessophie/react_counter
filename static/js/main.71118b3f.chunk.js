(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){"use strict";e.r(n);var a=e(0),c=e.n(a),o=e(2),u=e.n(o),r=e(3),s=e(4),i=e(6),d=e(5),l=(e(12),function(t){Object(i.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(r.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=n.call.apply(n,[this].concat(c))).state={count:0},t.addOne=function(){t.setState((function(t){return{count:t.count+1}}))},t.add100=function(){t.setState((function(t){return{count:t.count+100}}))},t.increase=function(n){n%5===0?t.add100():t.addOne()},t}return Object(s.a)(e,[{key:"render",value:function(){var t=this,n=this.state.count;return c.a.createElement("div",{className:"count"},c.a.createElement("h1",{className:"count__title"},"Count: ",n),c.a.createElement("div",{className:"count__list"},c.a.createElement("button",{className:"count__button",type:"button",onClick:this.addOne},"Add one"),c.a.createElement("button",{className:"count__button",type:"button",onClick:this.add100},"Add 100"),c.a.createElement("button",{className:"count__button",type:"button",onClick:function(){t.increase(n)}},n%5===0?"Add 100":"Add one")))}}]),e}(c.a.Component));u.a.render(c.a.createElement(l,null),document.getElementById("root"))},7:function(t,n,e){t.exports=e(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.71118b3f.chunk.js.map