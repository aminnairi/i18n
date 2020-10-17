var I18n=function(t){"use strict";const n=(t,n)=>{const r=t.length;let o=0,e=0,s="";for(;o<r;)s+=t[o++],n[e]&&(s+=n[e++]);return s};return t.createI18n=({locale:t,translations:r})=>(o,...e)=>{const s=r[o.join("{}")];if(void 0!==s){const r=s[t];if(void 0!==r){const t=r.split("{}");return n(t,e)}}return n(o,e)},t}({});
//# sourceMappingURL=i18n.browser.js.map
