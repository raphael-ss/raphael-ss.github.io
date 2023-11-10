---
sidebar_position: 2
slug: /docs/programacao-2/python-numpy
title: "Python - NumPy"
description: "Introdução À NumPy"
---

## NumPy

A biblioteca NumPy é uma biblioteca *open-source* que facilita bastante o trabalho, manipulação e operações com *arrays*, ou matrizes, assim como facilita operações numéricas em uma quantidade grande de dados de forma eficiente. 

### NumPy *Arrays*

As *arrays* de NumPy são mais flexíveis que as listas de Python. São chamadas de *ndarrays* (*n-dimensional arrays*), pois podem conter qualquer número (**n**) de dimensões (**d**), isto é, são *arrays* de `n` dimensões.

Podem ser vetores (unidimensionais) ou matrizes (multidimensionais). Podemos converter listas em *arrays*, como em:

```python
import numpy as np

numbers = [1,2,3,4,5]

nums_array = np.array(numbers)
print(nums_array)

#->> [1 2 3 4 5]
```

Para criar uma matriz de duas dimensões, podemos fazer:

```python
import numpy as np

numbers = [[1,2,3],[4,5,6]]

matrix = np.array(numbers)
print(matrix)

#->> [[1 2 3]
#->>  [4 5 6]]
```

Perceba que a matriz é mostrada numa forma que mostra de fato a estrutura das dimensões (2 linhas e 3 colunas).

Existem diversas funcionalidades e operações úteis que usaremos com NumPy.