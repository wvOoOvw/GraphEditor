!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("React"),require("MaterialUI"));else if("function"==typeof define&&define.amd)define(["React","MaterialUI"],r);else{var o="object"==typeof exports?r(require("React"),require("MaterialUI")):r(e.React,e.MaterialUI);for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}(self,((e,r)=>(()=>{"use strict";var o={864:e=>{e.exports=r},24:r=>{r.exports=e}},n={};function t(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return o[e](a,a.exports,t),a.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{t.r(a);var e=t(24),r=t.n(e),o=t(864);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},n.apply(this,arguments)}function i(){return r().createElement("div",{style:{width:24,height:"100%",position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}},r().createElement("div",{style:{position:"absolute",background:"gray",width:6*Math.sqrt(2),height:2,transform:"translateX(3px) rotateZ(-45deg)"}}),r().createElement("div",{style:{position:"absolute",background:"gray",width:6*Math.sqrt(2),height:2,transform:"translateX(-3px) rotateZ(45deg)"}}))}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var o=0,n=new Array(r);o<r;o++)n[o]=e[o];return n}var d,l={Render:function(e){var t=e.env,a=e.update,c=e.devParams,d=e.property,l=e.style,u=e.monitor,s=e.trigger,p=e.children,m=(e.element,e.prop);return r().useEffect((function(){if(u&&u.expandAccordion){var e=u.expandAccordion((function(e){d.expanded=!0,a(),s&&s.onExpandAccordion&&s.onExpandAccordion(d.expanded)}));return function(){e()}}}),[]),r().useEffect((function(){if(u&&u.collapseAccordion){var e=u.collapseAccordion((function(e){d.expanded=!1,a(),s&&s.onCollapseAccordion&&s.onCollapseAccordion(d.expanded)}));return function(){e()}}}),[]),"dev"===t?r().createElement(o.Accordion,n({},c,{expanded:d.expanded,disabled:d.disabled,disableGutters:d.disableGutters,square:d.square,sx:{"&.MuiAccordion-root":l.accordion,"& .MuiAccordionSummary-root":l.accordionSummary,"& .MuiAccordionDetails-root":l.accordionDetails}}),r().createElement(o.AccordionSummary,{expandIcon:d.expandIcon?r().createElement(i,null):void 0},!0===d.customSummary&&p&&p.accordionSummary?p.accordionSummary():null,!1===d.customSummary?d.summary:null),d.divider?r().createElement(o.Divider,null):null,r().createElement(o.AccordionDetails,null,p&&p.accordionDetails?p.accordionDetails():null)):"prod"===t?r().createElement(o.Accordion,{expanded:d.expanded,disabled:d.disabled,disableGutters:d.disableGutters,square:d.square,sx:{".MuiAccordion-root":l.accordion,".MuiAccordionSummary-root":l.accordionSummary,".MuiCollapse-root":l.accordionDetails},onChange:function(e){d.expanded=!d.expanded,a(),s&&s.onExpandAccordion&&!0===d.expanded&&s.onExpandAccordion(d.expanded,e),s&&s.onCollapseAccordion&&!1===d.expanded&&s.onCollapseAccordion(d.expanded,e)}},r().createElement(o.AccordionSummary,{expandIcon:d.expandIcon?r().createElement(i,null):void 0},!0===d.customSummary&&p&&p.accordionSummary?p.accordionSummary(m):null,!1===d.customSummary?d.summary:null),d.divider?r().createElement(o.Divider,null):null,r().createElement(o.AccordionDetails,null,p&&p.accordionDetails?p.accordionDetails(m):null)):void 0},license:{key:"Material-Accordion",dependencies:["MaterialUI"]}};window.graphElement=window.graphElement?[].concat(function(e){if(Array.isArray(e))return c(e)}(d=window.graphElement)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(d)||function(e,r){if(e){if("string"==typeof e)return c(e,r);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?c(e,r):void 0}}(d)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[l]):[l]})(),a})()));