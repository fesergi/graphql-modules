(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,h=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(h,s(s({ref:t},l),{},{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(124)),i={id:"resolvers-composition",title:"Resolvers Composition",sidebar_label:"Resolvers Composition"},s={unversionedId:"introduction/resolvers-composition",id:"version-legacy/introduction/resolvers-composition",isDocsHomePage:!1,title:"Resolvers Composition",description:"GraphQL Modules has another powerful feature called 'Resolvers Composition'.",source:"@site/versioned_docs/version-legacy/introduction/resolvers-composition.md",slug:"/introduction/resolvers-composition",permalink:"/docs/legacy/introduction/resolvers-composition",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/versioned_docs/version-legacy/introduction/resolvers-composition.md",version:"legacy",sidebar_label:"Resolvers Composition",sidebar:"version-legacy/docs",previous:{title:"Context",permalink:"/docs/legacy/introduction/context"},next:{title:"Subscriptions",permalink:"/docs/legacy/introduction/subscriptions"}},c=[{value:"With Basic Resolvers",id:"with-basic-resolvers",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"GraphQL Modules has another powerful feature called 'Resolvers Composition'.\nWith this feature, you can easily make sure each of your modules only performs the business logic it needs to do, and does not perform unrelated operations."),Object(a.b)("h2",{id:"with-basic-resolvers"},"With Basic Resolvers"),Object(a.b)("p",null,"For example, if you have a simple server with authentication and you wish to make sure that one of your queries is protected and only allowed for authenticated users with the ",Object(a.b)("inlineCode",{parentName:"p"},"EDITOR")," role, your resolver needs to verify these rules as well:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const resolvers = {\n  Query: {\n    myQuery: (root, args, context) => {\n      // Make sure that the user is authenticated\n      if (!context.currentUser) {\n        throw new Error('You are not authenticated!');\n      }\n\n      // Make sure that the user has the correct roles\n      if (\n        !context.currentUser.roles ||\n        !context.currentUser.roles.includes('EDITOR')\n      ) {\n        throw new Error('You are not authorized!');\n      }\n\n      // Business logic\n      if (args.something === '1') {\n        return true;\n      }\n\n      return false;\n    },\n  },\n};\n")),Object(a.b)("p",null,"But the authorization checks are not part of your business logic;\nthey're just part of the flow that you should run before accessing your resolver."),Object(a.b)("p",null,"GraphQL Modules lets you separate these concerns: you can implement only the business logic of your resolver and then the app that consumes the module will wrap the resolver with custom logic."),Object(a.b)("p",null,"The concept is similar to that of ",Object(a.b)("strong",{parentName:"p"},"middleware"),"."),Object(a.b)("p",null,"Let's strip the resolver of all the unnecessary code:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const resolvers = {\n  Query: {\n    myQuery: (root, args, context) => {\n      if (args.something === '1') {\n        return true;\n      }\n\n      return false;\n    },\n  },\n};\n")),Object(a.b)("p",null,"And let's create utility functions in different files with the logic we have removed here."),Object(a.b)("p",null,"We can implement authentication and authorization just like GraphQL resolvers; we need to tell GraphQL Modules that the process has succeeded by calling the ",Object(a.b)("inlineCode",{parentName:"p"},"next")," function."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"export const isAuthenticated = () => (next) => async (\n  root,\n  args,\n  context,\n  info\n) => {\n  if (!context.currentUser) {\n    throw new Error('You are not authenticated!');\n  }\n\n  return next(root, args, context, info);\n};\n\nexport const hasRole = (role: string) => (next) => async (\n  root,\n  args,\n  context,\n  info\n) => {\n  if (!context.currentUser.roles || !context.currentUser.roles.includes(role)) {\n    throw new Error('You are not authorized!');\n  }\n\n  return next(root, args, context, info);\n};\n")),Object(a.b)("p",null,"Now in our ",Object(a.b)("inlineCode",{parentName:"p"},"GraphQLModule")," declaration, let's add ",Object(a.b)("inlineCode",{parentName:"p"},"resolversComposition")," with a map from ",Object(a.b)("inlineCode",{parentName:"p"},"TypeName.fieldName")," to the function/functions we wish to wrap the resolver with."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLModule } from '@graphql-modules/core';\n\nconst MyModule = new GraphQLModule({\n  /*...*/\n  resolversComposition: {\n    'Query.myQuery': [isAuthenticated(), hasRole('EDITOR')],\n  },\n});\n")),Object(a.b)("p",null,"Before each execution of the ",Object(a.b)("inlineCode",{parentName:"p"},"myQuery")," resolver, GraphQL Modules makes sure to execute ",Object(a.b)("inlineCode",{parentName:"p"},"isAuthenticated")," and ",Object(a.b)("inlineCode",{parentName:"p"},"hasRole"),"."),Object(a.b)("p",null,"Furthermore, if our logic applies to more than one resolver under ",Object(a.b)("inlineCode",{parentName:"p"},"Query"),", we can use wild cards."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLModule } from '@graphql-modules/core';\n\nconst MyModule = new GraphQLModule({\n  /*...*/\n  resolversComposition: {\n    'Query.*': [isAuthenticated(), hasRole('EDITOR')],\n  },\n});\n")),Object(a.b)("p",null,"In this case, Before each execution of any resolver under ",Object(a.b)("inlineCode",{parentName:"p"},"Query"),", GraphQL Modules makes sure to execute ",Object(a.b)("inlineCode",{parentName:"p"},"isAuthenticated")," and ",Object(a.b)("inlineCode",{parentName:"p"},"hasRole"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This feature is useful for things like authentication, authorization, permissions, keeping things like last activity, verifying that objects exist and a lot more!")),Object(a.b)("p",null,"The great thing about resolvers composition is that each of our resolvers just does its own job without unrelated logic and the app can extend resolvers later on arbitrary rules."),Object(a.b)("p",null,"Now it's easier to re-use modules: you can implement the logic once and wrap it with different rules later."))}u.isMDXComponent=!0}}]);