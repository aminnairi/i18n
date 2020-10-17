"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const t=(t,e)=>{const o=t.length;let n=0,r=0,s="";for(;n<o;)s+=t[n++],e[r]&&(s+=e[r++]);return s};exports.createI18n=({locale:e,translations:o})=>(n,...r)=>{const s=o[n.join("{}")];if(void 0!==s){const o=s[e];if(void 0!==o){const e=o.split("{}");return t(e,r)}}return t(n,r)};
//# sourceMappingURL=i18n.common.js.map
