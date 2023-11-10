---
sidebar_position: 1
slug: /docs/programacao/python-basico
title: "Python - Básico"
description: "Introdução À Python"
---

# Python - Básico 🐍

Python é uma linguagem de programação versátil, fácil de aprender e usar, além de ser bastante poderosa, e uma das linguagens mais usadas no mundo.

:::note Quer Aprender Computação?
Para quem busca aprender computação em geral, devo recomendar que, começar estudando linguagens de mais baixo nível, como C ou Java, pode ser uma escolha melhor e mais rica a longo prazo.

Isso irá te auxiliar a aprender conceitos de computação, lógica de programação e as fundações das linguagens e compiladores melhor, algo que Python não faz (por conta do alto nível de abstração).
:::

Sua ampla biblioteca padrão oferece muitos recursos prontos para uso. Python é interpretado (diferente de uma linguagem com compilador, Python tem um interpretador, e tipagem dinâmica), portátil e tem uma grande comunidade de desenvolvedores. É uma escolha popular para desenvolvimento web, análise de dados e automação, além de oferecer suporte para inteligência artificial. 

É a linguagem mais utilizada no meio de ciência de dados.

:::info Interpretador x Compilador
A diferença principal entre um interpretador e um compilador é o método de execução. 

Um **interpretador** lê o código-fonte linha por linha, e executa à medida que lê. Isso faz com que erros no código não sejam percebidos até um erro no meio da execução, que quebra o programa. O tempo de interpretação também é maior que o de compilação na maioria das vezes.
Não cria um arquivo executável, mas executa o código diretamente.

Um **compilador** traduz o código-fonte para linguagem de máquina e cria um arquivo executável. Após isso, o arquivo é executado.
Como mencionado, o compilador é mais rápido, e detecta problemas e *bugs* no código na etapa de compilação (chamado erro de compilação).
Isso diminui o índice de erros durante *runtime*. 
Linguagens conhecidas por sua performance rápida com compilador são C,C++, entre outras.

Não fique preocupado: tudo isso é remediável. Existem programas auxiliares e métodos em Python para diminuir erros durante execução, e 
melhorar a rapidez da linguagem. 
:::

## Comentários

Em Python, comentários são vistos com muito bons olhos, desde que sejam concisos, significantes e não redundantes.
Segue a sintaxe adequada para comentar no código em Python:

```python
# Isso é um comentário.
```

O padrão é comentar acima da linha ou bloco ao qual você se refere. Também podemos comentar em várias linhas, caso
queira explicar algo mais detalhadamente ao longo de um projeto. Veja:

```python
'''
Isso é um comentário multi-linha.

Você pode usar para explicações mais longas, ou para remover uma parte do código para teste.
'''
```
## Operadores Aritméticos

Como na maioria das linguagens, Python possui operadores aritméticos embutidos na linguagem. Você também pode utilizar de
funções matemáticas mais complexas e efetuar cálculos avançados usando bibliotecas que possuam essas funções.
De qualquer modo, Python possui:

1. "+" para adição

2. "-" para subtração

3. "*" para multiplicação

4. "/" para divisão

5. "%" para o módulo (resto da divisão)

6. "**" para exponenciação

7. x += y  para x = x + y

:::note Note
Uma funcionalidade interessante e útil é a concatenação de strings em Python. Você pode concatená-las (juntá-las)
usando o operador **+**, como por exemplo:
```python
name = "Bob"
occupation = "Ninja"
message = name + ", the " + occupation
print(message) 
# >>> Bob, the Ninja
```
:::

## Variáveis 

São usadas para armazenar dados. Em Python, não requerem especificação de tipo de dado, nem de tamanho. Python usa de alocação
de memória dinâmica para todas suas variáveis, e também é uma *dynamic typed language*, em oposição às *static typed language*, como C, 
C++, Java, etc. Isso significa que o interpretador de Python 'infere' o tipo de dado da variável, sozinho.

:::info Tipagem Dinâmica x Tipagem Estática
Como mencionado, Python é tipada dinamicamente, isto é, os tipos de dados das variáveis são inferidos durante a leitura e execução do interpretador.
Qual a diferença entre a tipagem dinâmica e a tipagem estática?

