(this["webpackJsonpsample-app"]=this["webpackJsonpsample-app"]||[]).push([[0],{13:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),c=n.n(l),i=n(2),o=n(1),s=n(9),u=n(10),m=n(11),d=n(12),p=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderList",value:function(){var e=this;return this.props.songs.map((function(t){return r.a.createElement("div",{className:"item",key:t.title},r.a.createElement("div",{className:"right floated content"},r.a.createElement("button",{onClick:function(){return e.props.selectSong(t)},className:"ui button primary"},"Select")),r.a.createElement("div",{className:"content"}," ",t.title))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui divided list"},this.renderList())}}]),n}(r.a.Component),g=Object(i.b)((function(e){return console.log(e),{songs:e.songs}}),{selectSong:function(e){return{type:"SONG_SELECTED",payload:e}}})(p),E=Object(i.b)((function(e){return{song:e.selectSong}}))((function(e){return e.song?r.a.createElement("div",null,r.a.createElement("h3",null,"Details for "),r.a.createElement("p",null,"Title: ",e.song.title,r.a.createElement("br",null),"Duration: ",e.song.duration)):r.a.createElement("div",null,"Select a song!")})),v=function(){return r.a.createElement("div",{className:"ui container grid"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"column eight wide"},r.a.createElement(g,null)),r.a.createElement("div",{className:"column eight wide"},r.a.createElement(E,null))))},f=Object(o.b)({songs:function(){return[{title:"No scrubs",duration:"4.05"},{title:"rarara",duration:"2.15"},{title:"ssssssf",duration:"3.45"},{title:"Nodgggg",duration:"4.44"}]},selectSong:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SONG_SELECTED"===t.type?t.payload:e}});c.a.render(r.a.createElement(i.a,{store:Object(o.c)(f)},r.a.createElement(v,null)),document.querySelector("#root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.fdcda832.chunk.js.map