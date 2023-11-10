---
sidebar_position: 5
slug: /docs/programacao/python-funcoes
title: "Python - Funções"
description: "Funções em Python"
---

# Python - Funções

Um dos tópicos mais essenciais em programação são as **funções**. À medida que começamos a escrever programas maiores e mais complexos, uma coisa que 
começaremos a perceber é que frequentemente teremos que **repetir o mesmo conjunto de etapas em muitos lugares diferentes em nosso programa**.

Portanto, um conceito deveria ser desenvolvido para que pudéssemos utilizar o mesmo bloco em diversas partes do código, e com diversas entradas,
ou argumentos, diferentes.

As **funções** são uma maneira conveniente de **agrupar nosso código em blocos reutilizáveis**. Uma função contém uma sequência de etapas que podem ser executadas repetidamente ao longo
de um programa, sem precisar repetir o processo de escrever o mesmo código novamente.

:::note Whitespace
Python não possui delimitadores de expressões/condições ou de blocos de código.

Diferente de outras linguagens, Python usa de espaço em branco, ou *whitespace*, para delimitar quais expressões estão aninhadas e quais não estão,
forçando o programador a se 'comportar' e escrever o código com formatação e indentação correta.
Por isso, vigie as tabulações e espaços no código.
:::

## Declaração de uma Função

Para declarar uma função em Python, usamos a palavra chave `def`. Veja a sintaxe correta:

```python
def function(parameter_1, parameter_2, etc):
    #-Code
    return value
```

Todo o código indentado na declaração será considerado parte do 'bloco' que a função define. Funções em Python podem possuir diversos parâmetros, de diferentes tipos, e também
podem retornar mais de um valor, ou nenhum (`NoneType`).

:::info Parâmetros x Argumentos
- **Parâmetro**:

Um *parâmetro* é um **valor ou uma variável que é declarada na definição** de uma função ou método. Ele atua como um **espaço reservado** para receber um valor quando a função é chamada.
Em outras palavras, o parâmetro é uma maneira de dizer **quais tipos de valores a função espera receber para realizar seu trabalho**.

- **Argumento**:

Um *argumento* é o **valor real ou a expressão que é passada para uma função quando ela é chamada**. É o **dado concreto** que você fornece para preencher os parâmetros da função. Os
argumentos que você passa para uma função devem corresponder em quantidade e ordem aos parâmetros definidos na função.
:::

Veja o exemplo abaixo:

```python
def intro_message(name):
    print(f"Hello, it's nice to meet you, {name}!")
    return 

intro_message("Bob")

#->> Hello, it's nice to meet you, Bob!
```

Perceba que, para chamar uma função, basta escrever seu nome exatamente igual à declaração com os argumentos definidos.

:::info Tipagem Estática em Python
Para remediar o problema com tipagem dinâmica e deixar nosso código mais funcional e organizado, podemos especificar os tipos das variáveis globais e locais
e dos parâmetros das funções. Isso é bem visto pela comunidade de desenvolvedores Python e provavelmente por qualquer um que ler seu código.

Veja como ficaria o exemplo acima com esse detalhe:

```python
#-Aqui, especificamos com ':' que o tipo do parâmetro é uma string (str)
def intro_message(name:str):
    print(f"Hello, it's nice to meet you, {name}!")
    return 

intro_message("Bob")

#->> Hello, it's nice to meet you, Bob!
```

A partir de agora, usaremos isso em todos os exemplos.
:::

## Definição de Parâmetros

Existem algumas funcionalidades úteis em Python que facilitam o trabalho com funções. Uma delas é a definição de parâmetros com valores *default*, ou
valores padrão. Veja:

```python
def function(parameter_1:type="Default Value"):
    #-Code
    return value
```

Isso significa que, caso nenhum parâmetro seja passado, a função irá trabalhar com o valor especificado na declaração, ou seja, o valor *default*. 
Veja um exemplo:

```python
def circle_area(radius:float=1.0):
    return (radius ** 2 * 3.1415)

print(circle_area())
print(circle_area(5))

#->> 3.1415
#->> 78.53750000000001
```

Outra funcionalidade interessante é a possibilidade de usar argumentos com palavras-chave, que denotam qual valor (argumento) corresponde à qual 
variável da função (parâmetro). Isso deixa o código mais limpo, claro e organizado. Veja a sintaxe:

```python
def function(parameter_1:type="Default Value"):
    #-Code
    return value

function(parameter_1="Value")
```

Especificando os argumentos com as palavras-chave, não precisamos especificar os valores em ordem. Qualquer ordem funciona. Veja como funciona com o exemplo anterior:

```python
def circle_area(radius:float=1.0):
    return (radius ** 2 * 3.1415)

print(circle_area())
print(circle_area(radius=5))

#->> 3.1415
#->> 78.53750000000001
```

## Retornando Valores

Para retornar um valor numa função, basta usar o `return`, seguido do valor que deseja retornar. Podemos também retornar valores
múltiplos e de diferentes tipos com funções. Veja a sintaxe:

```python
def function(parameter_1:type="Default Value"):
    #-Code
    return value_1, value_2

var_1, var_2 = function(parameter_1="Value")
```

Desse modo, a variável `var_1` receberá o valor `value_1`, e `var_2` receberá `value_2`. Veja o exemplo:

```python
def age_message(age:int):
    message = f"In 20 years, you will be {age+20} years old."
    future_age = age+20
    return message, future_age

message, age_in_20 = age_message(20)
print(message)

#->> In 20 years, you will be 20 years old.
```

:::info Variáveis Locais x Variáveis Globais
Existe uma diferença entre variáveis definidas em blocos e variáveis definidas 'soltas' pelo código: a primeira se chama variável local, e a
segunda se chama variável global. A diferença principal entre elas é o **escopo**. O escopo se refere à visibilidade e acesso de uma variável.

**Variáveis locais** são definidas dentro de uma função ou bloco e só podem ser acessadas lá. Elas têm um escopo limitado a esse bloco e desaparecem quando a função termina, isto é, são 'destruídas', portanto não podem ser referenciadas fora da função.

**Variáveis globais** são definidas fora das funções e são visíveis em todo o programa. Seu valor persiste durante toda a execução, mas modificar uma variável global em uma função pode afetar outras partes do programa. 
:::

## Conclusão 🎑

Bom, essa seção termina aqui. Caso tenha alguma dúvida que não conseguiu encontrar online, envie para raphaelsoaresbrasil@gmail.com.
Obrigado pela atenção, e bons estudos.



