**Tipagem Estática**:

- Os tipos devem ser todos especificados no código.
- Como os tipos são especificados, possui menos erros de execução (durante *runtime*).
- Maior confiabilidade.
- Maior dificuldade de programar.

**Tipagem Dinâmica**:

- Os tipos são inferidos pelo interpretador.
- Mais erros durante execução.
- Mais flexibilidade.

Pensando nessas diferenças, Python possui um jeito de especificar os tipos das variáveis, mas não vamos entrar em detalhes sobre isso nesse artigo.
:::

As variáveis em Python devem ser expressas com nomes significantes. Veja um exemplo de uma variável de contador:

```python
a = 15 #não faça isso
x = 15 #nem isso
counter = 15 #isso pode
counter_for_my_function = 15 #isso é desnecessário
```

O operador **=** é chamado de *assignment operator*, e não é usado para comparação, e sim para atribuição de valores a uma variável.

## Operador Módulo %

Esse operador é bastante útil: retorna o resto de uma divisão entre o primeiro número e o segundo número. Veja um exemplo

```python
# Exemplo do operador de módulo %

zero = 8 % 4 # = 0

diff_than_zero = 12 % 5 # = 2
```

Você pode usá-lo para verificar a paridade de um número, ou se ele é primo. Existem inúmeras aplicações, então tenha isso em mente.

## Erros

Existem alguns tipos de erros que você vai encontrar em Python. Antes disso, veja
o procedimento padrão para resolução de erros.

:::tip Como Resolver?
Leia a mensagem de erro e procure no código. Caso não saiba como resolver, 
copie a mensagem e pesquise em ferramentas como Google e ChatGPT, ou leia
a documentação da linguagem que está usando (Python, no nosso caso).
:::

Vamos explicá-los um a um:

### SyntaxError

Quando você errar a sintaxe do Python, ele vai jogar esse erro de volta em você.
Veja um exemplo:

```python
# Observe a falta dos parênteses

print "Hello World" 
```
O Interpretador dirá:

```bash
SyntaxError: Missing parentheses in call to 'print'. Did you mean print("hello")?
```

:::danger Como Evitar?
Se atente à sintaxe da linguagem e preste bastante atenção ao longo das sessões
de programação. 
:::

### TypeError

Esse erro aparece quando você tenta aplicar uma operação num
tipo inapropriado, isto é, usar uma operação de um tipo de dado num
outro tipo. Observe:

```python
print(2+'2')
```
Veja a saída:
```bash
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: can only concatenate str (not "int") to str
```
Iremos cobrir o que significa exatamente essa mensagem em breve, em próximas seções.

:::danger Como Evitar?
Se atente ao tratamento de tipos e se formatou corretamente as operações, 
*inputs* e *outputs* do código, para os tipos corretos.
:::

### ValueError

Esse erro aparece quando você tenta passar como argumento para um função um valor
com o tipo inadequado. É semelhante ao *TypeError*, mas é específico para argumentos de função.

```python
# Vamos usar uma função para converter um valor pra inteiro:
int('xyz')
```
Observe a saída:

```bash
int('xyz')
ValueError: invalid literal for int() with base 10: 'xyz'
```
:::danger Como Evitar?
Leia a documentação das funções que você usar com atenção, e documente as funções
que criar, para não se confundir com seu próprio código.
:::

### NameError

Esse erro aparece quando um objeto não foi encontrado, isto é, existe uma 
referenciação no seu código a alguma coisa que não está nele.
Geralmente se dá por conta de erro de digitação.

```python
idade = 18
print(idad)
```

Veja a saída:

```bash
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'idad' is not defined. Did you mean: 'idade'?
```

:::danger Como Evitar?
Escolha bem e preste atenção às variáveis que cria, e à referenciação de
objetos no código. Caso seja um código muito longo, considere documentar 
as variáveis.
:::

### ZeroDivisionError

Esse erro é bem simples: aparece quando o segundo operando da divisão (denominador)
é zero.

```python
error_value = 100/0
```

Observe a saída:

