(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(6),i=n.n(o),r=n(1),l=n(2),s=n(4),m=n(3),u=(n(12),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={currentTime:(new Date).toLocaleTimeString()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){var t=new Date;e.setState({currentTime:t.toLocaleTimeString()}),console.log(t.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props.clockName;t!==e.clockName&&console.log("The Clock was renamed from ".concat(e.clockName," to ").concat(t))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return c.a.createElement("div",{className:"timer"},"Current time:"," ",this.state.currentTime)}}]),n}(c.a.Component)),h=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isClockVisible:!0,clockName:0},e.hideClock=function(){e.setState({isClockVisible:!1})},e.showClock=function(){e.setState({isClockVisible:!0})},e.changeName=function(){e.setState({clockName:Math.floor(100*Math.random())})},e}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"title"},"React clock"),c.a.createElement("div",{className:"timer"},this.state.isClockVisible?c.a.createElement(u,this.state):"Your time is out!"),c.a.createElement("button",{className:"button",type:"button",onClick:this.showClock},"Show Clock"),c.a.createElement("button",{className:"button",type:"button",onClick:this.hideClock},"Hide Clock"),c.a.createElement("button",{className:"button",type:"button",onClick:this.changeName},"Set random name"))}}]),n}(c.a.Component);i.a.render(c.a.createElement(h,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.27e92a37.chunk.js.map