---
sidebar_position: 4
slug: /docs/programacao/python-controwflow
title: "Python - Controle de Desvio e Fluxo"
description: "If Statements, For Loops, While Loops, e mais."
---

# Python - Controle de Desvio e Fluxo

Nessa seção, vamos falar de tópicos essenciais em qualquer linguagem de programação, e blocos de montagem básicos de
qualquer algoritmo. São tópicos importantes para controle de fluxo e desvio.

Por exemplo, caso queiramos fazer uma coisa se o resultado de um processo for X, ou fazer outra coisa se o resultado for Y.
Ou, caso queiramos repetir um processo até uma condição ser satisfeita, ou só repetir um N número de vezes.

Para isso usamos os loops (iterações) e condições se-então-senão.

:::info Whitespace
Python não possui delimitadores de expressões/condições ou de blocos de código.

Diferente de outras linguagens, Python usa de espaço em branco, ou *whitespace*, para delimitar quais expressões estão aninhadas e quais não estão,
forçando o programador a se 'comportar' e escrever o código com formatação e indentação correta.
Por isso, vigie as tabulações e espaços no código.
:::

## Operações Lógicas e Valores Booleanos

Como em qualquer linguagem de programação, Python possui operações lógicas, ou seja, de **operações de comparação** e 
**operações booleanas**. O resultado dessas operações é um valor booleano, ou seja, *True* ou *False*, em Python.

### Operadores de Comparação

- "==" -> "é igual à"
- "!=" -> "não é igual à"
- ">" -> "é maior que"
- ">=" -> "é maior ou igual à"
- "<" -> "é menor que"
- "<=" -> "é menor ou igual à"

Veja o exemplo:

```python
message_1 = "hello world"
message_2 = "Hello World"
a = 15
b = 5

bool_1 = a > b #-Resulta em 'True'
bool_2 = b > a #-Resulta em 'False'

bool_3 = message_1 == message_2 #-Resulta em 'False'
bool_4 = message_1 > message_2 #-Resulta em 'True'
```

:::caution Operador de Atribuição x Operador de Comparação
Tome cuidado e preste atenção na hora de fazer as condições: talvez vocẽ confunda o operador "=", que é o operador de atribuição à uma variável,
com o operador "==", que é o de comparação.

Se você tentar fazer um loop com o primeiro, pode receber um erro, ou pior.
:::

### Operadores Booleanos

Muito presentes em álgebra booleana e lógica proposicional, estes operadores servem para construir sentenças lógicas no código.

- "**and**": "e", "⋀", "." -> requer que ambos sejam verdadeiros para a expressão ser verdadeira
- "**or**": "ou", "⋁", "+" -> requer que pelo menos 1 seja verdadeiro para a expressão ser verdadeira
- "**not**": "não", "negação", "⊽", "!", "~" -> nega o valor lógico, ou seja, troca
- "**in**": "está contido", "⊂" -> checa se um item está contido/pertence à uma lista

Para mais informações sobre a tabela lógica, veja as imagens abaixo:

![Representação visual das operações acima](/img/venn-diagram-boolean.jpg)

## If-Then-Else

Em Python, o código para If statements é bem limpo e simples. Veja:

```python
if condition:
    #-Código
elif condition:
    #-Código
else:
    #-Código
```

Para que o código dentro da primeira declaração (*if*) seja executado, é necessário que a condição (*condition*) seja verdadeira.
Para que o código dentro da segunda declaração (*elif*) seja executado, é necessário que todas as condições anteriores tenham sido falsas,
e que a atual seja verdadeira. 
E, para que o código da terceira declaração (*else*) seja executado, todas as declarações anteriores devem ter sido falsas.

Veja o exemplo:

```python
#-Nota: você pode usar parênteses nas condições e operações para assegurar a ordem de execução
if (age > 18) and (has_subscription):
    print("Você pode assistir à esse título!")
elif (age > 18) and (has_subscription == False):
    print("Você não é assinante do plano que inclui esse título!")
else:
    print("Esse título é só para maiores de 18 anos!")
```

:::tip Dica
Você também pode escrever essas declarações como uma operação ternária, como no exemplo:

```python
paridade = "par" if x % 2 == 0 else "ímpar"
```
:::

## For Loop

Para iterar sobre um processo N vezes, usamos o laço *For*. Em Python, a lógica e sintaxe do laço *For* é um pouco distinta de outras linguagens.

A sintaxe é dada por:

```python
for temporary_variable in iterable:
    #-Código
```

Veja:

```python
numbers = [1, 2, 3]

for number in numbers:
    print(number)
```

Isso significa: para cada número na lista *numbers*, armazene o número na variável temporária *number*, e a imprima.

Para executar N vezes, e sabendo o tamanho de N, usamos a função *range()*.

### `range()`

A função embutida *range()* é bastante útil, principalmente em iterações como o laço *For*. 
Essa função toma 3 parâmetros: 

**range(início, fim, salto)**:

- Início (opcional):  de onde a contagem começará; O default é igual à 0.
- Fim (obrigatório): onde a contagem irá parar;
- Salto (opcional): o quanto será incrementado;

Na verdade, *range()* não é uma função, e sim um tipo de dados em Python, mas isso não convém no momento.

Para mais informações, [visite a página de documentação de Python](https://docs.python.org/3/library/stdtypes.html#typesseq-range).

Veja o exemplo:

```python
for i in range(5):
    print(i)

#->>0
#->>1
#->>2
#->>3
#->>4
```

## While Loop

O laço *While* serve para iterar sobre um bloco de código até uma condição ser quebrada.
A condição é checada antes mesmo de executar a primeira vez, portanto, se a condição for avaliada '*False*' na primeira vez,
o código dentro nunca será executado. 

A sintaxe é:

```python
while condition:
	#-Código
```


Veja:

```python
counter = 0

while counter < 5:
	print(counter)
	counter += 1

#->>0
#->>1
#->>2
#->>3
#->>4  
```

:::caution Loops Infinitos
Cuidado para criar condições que possam ser quebradas em laços *While*.
Se, por exemplo, você fizesse:
```python
counter = 0

while counter < 5:
	print(counter)
	
```
O resultado seria um loop infinito, ou seja, um programa quebrado. 
Lembre-se de criar declarações para quebrar a condição do seu *While*.
:::

### `break`

Python possui palavras chaves no controle de laços. A palavra *break* é uma delas.
Para interromper o laço imediatamente, use *break*, como no exemplo:

```python
#-Nada será impresso no terminal, pois o loop foi interrompido na primeira iteração;
counter = 0

while counter < 5:
    if counter == 0: break
```

### `continue`

Outra palavra chave no controle de laços é *continue*. Pode ser usada para pular o resto do código e voltar
para a checagem da condição.

```python
counter = 0

while counter < 5:
    if counter % 2 != 0: 
    	print(counter)
    	counter += 1
    else: 
    	counter += 1
    	continue
#->>1
#->>3
```

O exemplo acima irá imprimir os números ímpares entre (0, 5).

:::tip Dica
Para fazer o mesmo que o código acima de uma forma melhor e mais sucinta, faça:

```python
#-Neste exemplo, iteramos entre os valores de (1, 5), pulando de 2 em 2. 
for i in range(1, 5, 2):
    print(i)
```
:::

## Conclusão 🎑

Bom, essa seção termina aqui. Caso tenha alguma dúvida que não conseguiu encontrar online, envie para raphaelsoaresbrasil@gmail.com.
Obrigado pela atenção, e bons estudos.