```bash
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```
:::danger Como Evitar?
Trate bem os casos do código para que isso não aconteça e considere usar um Exceção.
:::

### IndentationError

Esse erro aparece quando a indentação do código não está correta. 
Como Python é uma linguagem que usa *whitespace* para determinar a ordem
do código, deve-se atentar à esse fator.

:::danger Como Evitar?
Observe e preste atenção à tabulação/espaço do código.
:::

Isso cobre os erros que encontraremos de início. Mais pra frente, veremos
diversos outros tipos de erros, e mais importante, como resolvê-los.


## Strings (básico)

Esse é um tópico consideravelmente extenso em Python, com diversar funções e formas de tratar esse tipo de dado na linguagem.
Vamos conversar nessa seção sobre **o que é de fato uma string**, e como utilizá-la.

Se você já conhece uma linguagem como C, sabe que string não é um tipo de dado da linguagem. É possível utilizar e manipular strings, 
por meio de vetores (ou listas, para melhor entendimento) de caracteres. 

Uma string, essencialmente, é isso. É uma série de caracteres em sequência, terminada em _\0_. Mas não se preocupe com o _\0_ em Python.

Veja o exemplo abaixo:


```python
my_string = "Isso é uma string."
```

Esse tipo de dado engloba qualquer texto, palavra, qualquer dado no formato de uma série de caracteres.

Existem alguns métodos para manipular strings em Python. Veja alguns:

### Método _title()_

```python
'''
Esse método torna em maiúscula os primeiros caracteres de cada palavra, caso não estejam;
'''

my_string = "hello world"

titled_string = my_string.title() 

print(my_string) # >>> hello world

print(titled_string) # >>> Hello World
```

### Método _upper()_

```python
'''
Esse método torna toda a string em maiúscula;
'''

my_string = "hello world"

upper_string = my_string.upper()

print(my_string) # >>> hello world

print(upper_string) # >>> HELLO WORLD
```

### Método _lower()_

```python
'''
Esse método torna toda a string em minúscula;
'''

my_string = "HELLO WORLD"

upper_string = my_string.lower()

print(my_string) # >>> HELLO WORLD

print(upper_string) # >>> hello world
```

### Método _strip()_

```python
'''
Esse método limpa a string, isto é, remove os espaços em branco dos dois lados;
'''

my_string = "          i love cookies            "

clean_string = my_string.strip()

print(my_string) # >>>           i love cookies            

print(clean_string) # >>> i love cookies

'''
Também pode ser usado somente na direita ou na esquerda, com:
'''

left_spaced_string = my_string.rstrip()

print(left_spaced_string) # >>>           i love cookies

right_spaced_string = my_string.lstrip()

print(right_spaced_string) # >>> i love cookies
```

Uma característica muito útil desse método é a possibilidade de especificar um caractere de limpeza, isto é, o método
*strip()* aceita que você escolha o caractere que quer limpar, ou seja, remover.

Veja:

```python
dirty_string = ";;;bnb;;;;;Hello Word;;;;;aaa;;;;"

clean_string = my_string.strip(";bna")

print(dirty_string) # >>> ;;;bnb;;;;;Hello Word;;;;;aaa;;;;

print(clean_string) # >>> Hello_World
```

