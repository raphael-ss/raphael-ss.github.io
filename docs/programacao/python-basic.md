---
sidebar_position: 1
---

# Python Básico



## Tópicos

Serão abordados nessa seção os conceitos básicos de sintaxe e estilo da linguagem de programação Python.
Aqui seguem os tópicos que vamos abordar:

1. Comentários
2. Operadores Aritméticos
3. Variáveis
4. Operador Módulo (%)
5. Inteiros e Floats
6. Erros
7. Strings (básico)
8. print()

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
_+_ para adição
_-_ para subtração
_*_ para multiplicação
_/_  para divisão
_%_ para o módulo (resto da divisão)
_**_ para exponenciação
_x += y_ para x = x + y (também funciona para concatenar strings)

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