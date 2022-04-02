"use strict";(self.webpackChunkheighliner_website=self.webpackChunkheighliner_website||[]).push([[8723],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=l(r),d=i,f=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9457:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=["components"],c={title:"Architecture",sidebar_position:2},s=void 0,l={unversionedId:"overview/arch",id:"overview/arch",title:"Architecture",description:"Before effectively using Heighliner, it is necessary to understand the overall architecture.",source:"@site/docs/01-overview/arch.md",sourceDirName:"01-overview",slug:"/overview/arch",permalink:"/docs/overview/arch",editUrl:"https://github.com/h8r-dev/heighliner-website/docs/01-overview/arch.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Architecture",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/overview/intro"},next:{title:"Core Concepts",permalink:"/docs/overview/concepts"}},u={},p=[{value:"Heighliner Stack",id:"heighliner-stack",level:2},{value:"Heighliner StackHub",id:"heighliner-stackhub",level:2},{value:"Heighliner CLI",id:"heighliner-cli",level:2},{value:"Heighliner Service",id:"heighliner-service",level:2},{value:"Dagger",id:"dagger",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Terraform",id:"terraform",level:2}],h={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before effectively using Heighliner, it is necessary to understand the overall architecture.\nIt is also necessary to understand the components being provided to you and how to use them.\nThe section below provides some useful description and links to build up this understanding."),(0,o.kt)("p",null,"From a high-level view, Heighliner contains the following components:"),(0,o.kt)("h2",{id:"heighliner-stack"},"Heighliner Stack"),(0,o.kt)("p",null,"Heighliner Stack is a collection of orchestrated plans to one-click setup the development environment.\nYou can choose a specific language and framework (Go-Gin, Spring, React, etc) to write your app code.\nThen Heighliner Stack do the rest -- it will orchestrate the infrastructure setup which optimize for your apps with cloud native best practices."),(0,o.kt)("p",null,"A stack comes with inputs/outputs interfaces to interact with users.\nFor example, you can specify your own Github token, kubeconfig, cloud credentials.\nAfter a stack is used to setup the environment, it will provide outputs like the public DNS name of your app, monitoring dashboards, login credentials, etc."),(0,o.kt)("p",null,"For more details and examples, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core_features/stacks/overview"},"Stacks")," page."),(0,o.kt)("h2",{id:"heighliner-stackhub"},"Heighliner StackHub"),(0,o.kt)("p",null,"StackHub stores the Heighliner Stacks and provides a searchable interface to find the right stack for your app.\nWe provide a default StackHub hosted on the cloud to store the default stacks.\nWhen you use the CLI/UI to use the default stacks, they are availabe to you."),(0,o.kt)("p",null,"For more info, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core_features/stacks/stackhub"},"StackHub")," page."),(0,o.kt)("h2",{id:"heighliner-cli"},"Heighliner CLI"),(0,o.kt)("p",null,"Heighliner CLI provides the best user experience in local.\nIt walks users through the process of using Heighliner Stacks and Services to develop and deploy their apps.\nIt can be used to search and download stacks, manages secrets, provide interactive input based on stack schema.\nIt provides IaC style process to integrate with your GitOps workflow."),(0,o.kt)("p",null,"For more details and examples, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli/hln/overview"},"hln CLI")," page."),(0,o.kt)("h2",{id:"heighliner-service"},"Heighliner Service"),(0,o.kt)("p",null,"Heighliner Service is a service that is used to build and deploy applications."),(0,o.kt)("h2",{id:"dagger"},"Dagger"),(0,o.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("h2",{id:"terraform"},"Terraform"))}d.isMDXComponent=!0}}]);