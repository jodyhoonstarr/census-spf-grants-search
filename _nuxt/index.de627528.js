import{d as v,w as k,s as C,o as s,c as a,a as t,F as _,k as x,n as L,g as n,t as m,h as u,i as c,b as y,_ as B,l as G,S}from"./entry.ef1059ed.js";import{u as N}from"./grants.3bcd9840.js";import{_ as T}from"./_plugin-vue_export-helper.c27b6911.js";const V={class:"mx-auto max-w-7xl px-10 py-16 lg:px-8 sm:px-6 sm:py-24 sm:text-center"},$=t("h2",{class:"text-base font-semibold tracking-wide uppercase text-secondary"}," Grants by Keyword ",-1),D=t("p",{class:"mt-1 text-4xl font-extrabold text-primary lg:text-6xl sm:text-5xl sm:tracking-tight"}," Grants.gov Opportunities ",-1),F=t("p",{class:"mx-auto mt-5 max-w-3xl pb-4 text-xl text-gray-500"}," Browse the grants data below or filter by a set of preselected keywords. ",-1),K={flex:"~ wrap","pb-6":"","sm:justify-center":""},j=["onClick"],z={class:"mt-8 flow-root"},A={class:"-mx-4 -my-2 lg:-mx-8 sm:-mx-6"},E={class:"inline-block min-w-full py-2 align-middle lg:px-8 sm:px-6"},O={class:"min-w-full table-auto divide-y divide-gray-300"},R=t("thead",{class:"text-sm font-semibold"},[t("tr",null,[t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-gray-900 sm:pl-0"}," Title "),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-gray-900"}," Source "),t("th",{scope:"col",class:"relative py-3.5 pl-3 pr-4 text-sm sm:pr-0"},[t("span",{class:"sr-only"},"Details")])])],-1),q={class:"divide-y divide-gray-200"},H={class:"py-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-0"},J={class:"px-3 py-4 text-sm text-gray-500"},M=["href"],P={class:"relative py-4 pl-3 pr-4 text-nowrap text-sm font-medium sm:pr-0"},Q=v({__name:"GrantsList",async setup(f){let o,r;const h=([o,r]=k(()=>N()),o=await o,r(),o),{keywords:g,selectedKeyword:i,data:d,ids:b}=C(h);return(X,Y)=>{const w=B;return s(),a("div",null,[t("div",V,[$,D,F,t("div",K,[(s(!0),a(_,null,x(n(g),e=>(s(),a("button",{key:e,class:L(["m-1 cursor-pointer rounded-full px-2.5 py-0.5 text-xs font-semibold text-white",e===n(i)?"bg-primary":"bg-secondary"]),onClick:l=>i.value=e},m(e),11,j))),128))]),t("div",z,[t("div",A,[t("div",E,[t("table",O,[R,t("tbody",q,[(s(!0),a(_,null,x(n(b),e=>{var l,p;return s(),a("tr",{key:e},[t("td",H,m((l=n(d))==null?void 0:l.opportunitytitle[e]),1),t("td",J,[t("a",{href:(p=n(d))==null?void 0:p.grants_url[e],class:"text-secondary underline"},"Link",8,M)]),t("td",P,[u(w,{as:"button",class:"cursor-pointer rounded bg-secondary px-2 py-0.5 text-xs font-semibold text-white",to:`/grant/${e}`},{default:c(()=>[y(" details ")]),_:2},1032,["to"])])])}),128))])])])])])])])}}}),U={};function W(f,o){const r=Q;return s(),G(S,null,{fallback:c(()=>[y(" Loading... ")]),default:c(()=>[u(r)]),_:1})}const et=T(U,[["render",W]]);export{et as default};