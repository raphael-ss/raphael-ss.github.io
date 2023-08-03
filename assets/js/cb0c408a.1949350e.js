"use strict";(self.webpackChunkdatacomb=self.webpackChunkdatacomb||[]).push([[94],{3905:(e,o,a)=>{a.d(o,{Zo:()=>d,kt:()=>f});var t=a(7294);function n(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function r(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?r(Object(a),!0).forEach((function(o){n(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function m(e,o){if(null==e)return{};var a,t,n=function(e,o){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||(n[a]=e[a]);return n}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),l=function(e){var o=t.useContext(s),a=o;return e&&(a="function"==typeof e?e(o):i(i({},o),e)),a},d=function(e){var o=l(e.components);return t.createElement(s.Provider,{value:o},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},c=t.forwardRef((function(e,o){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),p=l(a),c=n,f=p["".concat(s,".").concat(c)]||p[c]||u[c]||r;return a?t.createElement(f,i(i({ref:o},d),{},{components:a})):t.createElement(f,i({ref:o},d))}));function f(e,o){var a=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var m={};for(var s in o)hasOwnProperty.call(o,s)&&(m[s]=o[s]);m.originalType=e,m[p]="string"==typeof e?e:n,i[1]=m;for(var l=2;l<r;l++)i[l]=a[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5619:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>m,toc:()=>l});var t=a(7462),n=(a(7294),a(3905));const r={sidebar_position:7,slug:"/docs/programacao/python-modules",title:"Python - M\xf3dulos",description:"M\xf3dulos em Python."},i="Python - M\xf3dulos",m={unversionedId:"programacao/python-modules",id:"programacao/python-modules",title:"Python - M\xf3dulos",description:"M\xf3dulos em Python.",source:"@site/docs/programacao/python-modules.md",sourceDirName:"programacao",slug:"/docs/programacao/python-modules",permalink:"/docs/programacao/python-modules",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,slug:"/docs/programacao/python-modules",title:"Python - M\xf3dulos",description:"M\xf3dulos em Python."},sidebar:"tutorialSidebar",previous:{title:"Python - Dicion\xe1rios",permalink:"/docs/programacao/python-dictionaries"},next:{title:"Python - Manipula\xe7\xe3o de Arquivos",permalink:"/docs/programacao/python-files"}},s={},l=[{value:"Importando M\xf3dulos",id:"importando-m\xf3dulos",level:2},{value:"M\xf3dulo <code>random</code>",id:"m\xf3dulo-random",level:2},{value:"<code>random.randint()</code>",id:"randomrandint",level:3},{value:"<code>random.choice()</code>",id:"randomchoice",level:3},{value:"<code>sample()</code>",id:"sample",level:3},{value:"M\xf3dulo <code>datetime</code>",id:"m\xf3dulo-datetime",level:2},{value:"Conclus\xe3o \ud83c\udf91",id:"conclus\xe3o-",level:2}],d={toc:l},p="wrapper";function u(e){let{components:o,...a}=e;return(0,n.kt)(p,(0,t.Z)({},d,a,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"python---m\xf3dulos"},"Python - M\xf3dulos"),(0,n.kt)("p",null,"Python \xe9 uma das linguagens mais famosas e utilizadas no mundo. Isso contribui para a cria\xe7\xe3o de bibliotecas e arquivos de c\xf3digo estruturado com fun\xe7\xf5es e\noutras funcionalidades, como classes (algo que n\xe3o vimos ainda) \xfateis para diversas tarefas. Todo esse c\xf3digo estruturado desenvolvido por terceiros pode ser 'importado' em Python,\nassim como os arquivos que voc\xea mesmo desenvolver."),(0,n.kt)("p",null,"M\xf3dulos s\xe3o arquivos que agrupam fun\xe7\xf5es, classes e vari\xe1veis relacionadas, promovendo a ",(0,n.kt)("strong",{parentName:"p"},"modularidade")," e ",(0,n.kt)("strong",{parentName:"p"},"reutiliza\xe7\xe3o de c\xf3digo"),". Ao separar partes espec\xedficas do programa em\nm\xf3dulos, \xe9 poss\xedvel organizar melhor o c\xf3digo, melhorar a legibilidade e facilitar a manuten\xe7\xe3o. Esses m\xf3dulos podem ser importados em outros arquivos Python, expandindo as capacidades do\nprograma, evitando repeti\xe7\xf5es e permitindo a colabora\xe7\xe3o entre desenvolvedores. Isso promove uma abordagem estruturada e eficiente na constru\xe7\xe3o de software."),(0,n.kt)("h2",{id:"importando-m\xf3dulos"},"Importando M\xf3dulos"),(0,n.kt)("p",null,"Existem algumas formas diferentes de importar m\xf3dulos em Python. Podemos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Importar o m\xf3dulo inteiro como objeto"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li",start:2},(0,n.kt)("li",{parentName:"ol"},"Importar somente uma fun\xe7\xe3o"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li",start:3},(0,n.kt)("li",{parentName:"ol"},"Importar as fun\xe7\xf5es do m\xf3dulo")))),(0,n.kt)("p",null,"Veja a sintaxe para cada um:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"#-1.\nimport module\nmodule.function()\n\n#-2.\nfrom module import function\nfuncion()\n\n#-3.\nfrom module import *\nfunction()\n")),(0,n.kt)("p",null,"Vamos comentar sobre esses 3 m\xe9todos: o ",(0,n.kt)("strong",{parentName:"p"},"primeiro")," \xe9 o mais comum e mais bem visto na ocasi\xe3o em que usaremos diversas fun\xe7\xf5es do m\xf3dulo em v\xe1rias inst\xe2ncias no c\xf3digo. O ",(0,n.kt)("strong",{parentName:"p"},"segundo"),"\n\xe9 bem visto se s\xf3 usaremos uma \xfanica fun\xe7\xe3o do m\xf3dulo, visto que importar o m\xf3dulo todo pode ser um ato demorado (se o m\xf3dulo for muito grande). J\xe1 o terceiro, \xe9 mal-visto. "),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Por qu\xea?")),(0,n.kt)("p",null,"N\xe3o \xe9 recomendado nem visto com bons olhos o terceiro m\xe9todo pois isso importa todas as fun\xe7\xf5es do m\xf3dulo sem precisar referenciar o objeto, isto \xe9, sem fazer ",(0,n.kt)("inlineCode",{parentName:"p"},"module.function()"),".\nPortanto, na constru\xe7\xe3o de ",(0,n.kt)("em",{parentName:"p"},"softwares")," maiores, usar esse m\xe9todo pode causar conflitos em nomes de fun\xe7\xf5es iguais entre m\xf3dulos ou no seu pr\xf3prio c\xf3digo, deixar o c\xf3digo menos\nleg\xedvel e mais dif\xedcil de manter."),(0,n.kt)("admonition",{title:"Importando Arquivos",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Voc\xea tamb\xe9m pode importar arquivos Python com fun\xe7\xf5es definidas e c\xf3digo estruturado que voc\xea ou algum colega de trabalho fez. Basta fazer "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import file\n\nfile.function()\n"))),(0,n.kt)("p",null,"Usando a palavra chave ",(0,n.kt)("inlineCode",{parentName:"p"},"as"),", podemos renomear nossos m\xf3dulos da forma que quisermos referenci\xe1-los (isso \xe9 \xfatil pois existem m\xf3dulos com nomes bem grandes).\nVeja a sintaxe:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import module as mod\n\nmod.function()\n")),(0,n.kt)("admonition",{title:"Conven\xe7\xf5es de Importa\xe7\xe3o",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Para facilitar a distribui\xe7\xe3o e leitura de c\xf3digo, existem algumas conven\xe7\xf5es usadas na hora de 'renomear' alguns m\xf3dulos basante usados com a palavra chave ",(0,n.kt)("inlineCode",{parentName:"p"},"as"),".\nVeja quais s\xe3o (s\xf3 estamos tratando das conven\xe7\xf5es das bibliotecas que usaremos):"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nimport matplotlib.pyplot as plt\nimport pandas as pd\nimport seaborn as sns\nimport statsmodels as sm\n"))),(0,n.kt)("p",null,"Vamos falar de alguns m\xf3dulos famosos."),(0,n.kt)("h2",{id:"m\xf3dulo-random"},"M\xf3dulo ",(0,n.kt)("inlineCode",{parentName:"h2"},"random")),(0,n.kt)("p",null,"Em Python, o m\xf3dulo ",(0,n.kt)("inlineCode",{parentName:"p"},"random")," oferece m\xe9todos para ",(0,n.kt)("strong",{parentName:"p"},"simular comportamento n\xe3o determin\xedstico")," na sele\xe7\xe3o de um n\xfamero aleat\xf3rio de um\nintervalo e na escolha de um item aleat\xf3rio de uma lista. Alguns dos m\xe9todos desse m\xf3dulo s\xe3o o m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"randint()"),", que fornece uma sele\xe7\xe3o uniforme aleat\xf3ria\nde um intervalo de n\xfameros inteiros, e o m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"choice()"),", que oferece uma sele\xe7\xe3o uniforme de um elemento aleat\xf3rio de uma sequ\xeancia."),(0,n.kt)("h3",{id:"randomrandint"},(0,n.kt)("inlineCode",{parentName:"h3"},"random.randint()")),(0,n.kt)("p",null,"O m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"randint()")," retorna um inteiro aleat\xf3rio numa amostra definida pelos argumentos. Toma 2 argumentos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1\xb0 (obrigat\xf3rio): in\xedcio da amostra"),(0,n.kt)("li",{parentName:"ul"},"2\xb0 (obrigat\xf3rio): fim da amostra")),(0,n.kt)("p",null,"Veja um exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import random\n\nmisterious_integer = random.randint(1, 10)\n")),(0,n.kt)("p",null,"Ambos o in\xedcio e a parada est\xe3o inclu\xeddos na amostra, ou seja, \xe9 um intervalo fechado ",(0,n.kt)("inlineCode",{parentName:"p"},"[a, b]"),"."),(0,n.kt)("h3",{id:"randomchoice"},(0,n.kt)("inlineCode",{parentName:"h3"},"random.choice()")),(0,n.kt)("p",null,"O m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"choice()")," retorna o valor de uma escolha aleat\xf3ria de uma sequ\xeancia ordenada. Toma 1 argumento:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1\xb0 (obrigat\xf3rio): sequ\xeancia ordenada (como lista, tupla, range, etc.)")),(0,n.kt)("p",null,"Veja um exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import random\n\nparticipants = ["John", "Mary", "Karl", "Alissa"]\n\nwinner = random.choice(participants)\n')),(0,n.kt)("h3",{id:"sample"},(0,n.kt)("inlineCode",{parentName:"h3"},"sample()")),(0,n.kt)("p",null,"O m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"sample()")," escolhe aleatoriamente uma amostra de uma sequ\xeancia. Toma 2 argumentos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1\xb0 (obrigat\xf3rio): sequ\xeancia ordenada (coo lista, tupla, range, etc.)"),(0,n.kt)("li",{parentName:"ul"},"2\xb0 (obrigat\xf3rio): tamanho da amostra")),(0,n.kt)("p",null,"Veja um exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import random\n\nparticipants = ["John", "Mary", "Karl", "Alissa"]\n\n#-Retorna uma lista com a amostra de tamanho k\nwinners = random.sample(participants, k=2)\n')),(0,n.kt)("h2",{id:"m\xf3dulo-datetime"},"M\xf3dulo ",(0,n.kt)("inlineCode",{parentName:"h2"},"datetime")),(0,n.kt)("p",null,"N\xe3o vamos entrar em detalhes, mas Python possui um m\xf3dulo para trabalhar com datas, chamado ",(0,n.kt)("inlineCode",{parentName:"p"},"datetime"),". Pode-se definir datas com precis\xe3o e imprimi-las com formata\xe7\xe3o.\nExistem v\xe1rios tipos de datas para se trabalhar. Veja um exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import datetime\nfeb_16_2019 = datetime.date(year=2019, month=2, day=16)\nfeb_16_2019 = datetime.date(2019, 2, 16)\nprint(feb_16_2019) \n\ntime_13_48min_5sec = datetime.time(hour=13, minute=48, second=5)\ntime_13_48min_5sec = datetime.time(13, 48, 5)\nprint(time_13_48min_5sec) \n\ntimestamp= datetime.datetime(year=2019, month=2, day=16, hour=13, minute=48, second=5)\ntimestamp = datetime.datetime(2019, 2, 16, 13, 48, 5)\nprint (timestamp) \n\n#->> 2019-02-16\n#->> 13:48:05\n#->> 2019-01-02 13:48:05\n")),(0,n.kt)("h2",{id:"conclus\xe3o-"},"Conclus\xe3o \ud83c\udf91"),(0,n.kt)("p",null,"Bom, essa se\xe7\xe3o termina aqui. Caso tenha alguma d\xfavida que n\xe3o conseguiu encontrar online, envie para ",(0,n.kt)("a",{parentName:"p",href:"mailto:raphaelsoaresbrasil@gmail.com."},"raphaelsoaresbrasil@gmail.com."),"\nObrigado pela aten\xe7\xe3o, e bons estudos."))}u.isMDXComponent=!0}}]);