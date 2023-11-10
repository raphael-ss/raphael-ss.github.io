"use strict";(self.webpackChunkdatacomb=self.webpackChunkdatacomb||[]).push([[116],{3905:(e,a,o)=>{o.d(a,{Zo:()=>d,kt:()=>g});var t=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function s(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?s(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function m(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=t.createContext({}),l=function(e){var a=t.useContext(i),o=a;return e&&(o="function"==typeof e?e(a):r(r({},a),e)),o},d=function(e){var a=l(e.components);return t.createElement(i.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),p=l(o),c=n,g=p["".concat(i,".").concat(c)]||p[c]||u[c]||s;return o?t.createElement(g,r(r({ref:a},d),{},{components:o})):t.createElement(g,r({ref:a},d))}));function g(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=o.length,r=new Array(s);r[0]=c;var m={};for(var i in a)hasOwnProperty.call(a,i)&&(m[i]=a[i]);m.originalType=e,m[p]="string"==typeof e?e:n,r[1]=m;for(var l=2;l<s;l++)r[l]=o[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},7913:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>m,toc:()=>l});var t=o(7462),n=(o(7294),o(3905));const s={sidebar_position:10,slug:"/docs/programacao/python-object-oriented-programming",title:"Python - OOP",description:"Programa\xe7\xe3o Orientada a Objetos em Python."},r="Python - Programa\xe7\xe3o Orientada \xe0 Objetos",m={unversionedId:"prog1/python-oop",id:"prog1/python-oop",title:"Python - OOP",description:"Programa\xe7\xe3o Orientada a Objetos em Python.",source:"@site/docs/prog1/python-oop.md",sourceDirName:"prog1",slug:"/docs/programacao/python-object-oriented-programming",permalink:"/docs/programacao/python-object-oriented-programming",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:"/docs/programacao/python-object-oriented-programming",title:"Python - OOP",description:"Programa\xe7\xe3o Orientada a Objetos em Python."},sidebar:"tutorialSidebar",previous:{title:"Python - Manipula\xe7\xe3o de Arquivos",permalink:"/docs/programacao/python-files"},next:{title:"SQL - B\xe1sico",permalink:"/docs/programacao/sql-basico"}},i={},l=[{value:"POO em Python",id:"poo-em-python",level:2},{value:"Classes e Objetos",id:"classes-e-objetos",level:2},{value:"<code>__init__()</code>",id:"__init__",level:3},{value:"Vari\xe1veis de Classe",id:"vari\xe1veis-de-classe",level:3},{value:"<code>__repr__()</code>:",id:"__repr__",level:3},{value:"M\xe9todos de Classe",id:"m\xe9todos-de-classe",level:3},{value:"<code>dir()</code>",id:"dir",level:3},{value:"<code>__main__</code>",id:"__main__",level:3},{value:"Heran\xe7as de Classes",id:"heran\xe7as-de-classes",level:2},{value:"Vantagens e Desvantagens da Heran\xe7a",id:"vantagens-e-desvantagens-da-heran\xe7a",level:3},{value:"Conclus\xe3o \ud83c\udf91",id:"conclus\xe3o-",level:2}],d={toc:l},p="wrapper";function u(e){let{components:a,...s}=e;return(0,n.kt)(p,(0,t.Z)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"python---programa\xe7\xe3o-orientada-\xe0-objetos"},"Python - Programa\xe7\xe3o Orientada \xe0 Objetos"),(0,n.kt)("p",null,"At\xe9 agora, cobrimos diversas ferramentas \xfateis presentes em Python, e como utiliz\xe1-las. Por\xe9m, antes de continuar, devemos parar um pouco e pensar: "),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},'"Como programadores fazem programas t\xe3o longos e complexos?"'))),(0,n.kt)("p",null,"Pense por exemplo num ",(0,n.kt)("em",{parentName:"p"},"videogame"),", que cont\xe9m inimigos, itens, armas, armaduras, e at\xe9 o pr\xf3prio jogador, e todas essas coisas interagindo entre si de diferentes formas e em diferentes\ntempos. Naturalmente que os programadores n\xe3o escrevem linhas de c\xf3digo para ",(0,n.kt)("strong",{parentName:"p"},"cada")," inimigo na tela, ou item, ou arma, e etc, toda vez que aparecem. "),(0,n.kt)("p",null,"Observe a seguinte tela do ",(0,n.kt)("em",{parentName:"p"},"Atari Breakout"),", um jogo simples de arcade:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Atari Breakout",src:o(3593).Z,width:"1200",height:"1200"})),(0,n.kt)("p",null,"Tente identificar e categorizar os itens com base nessa imagem do jogo. "),(0,n.kt)("p",null,"Esses s\xe3o:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Os Ret\xe2ngulos;"),(0,n.kt)("li",{parentName:"ul"},"A Plataforma;"),(0,n.kt)("li",{parentName:"ul"},"A Bola;")),(0,n.kt)("p",null,"E, diferenciando os itens numa mesma categoria, temos que o/a:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ret\xe2ngulo:\nTem uma cor;\nTem um tamanho;\nTem uma pontua\xe7\xe3o associada;\nTem uma resist\u1ebdncia (n\xb0 de impactos necess\xe1rios para quebrar);\nTem uma posi\xe7\xe3o;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Plataforma:\nTem uma posi\xe7\xe3o;\nTem uma velocidade;\nTem uma largura;"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bola:\nTem uma posi\xe7\xe3o;\nTem uma velocidade;\nTem uma dire\xe7\xe3o;\nTem um efeito (como multiplica\xe7\xe3o de pontos);")),(0,n.kt)("p",null,"E tamb\xe9m, pensando no que cada item de cada categoria pode ",(0,n.kt)("strong",{parentName:"p"},"fazer"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ret\xe2ngulos:\nPodem ser acertados;\nPodem desaparecer;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Plataforma:\nPode ser movida;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Bola:\nPode ser perdida;\nPode ser 'recarregada';"))),(0,n.kt)("p",null,"Pensando desse modo, podemos at\xe9 perceber uma classe que n\xe3o \xe9 vis\xedvel:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Jogador:\nPode morrer (quando terminam as bolas dispon\xedveis);\nPode mover a plataforma;\nTem pontos;\nTem um n\xb0 de bolas dispon\xedveis;")),(0,n.kt)("p",null,"Portanto, os itens desse jogo foram modelados com seus pr\xf3prios dados, e com suas pr\xf3prias a\xe7\xf5es. "),(0,n.kt)("p",null,"Com isso, podemos finalmente fazer uma introdu\xe7\xe3o formal \xe0 POO: Programa\xe7\xe3o Orientada \xe0 Objetos \xe9 um conceito, uma teoria e uma abordagem fundamental em programa\xe7\xe3o para organizar, estruturar e modularizar seu c\xf3digo. "),(0,n.kt)("p",null,"Com POO, ao inv\xe9s de tratar dados separadamente como ",(0,n.kt)("em",{parentName:"p"},"floats"),", ",(0,n.kt)("em",{parentName:"p"},"ints"),", ",(0,n.kt)("em",{parentName:"p"},"bools")," e etc, podemos criar e modelar objetos do mundo real, ao agrup\xe1-los como ",(0,n.kt)("strong",{parentName:"p"},"atributos")," de uma classe, assim como atribuir a\xe7\xf5es, isto \xe9, fun\xe7\xf5es espec\xedficas para cada objeto, chamadas de ",(0,n.kt)("strong",{parentName:"p"},"m\xe9todos"),"."),(0,n.kt)("p",null,"Os objetos s\xe3o ",(0,n.kt)("strong",{parentName:"p"},"inst\xe2ncias de uma classe"),", e podemos operar com eles para modelar quase tudo. Veja, por exemplo, um exemplo de uma classe de uma pessoa:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Classe de Pessoa",src:o(7364).Z,width:"240",height:"210"})),(0,n.kt)("p",null,"Observando esse esquema de classe, podemos inferir que os tipos dos dados dos atributos s\xe3o: ",(0,n.kt)("em",{parentName:"p"},"str"),", ",(0,n.kt)("em",{parentName:"p"},"str"),", ",(0,n.kt)("em",{parentName:"p"},"int")," e ",(0,n.kt)("em",{parentName:"p"},"float"),', respectivamente (se a altura for medida em cent\xedmetros e sem casas decimais). Al\xe9m disso, a classe poderia conter outros atributos, como "\xe9 maior de 18 anos", que pode ser um ',(0,n.kt)("em",{parentName:"p"},"bool"),". "),(0,n.kt)("p",null,"Podemos pensar tamb\xe9m num programa que gerencia uma escola. Poder\xedamos ter as classes Estudante, Professor, e muitas outras."),(0,n.kt)("admonition",{title:"Objetos x Classes",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Assim como dito anteriormente, objetos s\xe3o inst\xe2ncias de uma classe. Mas o que isso significa?"),(0,n.kt)("p",{parentName:"admonition"},"Isso quer dizer que a classe tem o papel de definir a estrutura do objeto: \xe9 um esquema de quais atributos o objeto deve ter, e como funcionam seus m\xe9todos. E, o objeto \xe9 a instancia\xe7\xe3o da classe. "),(0,n.kt)("p",{parentName:"admonition"},"Para entender melhor, pensemos numa analogia de um projeto de uma casa e a pr\xf3pria casa. Antes de construir a casa, \xe9 preciso projet\xe1-la, e definir detalhes que ser\xe3o usados para sua constru\xe7\xe3o. E, com um projeto em m\xe3os, \xe9 poss\xedvel construir diversas casas com estruturas iguais, com interiores organizados de forma diferente."),(0,n.kt)("p",{parentName:"admonition"},"Nessa analogia, a classe \xe9 o projeto, e a casa \xe9 o objeto, ou seja, uma inst\xe2ncia da classe.")),(0,n.kt)("p",null,"Caso queira jogar Atari Breakout, ",(0,n.kt)("a",{parentName:"p",href:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjH-re9sKaCAxUeNrkGHTM_A1wQFnoECBQQAQ&url=https%3A%2F%2Felgoog.im%2Fbreakout%2F&usg=AOvVaw1nrkit4CNSsT7e5YIEkcKg&opi=89978449"},"clique aqui"),"."),(0,n.kt)("h2",{id:"poo-em-python"},"POO em Python"),(0,n.kt)("p",null,"Python \xe9 uma das melhores linguagens para se trabalhar com POO, isso por que ",(0,n.kt)("strong",{parentName:"p"},"tudo")," em Python \xe9 um objeto. Isso mesmo: todos os tipos de dados e estruturas da linguagem, como ",(0,n.kt)("em",{parentName:"p"},"str"),", ",(0,n.kt)("em",{parentName:"p"},"int"),", ",(0,n.kt)("em",{parentName:"p"},"dict"),", listas, e todo o resto. Perceba que nos artigos passados, todos possuem fun\xe7\xf5es pr\xf3prias, que s\xf3 podem ser usadas no respectivo tipo, que s\xe3o os m\xe9todos."),(0,n.kt)("p",null,"Cada objeto em Python \xe9 uma inst\xe2ncia de uma classe definida na pr\xf3pria linguagem. Por exemplo, um n\xfamero inteiro como 5 \xe9 uma inst\xe2ncia da classe ",(0,n.kt)("em",{parentName:"p"},"int"),", uma ",(0,n.kt)("em",{parentName:"p"},"string"),' como "Hello" \xe9 uma inst\xe2ncia da classe ',(0,n.kt)("em",{parentName:"p"},"str"),", e assim por diante. "),(0,n.kt)("p",null,"Os tipos de dados embutidos em Python s\xe3o classes predefinidas que representam diferentes tipos de objetos. Voc\xea pode verificar o tipo de um objeto usando a fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"type(obj)"),"."),(0,n.kt)("h2",{id:"classes-e-objetos"},"Classes e Objetos"),(0,n.kt)("p",null,"Assim como discutido anteriormente, uma classe \xe9 um ",(0,n.kt)("em",{parentName:"p"},"template")," para um tipo de dado definido pelo usu\xe1rio (programador). Pode ser definida usando a palavra-chave ",(0,n.kt)("inlineCode",{parentName:"p"},"class"),". Veja:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'class Horse:\n    name = "Buck"\n    color = "Brown"\n')),(0,n.kt)("h3",{id:"__init__"},(0,n.kt)("inlineCode",{parentName:"h3"},"__init__()")),(0,n.kt)("p",null,"O m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"__init__()"),", tamb\xe9m chamado de ",(0,n.kt)("em",{parentName:"p"},"dunder method"),", \xe9 um dos m\xe9todos especiais em Python e desempenha um papel fundamental na cria\xe7\xe3o de objetos de uma classe. Ele \xe9 conhecido como o ",(0,n.kt)("strong",{parentName:"p"},"construtor da classe")," e \xe9 chamado automaticamente quando um novo objeto \xe9 instanciado a partir dessa classe."),(0,n.kt)("p",null,"Ele \xe9 usado para inicializar os atributos de um objeto quando ele \xe9 criado. Como j\xe1 mencionado, ele \xe9 executado automaticamente no momento da cria\xe7\xe3o do objeto e permite que voc\xea defina os valores iniciais dos atributos da classe."),(0,n.kt)("p",null,"Veja um exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n")),(0,n.kt)("p",null,"O objetivo do construtor ",(0,n.kt)("inlineCode",{parentName:"p"},"__init__()")," \xe9 garantir que os objetos da classe sejam criados com um estado inicial consistente. Isso significa que voc\xea pode ter certeza de que os atributos essenciais est\xe3o definidos corretamente sempre que um objeto \xe9 instanciado."),(0,n.kt)("h3",{id:"vari\xe1veis-de-classe"},"Vari\xe1veis de Classe"),(0,n.kt)("p",null,"Numa classe, podemos criar vari\xe1veis compartilhadas com todos os objetos da classe. Isto \xe9, as vari\xe1veis de classe, podem ser acessadas por qualquer inst\xe2ncia, assim como alterada e posteriomente acessada novamente com o novo valor. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'class Example:\n  class_variable = "I am a Class Variable!"\n  \n#-Tamb\xe9m podemos instanciar uma classe fazendo assim:\nx = Example()\ny = Example()\n\nprint(x.class_variable) #I am a Class Variable!\nprint(y.class_variable) #I am a Class Variable!\n')),(0,n.kt)("h3",{id:"__repr__"},(0,n.kt)("inlineCode",{parentName:"h3"},"__repr__()"),":"),(0,n.kt)("p",null,"O m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"__repr__()")," \xe9 outro m\xe9todo especial em Python que permite que voc\xea defina uma representa\xe7\xe3o leg\xedvel por humanos de um objeto. Este m\xe9todo \xe9 chamado quando voc\xea tenta exibir o objeto com ",(0,n.kt)("inlineCode",{parentName:"p"},"print()"),". S\xf3 toma 1 par\xe2metro, ",(0,n.kt)("inlineCode",{parentName:"p"},"self"),". "),(0,n.kt)("p",null,"Observe:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class Employee:\n  def __init__(self, name):\n    self.name = name\n\n  def __repr__(self):\n    return f\"Nome: {self.name}\"\n\njohn = Employee('John')\nprint(john) # John\n")),(0,n.kt)("h3",{id:"m\xe9todos-de-classe"},"M\xe9todos de Classe"),(0,n.kt)("p",null,"Assim como definido anteriormente, as classes podem possuim tamb\xe9m func\xe7\xf5es pr\xf3prias, chamadas de m\xe9todos. \xc9 padr\xe3o e requisito que o 1\xb0 argumento de um m\xe9todo seja ",(0,n.kt)("inlineCode",{parentName:"p"},"self"),", uma refer\xeancia \xe0 si mesmo. Perceba que, na hora de usar o m\xe9todo, esse par\xe2metro \xe9 impl\xedcito, dado que \xe9 o pr\xf3prio objeto no qual est\xe1 sendo usado. "),(0,n.kt)("p",null,"Veja:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'class Dog:\n    # M\xe9todo\n  def bark(self):\n    print("Auf-Auf")\n\n# Crie uma nova inst\xe2ncia\ncharlie = Dog()\n\n# Chame o m\xe9todo\ncharlie.bark()\n#"Auf-Auf"\n')),(0,n.kt)("p",null,"Observe outro exemplo mais longo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'class Dog:\n  def __init__(self, input_name, input_breed, input_age = 0, input_friendliness=True):\n    # Atributos...\n    self.friends = []\n\n  # self \xe9 esse cachorro, ou objeto, em espec\xedfico\n  # e other_dog \xe9 o outro que ser\xe1 passado como argumento\n  def become_friends(self, other_dog):\n    if(other_dog.is_friendly):\n      self.friends.append(other_dog)\n      # o outro cachorro tamb\xe9m adiciona este \xe0 sua lista de amigos\n      other_dog.friends.append(self)\n      print("{name} fez amizade com {other_name}!".format(name = self.name, other_name = other_dog.name))\n    else:\n      print("{other_name} n\xe3o quis fazer amizade com {name}!".format(name = self.name, other_name = other_dog.name))\n\n')),(0,n.kt)("h3",{id:"dir"},(0,n.kt)("inlineCode",{parentName:"h3"},"dir()")),(0,n.kt)("p",null,"A fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"dir()"),", sem nenhum argumento, retorna uma lista de todos os atributos no escopo atual."),(0,n.kt)("p",null,"Com uma classe como argumento, a fun\xe7\xe3o tenta retornar todos os m\xe9todos e atributos v\xe1lidos."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class Employee:\n  def __init__(self, name):\n    self.name = name\n\n  def print_name(self):\n    print(\"Hi, I'm \" + self.name)\n\n\nprint(dir())\n# ['Employee', '__builtins__', '__doc__', '__file__', '__name__', '__package__', 'new_employee']\n\nprint(dir(Employee))\n# ['__doc__', '__init__', '__module__', 'print_name']\n")),(0,n.kt)("h3",{id:"__main__"},(0,n.kt)("inlineCode",{parentName:"h3"},"__main__")),(0,n.kt)("p",null,"O identificador ",(0,n.kt)("inlineCode",{parentName:"p"},"__main__")," \xe9 usado em Python para determinar se um arquivo Python est\xe1 sendo executado como um programa principal (ou seja, diretamente) ou se est\xe1 sendo importado como um m\xf3dulo em outro programa. "),(0,n.kt)("p",null,"Quando um arquivo Python \xe9 executado diretamente, ou seja, quando voc\xea o chama diretamente no terminal ou no ambiente de desenvolvimento, o Python define automaticamente a vari\xe1vel especial ",(0,n.kt)("inlineCode",{parentName:"p"},"__name__"),' como "',(0,n.kt)("inlineCode",{parentName:"p"},"__main__"),'". Isso permite que voc\xea execute c\xf3digo espec\xedfico apenas se o arquivo estiver sendo executado como um programa principal. Por exemplo:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'if __name__ == "__main__":\n    # Este c\xf3digo ser\xe1 executado somente se este arquivo for o programa principal.\n    # Voc\xea pode colocar aqui o c\xf3digo que deseja executar quando este arquivo \xe9 executado diretamente.\n\n')),(0,n.kt)("p",null,"Isso \xe9 \xfatil para criar scripts reutiliz\xe1veis que tamb\xe9m podem ser importados como m\xf3dulos em outros programas. Quando voc\xea importa um arquivo em Python, o ",(0,n.kt)("inlineCode",{parentName:"p"},"__name__"),' \xe9 definido como o nome do arquivo (sem o ".py"). No entanto, quando voc\xea o executa diretamente, o ',(0,n.kt)("inlineCode",{parentName:"p"},"__name__"),' \xe9 definido como "',(0,n.kt)("inlineCode",{parentName:"p"},"__main__"),'". Portanto, voc\xea pode usar essa t\xe9cnica para distinguir entre a execu\xe7\xe3o direta e a importa\xe7\xe3o de um arquivo Python.'),(0,n.kt)("h2",{id:"heran\xe7as-de-classes"},"Heran\xe7as de Classes"),(0,n.kt)("p",null,"A heran\xe7a de classes \xe9 um conceito fundamental em POO. Com esse conceito, nos \xe9 permitido criar uma nova classe (chamada classe filha ou subclasse) com base em uma classe existente (chamada classe pai ou superclasse). A subclasse herda os atributos e m\xe9todos da superclasse, permitindo a reutiliza\xe7\xe3o de c\xf3digo e a cria\xe7\xe3o de uma hierarquia de classes."),(0,n.kt)("p",null,"Podemos definir uma classe base como qualquer outra em Python:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class Animal:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def make_sound(self):\n        pass\n")),(0,n.kt)("p",null,"Com a classe base em m\xe3os, podemos definir uma classe derivada, ou subclasse, usando a heran\xe7a. Podemos fazer isso indicando a classe pai, como:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'class Dog(Animal):\n    def make_sound(self):\n        return "Auf Auf!"\n')),(0,n.kt)("p",null,"Nesse caso, a classe ",(0,n.kt)("em",{parentName:"p"},"Dog")," herda os atributos da classe ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"age")," da superclasse, assim como o m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"make_sound()"),". Perceba tamb\xe9m que a subclasse pode substituir, ou sobrescreve, os m\xe9todos e atributos em sua pr\xf3pria implementa\xe7\xe3o. "),(0,n.kt)("p",null,"Com isso, voc\xea pode criar objetos da subclasse ",(0,n.kt)("em",{parentName:"p"},"Dog"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'my_dog = Dog("Fera", 3)\n')),(0,n.kt)("p",null,"Caso n\xe3o queira sobrescrever, mas estender o m\xe9todo da superclasse, use a fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"super()"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'class Dog(Animal):\n    def make_sound(self):\n        sound = super().make_sound()\n        return f"{sound} and Woof Woof!"\n')),(0,n.kt)("h3",{id:"vantagens-e-desvantagens-da-heran\xe7a"},"Vantagens e Desvantagens da Heran\xe7a"),(0,n.kt)("admonition",{title:"Vantagens",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Podemos citar algumas vantagens claras de usar essa t\xe9cnica:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Reutiliza\xe7\xe3o de c\xf3digo"),": A heran\xe7a permite que voc\xea aproveite o c\xf3digo existente na superclasse, evitando duplica\xe7\xe3o.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Hierarquia de classes"),": Voc\xea pode criar uma hierarquia de classes, onde classes mais espec\xedficas (subclasses) herdam de classes mais gerais (superclasses).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Polimorfismo"),": As subclasses podem ter comportamento diferente (sobrescrito), mas ainda podem ser tratadas como objetos da superclasse, o que facilita o polimorfismo.")))),(0,n.kt)("admonition",{title:"Desvantagens",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"E, existem tamb\xe9m desvantagens que devem ser entendidas:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Acoplamento"),": Heran\xe7as profundas podem criar um alto grau de acoplamento entre classes, tornando o c\xf3digo mais dif\xedcil de manter.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Fragilidade"),": Mudan\xe7as na superclasse podem afetar as subclasses, tornando o sistema fr\xe1gil.")))),(0,n.kt)("h2",{id:"conclus\xe3o-"},"Conclus\xe3o \ud83c\udf91"),(0,n.kt)("p",null,"Bom, essa se\xe7\xe3o termina aqui. Caso tenha alguma d\xfavida que n\xe3o conseguiu encontrar online, envie para ",(0,n.kt)("a",{parentName:"p",href:"mailto:raphaelsoaresbrasil@gmail.com."},"raphaelsoaresbrasil@gmail.com."),"\nObrigado pela aten\xe7\xe3o, e bons estudos."))}u.isMDXComponent=!0},3593:(e,a,o)=>{o.d(a,{Z:()=>t});const t=o.p+"assets/images/atari-breakout-f12bdf60dd8b9d76f9934cd8c6b09512.jpg"},7364:(e,a,o)=>{o.d(a,{Z:()=>t});const t="data:image/png;base64,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"}}]);