(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},125:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},127:function(e,t,n){"use strict";var r=n(0),a=n(128);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},128:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},129:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(127),o=n(125),c=n(55),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.children,d=e.defaultValue,p=e.values,b=e.groupId,m=e.className,f=Object(i.a)(),h=f.tabGroupChoices,j=f.setTabGroupChoices,O=Object(r.useState)(d),g=O[0],w=O[1];if(null!=b){var v=h[b];null!=v&&v!==g&&p.some((function(e){return e.value===v}))&&w(v)}var y=function(e){w(e),null!=b&&j(b,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(r.cloneElement)(c.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},130:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(124)),o=n(129),c=n(130),l={id:"middlewares",title:"Middlewares"},s={unversionedId:"advanced/middlewares",id:"advanced/middlewares",isDocsHomePage:!1,title:"Middlewares",description:"Middleware is a way to intercept individual resolve functions or a group of them and return a different result or throw an exception based on a condition. Each middleware can access everything that resolve function receives. The ability to access context and the Injector makes it even more powerful.",source:"@site/docs/advanced/middlewares.md",slug:"/advanced/middlewares",permalink:"/docs/advanced/middlewares",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/docs/advanced/middlewares.md",version:"current",sidebar:"docs",previous:{title:"Subscriptions",permalink:"/docs/advanced/subscriptions"},next:{title:"Execution Context",permalink:"/docs/advanced/execution-context"}},u=[{value:"Middleware function",id:"middleware-function",children:[{value:"What is the <code>event</code> object?",id:"what-is-the-event-object",children:[]},{value:"How to use <code>next</code> function?",id:"how-to-use-next-function",children:[]}]},{value:"Intercepting results",id:"intercepting-results",children:[]},{value:"Exceptions",id:"exceptions",children:[]},{value:"Registering middlewares",id:"registering-middlewares",children:[]},{value:"Execution order",id:"execution-order",children:[]}],d={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Middleware is a way to intercept individual resolve functions or a group of them and return a different result or throw an exception based on a condition. Each middleware can access everything that resolve function receives. The ability to access context and the ",Object(i.b)("a",{parentName:"p",href:"/docs/di/introduction"},Object(i.b)("inlineCode",{parentName:"a"},"Injector"))," makes it even more powerful."),Object(i.b)("h2",{id:"middleware-function"},"Middleware function"),Object(i.b)("p",null,"The middleware function can be ",Object(i.b)("inlineCode",{parentName:"p"},"sync")," or ",Object(i.b)("inlineCode",{parentName:"p"},"async")," and accepts two arguments. First one is an object containing ",Object(i.b)("inlineCode",{parentName:"p"},"root"),", ",Object(i.b)("inlineCode",{parentName:"p"},"args"),", ",Object(i.b)("inlineCode",{parentName:"p"},"context")," and ",Object(i.b)("inlineCode",{parentName:"p"},"info")," properties, we call it ",Object(i.b)("inlineCode",{parentName:"p"},"event"),". The other argument is a function that calls the next middleware, called ",Object(i.b)("inlineCode",{parentName:"p"},"next"),"."),Object(i.b)("h3",{id:"what-is-the-event-object"},"What is the ",Object(i.b)("inlineCode",{parentName:"h3"},"event")," object?"),Object(i.b)("p",null,"Take a look at the regular resolve function."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"function resolve(root, args, context, info) {\n  /* ... */\n}\n")),Object(i.b)("p",null,"It accepts four arguments and in Middlewares we simply wrap them in an object."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"function middleware({ root, args, context, info }, next) {\n  /* ... */\n}\n")),Object(i.b)("p",null,"Because a middleware function can access ",Object(i.b)("inlineCode",{parentName:"p"},"context"),", it can also extract the ",Object(i.b)("inlineCode",{parentName:"p"},"Injector")," and get access to Dependency Injection."),Object(i.b)("h3",{id:"how-to-use-next-function"},"How to use ",Object(i.b)("inlineCode",{parentName:"h3"},"next")," function?"),Object(i.b)("p",null,"The second argument of a middleware is the ",Object(i.b)("inlineCode",{parentName:"p"},"next")," function and its only job is to call the middleware or the resolve function itself."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"function middleware({ root, args, context, info }, next) {\n  /* code */\n\n  return next();\n}\n")),Object(i.b)("p",null,"It's important to understand that every middleware should do one of three things:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"throw an exception"),Object(i.b)("li",{parentName:"ul"},"return the result of ",Object(i.b)("inlineCode",{parentName:"li"},"next()")),Object(i.b)("li",{parentName:"ul"},"return a value")),Object(i.b)("p",null,"In case where a middleware returns nothing (",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"), it's going to be used as the result of a field resolver. So be careful!"),Object(i.b)("h2",{id:"intercepting-results"},"Intercepting results"),Object(i.b)("p",null,"Middlewares are capable of intercepting the field resolver or even not invoke it at all and resolve a different value."),Object(i.b)("p",null,"An example of how to let the field resolver run and intercept its result:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"async function middleware({ root, args, context, info }, next) {\n  /* code */\n\n  const result = await next();\n\n  if (someCondition(result)) {\n    return null;\n  }\n\n  return result;\n}\n")),Object(i.b)("p",null,"You can also resolve any value, without calling the field resolve function:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"async function middleware({ root, args, context, info }, next) {\n  /* code */\n\n  return {\n    /* my result */\n  };\n}\n")),Object(i.b)("h2",{id:"exceptions"},"Exceptions"),Object(i.b)("p",null,"Middlewares behave like regular resolve functions, meaning they can also throw exceptions. It's a useful thing when you need to make sure a field can only be access when the user is logged in or has valid rights."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"async function middleware({ root, args, context, info }, next) {\n  if (!context.injector.get(Auth).isLoggedIn()) {\n    throw new Error('Not logged in');\n  }\n\n  return next();\n}\n")),Object(i.b)("h2",{id:"registering-middlewares"},"Registering middlewares"),Object(i.b)("p",null,"You know how to write middlewares and what they offer, now let's match a middleware with a corresponding type and field."),Object(i.b)("p",null,"Three ways of registering middlewares:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A specific field of a specific type"),Object(i.b)("li",{parentName:"ul"},"All fields of a specific type"),Object(i.b)("li",{parentName:"ul"},"All fields of all types")),Object(i.b)("p",null,"Here's a first option, intercepting the ",Object(i.b)("inlineCode",{parentName:"p"},"Query.me")," field resolver:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'{\n  "Query": {\n    "me": [yourMiddleware]\n  }\n}\n')),Object(i.b)("p",null,"To intercept all fields of a specific type use ",Object(i.b)("inlineCode",{parentName:"p"},"*")," mask:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'{\n  "Query": {\n    "*": [yourMiddleware]\n  }\n}\n')),Object(i.b)("p",null,"To intercept all fields of all possible types, use ",Object(i.b)("inlineCode",{parentName:"p"},"*")," mask twice:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'{\n  "*": {\n    "*": [yourMiddleware]\n  }\n}\n')),Object(i.b)("p",null,"Now let's understand how to register middlewares in a Module and an Application. Take a look at following example."),Object(i.b)(o.a,{defaultValue:"module",values:[{label:"Module",value:"module"},{label:"Application",value:"application"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"module",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"import { createModule } from 'graphql-modules';\n\nconst myModule = createModule({\n  /* ... */,\n  middlewares: {\n    Query: {\n      me: [myMiddleware]\n    }\n  }\n})\n"))),Object(i.b)(c.a,{value:"application",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"import { createApplication } from 'graphql-modules';\n\nconst application = createApplication({\n  /* ... */,\n  middlewares: {\n    Query: {\n      me: [myMiddleware]\n    }\n  }\n})\n")))),Object(i.b)("h2",{id:"execution-order"},"Execution order"),Object(i.b)("p",null,"Without strict rules on the order of execution, you might get unexpected results."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-log"},"-> Application *.*\n  -> Module *.*\n    -> Application Type.*\n      -> Module Type.*\n        -> Application Type.Field\n          -> Module Type.Field\n")))}p.isMDXComponent=!0}}]);