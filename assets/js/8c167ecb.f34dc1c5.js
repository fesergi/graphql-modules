"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8528],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6238:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),l=["components"],i={id:"modules",title:"What's a module?",sidebar_label:"What's a module?"},u=void 0,s={unversionedId:"introduction/modules",id:"version-legacy/introduction/modules",isDocsHomePage:!1,title:"What's a module?",description:"The GraphQL Modules approach lets you separate your backend implementation into small, reusable, easy-to-implement and easy-to-test pieces.",source:"@site/versioned_docs/version-legacy/introduction/modules.md",sourceDirName:"introduction",slug:"/introduction/modules",permalink:"/docs/legacy/introduction/modules",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/versioned_docs/version-legacy/introduction/modules.md",tags:[],version:"legacy",frontMatter:{id:"modules",title:"What's a module?",sidebar_label:"What's a module?"},sidebar:"version-legacy/docs",previous:{title:"Getting Started",permalink:"/docs/legacy/introduction/getting-started"},next:{title:"Your First Module",permalink:"/docs/legacy/introduction/your-first-module"}},p=[{value:"Module Structure",id:"module-structure",children:[]},{value:"Modules Example",id:"modules-example",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The GraphQL Modules approach lets you separate your backend implementation into small, reusable, easy-to-implement and easy-to-test pieces."),(0,o.kt)("p",null,"In GraphQL Modules, each module has its own GraphQL type definitions and resolver implementations."),(0,o.kt)("p",null,"GraphQL ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),"s, ",(0,o.kt)("inlineCode",{parentName:"p"},"enum"),"s and ",(0,o.kt)("inlineCode",{parentName:"p"},"union"),"s declared in GraphQL Modules are also extensible: modules can re-declare types and extend them as they wish."),(0,o.kt)("p",null,"The idea behind this is to implement the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://deviq.com/separation-of-concerns/"},"Separation of Concerns"))," design pattern in GraphQL and to allow you to write simple modules that only do what they need to. This way, they're easier to write, maintain and test."),(0,o.kt)("h2",{id:"module-structure"},"Module Structure"),(0,o.kt)("p",null,"Each GraphQL ",(0,o.kt)("inlineCode",{parentName:"p"},"module")," is built using the basics of GraphQL:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type definitions"),(0,o.kt)("li",{parentName:"ul"},"Resolvers")),(0,o.kt)("p",null,"As your application grows, modules can have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"External configurations"),(0,o.kt)("li",{parentName:"ul"},"Dependencies on other modules"),(0,o.kt)("li",{parentName:"ul"},"Providers (we will elaborate on this in the ",(0,o.kt)("a",{parentName:"li",href:"/docs/legacy/introduction/dependency-injection"},"Dependency Injection")," section)")),(0,o.kt)("h2",{id:"modules-example"},"Modules Example"),(0,o.kt)("p",null,"To get a better understanding of the structure and extensibility of modules, let's make an example app with four modules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"User (define what a user in our app should have)"),(0,o.kt)("li",{parentName:"ul"},"Authentication (define only what is needed to authenticate users)"),(0,o.kt)("li",{parentName:"ul"},"Profile (define a user's profile)"),(0,o.kt)("li",{parentName:"ul"},"Gallery (define a user's photo gallery)")),(0,o.kt)("p",null,"Let's understand how to define each module's schema and how to separate it into smaller pieces."),(0,o.kt)("h4",{id:"user-module"},"User Module"),(0,o.kt)("p",null,"This module allows querying users by id and defines only the very basic fields."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  user(id: ID!): User\n}\n\ntype User {\n  id: ID!\n  email: String!\n}\n")),(0,o.kt)("h4",{id:"authentication-module"},"Authentication Module"),(0,o.kt)("p",null,"This module declares the authentication basics in ",(0,o.kt)("inlineCode",{parentName:"p"},"Mutation"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," types."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  me: User\n}\n\ntype Mutation {\n  login(username: String!, password: String!): User\n  signup(username: String!, password: String!): User\n}\n\nextend type User {\n  username: String!\n}\n")),(0,o.kt)("h4",{id:"profile-module"},"Profile Module"),(0,o.kt)("p",null,"The profile module declares the ",(0,o.kt)("inlineCode",{parentName:"p"},"Profile")," type and adds the ",(0,o.kt)("inlineCode",{parentName:"p"},"profile")," field to ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Profile {\n  age: Int!\n  name: String!\n}\n\nextend type User {\n  profile: Profile!\n}\n")),(0,o.kt)("h4",{id:"gallery-module"},"Gallery Module"),(0,o.kt)("p",null,"The gallery module is similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"profile")," module. It declares only the parts of the schema that are required by the gallery feature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Image {\n  id: ID!\n  url: String!\n  user: User!\n}\n\nextend type User {\n  gallery: [Image]\n}\n\ntype Mutation {\n  uploadPicture(image: File!): Image\n}\n")))}c.isMDXComponent=!0}}]);