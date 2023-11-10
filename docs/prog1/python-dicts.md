---
sidebar_position: 6
slug: /docs/programacao/python-dictionaries
title: "Python - Dicionários"
description: "Dicionários em Python."
---

# Python - Dicionários 

Também chamados de *dicts*, ou *hashmaps*, os dicionários são um tipo de dado extremamente útil em Python. Diferentemente de uma lista, um dicionário é
uma coleção não-ordenada de dados, ou seja, não possui índice. No entanto, os dados num dicionário são organizados em um padrão de `key:value`(chave:valor).

Uma forma de entender dicionários é pensar neles como **listas associativas**, onde cada item não está associado à um índice, mas à uma chave, que pode
ter diferentes tipos, desde que sejam imutáveis, como veremos a seguir. 

Em suma, dicionários são um conjunto de valores na forma `key:value`, onde cada chave é um valor único no dicionário e um tipo imutável.

Para mais informações sobre dicionários, [acesse a documentação de Python3](https://docs.python.org/3/tutorial/datastructures.html#dictionaries).

## Declaração de Dicionários

Para declarar um dicionário vazio em Python, siga a sintaxe:

```python
#-Forma 1:
dict_1 = dict()

#-Forma 2:
dict_2 = {}
```

Ambas as formas são corretas, embora a forma 1 seja melhor em organização e leitura de um código mais complexo, tendo em vista que **conjuntos**, outro tipo
de Python, também são denotados por chaves `{}`. Mais sobre conjuntos nos próximos artigos.

:::info Tipos de Dados em *Dicts*
- **Chaves**:

As chaves só podem ser dos tipos imutáveis de Python, que são *strings*, *int*, *float* ou *tuples*.

- **Valores**;

Os valores podem ser de qualquer tipo, inclusive listas, e até outros dicionários.
:::

Veja um exemplo da declaração de dicionários com valores:

```python
names_and_age = names_and_age = {"Robert":32, "Mary":28, "John":29}
print(names_and_age)

#->> {'Robert':32, 'Mary':28, 'John':29}
```

## Trabalhando com Dicionários

Existem algumas funcionalidades e métodos que nos ajudam a trabalhar com dicionários. Observe:

### Acessando e Atualizando Valores

Podemos acessar valores num dicionário por meio de sua chave. Faça da seguinte forma:

```python
my_dict = {"key_1":"value_1", "key_2":"value_2"}

value = my_dict["key_1"]

print(value)

#->> value_1
```

Valores também podem ser atualizados por esse método. Se a chave não estiver no dicionário, uma nova chave será criada com o valor especificado, e 
se a chave já estiver no dicionário, o valor antigo será substituído pelo novo.
Veja o exemplo:

```python
meals_and_prices = {"Spaghetti":10, "Steak and Potatoes":12, "Chicken and Salad":9}
print(meals_and_prices)

#-Atualizando o valor de 'Steak and Potatoes':
meals_and_prices["Steak and Potatoes"] = 11
print(meals_and_prices)

#-Criando a chave 'French Fries' com o valor inicial de $6:
meals_and_prices["French Fries"] = 6
print(meals_and_prices)

#->> {'Spaghetti': 10, 'Steak and Potatoes': 12, 'Chicken and Salad': 9}
#->> {'Spaghetti': 10, 'Steak and Potatoes': 11, 'Chicken and Salad': 9}
#->> {'Spaghetti': 10, 'Steak and Potatoes': 11, 'Chicken and Salad': 9, 'French Fries': 6}
```

:::caution *KeyError*
Tentar acessar uma chave que não existe numa expressão ou operação levará à um *KeyError*. Para evitar, use o operador `in` para checar se a chave procurada existe.
:::

## Métodos de Dicionários

Alguns métodos são semelhantes aos métodos de listas, e outros são exclusivos. Veja:

### `keys()`

O método `keys()` retorna um **objeto com uma lista de todas as chaves do dicionário**. Não toma argumentos. Não é possível modificar esse objeto como uma lista, e este reflete as mudanças feitas no dicionário. Pode ser convertido numa lista. Veja:

```python
meals_and_prices = {"Spaghetti":10, "Steak and Potatoes":12, "Chicken and Salad":9}

meals_dict_object = meals_and_prices.keys()
meals_list = list(meals_and_prices.keys())

print(meals_dict_object)
print(meals_list)

meals_and_prices["French Fries"] = 6

print(meals_dict_object)
print(meals_list)

#->> dict_keys(['Spaghetti', 'Steak and Potatoes', 'Chicken and Salad'])
#->> ['Spaghetti', 'Steak and Potatoes', 'Chicken and Salad']
#->> dict_keys(['Spaghetti', 'Steak and Potatoes', 'Chicken and Salad', 'French Fries'])
#->> ['Spaghetti', 'Steak and Potatoes', 'Chicken and Salad']

```

### `values()`

O método `values()` é semelhante ao método `keys()`, porém retorna **um objeto com uma lista de todos os valores do dicionário**. Assim como o anterior,
reflete as modificações feitas no dicionário. Veja:

```python
meals_and_prices = {"Spaghetti":10, "Steak and Potatoes":12, "Chicken and Salad":9}

prices_dict_object = meals_and_prices.values()
prices_list = list(meals_and_prices.values())

print(prices_dict_object)
print(prices_list)

meals_and_prices["French Fries"] = 6

print(prices_dict_object)
print(prices_list)

#->> dict_values([10, 12, 9])
#->> [10, 12, 9]
#->> dict_values([10, 12, 9, 6])
#->> [10, 12, 9]
```

### `items()`

O método `items()` também é semelhante aos 2 anteriores. Este retorna **um objeto com uma lista de tuplas com os pares `key:value` do dicionário**. Assim
como os dois anteriores, reflete as modificações do dicionário. Veja:

```python
meals_and_prices = {"Spaghetti":10, "Steak and Potatoes":12, "Chicken and Salad":9}

items_dict_object = meals_and_prices.items()
items_list = list(meals_and_prices.items())

print(items_dict_object)
print(items_list)

meals_and_prices["French Fries"] = 6

print(items_dict_object)
print(items_list)

#->> dict_items([('Spaghetti', 10), ('Steak and Potatoes', 12), ('Chicken and Salad', 9)])
#->> [('Spaghetti', 10), ('Steak and Potatoes', 12), ('Chicken and Salad', 9)]
#->> dict_items([('Spaghetti', 10), ('Steak and Potatoes', 12), ('Chicken and Salad', 9), ('French Fries', 6)])
#->> [('Spaghetti', 10), ('Steak and Potatoes', 12), ('Chicken and Salad', 9)]
```

### `get()`

O método `get()` funciona para obter um valor do dicionário. Toma 2 argumentos:

- 1° (obrigatório): chave do valor desejado 
- 2° (opcional): valor de retorno caso a chave não exista (*default* é *None*)

Veja um exemplo:

```python
meals_and_prices = {"Spaghetti":10, "Steak and Potatoes":12, "Chicken and Salad":9}

print(meals_and_prices.get("Spaghetti"))
print(meals_and_prices.get("French Fries"))
print(meals_and_prices.get("French Fries", "'French Fries' não está no dict."))

#->> 10
#->> None
#->>'French Fries' não está no dict.
```

### `update()`

O método `update()` combina dois dicionários, atualizando o dicionário onde o método foi aplicado com os valores do dicionário passado como argumento.
Toma 1 argumento:

- 1° (obrigatório): dicionário com dados a serem acrescentados

Se existir a mesma chave em ambos os dicionários, o valor da chave no dicionário a ser atualizado será substituído pelo valor da chave no dicionário
passado como argumento.

Veja um exemplo:

```python
meals_and_prices = {"Spaghetti":10, "Steak and Potatoes":12, "Chicken and Salad":9}

more_meals_and_prices = {"Hamburguer":8, "Spaghetti":9, "Fish and Rice":10}

meals_and_prices.update(more_meals_and_prices)

print(meals_and_prices)

#->> {'Spaghetti': 9, 'Steak and Potatoes': 12, 'Chicken and Salad': 9, 'Hamburguer': 8, 'Fish and Rice': 10}
```

### `pop()`

O método `pop()` remove uma chave e retorna o valor correspondente à essa chave. Toma 2 argumentos:

- 1° (obrigatório): a chave a ser removida
- 2° (opcional): o valor retornado caso a chave não exista

Como mencionado, esse método retorna o valor referente à chave removida. Veja um exemplo:

```python
meals_and_prices = {"Spaghetti":10, "Steak and Potatoes":12, "Chicken and Salad":9}

print(meals_and_prices.pop("Steak and Potatoes"))
print(meals_and_prices.pop("French Fries", "French Fries não está no dict."))
print(meals_and_prices)

#->> 12
#->> French Fries não está no dict.
#->> {'Spaghetti': 10, 'Chicken and Salad': 9}
```

### `clear()`

O método `clear()` remove todos os itens dentro do dicionário. Não toma nenhum argumento. Veja:

```python
meals_and_prices = {"Spaghetti":10, "Steak and Potatoes":12, "Chicken and Salad":9}
meals_and_prices.clear()

print(meals_and_prices)

#->> {}
```

## Compreensão de Dicionários

Assim como listas, podemos performar compreensões para definir dicionários, o que é uma funcionalidade bastante útil. Veja a sintaxe:

```python
new_dict = {expression for key, value in old_dict.items() if condition}

#-Ou,

new_dict = {expression for key, value in list}
```

Veja um exemplo:

```python
person_age = {"Mark": 55, "Shiela": 28, "Bryce": 24, "Jim": 41, "Eric": 33, "Ally": 23}

person_age_filtered = {name: age for name, age in person_age.items() if age < 25}

print(person_age_filtered)

#->> {'Bryce': 24, 'Ally': 23}
```

E também:

```python
nums_list = [1, 2, 3, 4, 5]

nums_squared = {num: num**2 for num in nums_list}

print(nums_squared)

#->> {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```

## Conclusão 🎑

Bom, essa seção termina aqui. Caso tenha alguma dúvida que não conseguiu encontrar online, envie para raphaelsoaresbrasil@gmail.com.
Obrigado pela atenção, e bons estudos.




