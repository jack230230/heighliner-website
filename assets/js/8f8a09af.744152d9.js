"use strict";(self.webpackChunkheighliner_website=self.webpackChunkheighliner_website||[]).push([[8723],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),h=i,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9457:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=["components"],c={title:"Architecture",sidebar_position:2},l=void 0,s={unversionedId:"overview/arch",id:"overview/arch",title:"Architecture",description:"Before effectively using Heighliner, it is necessary to understand the overall architecture.",source:"@site/docs/01-overview/arch.md",sourceDirName:"01-overview",slug:"/overview/arch",permalink:"/docs/overview/arch",editUrl:"https://github.com/h8r-dev/heighliner-website/docs/01-overview/arch.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Architecture",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/overview/intro"},next:{title:"Core Concepts",permalink:"/docs/overview/concepts"}},u={},p=[{value:"Heighliner Stack",id:"heighliner-stack",level:2},{value:"Heighliner CLI",id:"heighliner-cli",level:2},{value:"Heighliner Service",id:"heighliner-service",level:2},{value:"Dagger",id:"dagger",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Terraform",id:"terraform",level:2}],d={toc:p};function h(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before effectively using Heighliner, it is necessary to understand the overall architecture.\nIt is also necessary to understand the components being provided to you and how to use them.\nThe section below provides some useful description and links to build up this understanding."),(0,o.kt)("p",null,"From a high-level view, Heighliner contains the following components:"),(0,o.kt)("h2",{id:"heighliner-stack"},"Heighliner Stack"),(0,o.kt)("p",null,"Heighliner Stack is a collection of orchestrated plans to setup the development environment.\nYou can choose a specific language and framework (Go-Gin, Spring, React, etc) to build your app.\nThen Heighliner Stack will orchestrate the infrastructure setup to optimize your app development experience."),(0,o.kt)("p",null,"A stack comes with inputs/outputs interfaces to interact with users.\nFor example, you can specify your own Github token, kubeconfig, cloud credentials.\nAfter a stack is used to setup the environment, it will provide outputs like the public DNS name of your app, monitoring dashboards, login credentials, etc."),(0,o.kt)("p",null,"For more details and example, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core_features/stacks/overview"},"Stacks")," section."),(0,o.kt)("h2",{id:"heighliner-cli"},"Heighliner CLI"),(0,o.kt)("p",null,"Heighliner CLI is a command line interface that is used to build and deploy applications."),(0,o.kt)("h2",{id:"heighliner-service"},"Heighliner Service"),(0,o.kt)("p",null,"Heighliner Service is a service that is used to build and deploy applications."),(0,o.kt)("h2",{id:"dagger"},"Dagger"),(0,o.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("h2",{id:"terraform"},"Terraform"))}h.isMDXComponent=!0}}]);