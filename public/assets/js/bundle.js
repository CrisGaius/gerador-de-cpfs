(()=>{"use strict";var n={958:(n,r,e)=>{e.d(r,{A:()=>s});var o=e(354),t=e.n(o),a=e(314),i=e.n(a)()(t());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap);"]),i.push([n.id,":root {\n    --open-sans: 'Open Sans', sans-serif;\n    --azul: rgb(13,106, 134);\n    --azul-escuro: rgb(8, 54, 68);\n    --branco: #ffffff;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n    font-family: var(--open-sans);\n}\n\nbody {\n    background-color: var(--azul);\n    padding: 40px 0 40px 0;\n    justify-content: center;\n    align-items: center;\n}\n\n.container {\n    display: flex;\n}\n\nmain {\n    background-color: var(--branco);\n    padding: 20px 10px;\n    flex-direction: column;\n    width: 700px;\n    border-radius: 8px;\n}\n\nmain h1 {\n    margin: 0 0 20px 0;\n}\n\nmain p {\n    font-size: 17px;\n    line-height: 1.6;\n}\n\nform div.campo {\n    flex-direction: column;\n}\n\nform div.campo label {\n    margin: 20px 0 10px 0;\n    font-size: 18px;\n}\n\nform div.campo input {\n    height: 45px;\n    font-size: 18px;\n    padding-left: 10px;\n}\n\nform div.campo input:focus {\n    outline: 1px solid var(--azul);\n    border-radius: 3px;\n}\n\nform button#botao_enviar {\n    height: 45px;\n    width: 100%;\n    margin-top: 20px;\n    border: none;\n    background-color: var(--azul);\n    color: var(--branco);\n    font-size: 18px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\nform button#botao_enviar:hover{\n    background-color: var(--azul-escuro);\n    transition: .3s ease-in-out;\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;IACI,oCAAoC;IACpC,wBAAwB;IACxB,6BAA6B;IAC7B,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,UAAU;IACV,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;IAC7B,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,6BAA6B;IAC7B,oBAAoB;IACpB,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,2BAA2B;AAC/B",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\r\n\r\n:root {\r\n    --open-sans: 'Open Sans', sans-serif;\r\n    --azul: rgb(13,106, 134);\r\n    --azul-escuro: rgb(8, 54, 68);\r\n    --branco: #ffffff;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    outline: 0;\r\n    box-sizing: border-box;\r\n    font-family: var(--open-sans);\r\n}\r\n\r\nbody {\r\n    background-color: var(--azul);\r\n    padding: 40px 0 40px 0;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n}\r\n\r\nmain {\r\n    background-color: var(--branco);\r\n    padding: 20px 10px;\r\n    flex-direction: column;\r\n    width: 700px;\r\n    border-radius: 8px;\r\n}\r\n\r\nmain h1 {\r\n    margin: 0 0 20px 0;\r\n}\r\n\r\nmain p {\r\n    font-size: 17px;\r\n    line-height: 1.6;\r\n}\r\n\r\nform div.campo {\r\n    flex-direction: column;\r\n}\r\n\r\nform div.campo label {\r\n    margin: 20px 0 10px 0;\r\n    font-size: 18px;\r\n}\r\n\r\nform div.campo input {\r\n    height: 45px;\r\n    font-size: 18px;\r\n    padding-left: 10px;\r\n}\r\n\r\nform div.campo input:focus {\r\n    outline: 1px solid var(--azul);\r\n    border-radius: 3px;\r\n}\r\n\r\nform button#botao_enviar {\r\n    height: 45px;\r\n    width: 100%;\r\n    margin-top: 20px;\r\n    border: none;\r\n    background-color: var(--azul);\r\n    color: var(--branco);\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\nform button#botao_enviar:hover{\r\n    background-color: var(--azul-escuro);\r\n    transition: .3s ease-in-out;\r\n}"],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",o=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),o&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),o&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,o,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(i[A]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);o&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),t&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=t):p[4]="".concat(t)),r.push(p))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(t," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function e(n){for(var e=-1,o=0;o<r.length;o++)if(r[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var A=n[s],c=o.base?A[0]+o.base:A[0],p=a[c]||0,u="".concat(c," ").concat(p);a[c]=p+1;var l=e(u),d={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==l)r[l].references++,r[l].updater(d);else{var f=t(d,o);o.byIndex=s,r.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function t(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,t){var a=o(n=n||[],t=t||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var A=o(n,t),c=0;c<a.length;c++){var p=e(a[c]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}a=A}}},659:n=>{var r={};n.exports=function(n,e){var o=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(o,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(o){var t=r[o];if(void 0!==t)return t.exports;var a=r[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var o in r)e.o(r,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:r[o]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,console.log("cheguei aqui");var o=e(72),t=e.n(o),a=e(825),i=e.n(a),s=e(659),A=e.n(s),c=e(56),p=e.n(c),u=e(540),l=e.n(u),d=e(113),f=e.n(d),m=e(958),v={};v.styleTagTransform=f(),v.setAttributes=p(),v.insert=A().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=l(),t()(m.A,v),m.A&&m.A.locals&&m.A.locals})();
//# sourceMappingURL=bundle.js.map