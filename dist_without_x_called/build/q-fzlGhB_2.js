import{h as b}from"./q-B9R08C_P.js";import{v as h,g as v,s as u,a as c,b as F,F as l}from"./q-CcsipMCw.js";import"./q-L4XZ6hCu.js";const E=async(m,f)=>{const[a,p,s,d,t,o,g]=b();d||(s.response={}),s.submitCount++,s.submitted=!0,s.submitting=!0;try{if(await h(s,o)){const e=v(s,o),[r]=await Promise.all([g||a==null?void 0:a.submit(p?new FormData(f):e),t==null?void 0:t(e,m)]);if(r!=null&&r.value){const{errors:n,response:i}=r.value;u(s,n,{...o,shouldFocus:!1}),Object.keys(i).length?c(s,i,o):F(s,n,o)}}}catch(e){e instanceof l&&u(s,e.errors,{...o,shouldFocus:!1}),(!(e instanceof l)||e.message)&&c(s,{status:"error",message:(e==null?void 0:e.message)||"An unknown error has occurred."},o)}finally{s.submitting=!1}};export{E as s_80fZ79zbzcs};