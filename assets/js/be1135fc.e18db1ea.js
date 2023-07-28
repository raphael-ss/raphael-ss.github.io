"use strict";(self.webpackChunkdatacomb=self.webpackChunkdatacomb||[]).push([[16],{3905:(e,a,o)=>{o.d(a,{Zo:()=>d,kt:()=>k});var t=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function s(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?s(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function l(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var m=t.createContext({}),i=function(e){var a=t.useContext(m),o=a;return e&&(o="function"==typeof e?e(a):r(r({},a),e)),o},d=function(e){var a=i(e.components);return t.createElement(m.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,s=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=i(o),c=n,k=u["".concat(m,".").concat(c)]||u[c]||p[c]||s;return o?t.createElement(k,r(r({ref:a},d),{},{components:o})):t.createElement(k,r({ref:a},d))}));function k(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=o.length,r=new Array(s);r[0]=c;var l={};for(var m in a)hasOwnProperty.call(a,m)&&(l[m]=a[m]);l.originalType=e,l[u]="string"==typeof e?e:n,r[1]=l;for(var i=2;i<s;i++)r[i]=o[i];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},5598:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>m,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var t=o(7462),n=(o(7294),o(3905));const s={sidebar_position:6,slug:"/docs/programacao/sql-basico",title:"SQL - B\xe1sico",description:"Introdu\xe7\xe3o ao SQL"},r="Introdu\xe7\xe3o - SQL \u26c1",l={unversionedId:"programacao/sql-basic",id:"programacao/sql-basic",title:"SQL - B\xe1sico",description:"Introdu\xe7\xe3o ao SQL",source:"@site/docs/programacao/sql-basic.md",sourceDirName:"programacao",slug:"/docs/programacao/sql-basico",permalink:"/docs/programacao/sql-basico",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/docs/programacao/sql-basico",title:"SQL - B\xe1sico",description:"Introdu\xe7\xe3o ao SQL"},sidebar:"tutorialSidebar",previous:{title:"Python - Strings",permalink:"/docs/programacao/python-strings"},next:{title:"Markdown Features",permalink:"/programacao/markdown-features"}},m={},i=[{value:"Manipula\xe7\xe3o das Tabelas",id:"manipula\xe7\xe3o-das-tabelas",level:2},{value:"CREATE TABLE",id:"create-table",level:3},{value:"Restri\xe7\xf5es das Colunas (Column Constraints)",id:"restri\xe7\xf5es-das-colunas-column-constraints",level:3},{value:"INSERT INTO",id:"insert-into",level:3},{value:"ALTER TABLE",id:"alter-table",level:3},{value:"DELETE",id:"delete",level:3},{value:"UPDATE",id:"update",level:3},{value:"Queries",id:"queries",level:2},{value:"SELECT",id:"select",level:3},{value:"WHERE",id:"where",level:3},{value:"DISTINCT",id:"distinct",level:3},{value:"LIKE",id:"like",level:3},{value:"ORDER BY",id:"order-by",level:3},{value:"AND, OR",id:"and-or",level:3},{value:"BETWEEN",id:"between",level:3},{value:"LIMIT",id:"limit",level:3},{value:"CASE",id:"case",level:3},{value:"Fun\xe7\xf5es Agregadas",id:"fun\xe7\xf5es-agregadas",level:2},{value:"COUNT()",id:"count",level:3},{value:"MAX()",id:"max",level:3},{value:"MIN()",id:"min",level:3},{value:"SUM()",id:"sum",level:3},{value:"AVG()",id:"avg",level:3},{value:"ROUND()",id:"round",level:3},{value:"GROUP BY",id:"group-by",level:3},{value:"HAVING",id:"having",level:3}],d={toc:i},u="wrapper";function p(e){let{components:a,...s}=e;return(0,n.kt)(u,(0,t.Z)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introdu\xe7\xe3o---sql-"},"Introdu\xe7\xe3o - SQL \u26c1"),(0,n.kt)("p",null,"Muitas organiza\xe7\xf5es e empresas usam ",(0,n.kt)("strong",{parentName:"p"},"SQL")," (",(0,n.kt)("strong",{parentName:"p"},"S"),"tructured ",(0,n.kt)("strong",{parentName:"p"},"Q"),"uery ",(0,n.kt)("strong",{parentName:"p"},"L"),"anguage) para acessar seu banco de dados. Um ",(0,n.kt)("strong",{parentName:"p"},"banco de dados")," \xe9 um conjunto de dados armazenado num computador, geralmente em ",(0,n.kt)("strong",{parentName:"p"},"tabelas"),", com m\xfaltiplas colunas e linhas."),(0,n.kt)("p",null,"Planilhas como Microsoft Excel e Google Sheets conseguem te permitir manipular e organizar dados diretamente, com sele\xe7\xe3o, filtra\xe7\xe3o, ordena\xe7\xe3o, etc."),(0,n.kt)("p",null,'Aplicando essas opera\xe7\xf5es, voc\xea pode separar o subconjunto de dados que procura. SQL (pronunciado "S-Q-L" ou "',(0,n.kt)("em",{parentName:"p"},"sequel"),'") te permite escrever "consultas", ou ',(0,n.kt)("em",{parentName:"p"},"queries"),", que definem o subconjunto dos dados que voc\xea procura."),(0,n.kt)("p",null,"A diferen\xe7a? Diferentemente de Excel ou Sheets, seu computador e SQL v\xe3o decidir ",(0,n.kt)("strong",{parentName:"p"},"como")," conseguir os dados: voc\xea s\xf3 precisa focar em definir ",(0,n.kt)("strong",{parentName:"p"},"quais")," dados voc\xea precisa. Voc\xea pode salvar essas ",(0,n.kt)("em",{parentName:"p"},"queries"),", refin\xe1-las, compartilh\xe1-las e us\xe1-las em outro conjunto de dados."),(0,n.kt)("p",null,'\xc9 uma \xf3tima forma de acessar dados, e relativamente simples, com uma sintaxe n\xe3o muito "enigm\xe1tico".'),(0,n.kt)("p",null,"Como isso pode ser usado?"),(0,n.kt)("p",null,"Veja alguns exemplos de utiliza\xe7\xe3o abaixo:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Funil de utiliza\xe7\xe3o")),(0,n.kt)("p",null,"Um exemplo b\xe1sico mas interessante \xe9 o de ",(0,n.kt)("strong",{parentName:"p"},"funil de utiliza\xe7\xe3o"),". Pense num e-commerce. O fluxo de uso se d\xe1 por 3 etapas:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navega\xe7\xe3o pela p\xe1gina e pelos itens \xe0 venda;"),(0,n.kt)("li",{parentName:"ol"},"Clique num \xedcone para iniciar o processo de compra e ir \xe0 p\xe1gina de checkout;"),(0,n.kt)("li",{parentName:"ol"},"Enviar informa\xe7\xf5es de pagamento no checkout para completar a compra;")),(0,n.kt)("p",null,"\xc9 natural que nem todos os visitantes do site v\xe3o chegar na etapa de checkout, e nem todos na etapa de checkout v\xe3o finalizar a compra. Isto \xe9, a taxa de convers\xe3o nunca ser\xe1 100%."),(0,n.kt)("p",null,"Esse tipo de processo \xe9 denominado ",(0,n.kt)("em",{parentName:"p"},"funil"),". Sabendo disso, como podemos colocar nossas habilidades em SQL em pr\xe1tica para melhorar o site? "),(0,n.kt)("p",null,"Podemos usar uma ",(0,n.kt)("em",{parentName:"p"},"query")," para combinar dados dos usu\xe1rios que visitaram diferentes se\xe7\xf5es da p\xe1gina, dados dos usu\xe1rios que visitaram a p\xe1gina de checkout e dados dos usu\xe1rios que finalizaram a compra."),(0,n.kt)("p",null,"Assim, podemos concluir a porcentagem estimada de usu\xe1rios que movem para a pr\xf3xima etapa no funil."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Churn Rate (Taxa de Cancelamento)")),(0,n.kt)("p",null,"Para plataformas e p\xe1ginas com servi\xe7os por assinatura, podemos utilizar SQL para coletar dados de cancelamentos e calcular a ",(0,n.kt)("strong",{parentName:"p"},"taxa de cancelamento"),", que se d\xe1 por"),(0,n.kt)("p",null,"Taxa de Cancelamento = (cancelamentos/total de inscri\xe7\xf5es)"),(0,n.kt)("p",null,"E podemos fazer isso para analisar a ",(0,n.kt)("em",{parentName:"p"},"churn rate")," todos os meses, para testar mudan\xe7as e melhorar o servi\xe7o."),(0,n.kt)("p",null,"Bom, vamos come\xe7ar."),(0,n.kt)("h2",{id:"manipula\xe7\xe3o-das-tabelas"},"Manipula\xe7\xe3o das Tabelas"),(0,n.kt)("p",null,"J\xe1 disse que os dados em bancos de dados relacionais s\xe3o organizados em tabelas: mas como se parecem essas tabelas?"),(0,n.kt)("p",null,"Veja um exemplo abaixo:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Exemplo de Tabela SQL",src:o(5680).Z,width:"789",height:"208"})),(0,n.kt)("p",null,"Podemos chamar as linhas de linhas, registros, ou ",(0,n.kt)("em",{parentName:"p"},"rows"),", e as colunas de colunas, campos ou ",(0,n.kt)("em",{parentName:"p"},"columns")," (que s\xe3o os termos em ingl\xeas). Veja os comandos de manipula\xe7\xe3o que usaremos:"),(0,n.kt)("h3",{id:"create-table"},"CREATE TABLE"),(0,n.kt)("p",null,"A declara\xe7\xe3o ",(0,n.kt)("strong",{parentName:"p"},"CREATE TABLE")," cria uma nova tabela no banco de dados, com os nomes das colunas e os tipos de dados de cada coluna. Observe:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE nome_da_tabela (\n    coluna1 TIPO_DE_DADO,\n    coluna2 TIPO_DE_DADO,\n    coluna3 TIPO_DE_DADO\n);\n")),(0,n.kt)("admonition",{title:"TIPOS DE DADOS NO SQL",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Os tipos de dados v\xe3o depender do RDBMS usado: n\xf3s vamos usar os padr\xf5es do SQLite em alguns artigos e os padr\xf5es do PostgreSQL em outros. Neste artigo, estamos usando os tipos do SQLite, que s\xe3o:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"INTEGER (Inteiro)"),(0,n.kt)("li",{parentName:"ul"},"TEXT (String)"),(0,n.kt)("li",{parentName:"ul"},"REAL (Float)"),(0,n.kt)("li",{parentName:"ul"},"DATE (Data no padr\xe3o YYYY-MM-DD)")),(0,n.kt)("p",{parentName:"admonition"},"Saiba tamb\xe9m que chamaremos os comandos de ",(0,n.kt)("em",{parentName:"p"},"cl\xe1usulas"),". ")),(0,n.kt)("p",null,"Aplicando num exemplo: imagine que queremos criar uma tabela que armazena dados sobre estudantes de uma escola. Veja:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE estudantes (\n    matricula INTEGER,\n    nome TEXT,\n    idade INTEGER,\n    data_de_inicio DATE,\n    media REAL NOT NULL,\n    turma TEXT NOT NULL\n);\n")),(0,n.kt)("p",null,"Com esse comando n\xf3s criamos uma tabela simples que o nome dos estudantes, as idades, data de in\xedcio na escola e a m\xe9dia geral das notas. Perceba que ser\xe3o distintos uns dos outros com a categoria ",(0,n.kt)("strong",{parentName:"p"},"matricula"),"."),(0,n.kt)("admonition",{title:"Padr\xf5es do SQL",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"As cl\xe1usulas e declara\xe7\xf5es ser escritas em letras mai\xfasculas, e s\xe3o terminados em ponto e v\xedrgula ",(0,n.kt)("strong",{parentName:"p"},";"),".")),(0,n.kt)("h3",{id:"restri\xe7\xf5es-das-colunas-column-constraints"},"Restri\xe7\xf5es das Colunas (Column Constraints)"),(0,n.kt)("p",null,"Em muitos casos, ser\xe1 interessante determinar algumas restri\xe7\xf5es para as colunas de nossas tabelas, para melhor organiza\xe7\xe3o, seguran\xe7a e melhor adapta\xe7\xe3o e manipulabilidade."),(0,n.kt)("p",null,"Voc\xea pode ver as restri\xe7\xf5es como 'regras'. Veja quais s\xe3o:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"PRIMARY KEY"),": pode ser usada para identificar cada inst\xe2ncia da coluna, e n\xe3o pode ter valor repetido, como uma 'chave';"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"UNIQUE"),": colunas com essa restri\xe7\xe3o n\xe3o podem ter valores repetidos;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NOT NULL"),": colunas com essa restri\xe7\xe3o n\xe3o podem ser nulas, isto \xe9, vazias;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DEFAULT"),": associa um valor ",(0,n.kt)("em",{parentName:"li"},"default")," \xe0 coluna caso n\xe3o tenha sido especificado;")),(0,n.kt)("admonition",{title:"PRIMARY KEY x UNIQUE",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"A diferen\xe7a entre essas restri\xe7\xf5es \xe9 que s\xf3 se pode ter 1 coluna com a restri\xe7\xe3o ",(0,n.kt)("strong",{parentName:"p"},"PRIMARY KEY")," por tabela, enquanto podem existir diversas colunas com a restri\xe7\xe3o ",(0,n.kt)("strong",{parentName:"p"},"UNIQUE")," numa mesma tabela.")),(0,n.kt)("h3",{id:"insert-into"},"INSERT INTO"),(0,n.kt)("p",null,"A declara\xe7\xe3o ",(0,n.kt)("strong",{parentName:"p"},"INSERT INTO")," \xe9 usada para adicionar novas LINHAS \xe0 uma tabela (\xe9 importante saber quais declara\xe7\xf5es servem para coluna e quais para linhas)."),(0,n.kt)("p",null,"Pode-se ser escrita de duas formas:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Inserir por ",(0,n.kt)("strong",{parentName:"li"},"NOME")),(0,n.kt)("li",{parentName:"ul"},"Inserir por ",(0,n.kt)("strong",{parentName:"li"},"ORDEM"))),(0,n.kt)("p",null,"Veja um exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"-- Inserir em colunas por nome:\nINSERT INTO nome_da_tabela\nVALUES (valor1, valor2);\n\n-- Inserir em colunas por ordem:\nINSERT INTO nome_da_tabela (coluna1, coluna2)\nVALUES (valor1, valor2);\n")),(0,n.kt)("admonition",{title:"Padr\xf5es do SQL",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Perceba que ap\xf3s a linha do ",(0,n.kt)("strong",{parentName:"p"},"INSERT INTO"),", n\xe3o h\xe1 ponto e v\xedrgula. N\xe3o \xe9 um erro; \xe9 o padr\xe3o est\xe9tico\nque devemos seguir quando escrevemos em SQL."),(0,n.kt)("p",{parentName:"admonition"},"O comando poderia ser dado dessa forma:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES (valor1, valor2);\n")),(0,n.kt)("p",{parentName:"admonition"},"Por\xe9m, para maior facilidade de leitura e interpreta\xe7\xe3o, damos uma quebra de linha a cada cl\xe1usula.\nNesse caso, as cl\xe1usulas s\xe3o ",(0,n.kt)("strong",{parentName:"p"},"INSERT INTO")," e ",(0,n.kt)("strong",{parentName:"p"},"VALUES"),".")),(0,n.kt)("h3",{id:"alter-table"},"ALTER TABLE"),(0,n.kt)("p",null,"A cl\xe1usula ",(0,n.kt)("strong",{parentName:"p"},"ALTER TABLE")," \xe9 usada para modificar as COLUNAS de uma tabela. Combinada com a cl\xe1usula ",(0,n.kt)("strong",{parentName:"p"},"ADD COLUMN"),", podemos adicionar colunas novas na tabela."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE nome_da_tabela\nADD nome_da_coluna TIPO_DE_DADO;\n")),(0,n.kt)("p",null,"Usando o exemplo passado, podemos modificar nosso c\xf3digo para algo como:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE estudantes (\n    matricula INTEGER PRIMARY KEY,\n    nome TEXT UNIQUE,\n    idade INTEGER NOT NULL,\n    data_de_inicio DATE NOT NULL,\n    media REAL NOT NULL,\n    turma TEXT NOT NULL\n);\n\n-- Adicionamos uma coluna de S\xe9rie (6\xb0, 7\xb0, 8\xb0...)\nALTER TABLE estudantes\nADD serie INTEGER NOT NULL;\n")),(0,n.kt)("h3",{id:"delete"},"DELETE"),(0,n.kt)("p",null,"A declara\xe7\xe3o ",(0,n.kt)("strong",{parentName:"p"},"DELETE")," combina a cl\xe1usula DELETE e WHERE, e deleta LINHAS de uma tabela.\nA cl\xe1usula WHERE identifica quais registros ser\xe3o apagados. Se essa cl\xe1usula for omitida, todos os\nregistros ser\xe3o apagados."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM nome_da_tabela\nWHERE coluna_x = valor_x;\n")),(0,n.kt)("p",null,'Para apagar registros \xfanicos e espec\xedficos, substitua o "valor_x" pela PRIMARY KEY do registro.'),(0,n.kt)("h3",{id:"update"},"UPDATE"),(0,n.kt)("p",null,"A declara\xe7\xe3o ",(0,n.kt)("strong",{parentName:"p"},"UPDATE")," \xe9 usada para editar registros, ou seja, LINHAS, numa tabela. Inclui uma cl\xe1usula SET que indica a coluna a ser editada e uma cl\xe1usula WHERE para especificar quais registros."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE nome_da_tabela\nSET coluna_1 = valor_1, coluna_2 = valor_2\nWHERE coluna_x = valor_x;\n")),(0,n.kt)("h2",{id:"queries"},"Queries"),(0,n.kt)("p",null,"Tamb\xe9m chamadas de consultas, as ",(0,n.kt)("em",{parentName:"p"},"queries")," servem para buscar dados de um banco. Podemos fazer isso de muitas maneiras: puxar colunas espec\xedficas, puxar registros que\natendem \xe0 uma condi\xe7\xe3o espec\xedfica, puxar dados ordenados, e etc. "),(0,n.kt)("p",null,"Pense nas consultas como uma forma de se comunicar com a base de dados, e se expressando somente focando em ",(0,n.kt)("strong",{parentName:"p"},"quais")," dados voc\xea precisa, ao inv\xe9s de como consegui-los."),(0,n.kt)("h3",{id:"select"},"SELECT"),(0,n.kt)("p",null,"Para ",(0,n.kt)("strong",{parentName:"p"},"selecionar colunas num banco de dados, usamos a declara\xe7\xe3o SELECT"),", que combina as cl\xe1usulas SELECT e FROM, especificando quais colunas selecionar, de qual tabela, visto\nque um banco de dados relacional pode conter m\xfaltiplas tabelas (e geralmente cont\xe9m)."),(0,n.kt)("p",null,"Veja:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"-- Nesta declara\xe7\xe3o, estamos selecionando todas as colunas da tabela1;\nSELECT *\nFROM tabela1;\n")),(0,n.kt)("admonition",{title:"Padr\xf5es do SQL",type:"info"},(0,n.kt)("p",{parentName:"admonition"},'Em SQL, nem sempre sabemos ou queremos escolher colunas ou registros absolutamente espec\xedficos. Por isso, a linguagem oferece alguns "curingas",\nque servem para selecionar tudo, ou selecionar tudo que se encaixe num padr\xe3o. Mais sobre isso adiante, mas por enquanto,\no curinga ',(0,n.kt)("strong",{parentName:"p"},'"*"')," serve para selecionar todas as colunas com o ",(0,n.kt)("strong",{parentName:"p"},"SELECT"),".")),(0,n.kt)("admonition",{title:"SELECT AS",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Voc\xea tamb\xe9m pode usar o SELECT com a cl\xe1usula AS, para dar um nome \xe0 coluna que desejar quando esta for mostrada na tela. Veja:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"-- Neste exemplo, selecionamos a tabela de nomes de estudantes e vamos mostr\xe1-la com esse t\xedtulo\nSELECT names AS 'Nomes dos Estudantes'\nFROM tabela_de_estudantes;\n"))),(0,n.kt)("h3",{id:"where"},"WHERE"),(0,n.kt)("p",null,"Essa cl\xe1usula j\xe1 vista antes pode ser combinada com a declara\xe7\xe3o SELECT FROM para dar condi\xe7\xf5es de sele\xe7\xe3o, isto \xe9, ",(0,n.kt)("strong",{parentName:"p"},"somente selecionar aqueles registros que"),"\n",(0,n.kt)("strong",{parentName:"p"},"obedecem \xe0 cl\xe1usula"),". "),(0,n.kt)("p",null,"Veja:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"-- Neste exemplo, selecionamos todos registros de uma tabela 'assinaturas'\n-- onde a coluna 'year' \xe9 maior que 2020 (registros mais recentes);\nSELECT *\nFROM signatures\nWHERE year > 2020;\n")),(0,n.kt)("admonition",{title:"Padr\xf5es do SQL",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Como muitas linguagens, SQL prov\xea alguns operadores l\xf3gicos para efetuar compara\xe7\xf5es l\xf3gicas. Estes s\xe3o:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},'"=" para "igual \xe0";'),(0,n.kt)("li",{parentName:"ul"},'"!=" para "n\xe3o \xe9 igual \xe0"'),(0,n.kt)("li",{parentName:"ul"},'"<" para "menor que"'),(0,n.kt)("li",{parentName:"ul"},'">" para "maior que"'),(0,n.kt)("li",{parentName:"ul"},'"<=" para "menor ou igual \xe0"'),(0,n.kt)("li",{parentName:"ul"},'">=" para "maior ou igual \xe0"')),(0,n.kt)("p",{parentName:"admonition"},"Note que, para compara\xe7\xe3o de valores nulos (quando n\xe3o h\xe1 valor, ou seja, valor vazio), n\xe3o podemos usar os operadores acima. Devemos fazer:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},'"',(0,n.kt)("strong",{parentName:"li"},"IS NULL"),'" para "\xe9 nulo"'),(0,n.kt)("li",{parentName:"ul"},'"',(0,n.kt)("strong",{parentName:"li"},"IS NOT NULL"),'" para "n\xe3o \xe9 nulo"'))),(0,n.kt)("admonition",{title:"Observa\xe7\xe3o",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Voc\xea pode comparar dois valores de colunas com a cl\xe1usula WHERE, como por exemlo:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"-- Este exemplo seleciona somente os registros onde a latitude (lat) \xe9 maior que a longitude (lon)\nSELECT lat, lon\nFROM coordenadas\nWHERE lat > lon;\n"))),(0,n.kt)("h3",{id:"distinct"},"DISTINCT"),(0,n.kt)("p",null,"Essa ",(0,n.kt)("strong",{parentName:"p"},"cl\xe1usula \xe9 combinada com o SELECT para obter somente valores da coluna distintos, ou seja, \xfanicos"),". \xc9 uma forma pr\xe1tica de saber quantos e quais categorias est\xe3o\npresentes nos registros. "),(0,n.kt)("p",null,"Veja, por exemplo, numa tabela que cont\xe9m nomes de filmes e seus g\xeaneros (suponhamos com\xe9dia, romance, drama, terror e a\xe7\xe3o). "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT generos\nFROM tabela_de_filmes;\n")),(0,n.kt)("p",null,"Voc\xea veria 1 coluna com 4 registros: cada resgistro com um g\xeanero. Mesmo se a tabela tivesse mais de 1000 filmes com cada g\xeanero."),(0,n.kt)("h3",{id:"like"},"LIKE"),(0,n.kt)("p",null,"SQL prov\xea uma forma de encontrar dados e registros os quais voc\xea n\xe3o conhece perfeitamente: s\xf3 conhece uma parte. Ou, uma forma de encontrar dados\nque seguem algum padr\xe3o. A ",(0,n.kt)("strong",{parentName:"p"},"cl\xe1usula LIKE possibilita a pesquisa de registros os quais obedecem uma condi\xe7\xe3o 'parcial'"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"-- Neste exemplo, usamos a mesma tabela fict\xedcia do exemplo anterior. Imagine que todos os filmes de Hollywood est\xe3o na tabela.\nSELECT nome\nFROM tabela_de_filmes\nWHERE nomes LIKE 'The %';\n")),(0,n.kt)("p",null,'Voc\xea veria uma amostra somente com filmes cujos nomes come\xe7am com "The", como "The Avengers", "The Godfather", entre outros.'),(0,n.kt)("admonition",{title:"Padr\xf5es do SQL",type:"info"},(0,n.kt)("p",{parentName:"admonition"},'Retomando a ideia dos "curingas" em SQL, podemos utilizar o caractere "',(0,n.kt)("strong",{parentName:"p"},"%"),"\" para que SQL complete um texto com os valores nos registros do\nbanco de dados, como um 'placeholder'. Pode-se usar tamb\xe9m o caractere \"",(0,n.kt)("strong",{parentName:"p"},"_"),'" para completar somente um caractere ao inv\xe9s do resto do texto.')),(0,n.kt)("h3",{id:"order-by"},"ORDER BY"),(0,n.kt)("p",null,"Usamos essa cl\xe1usula para ",(0,n.kt)("strong",{parentName:"p"},"ordenar as colunas mostradas, de alguma forma"),". Veja:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"-- Neste exemplo, exibimos uma coluna de nomes dos estudantes, e ordenamos os nomes dos\n-- alunos com a maior media at\xe9 a menor media, ou seja, ordem decrescente de notas.\nSELECT nome\nFROM tabela_de_estudantes\nORDER BY media DESC;\n")),(0,n.kt)("admonition",{title:"ASC X DESC",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Usando a cl\xe1usula ORDER BY, podemos utilizar duas palavras chave que determinam o m\xe9todo de ordena\xe7\xe3o:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ASC"),": ascendente ou crescente"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DESC"),": descendente ou decrescente")),(0,n.kt)("p",{parentName:"admonition"},"Voc\xea tamb\xe9m pode comparar textos, e estes ser\xe3o comparados pela ordem lexicogr\xe1fica, ou seja, a ordem do dicion\xe1rio.\nA ordena\xe7\xe3o ",(0,n.kt)("em",{parentName:"p"},"default")," da cl\xe1usula \xe9 ASC.")),(0,n.kt)("h3",{id:"and-or"},"AND, OR"),(0,n.kt)("p",null,"Para montar condi\xe7\xf5es mais complexas, podemos usar os operadores ",(0,n.kt)("strong",{parentName:"p"},"AND")," e ",(0,n.kt)("strong",{parentName:"p"},"OR"),".\nO funcionamento \xe9 simples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"OR")," \xe9 verdadeiro quando QUALQUER condi\xe7\xe3o \xe9 verdadeira;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AND")," \xe9 verdadeiro quando TODAS as condi\xe7\xf5es s\xe3o verdadeiras;")),(0,n.kt)("h3",{id:"between"},"BETWEEN"),(0,n.kt)("p",null,"Para ",(0,n.kt)("strong",{parentName:"p"},"selecionar registros numa faixa limitada, podemos usar BETWEEN"),". Veja:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"-- Neste exemplo, selecionamos as matriculas, nomes e media dos estudantes com media entre 5 e 7 \nSELECT matricula, nome, media\nFROM tabela_de_estudantes\nWHERE media BETWEEN 5.0 AND 7.0;\n")),(0,n.kt)("p",null,"Pode ser usado com textos tamb\xe9m."),(0,n.kt)("h3",{id:"limit"},"LIMIT"),(0,n.kt)("p",null,"Os bancos de dados geralmente tem milhares, at\xe9 milh\xf5es de registros. Portanto, nem sempre queremos todos eles. Para\n",(0,n.kt)("strong",{parentName:"p"},"limitar o n\xfamero de registros selecionados, usamos a cl\xe1usula LIMIT"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM tabela_de_estudantes\nLIMIT 15;\n")),(0,n.kt)("p",null,"Essa declara\xe7\xe3o vai selecionar at\xe9 15 registros de estudantes da tabela."),(0,n.kt)("h3",{id:"case"},"CASE"),(0,n.kt)("p",null,"Pense nessa declara\xe7\xe3o como o m\xe9todo SQL da l\xf3gica ",(0,n.kt)("em",{parentName:"p"},"if-then-else"),". Para selecionar e rotular registros com essa l\xf3gica, fazemos:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"-- Esse exemplo ir\xe1 condensar todos os alunos em aprovado ou reprovado de acordo com suas m\xe9dias, e exibir em conjunto com os nomes.\nSELECT nome, media\n    CASE \n     WHEN media >= 7.0 THEN 'APROVADO'\n     ELSE 'REPROVADO'\n    END AS 'Situa\xe7\xe3o'\nFROM tabela_de_alunos\n")),(0,n.kt)("p",null,"Podemos usar a cl\xe1usula AS para dar um t\xedtulo \xe0 coluna. "),(0,n.kt)("admonition",{title:"END ",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Lembre-se sempre de terminar as declara\xe7\xf5es CASE com a cl\xe1usula END.")),(0,n.kt)("h2",{id:"fun\xe7\xf5es-agregadas"},"Fun\xe7\xf5es Agregadas"),(0,n.kt)("p",null,"Podemos usar ",(0,n.kt)("em",{parentName:"p"},"queries"),", ou consultas, n\xe3o s\xf3 para acessar os dados, mas podemos tamb\xe9m performar alguns c\xe1lculos neles, com fun\xe7\xf5es do\nSQL. SQL possui algumas fun\xe7\xf5es de f\xe1brica. S\xe3o \xfateis para diversas tarefas naturalmente mon\xf3tonas, como contagem, busca de m\xe1ximo e m\xednimo, etc."),(0,n.kt)("h3",{id:"count"},"COUNT()"),(0,n.kt)("p",null,"Essa fun\xe7\xe3o retorna a ",(0,n.kt)("strong",{parentName:"p"},"quantidade de registros que obedecem \xe0 algum crit\xe9rio"),". Por exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"--Este exemplo retorna a quantidade de alunos aprovados, ou seja, coma m\xe9dia maior ou igual \xe0 7;\nSELECT COUNT(*)\nFROM tabela_de_estudantes\nWHERE media >= 7.0;\n")),(0,n.kt)("admonition",{title:"Argumentos de COUNT()",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Essa fun\xe7\xe3o tamb\xe9m pode receber como argumento o nome de alguma coluna. Note que, passando como argumento o nome de uma coluna,\nCOUNT() n\xe3o ir\xe1 contar valores nulos (NULL).")),(0,n.kt)("h3",{id:"max"},"MAX()"),(0,n.kt)("p",null,"Essa fun\xe7\xe3o toma uma coluna como argumento e ",(0,n.kt)("strong",{parentName:"p"},"retorna o maior valor na coluna"),". Veja:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"--Este exemplo ir\xe1 retornar a maior m\xe9dia da tabela e o nome \nSELECT MAX(media), nome\nFROM tabela_de_estudantes;\n")),(0,n.kt)("h3",{id:"min"},"MIN()"),(0,n.kt)("p",null,"Similarmente, essa fun\xe7\xe3o toma uma coluna como argumento e ",(0,n.kt)("strong",{parentName:"p"},"retorna o menor valor na coluna"),". Veja:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"--Este exemplo ir\xe1 retornar a menor m\xe9dia da tabela e o nome \nSELECT MIN(media), nome\nFROM tabela_de_estudantes;\n")),(0,n.kt)("h3",{id:"sum"},"SUM()"),(0,n.kt)("p",null,"Essa fun\xe7\xe3o toma uma coluna como argumento e ",(0,n.kt)("strong",{parentName:"p"},"retorna a soma total dos valores num\xe9ricos dessa coluna.")," Veja:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"--Este exemplo ir\xe1 retornar a soma total das m\xe9dias dos alunos;\nSELECT SUM(media)\nFROM tabela_de_estudantes;\n")),(0,n.kt)("h3",{id:"avg"},"AVG()"),(0,n.kt)("p",null,"Essa fun\xe7\xe3o ",(0,n.kt)("strong",{parentName:"p"},"retorna a m\xe9dia simples de uma coluna"),", e toma uma coluna como argumento. Veja:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"--Este exemplo retorna a m\xe9dia geral da turma 'A';\nSELECT AVG(media)\nFROM tabela_de_estudantes\nWHERE turma = 'A';\n")),(0,n.kt)("h3",{id:"round"},"ROUND()"),(0,n.kt)("p",null,"Essa fun\xe7\xe3o toma 2 argumentos: um valor a ser arredondado e o n\xb0 de casas desejadas.\nO valor ",(0,n.kt)("em",{parentName:"p"},"default")," \xe9 0 (arredonda para o inteiro mais pr\xf3ximo). Veja:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"--Neste exemplo, simplesmente arredondamos a m\xe9dia encontrada no exemplo passado com 1 casa de precis\xe3o;\nSELECT ROUND(AVG(media))\nFROM tabela_de_estudantes\nWHERE turma = 'A';\n")),(0,n.kt)("h3",{id:"group-by"},"GROUP BY"),(0,n.kt)("p",null,"A cl\xe1usula GROUP BY \xe9 usada para ",(0,n.kt)("strong",{parentName:"p"},"agregar dados com certas caracter\xedsticas"),", tornando mais f\xe1cil\na categoriza\xe7\xe3o e agrupa\xe7\xe3o. Veja:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"--Neste exemplo, agrupamos a m\xe9dia dos alunos por turma;\n--Ordenamos da menor s\xe9rie at\xe9 a maior;\nSELECT serie, AVG(media)\nFROM tabela_de_estudantes\nGROUP BY serie\nORDER BY serie ASC;\n")),(0,n.kt)("admonition",{title:"Referencia\xe7\xe3o de Colunas",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"As cl\xe1usulas ORDER BY e GROUP BY podem referenciar colunas selecionadas pelo SELECT, na ordem\nque aparecem na declara\xe7\xe3o. Por exemplo:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"--Neste exemplo, agrupamos o n\xb0 de alunos por media, da menor para a maior\nSELECT COUNT(*) AS 'Total de Alunos', media\nFROM tabela_de_alunos\nGROUP BY 2 -- 2 = media\nORDER BY 1; -- 1 = COUNT(*)\n")),(0,n.kt)("p",{parentName:"admonition"},"Nota: a cl\xe1usula GROUP BY vem depois de WHERE, mas antes de ORDER BY e LIMIT.")),(0,n.kt)("h3",{id:"having"},"HAVING"),(0,n.kt)("p",null,"Essa cl\xe1usula serve para ",(0,n.kt)("strong",{parentName:"p"},"filtrar ainda mais os resultados da consulta"),". \xc9 pareada com a cl\xe1usula GROUP BY. \xc9 bastante parecida com a cl\xe1usula WHERE, a \xfanica diferen\xe7a \xe9 que ",(0,n.kt)("strong",{parentName:"p"},"normalmente \xe9 usada com fun\xe7\xf5es agregadas para filtrar com base numa propriedade agregada"),"."),(0,n.kt)("p",null,"Veja:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"--Neste exemplo, selecionamos as series, a media por serie e a quantidade de alunos por serie, \n--agrupando por serie, mas somente com series com mais de 15 alunos.\nSELECT serie, COUNT(*), AVG(media)\nFROM tabela_de_alunos\nGROUP BY serie\nHAVING COUNT(*) > 15;\n")))}p.isMDXComponent=!0},5680:(e,a,o)=>{o.d(a,{Z:()=>t});const t=o.p+"assets/images/sql-table-example-8905c55203df6e9dfd1fdb73184201b1.png"}}]);