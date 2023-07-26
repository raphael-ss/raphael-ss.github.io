"use strict";(self.webpackChunkdatacomb=self.webpackChunkdatacomb||[]).push([[16],{3905:(e,a,o)=>{o.d(a,{Zo:()=>m,kt:()=>f});var t=o(7294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=t.createContext({}),c=function(e){var a=t.useContext(p),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},m=function(e){var a=c(e.components);return t.createElement(p.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},l=t.forwardRef((function(e,a){var o=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(o),l=r,f=u["".concat(p,".").concat(l)]||u[l]||d[l]||n;return o?t.createElement(f,s(s({ref:a},m),{},{components:o})):t.createElement(f,s({ref:a},m))}));function f(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=o.length,s=new Array(n);s[0]=l;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<n;c++)s[c]=o[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}l.displayName="MDXCreateElement"},5598:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var t=o(7462),r=(o(7294),o(3905));const n={sidebar_position:6,slug:"/docs/programacao/sql-basico",title:"SQL - B\xe1sico",description:"Introdu\xe7\xe3o ao SQL"},s="Introdu\xe7\xe3o - SQL \u26c1",i={unversionedId:"programacao/sql-basic",id:"programacao/sql-basic",title:"SQL - B\xe1sico",description:"Introdu\xe7\xe3o ao SQL",source:"@site/docs/programacao/sql-basic.md",sourceDirName:"programacao",slug:"/docs/programacao/sql-basico",permalink:"/docs/programacao/sql-basico",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/docs/programacao/sql-basico",title:"SQL - B\xe1sico",description:"Introdu\xe7\xe3o ao SQL"},sidebar:"tutorialSidebar",previous:{title:"Python - Strings",permalink:"/docs/programacao/python-strings"},next:{title:"Markdown Features",permalink:"/programacao/markdown-features"}},p={},c=[],m={toc:c},u="wrapper";function d(e){let{components:a,...o}=e;return(0,r.kt)(u,(0,t.Z)({},m,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introdu\xe7\xe3o---sql-"},"Introdu\xe7\xe3o - SQL \u26c1"),(0,r.kt)("p",null,"Muitas organiza\xe7\xf5es e empresas usam ",(0,r.kt)("strong",{parentName:"p"},"SQL")," (",(0,r.kt)("strong",{parentName:"p"},"S"),"tructured ",(0,r.kt)("strong",{parentName:"p"},"Q"),"uery ",(0,r.kt)("strong",{parentName:"p"},"L"),"anguage) para acessar seu banco de dados. Um ",(0,r.kt)("strong",{parentName:"p"},"banco de dados")," \xe9 um conjunto de dados armazenado num computador, geralmente em ",(0,r.kt)("strong",{parentName:"p"},"tabelas"),", com m\xfaltiplas colunas e linhas."),(0,r.kt)("p",null,"Planilhas como Microsoft Excel e Google Sheets conseguem te permitir manipular e organizar dados diretamente, com sele\xe7\xe3o, filtra\xe7\xe3o, ordena\xe7\xe3o, etc."),(0,r.kt)("p",null,'Aplicando essas opera\xe7\xf5es, voc\xea pode separar o subconjunto de dados que procura. SQL (pronunciado "S-Q-L" ou "',(0,r.kt)("em",{parentName:"p"},"sequel"),'") te permite escrever "consultas", ou ',(0,r.kt)("em",{parentName:"p"},"queries"),", que definem o subconjunto dos dados que voc\xea procura."),(0,r.kt)("p",null,"A diferen\xe7a? Diferentemente de Excel ou Sheets, seu computador e SQL v\xe3o decidir ",(0,r.kt)("strong",{parentName:"p"},"como")," conseguir os dados: voc\xea s\xf3 precisa focar em definir ",(0,r.kt)("strong",{parentName:"p"},"quais")," dados voc\xea precisa. Voc\xea pode salvar essas ",(0,r.kt)("em",{parentName:"p"},"queries"),", refin\xe1-las, compartilh\xe1-las e us\xe1-las em outro conjunto de dados."),(0,r.kt)("p",null,'\xc9 uma \xf3tima forma de acessar dados, e relativamente simples, com uma sintaxe n\xe3o muito "enigm\xe1tico".'),(0,r.kt)("admonition",{title:"Como isso pode ser usado?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'"Massa, mas como vou utilizar isso no dia a dia?"'),(0,r.kt)("p",{parentName:"admonition"},"Veja alguns exemplos de utiliza\xe7\xe3o abaixo:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Funil de utiliza\xe7\xe3o\nUm exemplo b\xe1sico mas interessante \xe9 o de ",(0,r.kt)("strong",{parentName:"li"},"funil de utiliza\xe7\xe3o"),". Pense num e-commerce. O fluxo de uso se d\xe1 por 3 etapas:")),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Navega\xe7\xe3o pela p\xe1gina e pelos itens \xe0 venda;"),(0,r.kt)("li",{parentName:"ol"},"Clique num \xedcone para iniciar o processo de compra e ir \xe0 p\xe1gina de checkout;"),(0,r.kt)("li",{parentName:"ol"},"Enviar informa\xe7\xf5es de pagamento no checkout para completar a compra;")),(0,r.kt)("p",{parentName:"admonition"},"\xc9 natural que nem todos os visitantes do site v\xe3o chegar na etapa de checkout, e nem todos na etapa de checkout v\xe3o finalizar a compra. Isto \xe9, a taxa de convers\xe3o nunca ser\xe1 100%."),(0,r.kt)("p",{parentName:"admonition"},"Esse tipo de processo \xe9 denominado ",(0,r.kt)("em",{parentName:"p"},"funil"),". Sabendo disso, como podemos colocar nossas habilidades em SQL em pr\xe1tica para melhorar o site? "),(0,r.kt)("p",{parentName:"admonition"},"Podemos usar uma ",(0,r.kt)("em",{parentName:"p"},"query")," para combinar dados dos usu\xe1rios que visitaram diferentes se\xe7\xf5es da p\xe1gina, dados dos usu\xe1rios que visitaram a p\xe1gina de checkout e dados dos usu\xe1rios que finalizaram a compra."),(0,r.kt)("p",{parentName:"admonition"},"Assim, podemos concluir a porcentagem estimada de usu\xe1rios que movem para a pr\xf3xima etapa no funil."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Churn Rate (Taxa de Cancelamento)\nPara plataformas e p\xe1ginas com servi\xe7os por assinatura, podemos utilizar SQL para coletar dados de cancelamentos e calcular a ",(0,r.kt)("strong",{parentName:"li"},"taxa de cancelamento"),", que se d\xe1 por")),(0,r.kt)("p",{parentName:"admonition"},"Taxa de Cancelamento = (cancelamentos/total de inscri\xe7\xf5es)"),(0,r.kt)("p",{parentName:"admonition"},"E podemos fazer isso para analisar a ",(0,r.kt)("em",{parentName:"p"},"churn rate")," todos os meses, para testar mudan\xe7as e melhorar o servi\xe7o.")))}d.isMDXComponent=!0}}]);