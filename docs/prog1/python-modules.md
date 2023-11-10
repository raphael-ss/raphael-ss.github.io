---
sidebar_position: 7
slug: /docs/programacao/python-modules
title: "Python - Módulos"
description: "Módulos em Python."
---

# Python - Módulos

Python é uma das linguagens mais famosas e utilizadas no mundo. Isso contribui para a criação de bibliotecas e arquivos de código estruturado com funções e 
outras funcionalidades, como classes (algo que não vimos ainda) úteis para diversas tarefas. Todo esse código estruturado desenvolvido por terceiros pode ser 'importado' em Python, 
assim como os arquivos que você mesmo desenvolver.

Módulos são arquivos que agrupam funções, classes e variáveis relacionadas, promovendo a **modularidade** e **reutilização de código**. Ao separar partes específicas do programa em 
módulos, é possível organizar melhor o código, melhorar a legibilidade e facilitar a manutenção. Esses módulos podem ser importados em outros arquivos Python, expandindo as capacidades do 
programa, evitando repetições e permitindo a colaboração entre desenvolvedores. Isso promove uma abordagem estruturada e eficiente na construção de software.

## Importando Módulos

Existem algumas formas diferentes de importar módulos em Python. Podemos:

- Importar o módulo inteiro como objeto
- Importar somente uma função
- Importar as funções do módulo

Veja a sintaxe para cada um:

```python
#-1.
import module
module.function()

#-2.
from module import function
funcion()

#-3.
from module import *
function()
```

Vamos comentar sobre esses 3 métodos: o **primeiro** é o mais comum e mais bem visto na ocasião em que usaremos diversas funções do módulo em várias instâncias no código. O **segundo**
é bem visto se só usaremos uma única função do módulo, visto que importar o módulo todo pode ser um ato demorado (se o módulo for muito grande). Já o terceiro, é mal-visto. 

*Por quê?*

Não é recomendado nem visto com bons olhos o terceiro método pois isso importa todas as funções do módulo sem precisar referenciar o objeto, isto é, sem fazer `module.function()`.
Portanto, na construção de *softwares* maiores, usar esse método pode causar conflitos em nomes de funções iguais entre módulos ou no seu próprio código, deixar o código menos 
legível e mais difícil de manter.

:::info Importando Arquivos
Você também pode importar arquivos Python com funções definidas e código estruturado que você ou algum colega de trabalho fez. Basta fazer 

```python
import file

file.function()
```
:::

Usando a palavra chave `as`, podemos renomear nossos módulos da forma que quisermos referenciá-los (isso é útil pois existem módulos com nomes bem grandes).
Veja a sintaxe:

```python
import module as mod

mod.function()
```

:::info Convenções de Importação
Para facilitar a distribuição e leitura de código, existem algumas convenções usadas na hora de 'renomear' alguns módulos basante usados com a palavra chave `as`.
Veja quais são (só estamos tratando das convenções das bibliotecas que usaremos):

```python
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
import statsmodels as sm
```
:::

Vamos falar de alguns módulos famosos.

## Módulo `random`

Em Python, o módulo `random` oferece métodos para **simular comportamento não determinístico** na seleção de um número aleatório de um 
intervalo e na escolha de um item aleatório de uma lista. Alguns dos métodos desse módulo são o método `randint()`, que fornece uma seleção uniforme aleatória 
de um intervalo de números inteiros, e o método `choice()`, que oferece uma seleção uniforme de um elemento aleatório de uma sequência.

### `random.randint()`

O método `randint()` retorna um inteiro aleatório numa amostra definida pelos argumentos. Toma 2 argumentos:

- 1° (obrigatório): início da amostra
- 2° (obrigatório): fim da amostra

Veja um exemplo:

```python
import random

misterious_integer = random.randint(1, 10)
```

Ambos o início e a parada estão incluídos na amostra, ou seja, é um intervalo fechado `[a, b]`.

### `random.choice()`

O método `choice()` retorna o valor de uma escolha aleatória de uma sequência ordenada. Toma 1 argumento:

- 1° (obrigatório): sequência ordenada (como lista, tupla, range, etc.)

Veja um exemplo:

```python
import random

participants = ["John", "Mary", "Karl", "Alissa"]

winner = random.choice(participants)
```

### `sample()`

O método `sample()` escolhe aleatoriamente uma amostra de uma sequência. Toma 2 argumentos:

- 1° (obrigatório): sequência ordenada (coo lista, tupla, range, etc.)
- 2° (obrigatório): tamanho da amostra

Veja um exemplo:

```python
import random

participants = ["John", "Mary", "Karl", "Alissa"]

#-Retorna uma lista com a amostra de tamanho k
winners = random.sample(participants, k=2)
```

## Módulo `datetime`

Não vamos entrar em detalhes, mas Python possui um módulo para trabalhar com datas, chamado `datetime`. Pode-se definir datas com precisão e imprimi-las com formatação.
Existem vários tipos de datas para se trabalhar. Veja um exemplo:

```python
import datetime
feb_16_2019 = datetime.date(year=2019, month=2, day=16)
feb_16_2019 = datetime.date(2019, 2, 16)
print(feb_16_2019) 

time_13_48min_5sec = datetime.time(hour=13, minute=48, second=5)
time_13_48min_5sec = datetime.time(13, 48, 5)
print(time_13_48min_5sec) 

timestamp= datetime.datetime(year=2019, month=2, day=16, hour=13, minute=48, second=5)
timestamp = datetime.datetime(2019, 2, 16, 13, 48, 5)
print (timestamp) 

#->> 2019-02-16
#->> 13:48:05
#->> 2019-01-02 13:48:05
```

## Conclusão 🎑

Bom, essa seção termina aqui. Caso tenha alguma dúvida que não conseguiu encontrar online, envie para raphaelsoaresbrasil@gmail.com.
Obrigado pela atenção, e bons estudos.