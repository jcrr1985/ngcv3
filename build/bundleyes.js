!function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)t.d(e,o,function(r){return n[r]}.bind(null,o));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=4)}([function(n,r,t){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map(function(r){var t=function(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var o=(a=e,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(p," */")),i=e.sources.map(function(n){return"/*# sourceURL=".concat(e.sourceRoot).concat(n," */")});return[t].concat(i).concat([o]).join("\n")}var a,l,p;return[t].join("\n")}(r,n);return r[2]?"@media ".concat(r[2],"{").concat(t,"}"):t}).join("")},r.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(e[i]=!0)}for(var a=0;a<n.length;a++){var l=n[a];null!=l[0]&&e[l[0]]||(t&&!l[2]?l[2]=t:t&&(l[2]="(".concat(l[2],") and (").concat(t,")")),r.push(l))}},r}},function(n,r,t){"use strict";var e,o={},i=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},a=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}();function l(n,r){for(var t=[],e={},o=0;o<n.length;o++){var i=n[o],a=r.base?i[0]+r.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};e[a]?e[a].parts.push(l):t.push(e[a]={id:a,parts:[l]})}return t}function p(n,r){for(var t=0;t<n.length;t++){var e=n[t],i=o[e.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](e.parts[a]);for(;a<e.parts.length;a++)i.parts.push(f(e.parts[a],r))}else{for(var l=[];a<e.parts.length;a++)l.push(f(e.parts[a],r));o[e.id]={id:e.id,refs:1,parts:l}}}}function c(n){var r=document.createElement("style");if(void 0===n.attributes.nonce){var e=t.nc;e&&(n.attributes.nonce=e)}if(Object.keys(n.attributes).forEach(function(t){r.setAttribute(t,n.attributes[t])}),"function"==typeof n.insert)n.insert(r);else{var o=a(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}return r}var d,s=(d=[],function(n,r){return d[n]=r,d.filter(Boolean).join("\n")});function g(n,r,t,e){var o=t?"":e.css;if(n.styleSheet)n.styleSheet.cssText=s(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}var u=null,x=0;function f(n,r){var t,e,o;if(r.singleton){var i=x++;t=u||(u=c(r)),e=g.bind(null,t,i,!1),o=g.bind(null,t,i,!0)}else t=c(r),e=function(n,r,t){var e=t.css,o=t.media,i=t.sourceMap;if(o&&n.setAttribute("media",o),i&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,t,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).attributes="object"==typeof r.attributes?r.attributes:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=i());var t=l(n,r);return p(t,r),function(n){for(var e=[],i=0;i<t.length;i++){var a=t[i],c=o[a.id];c&&(c.refs--,e.push(c))}n&&p(l(n,r),r);for(var d=0;d<e.length;d++){var s=e[d];if(0===s.refs){for(var g=0;g<s.parts.length;g++)s.parts[g]();delete o[s.id]}}}}},function(n,r,t){"use strict";n.exports=function(n,r){return"string"!=typeof(n=n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||r?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,r,t){n.exports=t.p+"a913363dd3b2be44bea2f8f71521eda9.png"},function(n,r,t){"use strict";t.r(r);t(5),t(6),t(7),t(8),t(11),t(13),t(15),t(17)},function(n,r){var t=angular.module("evalApp",["ngRoute"]);t.config(function(n){n.when("/",{templateUrl:"content.html",controller:"contentController"}).when("/about",{templateUrl:"sobremi.html",controller:"sobremiController"})}),t.controller("contentController",function(n){n.message="AngularJS: Exito cargando el html principal"}),t.controller("sobremiController",function(n){n.message="AngularJS: Exito cargando el About",$("#accordion").accordion()}),$(document).ready(function(){date=new Date;var n=moment(date).format("dddd,MMMM Do YYYY"),r=moment().subtract(1,"days").format("dddd,MMMM Do YYYY");$(".postDate").html(n),$(".postDate2").html(r),$(".bxslider").bxSlider({auto:!0,autoControls:!0,stopAutoOnClick:!0,pager:!0}),$(".goUp").click(function(n){n.preventDefault(),$("html,body").animate({scrollTop:0},500)}),$(".modais").iziModal({history:!1,fullscreen:!0,loop:!0,zindex:99999,focusInput:!0})})},function(n,r){angular.module("toDoList",["LocalStorageModule"]).controller("toDoController",function(n,r){r.get("angular-todolist")?(n.todo=r.get("angular-todolist"),console.log("TCL: $scope.todo ",n.todo)):n.todo=[],n.newTask={},n.addAct=function(){n.todo.push(n.newTask),n.newTask={},r.set("angular-todolist",n.todo)}})},function(n,r){},function(n,r,t){var e=t(9);"string"==typeof e&&(e=[[n.i,e,""]]);var o={insert:"head",singleton:!1};t(1)(e,o);e.locals&&(n.exports=e.locals)},function(n,r,t){r=n.exports=t(0)(!1);var e=t(2),o=e(t(3)),i=e(t(10));r.push([n.i,"* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    list-style: none;\r\n    transition: all 1s;\r\n}\r\n\r\nbody,\r\nhtml {\r\n    overflow-x: hidden;\r\n}\r\n\r\n#logo {\r\n    animation: circle 3s infinite alternate;\r\n}\r\n\r\n@keyframes circle {\r\n    from {\r\n        transform: rotate(-20deg);\r\n    }\r\n    to {\r\n        transform: rotate(20deg);\r\n    }\r\n}\r\n\r\n.clearfix {\r\n    float: none;\r\n    clear: both;\r\n}\r\n\r\nbody {\r\n    overflow-x: hidden;\r\n    background-attachment: fixed;\r\n    width: 99%;\r\n}\r\n\r\n#global {\r\n    width: 65%;\r\n    margin: 0 auto;\r\n    margin-top: 30px;\r\n    background-color: white;\r\n    padding: 20px;\r\n    box-shadow: 2px 2px 3px #ccc;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#logo {\r\n    font-family: verdana;\r\n    letter-spacing: 4px;\r\n    font-size: 30px;\r\n    color: white;\r\n    text-align: center;\r\n    width: auto;\r\n    height: auto;\r\n    float: left;\r\n    line-height: 75px;\r\n    text-transform: uppercase;\r\n    padding-right: 25px;\r\n    padding-left: 25px;\r\n    margin-right: 10px;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#menu {\r\n    background-color: #333;\r\n    width: 100%;\r\n    text-transform: uppercase;\r\n    font-family: helvetica;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px\r\n}\r\n\r\n#menu ul li {\r\n    display: -webkit-inline-box;\r\n    padding: 15px;\r\n    transition: all 300ms;\r\n    color: white;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n#menu ul li a {\r\n    text-decoration: none;\r\n    color: orange;\r\n    padding: 15px;\r\n}\r\n\r\narticle.post {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n}\r\n\r\n.postDate {\r\n    font-weight: bold;\r\n    font-family: helvetica;\r\n    color: gray;\r\n}\r\n\r\n.postDate2 {\r\n    font-weight: bold;\r\n    font-family: helvetica;\r\n    color: gray;\r\n}\r\n\r\n.post h2 {\r\n    font-size: 25px;\r\n    color: #333;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.post {\r\n    padding: 10px;\r\n    padding-right: 35px;\r\n}\r\n\r\n.postDate {\r\n    color: gray;\r\n}\r\n\r\n.post p {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    line-height: 20px;\r\n    text-align: justify;\r\n    font-family: helvetica, arial;\r\n}\r\n\r\n.post hr {\r\n    border: 1px solid #e7e7e7;\r\n}\r\n\r\n#firstHr {\r\n    border: 1px solid #e7e7e7;\r\n    margin-top: 5px;\r\n}\r\n\r\n.postN {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n#contentSecondP {\r\n    margin-bottom: 5px !important;\r\n}\r\n\r\n.buttonmore {\r\n    padding: 13px;\r\n    text-decoration: none;\r\n    color: white;\r\n    text-align: center;\r\n    margin: 10px;\r\n    margin-left: 0px !important;\r\n    font-family: helvetica;\r\n    letter-spacing: 2px;\r\n    border-radius: 5px;\r\n    box-shadow: 0px 0px 5px gray;\r\n    font-size: 14px;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.whoamI {\r\n    width: auto;\r\n    font-family: helvetica, arial;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.whoamI p {\r\n    margin-top: 10px;\r\n    margin-bottom: 20px;\r\n    line-height: 20px;\r\n    width: auto;\r\n    text-align: justify;\r\n}\r\n\r\n.whoamI #aboutme {\r\n    margin-top: 10px;\r\n    margin-top: 10px;\r\n    margin-bottom: 20px;\r\n    background: url("+o+') repeat;\r\n}\r\n\r\n.whoamI span {\r\n    background: white;\r\n    padding: 5px;\r\n}\r\n\r\npicture img {\r\n    width: 100%;\r\n}\r\n\r\n.figcaption1 {\r\n    font-size: 15px;\r\n    font-family: helvetica, arial;\r\n    font-weight: bold;\r\n}\r\n\r\n.figcaption2 {\r\n    font-size: 12px;\r\n    font-family: helvetica, arial;\r\n    margin-top: .5rem;\r\n}\r\n\r\n#login {}\r\n\r\n#loginForm {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    padding: 5px;\r\n}\r\n\r\n#loginForm label {\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n#login input {\r\n    border-radius: 3px;\r\n    border: 1px solid #ccc;\r\n    height: 25px;\r\n    box-shadow: 0px 0px 5px gray;\r\n    display: block\r\n}\r\n\r\n#login input:focus {\r\n    background-color: #ccc;\r\n}\r\n\r\n#login input[type="submit"] {\r\n    margin-top: 15px;\r\n    margin-bottom: 10px;\r\n    padding: 7px;\r\n    border-radius: 3px;\r\n    box-shadow: 0px 0px 5px gray;\r\n    background: #ccc;\r\n    color: #333333;\r\n    margin: 1rem auto 0 auto;\r\n}\r\n\r\nh4,\r\nh2,\r\nfigcaption,\r\nspan {\r\n    color: #333333;\r\n}\r\n\r\nfieldset {\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    border: 2px solid #d2d1d1;\r\n}\r\n\r\nlegend {\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n}\r\n\r\n#slider {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.bx-wrapper,\r\n.bx-viewport {\r\n    height: 250px !important;\r\n}\r\n\r\n#megaheader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n#rightHead {\r\n    width: auto;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n#change-theme {\r\n    position: fixed;\r\n    top: 40%;\r\n    width: 50px;\r\n    height: 150px;\r\n    background-color: rgba(51, 51, 51, .5);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-left: 5px;\r\n}\r\n\r\n#change-theme div {\r\n    width: 23px;\r\n    height: 23px;\r\n    border: 1px solid rgba(255, 255, 255, .6);\r\n    border-radius: 7px;\r\n    margin-bottom: 7px;\r\n    margin-top: 5px;\r\n    transition: all 1.5s;\r\n}\r\n\r\n#change-theme div:hover {\r\n    width: 25px;\r\n    height: 25px;\r\n    border: 1px solid rgba(255, 255, 255, .6);\r\n    border-radius: 7px;\r\n    cursor: pointer;\r\n    border-radius: 15px;\r\n}\r\n\r\n#change-theme div:nth-child(1) {\r\n    background: #235e3d;\r\n}\r\n\r\n#change-theme div:nth-child(2) {\r\n    background: steelblue;\r\n}\r\n\r\n#change-theme div:nth-child(3) {\r\n    background: #D32F1B;\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    height: 50px;\r\n    background: rgba(51, 51, 51, 0.7);\r\n    margin: 0 auto;\r\n    width: 65%;\r\n    margin-top: 50px;\r\n    line-height: 40px;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    vertical-align: middle;\r\n}\r\n\r\n.goUp {\r\n    text-decoration: none;\r\n    color: white;\r\n    font-family: Helvetica, arial;\r\n    text-shadow: 2px 2px 8px yellow;\r\n    cursor: pointer;\r\n    font-family: Helvetica, arial;\r\n}\r\n\r\n.miCV {\r\n    color: white;\r\n    font-weight: bold;\r\n    font-family: Vivaldi, Arial;\r\n    text-shadow: 2px 2px 8px yellow;\r\n}\r\n\r\n.themeChanger {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-shadow: 0px 0px 5px #FFF;\r\n}\r\n\r\n.picUpRight {\r\n    display: none;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    #global {\r\n        width: 100%;\r\n    }\r\n    .picUpRight {\r\n        display: block;\r\n    }\r\n    .postDate {\r\n        display: none;\r\n    }\r\n    .whoamI {\r\n        display: none;\r\n    }\r\n    #change-theme {\r\n        display: none;\r\n    }\r\n    #logo {\r\n        margin-top: 50px;\r\n        font-size: 20px;\r\n        line-height: 37px;\r\n        animation: circle 3s infinite alternate;\r\n        padding: 10px;\r\n        box-shadow: 3px 3px 10px black;\r\n    }\r\n    @keyframes circle {\r\n        from {\r\n            transform: rotate(0deg);\r\n        }\r\n        to {\r\n            transform: rotate(360deg);\r\n        }\r\n    }\r\n    #menu ul li {\r\n        padding: 8px;\r\n        transition: all 300ms;\r\n        margin-left: 3px;\r\n        margin-right: 3px;\r\n    }\r\n    #menu ul li a {\r\n        padding: 8px;\r\n    }\r\n}\r\n\r\n.contactame ul li a {\r\n    font-family: Helvetica, arial;\r\n    font-size: 14px;\r\n}\r\n\r\n.contactame {\r\n    padding: 15px;\r\n}\r\n\r\n#box {\r\n    font-size: 14px;\r\n}\r\n\r\n#accordion li {\r\n    margin-top: 8px;\r\n    margin-bottom: 12px;\r\n    color: darkblue !important;\r\n}\r\n\r\n#accordion li::before {\r\n    content: url('+i+");\r\n    color: darkblue !important;\r\n}\r\n\r\nspan.more {\r\n    font-size: 12px;\r\n    color: #333;\r\n}\r\n\r\n.exp {\r\n    font-size: 16px;\r\n    color: #333;\r\n    font-weight: bold;\r\n}\r\n\r\n* {\r\n    text-align: justify;\r\n}\r\n\r\n.ui-widget-content a {\r\n    color: darkblue !important;\r\n}",""])},function(n,r,t){n.exports=t.p+"00f691b2ef67954c2bf0c0512394a694.png"},function(n,r,t){var e=t(12);"string"==typeof e&&(e=[[n.i,e,""]]);var o={insert:"head",singleton:!1};t(1)(e,o);e.locals&&(n.exports=e.locals)},function(n,r,t){r=n.exports=t(0)(!1);var e=t(2)(t(3));r.push([n.i,"*{\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n\tlist-style: none;\r\n\r\n}\r\n\r\n.clearfix{\r\n\tfloat: none;\r\n\tclear: both;\r\n}\r\n\r\nbody{\r\n\t\r\n\toverflow-x: hidden;\r\n\tbackground-attachment: fixed;\r\n\twidth: 99%;\r\n}\r\n\r\n#global{\r\n\twidth: 65%;\r\n\tmargin: 0 auto;\r\n\tmargin-top: 30px;\r\n\tbackground-color: white;\r\n\tpadding:20px;\r\n\tbox-shadow: 2px 2px 3px #ccc;\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n#logo{\r\n\tfont-family: verdana;\r\n\tletter-spacing: 4px;\r\n\r\n\tfont-size: 30px;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\twidth:auto;\r\n\theight: auto;\r\n\tfloat: left;\r\n\tline-height: 75px;\r\n\ttext-transform: uppercase;\r\n\tpadding-right: 25px;\r\n\tpadding-left: 25px;\r\n\tmargin-right: 10px;\r\n}\r\n\r\nheader{\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n\r\n#menu{\r\n\tbackground-color: #333;\r\n\twidth: 100%;\r\n\ttext-transform: uppercase;\r\n\tfont-family: helvetica;\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 20px;\r\n\r\n}\r\n\r\n\r\n#menu ul li{\r\n\tdisplay: -webkit-inline-box;\r\n\tpadding: 15px;\r\n\ttransition: all 300ms;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n#menu ul li:hover{\r\n\tcursor: pointer;\r\n}\r\n\r\n#menu ul li a{\r\n\r\ntext-decoration: none;\r\ncolor: orange;\r\npadding: 15px;\r\n}\r\n\r\narticle.post{\r\n\tdisplay: flex;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n}\r\n\r\n.postDate{\r\n\tfont-weight: bold;\r\n\tfont-family: helvetica;\r\n\tcolor: gray;\r\n}\r\n\r\n.postDate2{\r\n\tfont-weight: bold;\r\n\tfont-family: helvetica;\r\n\tcolor: gray;\r\n}\r\n\r\n.post h2{\r\n\tfont-size: 25px;\r\n\tcolor: #333;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.post{\r\n\tpadding: 10px;\r\n\tpadding-right: 35px;\r\n\r\n}\r\n\r\n.postDate{\r\n\tcolor: gray;\r\n}\r\n\r\n.post p{\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 10px;\r\n\tline-height: 20px;\r\n\ttext-align: justify;\r\n\tfont-family: helvetica, arial;\r\n}\r\n\r\n .post hr{\r\n\tborder: 1px solid #e7e7e7;\r\n}\r\n\r\n#firstHr{\r\n\tborder: 1px solid #e7e7e7;\r\n\tmargin-top: 5px;\r\n}\r\n\r\n.postN{\r\n\tmargin-bottom: 25px;\r\n}\r\n\r\n\r\n\r\n#contentSecondP{\r\n\tmargin-bottom: 5px!important;\r\n}\r\n\r\n.buttonmore{\r\n\tpadding: 13px;\r\n\r\n\ttext-decoration: none;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\tmargin: 10px;\r\n\tmargin-left: 0px!important;\r\n\tfont-family: helvetica;\r\n\tletter-spacing: 2px;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 0px 0px 5px gray;\r\n\tfont-size: 14px;\r\n}\r\n\r\n\r\n#content{\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\r\n}\r\n\r\n.whoamI{\r\n\twidth: 23%;\r\n\tfont-family: helvetica, arial;\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n\tpadding: 10px;\r\n\ttext-align: center;\r\n\r\n}\r\n\r\n.whoamI p {\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 20px;\r\n\tline-height: 20px;\r\n\twidth: auto;\r\n\ttext-align: justify;\r\n}\r\n\r\n.whoamI #aboutme {\r\n\tmargin-top: 10px;\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 20px;\r\n\tbackground: url("+e+') repeat;\r\n\r\n}\r\n\r\n.whoamI span{\r\n\tbackground:white;\r\n\tpadding: 5px;\r\n}\r\npicture img{\r\n\twidth: 100%;\r\n}\r\n\r\n.figcaption1{\r\n\tfont-size: 15px;\r\n\tfont-family: helvetica, arial;\t\r\n\tfont-weight: bold;\t\r\n\r\n}\r\n\r\n.figcaption2{\r\n\tfont-size: 12px;\r\n\tfont-family: helvetica, arial;\t\t\r\n\r\n}\r\n\r\n\r\n#login{\r\n\r\n}\r\n\r\n#loginForm{\r\n\t display: flex;\r\n\t flex-direction: column;\r\n\t align-items: center;\r\n\t margin-top: 10px;\r\n\t margin-bottom: 10px;\r\n\t padding: 5px;\r\n}\r\n\r\n#loginForm label{\r\n\tmargin-bottom: 5px;\r\n\tmargin-top: 5px;\r\n}\r\n\r\n\r\n#login input{\r\n\tborder-radius: 3px;\r\n\tborder: 1px solid #ccc;\r\n\theight: 25px;\r\n\tbox-shadow: 0px 0px 5px gray;\r\n}\r\n\r\n#login input:focus{\r\n\tbackground-color: #ccc;\r\n}\r\n\r\ninput[type="submit"]{\r\n\tmargin-top: 15px;\r\n\tmargin-bottom: 10px;\r\n\tpadding:7px;\r\n\tborder-radius: 3px;\r\n\tbox-shadow: 0px 0px 5px gray;\r\n\tbackground: #ccc;\r\n\tcolor: #333333;\r\n}\r\n\r\nh4, h2, figcaption, span{\r\n\tcolor: #333333;\r\n}\r\n\r\nfieldset{\r\n\tborder-radius: 5px;\r\n\tpadding: 10px;\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 10px;\r\n\tborder-radius: 5px;\r\n\tborder: 2px solid #d2d1d1;\r\n}\r\n\r\nlegend{\r\n\tpadding-right: 10px;\r\n    padding-left: 10px;\r\n}\r\n\r\n\r\n#megaheader{\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n#rightHead{\r\n\twidth: auto;\r\n\tmargin-left: 10px;\r\n\tmargin-right: 10px;\r\n}\r\n\r\n\r\n#change-theme{\r\n\tposition: fixed;\r\n\ttop: 40%;\r\n\twidth: 50px;\r\n\theight:150px;\r\n\tbackground-color: rgba(51,51,51,.5);\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content:center;\r\n\talign-items: center;\r\n\tmargin-left: 5px;\r\n}\r\n\r\n#change-theme div{\r\n\twidth: 23px;\r\n\theight: 23px;\r\n\tborder: 1px solid rgba(255,255,255,.6);\r\n\tborder-radius: 7px;\r\n\tmargin-bottom: 7px;\r\n\tmargin-top: 5px;\r\n\ttransition: all 1.5s;\r\n}\r\n\r\n#change-theme div:hover{\r\n\twidth: 25px;\r\n\theight: 25px;\r\n\tborder: 1px solid rgba(255,255,255,.6);\r\n\tborder-radius: 7px;\r\n\r\n\tcursor: pointer;\r\n\tborder-radius: 15px;\r\n}\r\n\r\n\r\n#change-theme div:nth-child(1) {\r\n  background: #235e3d;\r\n}\r\n\r\n#change-theme div:nth-child(2) {\r\n  background: steelblue;\r\n}\r\n\r\n#change-theme div:nth-child(3) {\r\n  background: #D32F1B;\r\n}\r\n\r\nfooter{\r\n\tdisplay: flex;\r\n\theight: 50px;\r\n\tbackground: rgba(51, 51, 51, 0.7);\r\n\tmargin: 0 auto;\r\n\twidth: 65%;\r\n\tmargin-top: 50px;\r\n\tline-height: 40px;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.goUp {\r\n\ttext-decoration: none;\r\n\tcolor:white;\r\n\tfont-family: Helvetica,arial;\r\n\ttext-shadow: 2px 2px 8px yellow;\r\n\tcursor: pointer;\r\n\tfont-family: Helvetica, arial;\r\n}\r\n\r\n.miCV{\r\n\tcolor:white;\r\n\tfont-weight: bold;\r\n\tfont-family: Vivaldi,Arial;\r\n\ttext-shadow: 2px 2px 8px yellow;\r\n}\r\n\r\n.themeChanger{\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\ttext-shadow: 0px 0px 5px #FFF;\r\n}\r\n\r\n#box{\r\n\tfont-size: 14px;\r\n\r\n}\r\n\r\n#accordion li{\r\n\tmargin-top: 5px;\r\n\tmargin-bottom: 5px;\r\n\tlist-style-type: circle!important;\r\n\r\n}\r\n\r\n.exp{\r\n\tcolor: cadetblue;\r\n\tfont-weight: bold;\r\n\r\n}\r\n\r\n.sep{\r\nmargin:15px 0\r\n\r\n}\r\n\r\n.acts{\r\n\tmargin:15px 0;\r\n\tfont-weight: bold;\r\n}\r\n\r\n\r\n#logo{\r\n\tanimation: circle 3s infinite alternate;\r\n\r\n}\r\n\r\n@keyframes circle{\r\n\tfrom{\r\n\t\ttransform: rotate(-20deg);\r\n\t}\r\n\tto{\r\n\t\ttransform: rotate(20deg);\r\n\t}\r\n}\r\n\r\n.contact{\r\n\tcolor: blue;\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.ui-accordion-content{\r\n\theight: auto!important;\r\n}\r\n\r\n.picUpRight{\r\n\tdisplay: none;\r\n}\r\n\r\n\r\n@media screen and (max-width: 768px){\r\n\r\n\r\n\t#global{\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.picUpRight{\r\n\t\tdisplay: block;\r\n\t}\r\n\t.postDate{\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.whoamI{\r\n\t\tdisplay: none;\r\n\t}\r\n\t#change-theme{\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t#logo{\r\n\t   margin-top: 50px;\r\n\t   font-size: 20px;\r\n\t   line-height: 37px;\r\n\t   animation: circle 3s infinite alternate;\r\n\t   padding: 10px;\r\n\t   box-shadow: 3px 3px 10px black;\r\n\t}\r\n\r\n\r\n\t@keyframes circle{\r\n\t\tfrom{\r\n\t\t\ttransform: rotate(0deg);\r\n\t\t}\r\n\t\tto{\r\n\t\t\ttransform: rotate(360deg);\r\n\t\t}\r\n\t}\r\n\r\n\t#menu ul li{\r\n\t\tpadding: 8px;\r\n\t\ttransition: all 300ms;\r\n\t\tmargin-left: 3px;\r\n\t\tmargin-right: 3px;\r\n\t}\r\n\r\n\t#menu ul li a{\r\n\t\tpadding: 8px;\r\n\t}\r\n\r\n}\r\n\r\n\r\n.contactame ul li a{\r\n\r\n\tfont-family: Helvetica, arial;\r\n\tfont-size: 14px;\r\n\r\n}\r\n\r\n.contactame{\r\n\tpadding: 15px;\t\r\n}\r\n\r\n\r\n',""])},function(n,r,t){var e=t(14);"string"==typeof e&&(e=[[n.i,e,""]]);var o={insert:"head",singleton:!1};t(1)(e,o);e.locals&&(n.exports=e.locals)},function(n,r,t){(n.exports=t(0)(!1)).push([n.i,"#logo {\r\n    background: steelblue;\r\n}\r\n\r\n.buttonmore {\r\n    background: steelblue;\r\n}\r\n\r\n#menu ul li:hover {\r\n    background: steelblue;\r\n}\r\n\r\nbody {\r\n    background: url('https://picsum.photos/id/23/1500/1500');\r\n}",""])},function(n,r,t){var e=t(16);"string"==typeof e&&(e=[[n.i,e,""]]);var o={insert:"head",singleton:!1};t(1)(e,o);e.locals&&(n.exports=e.locals)},function(n,r,t){(n.exports=t(0)(!1)).push([n.i,"#logo {\r\n    background: #235e3d;\r\n}\r\n\r\n.buttonmore {\r\n    background: #235e3d;\r\n}\r\n\r\n#menu ul li:hover {\r\n    background: #235e3d;\r\n}\r\n\r\nbody {\r\n    background: url('https://picsum.photos/id/239/1500/1500');\r\n}",""])},function(n,r,t){var e=t(18);"string"==typeof e&&(e=[[n.i,e,""]]);var o={insert:"head",singleton:!1};t(1)(e,o);e.locals&&(n.exports=e.locals)},function(n,r,t){(n.exports=t(0)(!1)).push([n.i,"#logo {\r\n    background: #D32F1B;\r\n}\r\n\r\n.buttonmore {\r\n    background: #D32F1B;\r\n}\r\n\r\n#menu ul li:hover {\r\n    background: #D32F1B;\r\n}\r\n\r\nbody {\r\n    background: url('https://picsum.photos/id/238/1500/1500');\r\n}",""])}]);