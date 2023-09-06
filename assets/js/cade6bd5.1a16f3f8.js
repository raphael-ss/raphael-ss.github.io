"use strict";(self.webpackChunkdatacomb=self.webpackChunkdatacomb||[]).push([[1227],{3905:(e,r,o)=>{o.d(r,{Zo:()=>l,kt:()=>f});var a=o(7294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function t(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function c(e,r){if(null==e)return{};var o,a,n=function(e,r){if(null==e)return{};var o,a,n={},t=Object.keys(e);for(a=0;a<t.length;a++)o=t[a],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)o=t[a],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),u=function(e){var r=a.useContext(s),o=r;return e&&(o="function"==typeof e?e(r):i(i({},r),e)),o},l=function(e){var r=u(e.components);return a.createElement(s.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var o=e.components,n=e.mdxType,t=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(o),p=n,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||t;return o?a.createElement(f,i(i({ref:r},l),{},{components:o})):a.createElement(f,i({ref:r},l))}));function f(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var t=o.length,i=new Array(t);i[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[m]="string"==typeof e?e:n,i[1]=c;for(var u=2;u<t;u++)i[u]=o[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},8948:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>u});var a=o(7462),n=(o(7294),o(3905));const t={sidebar_position:1,slug:"/docs/extras/programacao-em-c/recursao",title:"Recurs\xe3o"},i="Recurs\xe3o",c={unversionedId:"extras/c-programming/recursion-c",id:"extras/c-programming/recursion-c",title:"Recurs\xe3o",description:"A recurs\xe3o, ou recursividade, \xe9 um conceito e t\xe9cnica de programa\xe7\xe3o onde uma fun\xe7\xe3o chama a si mesma ao longo de sua execu\xe7\xe3o, para resolver um",source:"@site/docs/extras/c-programming/recursion-c.md",sourceDirName:"extras/c-programming",slug:"/docs/extras/programacao-em-c/recursao",permalink:"/docs/extras/programacao-em-c/recursao",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/docs/extras/programacao-em-c/recursao",title:"Recurs\xe3o"},sidebar:"tutorialSidebar",previous:{title:"Escopo de Vari\xe1veis e Modelos de Mem\xf3ria",permalink:"/docs/extras/programacao-em-c/escopo-de-variaveis-e-modelos-de-memoria"},next:{title:"Intro - Extras",permalink:"/docs/extras/intro"}},s={},u=[{value:"Conclus\xe3o \ud83c\udf91",id:"conclus\xe3o-",level:2}],l={toc:u},m="wrapper";function d(e){let{components:r,...o}=e;return(0,n.kt)(m,(0,a.Z)({},l,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"recurs\xe3o"},"Recurs\xe3o"),(0,n.kt)("p",null,"A recurs\xe3o, ou recursividade, \xe9 um conceito e t\xe9cnica de programa\xe7\xe3o onde uma fun\xe7\xe3o chama a si mesma ao longo de sua execu\xe7\xe3o, para resolver um\nproblema. Traduzindo para termos n\xe3o-t\xe9cnicos, recursividade \xe9 essencialmente a ideia de repetir uma s\xe9rie de etapas at\xe9 que um problema chegue num determinado estado, solucionado ou poss\xedvel de solucionar. "),(0,n.kt)("p",null,"Podemos trabalhar com recurs\xe3o da seguinte maneira:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Condi\xe7\xe3o de Parada/T\xe9rmino:")),(0,n.kt)("p",null,"Definir na sua fun\xe7\xe3o uma condi\xe7\xe3o de parada \xe9 ",(0,n.kt)("strong",{parentName:"p"},"essencial")," para o funcionamento do c\xf3digo. A fun\xe7\xe3o deveria parar quando o problema alcan\xe7ar a etapa\nde ser facilmente solucionado ou j\xe1 estar solucionado."),(0,n.kt)("admonition",{title:"Quebrando a Stack",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Visto que resolver um problema de forma recursiva ocasiona um n\xb0 de chamadas de fun\xe7\xe3o muito grande, caso n\xe3o for feito corretamente, como por exemplo n\xe3o ter condi\xe7\xe3o de parada definida corretamente, isso ir\xe1 causar um erro, por conta da quebra do tamanho da Stack.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Quebrar o problema:")),(0,n.kt)("p",null,"Para solucionar o problema, quebre-o em partes menores, que podem ser resolvidas facilmente, e construa seu c\xf3digo de forma que o problema (originalmente grande) seja resolvido com base na solu\xe7\xe3o de pequenos problemas repetidamente. "),(0,n.kt)("p",null,"Existem problemas naturalmente recursivos no mundo, como, por exemplo, calcular o fatorial de um n\xfamero. Veja o exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n\nint fatorial(int n) {\n    // Base da Recurs\xe3o\n    if (n <= 1) {\n        return 1;\n    }\n    else {\n        // Recurs\xe3o\n        return n * fatorial(n - 1);\n    }\n}\nint main() {\n    int i = 5;\n    printf("%d! = %d\\n", i, fatorial(i));\n    return 0;\n}\n\n// Aqui, estamos calculando o fatorial de 5 de forma recursiva.\n')),(0,n.kt)("p",null,"Embora um recurso poderoso, a recurs\xe3o deve ser usada com cuidado para que o c\xf3digo n\xe3o entre em loops infinitos. "),(0,n.kt)("h2",{id:"conclus\xe3o-"},"Conclus\xe3o \ud83c\udf91"),(0,n.kt)("p",null,"Bom, essa se\xe7\xe3o termina aqui.\nCaso tenha alguma d\xfavida que n\xe3o conseguiu encontrar online, envie para ",(0,n.kt)("a",{parentName:"p",href:"mailto:raphaelsoaresbrasil@gmail.com."},"raphaelsoaresbrasil@gmail.com."),"\nObrigado pela aten\xe7\xe3o, e bons estudos."))}d.isMDXComponent=!0}}]);