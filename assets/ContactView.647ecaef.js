import{_ as i,o as m,c as u,a as t,g as d,h as o,v as l}from"./index.764134ab.js";const r={name:"ContactView",components:{},data:()=>({title:"Contact",data:[],input:{name:"",email:"",message:""}}),methods:{async submit(){const e=new FormData;Object.keys(this.input).forEach(s=>e.append(s,this.input[s])),await fetch("https://formspree.io/f/xoqbnqpd",{method:"POST",body:e}),this.reset()},logEmits(e){console.log("formEmits",e)}},watch:{"input.name"(e){console.log("input name has changed to",e)}}},p={class:"contact-page"},c={class:"contact-view"},_=t("label",{for:"name"},"Nama",-1),b=t("br",null,null,-1),h=t("br",null,null,-1),f=t("br",null,null,-1),g=t("label",{for:"email"},"Email",-1),w=t("br",null,null,-1),v=t("br",null,null,-1),y=t("br",null,null,-1),V=t("label",{for:"message"},"Message",-1),E=t("br",null,null,-1),C=t("br",null,null,-1),B=t("br",null,null,-1),M=t("button",{type:"submit",class:"submit"},"Submit",-1);function S(e,s,U,k,q,a){return m(),u("div",p,[t("div",c,[t("form",{onSubmit:s[3]||(s[3]=d((...n)=>a.submit&&a.submit(...n),["prevent"])),onReset:s[4]||(s[4]=(...n)=>e.reset&&e.reset(...n)),class:"form"},[_,b,o(t("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=n=>e.input.name=n),name:"name",class:"name"},null,512),[[l,e.input.name]]),h,f,g,w,o(t("input",{type:"email","onUpdate:modelValue":s[1]||(s[1]=n=>e.input.email=n),name:"email",class:"email"},null,512),[[l,e.input.email]]),v,y,V,E,o(t("textarea",{name:"message",id:"",cols:"30",rows:"10","onUpdate:modelValue":s[2]||(s[2]=n=>e.input.message=n),class:"msg"},`\r
        `,512),[[l,e.input.message]]),C,B,M],32)])])}const N=i(r,[["render",S]]);export{N as default};
