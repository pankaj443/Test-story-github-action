import{i as s,a as f,f as p}from"./index-CDavW7r9.js";var{step:b}=s({step:(r,i,n)=>i(n)},{intercept:!0}),o=(r,i=0,n)=>{if(i>5||r==null)return r;if(f(r))return n&&r.mockName(n),r;if(typeof r=="function"&&"isAction"in r&&r.isAction&&!("implicit"in r&&r.implicit)){let t=p(r);return n&&t.mockName(n),t}if(Array.isArray(r))return i++,r.map(t=>o(t,i));if(typeof r=="object"&&r.constructor===Object){i++;for(let[t,c]of Object.entries(r))Object.getOwnPropertyDescriptor(r,t).writable&&(r[t]=o(c,i,t));return r}return r},m=({initialArgs:r})=>o(r),A=[m],j={throwPlayFunctionExceptions:!1};export{A as argsEnhancers,j as parameters,b as runStep,o as traverseArgs};