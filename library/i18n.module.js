const t=(t,n)=>{const o=t.length;let r=0,s=0,e="";for(;r<o;)e+=t[r++],n[s]&&(e+=n[s++]);return e},n=({locale:n,translations:o})=>(r,...s)=>{const e=o[r.join("{}")];if(void 0!==e){const o=e[n];if(void 0!==o){const n=o.split("{}");return t(n,s)}}return t(r,s)};export{n as createI18n};
//# sourceMappingURL=i18n.module.js.map