Para aprender mais sobre métodos de strings em Python, [clique aqui](https://www.w3schools.com/python/python_ref_string.asp).

## Tipos de Dados

Em Python, existem alguns tipos de dados com os quais podemos trabalhar. Veja:

### Inteiros e Floats

Em Python, podemos tratar números de 2 formas: como *float* ou como *int*. Se você está aqui, já deve saber a diferença. 
Porém, para recapitular, sabemos que o tipo **inteiro** engloba os números negativos e positivos, não incluindo números
com vírgula. 

Já o tipo **ponto flutuante** trata de números racionais, ou com vírgula. 
O Interpretador irá inferir o tipo de acordo com as operações.

```python
# Exemplo 

inteiro = 10
ponto_flutuante = 9.999
```

:::caution Ponto x Vírgula
Perceba que Python segue o padrão de escrita de números americanos com *floats*, onde no lugar da vírgula, que geralmente usamos (como 3,14), 
é usado o ponto (.), então tome cuidado para não receber um TypeError ou algo diferente.
:::

Um ponto importante é a divisão inteira: em muitas linguagens, quando se efetua uma divisão entre dois inteiros, mesmo que
o resultado seja um número fracionário, o resultado se dá somente com o número inteiro, sem vírgula.
Em Python, o operador _/_ já efetua uma divisão fracionária automaticamente, mesmo que os operandos sejam inteiros.
Para utilizar a divisão inteira, faça desse modo:

```python
#Veja:

ponto_flutuante = 11/4 # = 2,75

#Basta usar duas barras:
inteiro = 11//4 # = 2
```

Ao imprimir um float na tela, você poderá ver algo como:

```python
#Veja:

preco_da_passagem = 110,1
gastos = 3 * preco_da_passagem
print(gastos)

# Output: 330.29999999999995
```
Isso é por conta da imprecisão do float. Vamos cobrir formas melhores e mais complexas de trabalhar com floats eventualmente, mas por agora, 
se contente com a função **round()**, que já vem implementada em Python.
Para informações sobre a função, cheque a [documentação](https://docs.python.org/3/library/functions.html#round) de Python.

### Strings

Como já mencionado, strings são cadeias de caracteres.

### Booleans

Os valores booleanos são um tipo de dado em Python. São dois: **True** e **False**, respectivamente _verdadeiro_ e _falso_, ou 1 e 0.
São usados em determinações de expressões lógicas, retorno de funções, checadores de condições. Possuem, assim como os outros tipos, 
inúmeras aplicações. 

Veja um exemplo:

```python
dogs_are_cool = True

cats_are_ugly = False

expression = dogs_are_cool and cats_are_ugly # >>> False
```

Python tem diversos outros tipos de dados, mas não convém ao momento. 

## Entradas e Saídas de Dados (I/O)

Existem duas funções clássicas para entrada e saída de dados. São básicas, mas poderosas. 

Veja:

### Função _print()_

```python
'''
Veja o funcionamento básico dessa função;
'''
cool_number = 33

print(cool_number) # >>> 33

'''
Você pode concatenar com uma mensagem, mas não esqueça de converter o dado para uma string;
'''

print("Meu número favorito é " + str(cool_number) + ".") # >>> Meu número favorito é 33.
```

A função **print()** já acompanha uma quebra de linha (\n) automaticamente. Para desabilitar a quebra de linha, faça:

```python
print("Hello World", end="")
```

:::tip Curiosidade
Caso queira imprimir um texto colorido no terminal, você pode usar o padrão de representação cores ANSI, veja como:
```python
print("\033[1;32m Hello World!") # >>> Hello World! em verde claro
'''
Veja: \033 é o caractere de escape. É o mesmo para todas as cores;
      1 para o estilo: normal;
      32 para a cor: verde claro
'''
```
Você pode trocar de cor para qualquer cor que quiser. Basta saber o código da cor.
:::

### Função _input()_

Para receber uma entrada do usuário pelo terminal, podemos usar a função **input()**. Tem algumas coisas que precisamos saber sobre essa
função antes de demonstrar.

Essa função **recebe qualquer entrada como uma string** automaticamente, mesmo se for um inteiro, um float ou um bool. Portanto, para
utilizar um dado inserido, deve-se convertê-lo no tipo de dado que quer utilizar. Pode ser interessante checar também se o usuário
deu uma entrada correta.

```python
idade = input("Digite sua idade: ")
# Supondo que eu digitei 18:

idade_futura = int(idade) + 20

print("Em 20 anos você vai ter {idade_futura}!".format(idade_futura=idade_futura))
# >>> Em 20 anos você vai ter 38 anos!
```

Não se preocupe com a formatação usada nesse exemplo. Vamos falar desse método nas próximas seções.

## Conclusão 🎑

Bom, essa seção termina aqui. Caso tenha alguma dúvida que não conseguiu encontrar online, envie para raphaelsoaresbrasil@gmail.com.
Obrigado pela atenção, e bons estudos.
