(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var o=t(3),r=t(8),a=(t(0),t(124)),i={id:"db-connection-pooling",title:"Database Connection Pooling",sidebar_label:"Database Connection Pooling"},s={unversionedId:"recipes/db-connection-pooling",id:"version-legacy/recipes/db-connection-pooling",isDocsHomePage:!1,title:"Database Connection Pooling",description:"Opening a database connection is an expensive process, and that's why we use Connection pool to reduce the cost.",source:"@site/versioned_docs/version-legacy/recipes/db-connection-pooling.md",slug:"/recipes/db-connection-pooling",permalink:"/docs/legacy/recipes/db-connection-pooling",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/versioned_docs/version-legacy/recipes/db-connection-pooling.md",version:"legacy",sidebar_label:"Database Connection Pooling",sidebar:"version-legacy/docs",previous:{title:"File Uploads",permalink:"/docs/legacy/recipes/file-uploads"},next:{title:"Schema Directives",permalink:"/docs/legacy/recipes/schema-directives"}},l=[{value:"PostgreSQL",id:"postgresql",children:[]},{value:"MongoDB with generic-pool",id:"mongodb-with-generic-pool",children:[]}],c={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Opening a database connection is an expensive process, and that's why we use ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Connection_pool"},"Connection pool"))," to reduce the cost.\nAnd it also allows us to have a good transaction management in a single session that uses different providers."),Object(a.b)("p",null,"The first example uses PostgreSQL and ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"https://node-postgres.com/features/transactions"},"node-postgres"))," below.\nThe other example combines ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"https://github.com/coopernurse/node-pool"},"generic-pool"))," with ",Object(a.b)("strong",{parentName:"p"},"MongoDB")," which doesn't have the pooling feature in the native driver internally."),Object(a.b)("h2",{id:"postgresql"},"PostgreSQL"),Object(a.b)("p",null,"We define two providers in ",Object(a.b)("inlineCode",{parentName:"p"},"DatabaseModule"),": ",Object(a.b)("inlineCode",{parentName:"p"},"Pool")," is application scoped and ",Object(a.b)("inlineCode",{parentName:"p"},"DatabaseProvider")," is session-scoped.\nSo, it will provide us different clients from connection pool for each session/network request.\nSee ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/docs/legacy/introduction/dependency-injection"},"Dependency Injection"))," to learn more about provider scopes."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"database.module.ts")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Pool } from 'pg';\nexport const DatabaseModule = new GraphQLModule({\n  providers: [\n    Pool,\n    // or you can use factory providers\n    // to pass extra options to the constructor\n    // { provide: Pool, useFactory: () => new Pool({ ... }) }\n    DatabaseProvider,\n  ],\n});\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You can define external classes as ",Object(a.b)("strong",{parentName:"p"},"Provider")," in GraphQL Modules. In the example above, ",Object(a.b)("inlineCode",{parentName:"p"},"Pool")," will be constructed once in the application scope.")),Object(a.b)("p",null,"And we will use the ",Object(a.b)("inlineCode",{parentName:"p"},"OnResponse")," hook to release the client to the pool after we've done with it.\nSee ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/docs/legacy/introduction/dependency-injection"},"Dependency Injection"))," to learn more about hooks."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"DatabaseProvider")," will be created on a session level while the instance of ",Object(a.b)("inlineCode",{parentName:"p"},"Pool")," will be the same instance always in the application level."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"database.provider.ts")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Injectable } from '@graphql-modules/di';\nimport { SQLStatement } from 'sql-template-strings';\nimport { Pool, PoolClient } from 'pg';\n\n@Injectable({\n  scope: ProviderScope.Session,\n})\nexport class DatabaseProvider implements OnRequest, OnResponse {\n  private _poolClient: PoolClient;\n  constructor(private pool: Pool) {}\n  public onRequest() {\n    this._poolClient = await this.pool.connect();\n  }\n  public onResponse() {\n    if (this._poolClient) {\n      this._poolClient.release();\n    }\n  }\n  async getClient() {\n    return this.client;\n  }\n}\n")),Object(a.b)("p",null,"You can also combine it with data-loaders to solve the ",Object(a.b)("inlineCode",{parentName:"p"},"N+1")," problem in SQL queries like below:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"database.provider.ts")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Pool, PoolClient, QueryResultBase, QueryResult } from 'pg';\nimport { Injectable, ProviderScope } from '@graphql-modules/di';\nimport { OnRequest, OnResponse } from '@graphql-modules/core';\nimport { SQLStatement } from 'sql-template-strings';\nimport DataLoader from 'dataloader';\n\n@Injectable({\n  scope: ProviderScope.Session,\n})\nexport class DatabaseProvider implements OnRequest, OnResponse {\n  private _poolClient: PoolClient;\n  constructor(private pool: Pool) {}\n  public onRequest() {\n    this._poolClient = await this.pool.connect();\n  }\n  public onResponse() {\n    if (this._poolClient) {\n      this._poolClient.release();\n    }\n  }\n  private queryDataLoader = new DataLoader<SQLStatement, QueryResult>(\n    (queryStatementList) =>\n      Promise.all(\n        queryStatementList.map((queryStatement) =>\n          this._poolClient.query(queryStatement)\n        )\n      ),\n    {\n      // Create a cache key using query text together with its values\n      cacheKeyFn: (queryStatement: SQLStatement) =>\n        queryStatement.text + queryStatement.values.join(','),\n    }\n  );\n  // Use this method to query to the database instead of client's native one.\n  public async query<Entity = any>(\n    queryStatement: SQLStatement\n  ): Promise<QueryResultBase & { rows: Entity[] }> {\n    // If query is `SELECT`-type query, use DataLoader\n    if (queryStatement.text.startsWith('SELECT')) {\n      return this.queryDataLoader.load(queryStatement);\n    } else {\n      // Otherwise it is probably mutation query, so do not use dataloader\n      return this._poolClient.query(queryStatement);\n    }\n  }\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The example above also uses ",Object(a.b)("a",{parentName:"p",href:"https://github.com/felixfbecker/node-sql-template-strings"},"sql-template-strings"),", which allows ES6 template strings for prepared SQL statements.")),Object(a.b)("p",null,"Thanks to this approach, you can use transactions inside GraphQL Modules like below:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"user.entity.ts")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"interface UserEntity {\n  id: string;\n  name: string;\n  // some other fields\n}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"users.provider.ts")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { UserEntity } from './user.entity';\n\n@Injectable({\n  scope: ProviderScope.Session,\n})\nexport class UsersProvider {\n  private currentUserId: string;\n  constructor(\n    private databaseProvider: DatabaseProvider,\n    private moduleSessionInfo: ModuleSessionInfo,\n    private someOtherProviderHasDbProcess: SomeOtherProviderHasDbProcess\n  ) {\n    const token = this.moduleSessionInfo.session.req.headers.authorization;\n    if (token) {\n      this.currentUserId = exchangeTokenWithUserId(token);\n    }\n  }\n  async getCurrentUser() {\n    const { rows } = await this.databaseProvider.query<UserEntity>(\n      SQL`SELECT * FROM users WHERE id = ${this.currentUserId}`\n    );\n    return rows[0];\n  }\n  async createNewUser(name: string, email: string, ...someOtherThings) {\n    try {\n      await this.databaseProvider.query(SQL`BEGIN`);\n\n      const someEntityWeNeedForOtherQuery = await this.someOtherProviderHasDbProcess.doSomeProcess(\n        ...someOtherThings\n      );\n\n      // Other processes in a single transaction that uses the same client for all sessions\n\n      await this.databaseProvider.query(SQL`COMMIT`);\n    } catch (e) {\n      await this.databaseProvider.query(SQL`ROLLBACK`);\n      throw e;\n    }\n  }\n}\n")),Object(a.b)("h2",{id:"mongodb-with-generic-pool"},"MongoDB with generic-pool"),Object(a.b)("p",null,"You can create a MongoDB pool and connect it at the beginning of each network request until the network request is finished."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"database.module.ts")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Pool, createPool } from 'generic-pool';\nimport { MongoClient } from 'mongodb';\nimport { GraphQLModule } from '@graphql-modules/core';\n\nexport const DatabaseModule = new GraphQLModule({\n  providers: [\n    {\n      provide: Pool,\n      useFactory: () =>\n        createPool({\n          create: () => MongoClient.connect('mongodb://YOUR_MONGO_URL_HERE'),\n          destroy: (client) => client.close(),\n        }),\n    },\n    DatabaseProvider,\n  ],\n});\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"database.provider.ts")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Pool } from 'generic-pool';\nimport { Injectable, ProviderScope } from '@graphql-modules/di';\nimport { OnRequest, OnResponse } from '@graphql-modules/core';\nimport { MongoClient } from 'mongodb';\n\n@Injectable({\n  scope: ProviderScope.Session,\n})\nexport class DatabaseProvider implements OnRequest, OnResponse {\n  private _poolClient: MongoClient;\n  constructor(private pool: Pool) {}\n  public async onRequest() {\n    this._poolClient = await pool.acquire();\n  }\n  public async onResponse() {\n    if (this._poolClient) {\n      await this.pool.release(this._poolClient);\n    }\n  }\n  public getClient() {\n    return this._poolClient;\n  }\n}\n")))}p.isMDXComponent=!0},124:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(t),d=o,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return t?r.a.createElement(m,s(s({ref:n},c),{},{components:t})):r.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);