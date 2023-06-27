---
sidebar_position: 1
---

# Python Básico


## Tópicos

Serão abordados nessa seção os conceitos básicos de sintaxe e estilo da linguagem de programação Python.
Aqui seguem os tópicos que vamos abordar:

1. **Comentários**
2. **Operadores Aritméticos**
3. **Variáveis**
4. **Operador Módulo (%)**
5. **Inteiros e Floats**
6. **Erros**
7. **Strings (básico)**
8. **print()**
9. **Tipo de Dados**

Começando do tópico 1:

## Comentários

Em Python, comentários são vistos com muito bons olhos, desde que sejam concisos, significantes e não redundantes.
Segue a sintaxe adequada para comentar no código em Python:

```python
#This is a comment
```

O padrão é comentar acima da linha ou bloco ao qual você se refere. Também podemos comentar em várias linhas, caso
queira explicar algo mais detalhadamente ao longo de um projeto. Veja:

```python
'''
This is a multiline comment.~
You can use it to specify details at the beggining of your code, or to 
point out you are the author. Either way, it's very useful.
'''
```
## Operadores Aritméticos

Como na maioria das linguagens, Python possui operadores aritméticos embutidos na linguagem. Você também pode utilizar de
funções matemáticas mais complexas e efetuar cálculos avançados usando bibliotecas que possuam essas funções.
De qualquer modo, Python possui:
1._+_ para adição
2._-_ para subtração
3._*_ para multiplicação
4._/_  para divisão
5._%_ para o módulo (resto da divisão)
6._**_ para exponenciação
7._x += y_ para x = x + y (também funciona para concatenar strings)

## Variáveis 

São usadas para armazenar dados. Em Python, não requerem especificação de tipo de dado, nem de tamanho. Python usa de alocação
de memória dinâmica para todas suas variáveis, e também é uma *dynamic typed language*, em oposição às *static typed language*, como C, 
C++, Java, etc. Isso significa que o interpretador de Python 'infere' o tipo, sozinho.

As variáveis em Python devem ser expressas com nomes significantes. Veja um exemplo de uma variável de contador:

```python
a = 15 #não faça isso
x = 15 #nem isso
counter = 15 #isso pode
counter_for_my_function = 15 #isso é desnecessário
```

O operador _=_ é chamado de *assignment operator*, e não é usado para comparação, e sim para atribuição de valores a uma variável.
Você pode redeclarar uma variável em Python.

## Operador Módulo

Esse operador é bastante útil: retorna o resto de uma divisão entre o primeiro número e o segundo número. Veja um exemplo

```python
#Exemplo do poerador de módulo
zero = 8 % 4

diff_than_zero = 12 % 5
```

## Inteiros e Floats

Em Python, podemos tratar números de 2 formas: como *float* ou como *int*. Se você está aqui, já deve saber a diferença. 
Porém, para recapitular, sabemos que o tipo **inteiro** engloba os números negativos e positivos, não incluindo números
com vírgula. Já o tipo **ponto flutuante** trata de números racionais, ou com vírgula. 
O Interpretador irá inferir o tipo de acordo com as operações.

```python
# Exemplo 

inteiro = 10
ponto_flutuante = 9,999

```

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
se contente com a função _round()_, que já vem implementada em Python.
Para informações sobre a função, cheque a [documentação](https://docs.python.org/3/library/functions.html#round) de Python.

## Erros

Existem alguns tipos de erros que você vai encontrar em Python. Antes disso, veja
o procedimento padrão para resolução de erros.

:::tip
Como resolver?
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

:::danger
Como evitar? 
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

:::danger
Como evitar? 
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
:::danger
Como evitar? 
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

:::danger
Como evitar? 
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
:::danger
Como evitar? 
Trate bem os casos do código para que isso não aconteça e considere usar um Execeção.
:::

### IndentationError

Esse erro aparece quando a indentação do código não está correta. 
Como Python é uma linguagem que usa *whitespace* para determinar a ordem
do código, deve-se atentar à esse fator.

:::danger
Como evitar? 
Observe e preste atenção à tabulação/espaço do código.
:::


Isso cobre os erros que encontraremos de início. Mais pra frente, veremos
diversos outros tipos de erros, e mais importante, como resolvê-los.


