!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("React"),require("MaterialUI"));else if("function"==typeof define&&define.amd)define(["React","MaterialUI"],t);else{var r="object"==typeof exports?t(require("React"),require("MaterialUI")):t(e.React,e.MaterialUI);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,((e,t)=>(()=>{"use strict";var r={864:e=>{e.exports=t},24:t=>{t.exports=e}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{o.r(a);var e=o(24),t=o.n(e),r=o(864);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i,u={Render:function(e){var o=e.env,a=e.update,l=e.devParams,i=e.property,u=(e.style,e.monitor),c=e.trigger;if(e.children,e.element,e.prop,t().useEffect((function(){if(u&&u.setValue){var e=u.setValue((function(e){i.value=e,a()}));return function(){e()}}}),[]),t().useEffect((function(){if(u&&u.setOptions){var e=u.setOptions((function(e){i.options=e,a()}));return function(){e()}}}),[]),"dev"===o){var f=t().useRef();return t().useEffect((function(){f.current&&f.current.addEventListener("mousedown",(function(e){e.stopPropagation(),e.preventDefault()}),!0)}),[]),t().createElement(r.FormControl,n({},l,{size:i.size,fullWidth:i.fullWidth,ref:function(e){return f.current=e}}),t().createElement(r.InputLabel,null,i.label),t().createElement(r.Select,{multiple:i.multiple,label:i.label,variant:i.variant,disabled:i.disabled,value:i.value,MenuProps:{open:!1}},i.options.map((function(e,n){return t().createElement(r.MenuItem,{key:n,value:e.value},e.label)}))))}if("prod"===o)return t().createElement(r.FormControl,{size:i.size,fullWidth:i.fullWidth},t().createElement(r.InputLabel,null,i.label),t().createElement(r.Select,{multiple:i.multiple,label:i.label,variant:i.variant,disabled:i.disabled,open:i.open,value:i.value,onChange:function(e){i.value=e.target.value,a(),a(),c&&c.onChange&&c.onChange(i.value,e)},onOpen:function(e){i.open=e.target.open,a(),c&&c.onOpen&&c.onOpen(i.open,e)}},i.options.map((function(e,n){return t().createElement(r.MenuItem,{key:n,value:e.value},e.label)}))))},license:{key:"Material-Select",dependencies:["MaterialUI"]}};window.graphElement=window.graphElement?[].concat(function(e){if(Array.isArray(e))return l(e)}(i=window.graphElement)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(i)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[u]):[u]})(),a})()));