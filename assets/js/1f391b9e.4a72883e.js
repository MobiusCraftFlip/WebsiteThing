(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{113:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},114:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(105),c=n(3),l=n(103),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(23).a,theme:s};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var d=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},h=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function f(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var g=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),u(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=p({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?p({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),u(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var c=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),u(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,c=p({},f(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?p({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c})),u(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,c=0,l=[],s=[l];c>-1;){for(;(o=a[c]++)<r[c];){var i=void 0,u=t[c],p=n[c][o];if("string"==typeof p?(u=c>0?u:["plain"],i=p):(u=h(u,p.type),p.alias&&(u=h(u,p.alias)),i=p.content),"string"==typeof i){var y=i.split(d),f=y.length;l.push({types:u,content:y[0]});for(var g=1;g<f;g++)m(l),s.push(l=[]),l.push({types:u,content:y[g]})}else c++,t.push(u),n.push(i),a.push(0),r.push(i.length)}c--,t.pop(),n.pop(),a.pop(),r.pop()}return m(l),s}(void 0!==c?this.tokenize(t,a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var v=n(113),b=n.n(v),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(110),E=n(102),O=function(){var e=Object(E.useThemeConfig)().prism,t=Object(j.a)().isDarkTheme,n=e.theme||k,a=e.darkTheme||n;return t?a:n},N=n(104),C=n(57),T=n.n(C),x=/{([\d,-]+)}/,B=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},L=/(?:title=")(.*)(?:")/;function w(e){var t=e.children,n=e.className,o=e.metastring,s=Object(E.useThemeConfig)().prism,u=Object(a.useState)(!1),p=u[0],d=u[1],m=Object(a.useState)(!1),h=m[0],y=m[1];Object(a.useEffect)((function(){y(!0)}),[]);var f=Object(a.useRef)(null),v=[],k="",j=O(),C=Array.isArray(t)?t.join(""):t;if(o&&x.test(o)){var w=o.match(x)[1];v=b()(w).filter((function(e){return e>0}))}o&&L.test(o)&&(k=o.match(L)[1]);var S=n&&n.replace(/language-/,"");!S&&s.defaultLanguage&&(S=s.defaultLanguage);var _=C.replace(/\n$/,"");if(0===v.length&&void 0!==S){for(var P,D="",A=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return B(["js","jsBlock"]);case"jsx":case"tsx":return B(["js","jsBlock","jsx"]);case"html":return B(["js","jsBlock","html"]);case"python":case"py":return B(["python"]);default:return B()}}(S),R=C.replace(/\n$/,"").split("\n"),z=0;z<R.length;){var I=z+1,$=R[z].match(A);if(null!==$){switch($.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=I+",";break;case"highlight-start":P=I;break;case"highlight-end":D+=P+"-"+(I-1)+","}R.splice(z,1)}else z+=1}v=b()(D),_=R.join("\n")}var F=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus()}(_),d(!0),setTimeout((function(){return d(!1)}),2e3)};return r.a.createElement(g,Object(c.a)({},i,{key:String(h),theme:j,code:_,language:S}),(function(e){var t,n=e.className,a=e.style,o=e.tokens,s=e.getLineProps,i=e.getTokenProps;return r.a.createElement("div",{className:T.a.codeBlockContainer},k&&r.a.createElement("div",{style:a,className:T.a.codeBlockTitle},k),r.a.createElement("div",{className:Object(l.a)(T.a.codeBlockContent,S)},r.a.createElement("div",{tabIndex:0,className:Object(l.a)(n,T.a.codeBlock,"thin-scrollbar",(t={},t[T.a.codeBlockWithTitle]=k,t))},r.a.createElement("div",{className:T.a.codeBlockLines,style:a},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=s({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(c.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(c.a)({key:t},i({token:e,key:t})))})))})))),r.a.createElement("button",{ref:f,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(l.a)(T.a.copyButton),onClick:F},p?r.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var S=n(7),_=(n(58),n(59)),P=n.n(_),D=function(e){return function(t){var n,a=t.id,o=Object(S.a)(t,["id"]),c=Object(E.useThemeConfig)().navbar.hideOnScroll;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(l.a)("anchor",(n={},n[P.a.enhancedAnchor]=!c,n)),id:a}),o.children,r.a.createElement("a",{className:"hash-link",href:"#"+a,title:Object(N.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.a.createElement(e,o)}},A={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(w,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(o.a,e)},pre:function(e){var t=e.children;return r.a.createElement(w,null==t?void 0:t.props)},h1:D("h1"),h2:D("h2"),h3:D("h3"),h4:D("h4"),h5:D("h5"),h6:D("h6")};t.a=A},115:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(103);var c=function(e,t,n){var r=Object(a.useState)(void 0),o=r[0],c=r[1];Object(a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,l=!1,s=document.getElementsByClassName(e);r<s.length&&!l;){var i=s[r],u=i.href,p=decodeURIComponent(u.substring(u.indexOf("#")+1));a.id===p&&(o&&o.classList.remove(t),i.classList.add(t),c(i),l=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},l=n(56),s=n.n(l),i="table-of-contents__link";function u(e){var t=e.toc,n=e.isChild;return t.length?r.a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:i,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(u,{isChild:!0,toc:e.children}))}))):null}t.a=function(e){var t=e.toc;return c(i,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(o.a)(s.a.tableOfContents,"thin-scrollbar")},r.a.createElement(u,{toc:t}))}},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(107),c=n(106),l=n(114),s=n(115);t.default=function(e){var t=e.content,n=t.frontMatter,a=t.metadata,i=n.title,u=n.description,p=n.wrapperClassName,d=n.hide_table_of_contents,m=a.permalink;return r.a.createElement(o.a,{title:i,description:u,permalink:m,wrapperClassName:p},r.a.createElement("main",null,r.a.createElement("div",{className:"container container--fluid"},r.a.createElement("div",{className:"margin-vert--lg padding-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("div",{className:"container"},r.a.createElement(c.a,{components:l.a},r.a.createElement(t,null)))),!d&&t.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{toc:t.toc})))))))}}}]);