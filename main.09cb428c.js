parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||n(e)||r(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return c(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=document.querySelector(".append-row"),u=document.querySelector(".remove-row"),d=document.querySelector(".append-column"),i=document.querySelector(".remove-column"),a=document.querySelector("tbody"),m=document.querySelector(".container");function y(e){var t=a.querySelector("tr");a.insertAdjacentHTML("beforeend","\n    <tr>".concat(function(e){for(var t="",r=0;r<e;r++)t+="<td></td>";return t}(t.children.length),"</tr>\n  "))}function s(e){a.lastElementChild.remove()}function S(t){e(a.querySelectorAll("tr")).map(function(e){var t=document.createElement("td");return e.append(t),e})}function b(t){e(a.querySelectorAll("tr")).map(function(e){e.lastElementChild.remove()})}function f(e){10===a.querySelectorAll("tr").length&&document.querySelector(".append-row").setAttribute("disabled",""),a.querySelectorAll("tr").length<10&&document.querySelector(".append-row").removeAttribute("disabled"),2===a.querySelectorAll("tr").length&&document.querySelector(".remove-row").setAttribute("disabled",""),a.querySelectorAll("tr").length>2&&document.querySelector(".remove-row").removeAttribute("disabled"),2===a.querySelector("tr").children.length&&document.querySelector(".remove-column").setAttribute("disabled",""),10===a.querySelector("tr").children.length&&document.querySelector(".append-column").setAttribute("disabled",""),a.querySelector("tr").children.length>2&&document.querySelector(".remove-column").removeAttribute("disabled"),a.querySelector("tr").children.length<10&&document.querySelector(".append-column").removeAttribute("disabled")}l.addEventListener("click",y),u.addEventListener("click",s),d.addEventListener("click",S),i.addEventListener("click",b),m.addEventListener("click",f);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.09cb428c.js.map