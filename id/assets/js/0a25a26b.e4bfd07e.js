"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6238],{9613:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>u});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},k=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),m=o(a),u=r,c=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(c,l(l({ref:t},k),{},{components:a})):n.createElement(c,l({ref:t},k))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2376:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>d});var n=a(2848),r=a(9213),i=(a(9496),a(9613)),l=["components"],p={id:"workspaces",title:"Workspace (ruang kerja)"},s=void 0,o={unversionedId:"workspaces",id:"workspaces",title:"Workspace (ruang kerja)",description:"pnpm memiliki dukungan bawaan untuk monorepositori (repositori multi paket, repositori multi proyek, atau repositori monolitik). Anda dapat membuat workspace untuk menyatukan beberapa proyek di dalam satu repositori.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/id/next/workspaces",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"workspaces",title:"Workspace (ruang kerja)"},sidebar:"docs",previous:{title:".pnpmfile.cjs",permalink:"/id/next/pnpmfile"},next:{title:"Alias",permalink:"/id/next/aliases"}},k={},d=[{value:"Protokol workspace (workspace:)",id:"protokol-workspace-workspace",level:2},{value:"Merujuk paket workspace melalui alias",id:"merujuk-paket-workspace-melalui-alias",level:3},{value:"Merujuk paket workspace melalui jalur relatifnya",id:"merujuk-paket-workspace-melalui-jalur-relatifnya",level:3},{value:"Memublikasikan paket workspace",id:"memublikasikan-paket-workspace",level:3},{value:"Release workflow",id:"release-workflow",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Usage examples",id:"usage-examples",level:2}],m={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm memiliki dukungan bawaan untuk monorepositori (repositori multi paket, repositori multi proyek, atau repositori monolitik). Anda dapat membuat workspace untuk menyatukan beberapa proyek di dalam satu repositori."),(0,i.kt)("p",null,"Sebuah workspace haruslah memiliki ",(0,i.kt)("a",{parentName:"p",href:"/id/next/pnpm-workspace_yaml"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," di dalam folder akarnya. Sebuah workspace juga mungkin perlu memiliki ",(0,i.kt)("a",{parentName:"p",href:"/id/next/npmrc"},(0,i.kt)("inlineCode",{parentName:"a"},".npmrc"))," di dalam folder akarnya."),(0,i.kt)("h2",{id:"protokol-workspace-workspace"},"Protokol workspace (workspace:)"),(0,i.kt)("p",null,"Secara asali, pnpm akan menautkan paket dari workspace jika paket tersedia cocok dengan rentang yang dideklarasikan. Misalnya, ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," akan ditautkan ke ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," jika ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," memiliki ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," dalam dependensinya. Namun, jika ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," memiliki ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," dalam dependensi dan ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," tidak ada di workspace, maka ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," akan diinstal dari registri. Perilaku ini memperkenalkan beberapa ketidakpastian."),(0,i.kt)("p",null,"Untungnya, pnpm mendukung protokol ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace:"),". Ketika protokol ini digunakan, pnpm akan menolak untuk menyelesaikan apa pun selain paket workspace lokal. Jadi, jika Anda menyetel ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"'),", kali ini instalasi akan gagal karena ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," tidak ada di workspace."),(0,i.kt)("p",null,"This protocol is especially useful when the ",(0,i.kt)("a",{parentName:"p",href:"/id/next/npmrc#link-workspace-packages"},"link-workspace-packages")," option is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". Dalam hal ini, pnpm hanya akan menautkan paket dari workspace jika protokol ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace:")," digunakan."),(0,i.kt)("h3",{id:"merujuk-paket-workspace-melalui-alias"},"Merujuk paket workspace melalui alias"),(0,i.kt)("p",null,"Katakanlah Anda memiliki paket di workspace bernama ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),". Biasanya, Anda akan mereferensikannya sebagai ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:*"'),"."),(0,i.kt)("p",null,"Jika Anda ingin menggunakan alias yang berbeda, sintaks berikut juga akan berfungsi: ",(0,i.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"."),(0,i.kt)("p",null,"Sebelum dipublikasikan, alias dikonversi ke dependensi alias biasa. Contoh di atas akan menjadi: ",(0,i.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"'),"."),(0,i.kt)("h3",{id:"merujuk-paket-workspace-melalui-jalur-relatifnya"},"Merujuk paket workspace melalui jalur relatifnya"),(0,i.kt)("p",null,"Di workspace dengan 2 paket:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"bar")," mungkin memiliki ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," dalam dependensinya yang dinyatakan sebagai ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"'),". Sebelum dipublikasikan, spesifikasi ini dikonversi ke spesifikasi versi reguler yang didukung oleh semua pengelola paket."),(0,i.kt)("h3",{id:"memublikasikan-paket-workspace"},"Memublikasikan paket workspace"),(0,i.kt)("p",null,"Ketika paket workspace dikemas ke dalam sebuah arsip (baik itu melalui ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm pack")," atau salah satu perintah terbitkan seperti ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm publish"),"), kami secara dinamis menggantikan setiap dependensi ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace:")," dengan:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The corresponding version in the target workspace (if you use ",(0,i.kt)("inlineCode",{parentName:"li"},"workspace:*"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"workspace:~"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"workspace:^"),")"),(0,i.kt)("li",{parentName:"ul"},"The associated semver range (for any other range type)")),(0,i.kt)("p",null,"So for example, if we have ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"bar"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"qar"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"zoo")," in the workspace and they all are at version ",(0,i.kt)("inlineCode",{parentName:"p"},"1.5.0"),", the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:~",\n        "qar": "workspace:^",\n        "zoo": "workspace:^1.5.0"\n    }\n}\n')),(0,i.kt)("p",null,"Will be transformed into:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "~1.5.0",\n        "qar": "^1.5.0",\n        "zoo": "^1.5.0"\n    }\n}\n')),(0,i.kt)("p",null,"This feature allows you to depend on your local workspace packages while still being able to publish the resulting packages to the remote registry without needing intermediary publish steps - your consumers will be able to use your published workspaces as any other package, still benefitting from the guarantees semver offers."),(0,i.kt)("h2",{id:"release-workflow"},"Release workflow"),(0,i.kt)("p",null,"Versioning packages inside a workspace is a complex task and pnpm currently does not provide a built-in solution for it. However, there are 2 well tested tools that handle versioning and support pnpm:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/changesets/changesets"},"changesets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,i.kt)("p",null,"For how to set up a repository using Rush, read ",(0,i.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"this page"),"."),(0,i.kt)("p",null,"For using Changesets with pnpm, read ",(0,i.kt)("a",{parentName:"p",href:"/id/next/using-changesets"},"this guide"),"."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"pnpm cannot guarantee that scripts will be run in topological order if there are cycles between workspace dependencies. If pnpm detects cyclic dependencies during installation, it will produce a warning. If pnpm is able to find out which dependencies are causing the cycles, it will display them too."),(0,i.kt)("p",null,"If you see the message ",(0,i.kt)("inlineCode",{parentName:"p"},"There are cyclic workspace dependencies"),", please inspect workspace dependencies declared in ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h2",{id:"usage-examples"},"Usage examples"),(0,i.kt)("p",null,"Here are a few of the most popular open source projects that use the workspace feature of pnpm:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Project"),(0,i.kt)("th",{parentName:"tr",align:null},"Stars"),(0,i.kt)("th",{parentName:"tr",align:null},"Migration date"),(0,i.kt)("th",{parentName:"tr",align:null},"Migration commit"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/vercel/next.js"},"Next.js")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vercel/next.js",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},"2022-05-29"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"f7b81316aea4fc9962e5e54981a6d559004231aa"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/vitejs/vite"},"Vite")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vitejs/vite",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"3e1cce01d01493d33e50966d0d0fd39a86d229f9"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/vuejs/vue-next"},"Vue 3.0")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vuejs/vue-next",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},"2021-10-09"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"61c5fbd3e35152f5f32e95bf04d3ee083414cecb"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/prisma/prisma"},"Prisma")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/prisma/prisma",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"c4c83e788aa16d61bae7a6d00adc8a58b3789a06"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/slidevjs/slidev"},"Slidev")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/slidevjs/slidev",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},"2021-04-12"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"d6783323eb1ab1fc612577eb63579c8f7bc99c3a"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/element-plus/element-plus"},"Element Plus")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/element-plus/element-plus",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},"2021-09-23"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"f9e192535ff74d1443f1d9e0c5394fad10428629"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/verdaccio/verdaccio"},"Verdaccio")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/verdaccio/verdaccio",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"9dbf73e955fcb70b0a623c5ab89649b95146c744"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/withastro/astro"},"Astro")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/withastro/astro",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},"2022-03-08"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"240d88aefe66c7d73b9c713c5da42ae789c011ce"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/cyclejs/cyclejs"},"Cycle.js")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/cyclejs/cyclejs",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"f2187ab6688368edb904b649bd371a658f6a8637"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/vueuse/vueuse"},"VueUse")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vueuse/vueuse",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},"2021-09-25"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"826351ba1d9c514e34426c85f3d69fb9875c7dd9"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/nextauthjs/next-auth"},"NextAuth.js")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/nextauthjs/next-auth",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},"2022-05-03"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"4f29d39521451e859dbdb83179756b372e3dd7aa"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/sveltejs/kit"},"SvelteKit")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/sveltejs/kit",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"b164420ab26fa04fd0fbe0ac05431f36a89ef193"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Saul-Mirone/milkdown"},"Milkdown")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/Saul-Mirone/milkdown",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"4b2e1dd6125bc2198fd1b851c4f00eda70e9b913"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/vitest-dev/vitest"},"Vitest")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vitest-dev/vitest",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},"2021-12-13"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"d6ff0ccb819716713f5eab5c046861f4d8e4f988"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rollup/plugins"},"Rollup plugins")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/rollup/plugins",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"53fb18c0c2852598200c547a0b1d745d15b5b487"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/bytedance/bytemd"},"ByteMD")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/bytedance/bytemd",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},"2021-02-18"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"36ef25f1ea1cd0b08752df5f8c832302017bb7fb"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/ice-lab/icestark"},"icestark")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/ice-lab/icestark",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},"2021-12-16"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"4862326a8de53d02f617e7b1986774fd7540fccd"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/vuepress/vuepress-next"},"VuePress 2.0")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vuepress/vuepress-next",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},"2022-04-23"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"b85b1c3b39e80a8de92a7469381061f75ef33623"))))))}u.isMDXComponent=!0}}]);