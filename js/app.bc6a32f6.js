(function(t){function e(e){for(var s,r,l=e[0],o=e[1],c=e[2],f=0,p=[];f<l.length;f++)r=l[f],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==n[o]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-cording4/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0794":function(t,e,a){t.exports=a.p+"img/ruby.3ddcfce0.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("Main"),a("Footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{staticClass:"header"},[a("div",{staticClass:"header__menu"},[t._m(0),a("div",{staticClass:"line",class:{"is-active":t.active},on:{click:t.naviOpen}},[a("span"),a("span"),a("span")]),t._m(1)])]),a("transition",{attrs:{name:"navi"}},[a("nav",{directives:[{name:"show",rawName:"v-show",value:t.navi,expression:"navi"}],staticClass:"navi"},[a("ul",{staticClass:"navi_wrap"},[a("li",[a("a",{attrs:{href:"#"}},[t._v("レッスン")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("新規登録")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("ログイン")])])])])])],1)},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",[s("img",{staticClass:"logo",attrs:{src:a("9d64")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navi-pc"},[a("ul",{staticClass:"navi__flexbox"},[a("li",[a("a",{attrs:{href:"#"}},[t._v("レッスン")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("新規登録")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("ログイン")])])])])}],o={data:function(){return{active:!1,navi:!1}},methods:{naviOpen:function(){this.active=!this.active,this.navi=!this.navi}}},c=o,u=a("2877"),f=Object(u["a"])(c,r,l,!1,null,null,null),p=f.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("section",{attrs:{id:"hero"}},[a("div",{staticClass:"hero"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"subscribe-wrap"},[a("a",{staticClass:"new-subscribe",attrs:{href:"#"}},[t._v("新規登録はこちら")]),a("p",{staticClass:"or"},[t._v("or")]),a("div",{staticClass:"facebool-twitter-flexbox"},[a("a",{attrs:{href:"#"}},[a("div",{staticClass:"facebook-flexbox"},[a("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}}),a("p",{staticClass:"facebook"},[t._v("Facebookで登録")])],1)]),a("a",{attrs:{href:"#"}},[a("div",{staticClass:"twitter-flexbox"},[a("font-awesome-icon",{attrs:{icon:["fab","twitter"]}}),a("p",{staticClass:"twitter"},[t._v("Twitterで登録")])],1)])])])])])]),a("section",{attrs:{id:"languages"}},[a("div",{staticClass:"languages"},[a("h2",{staticClass:"list"},[t._v("Learn Where to Get Started")]),a("ul",{staticClass:"language-flexbox"},t._l(t.lists,(function(e,s){return a("li",{key:s},[a("div",{staticClass:"language-wrap"},[a("img",{staticClass:"language-background",attrs:{src:e.image}}),a("p",{staticClass:"language-title"},[t._v(t._s(e.title))])]),a("p",{staticClass:"language-explain"},[t._v(t._s(e.explain))])])})),0)])]),t._m(1)])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message"},[a("p",{staticClass:"message-title"},[t._v("LEARN TO CODE.")]),a("div",{staticClass:"message-flexbox"},[a("p",{staticClass:"message-title"},[t._v("LEARN TO BE")]),a("p",{staticClass:"message-title"},[t._v("CREATIVE.")])]),a("p",{staticClass:"message-explain"},[t._v("Progateはオンラインプログラミング学習サービスです。")]),a("p",{staticClass:"message-explain"},[t._v("初心者にもやさしいスライドとレッスンで、ウェブサービスを作りながらプログラミングを学んでいきましょう。")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"development"}},[a("div",{staticClass:"development"},[a("h2",{staticClass:"progate"},[t._v("さあ、あなたもProgateでプログラミングを学んでみませんか？"),a("br"),a("span",[t._v("Let's learn to code,learn to be creative!")])]),a("div",{staticClass:"develop"},[a("a",{attrs:{href:"#"}},[t._v("さっそく開発する")])])])])}],g={data:function(){return{lists:[{title:"HTML&CSS",image:a("e901"),explain:"ウェブページの作成に使用される言語です。HTMLとCSSを組み合わせることで、静的なページを作り上げることができます。"},{title:"jQuery",image:a("f183"),explain:"素敵な動きを手軽に実装できるJavaScriptライブラリです。 アニメーション効果をつけたり、Ajax（エイジャックス）を使って外部ファイルを読み込んだりと色々なことができます。"},{title:"Ruby",image:a("0794"),explain:"オープンソースの動的なプログラミング言語で、 シンプルさと高い生産性を備えています。大きなWebアプリケーションから小さな日用ツールまで、さまざまなソフトウェアを作ることができます。"},{title:"PHP",image:a("c891"),explain:"HTMLだけではページの内容を変えることはできません。PHPはHTMLにプログラムを埋め込み、それを可能にします。"}]}}},_=g,m=Object(u["a"])(_,v,d,!1,null,null,null),b=m.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("footer",[s("div",{staticClass:"footer-wrap"},[s("img",{staticClass:"footer-logo",attrs:{src:a("8bef")}}),s("p",[t._v("Learn to code.learn to be creative")])])])])}],x={},w=Object(u["a"])(x,h,C,!1,null,null,null),y=w.exports,O={name:"App",components:{Header:p,Main:b,Footer:y}},j=O,E=Object(u["a"])(j,n,i,!1,null,null,null),P=E.exports,S=(a("6672"),a("ecee")),T=a("c074"),k=a("b702"),M=a("f2d1"),$=a("ad3d");S["c"].add(T["a"],k["a"],M["a"]),s["a"].component("font-awesome-icon",$["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(P)}}).$mount("#app")},6672:function(t,e,a){},"8bef":function(t,e,a){t.exports=a.p+"img/footer-logo.50d906c2.png"},"9d64":function(t,e,a){t.exports=a.p+"img/logo.0cffbffb.png"},c891:function(t,e,a){t.exports=a.p+"img/php.70b23670.png"},e901:function(t,e,a){t.exports=a.p+"img/html-css.ac243107.png"},f183:function(t,e,a){t.exports=a.p+"img/jquery.f020d2f6.png"}});
//# sourceMappingURL=app.bc6a32f6.js.map