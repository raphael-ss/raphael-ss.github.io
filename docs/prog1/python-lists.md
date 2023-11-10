---
sidebar_position: 2
slug: /docs/programacao/python-listas
title: "Python - Listas"
description: "Listas em Python"
---

# Python - Listas

Listas em Python são **estruturas iteráveis**, que possibilitam **armazenamento de diversos valores de forma ordenada e indexada**.
Essa estrutura de dados é extremamente útil para diversas tarefas e procedimentos. É similar a uma *array*, presente em outras linguagens,
mas possui algumas funcionalidades diferentes.

Listas são delimitadas por colchetes "**[]**", e seus elementos são separados por vírgulas. Para declarar uma lista, podemos fazer de duas formas:

```python
list_1 = [] #-Lista vazia

list_2 = list() #-Lista vazia
```

Veja alguns exemplos de listas com elementos:

```python
numbers = [1, 2, 3, 4, 5]

words = ['Hello', 'World']

mixed_list = ['ABC', 1, 2, 3, True, 25.5]

list_of_lists = [[1, 'Jenny'], [2, 'Karl']]
```

Como o exemplo acima sugere, listas são **estruturas heterogêneas**, isto é, podem conter diferentes tipos de dados.

:::info Listas 2D 
Para acessar elementos de uma lista 2D, fazemos:
```python
list_of_lists = [[1, 'Jenny'], [2, 'Karl']]

name_1 = list_of_lists[0][1]

print(name_1)

#->> Jenny
```
:::
Podemos usar também o operador "**+**" para 'concatenar' listas:

```python
names_1 = ["Jenny", "Karl", "Bob"]
names_2 = ["Paul", "Gary"]

names = names_1 + names_2

print(names)

#->>['Jenny', 'Karl', 'Bob', 'Paul', 'Gary']
```

## Índices e *Slicing* 

### Índices

Os elementos numa lista são ordenados por um índice, o qual podemos usar para acessar itens específicos dentro dessa lista.
Veja o exemplo:

```python
numbers = [1, 3, 5, 7, 9]

print(numbers[2])

#->> 5
```

:::info Índice A Partir de Zero
Em Python, o índice de listas começa no número **0**. Portanto, deve-se sempre manter isso em mente quando formos acessar um item pelo seu índice.

Por exemplo:

```python
numbers = [1, 3, 5, 7, 9]

print(numbers[0])

#->> 1
```
:::

Uma funcionalidade útil de listas é o **indexamento negativo**. Podemos acessar os últimos elementos de uma lista, mesmo sem saber
seu tamanho. Só precisamos fazer:

```python
numbers = [1, 3, 5, 7, 9]

print(numbers[-1])
print(numbers[-2])
print(numbers[-3])

#->> 9
#->> 7
#->> 5
```

Utilizando os **índices (-1, -2, -3...)**, somos capazes de acessar os últimos itens de uma lista.

### len()

Podemos utilizar a função *len()* para determinar o tamanho de uma lista. Basta fazer:

```python
numbers = [1, 3, 5, 7, 9]

size = len(numbers)

print(size)

#->> 5
```

### *Slicing*

Podemos 'fatiar' listas com facilidade em Python, para obter subconjuntos da lista inicial. Para isso, temos que delimitar o índice inicial, ou seja,
onde começa o subconjunto, e o índice final, ou seja, onde termina.

Veja:

```python
numbers = [1, 3, 5, 7, 9]

numbers_1 = numbers[0:4] #-Do indice 0 ao 3

print(numbers_1)

#-Alternativamente,

numbers = [1, 3, 5, 7, 9]

numbers_2 = numbers[:4] #-Até o indice 3

print(numbers_2)

#-E também,

numbers = numbers[2:]#-A partir do indice 2 até o fim da lista

print(numbers)

#->>[1, 3, 5, 7]
#->>[1, 3, 5, 7]
#->>[5, 7, 9]
```

:::note Fatiando Listas
Perceba que, mesmo o último índice da lista sendo **4**, o último item está excluído da nova lista. Por que?

Isso acontece pois o primeiro número do índice é incluído, e o segundo não está incluído, ou seja, 
é um intervalo semi-aberto, como **[a, b)**.
:::

Ao fatiar uma lista, uma nova lista é criada, e a lista original se mantém inalterada.

Note que, também podemos trabalhar fatiando listas com índices negativos. Veja:

```python
numbers = [1, 3, 5, 7, 9]

numbers_1 = numbers[-2:] #-Do penúltimo ao último

print(numbers_1)

#-Alternativamente,

numbers = [1, 3, 5, 7, 9]

numbers_2 = numbers[:-2] #-Até o penúltimo, não incluído

print(numbers_2)

#->>[7, 9]
#->>[1, 3, 5]
```
:::tip Dica
Podemos adicionar um terceiro argumento no fatiamento de listas, especificando o 'salto' que queremos. Como em:

```python
numbers = [1, 3, 5, 7, 9]

numbers_1 = numbers[0:4:2] #-Do indice 0 ao 4, pulando de 2 em 2

print(numbers_1)

#->>[1, 5]
```
:::
## Métodos de Listas

Como qualquer tipo em Python, listas possuem alguns métodos que facilitam nosso trabalho.

### append()

O método *append()* é usado para adicionar um elemento ao fim da lista. Toma como argumento o valor do elemento que deseja adicionar.
Veja:

```python
odd_numbers = [1, 3, 5, 7, 9]

odd_numbers.append(11)

print(odd_numbers)

#->>[1, 3, 5, 7, 9, 11]
```

### remove()

O método *remove()* nos permite remover um elemento da lista de índice desconhecido, mas com o valor conhecido.
Veja:

```python
odd_numbers = [1, 3, 5, 7, 9]

odd_numbers.remove(1)

print(odd_numbers)

#->>[3, 5, 7, 9]
```

### count()

O método *count()* toma como argumento um valor e conta a quantidade de ocorrências dele na lista.
Veja:

```python
odd_numbers = [1, 3, 5, 7, 9]

occurencies = odd_numbers.count(5)

print(occurencies)

#->> 1
```

### insert()

O método *insert()* nos permite adicionar um elemento à lista num índice específico. Toma como primeiro argumento um índice (inteiro) e como segundo argumento o valor que será adicionado. Veja:

```python
numbers = [1, 3, 5, 7, 9]

numbers.insert(2, 4)

print(numbers)

#->> [1, 3, 4, 5, 7, 9]
```

Caso o primeiro argumento seja um índice maior que o tamanho da lista atual, o método irá inserir o valor no último lugar da lista.

### pop()

O método *pop()* remove um elemento da lista pelo seu índice, e nos permite retorná-lo para uso posterior. Toma 1 argumento opcional, 
que é um inteiro especificando o índice do elemento a ser removido. Se nenhum índice for dado, *pop()* remove o último elemento da lista.

```python
numbers = [1, 3, 5, 7, 9]

popped_number = numbers.pop()

print(numbers)
print(popped_number)

#->> [1, 3, 5, 7]
#->> 9
```

### sort()

O método *sort()* organiza a lista e a coloca em ordem crescente. Toma um parâmetro que dita se a ordenação deve ser crescente (*default*) ou reversa,
isto é, decrescente.

```python
numbers = [3, 1, 9, 7, 5]

numbers.sort() 
print(numbers)

#-Alternativamente,

numbers.sort(reverse=False)
print(numbers)

#-Pode-se fazer também,

numbers.sort(reverse=True)
print(numbers)

#->> [1, 3, 5, 7, 9]
#->> [1, 3, 5, 7, 9]
#->> [9, 7, 5, 3, 1]
```

Uma nota é que temos que especificar o argumento, em *reverse=True*.

### reverse()

O método *reverse()* simplesmente inverte a ordem atual da lista, e não toma nenhum argumento.

```python
numbers = [1, 3, 5, 7, 9]

numbers.reverse()

print(numbers)

#->> [9, 7, 5, 3, 1]
```

### clear()

O método *clear()* remove todos os elementos de uma lista. Não toma nenhum argumento.

```python
numbers = [1, 3, 5, 7, 9]

numbers.clear()

print(numbers)

#->> []
```

### extend()

O método *extend()* expande a lista, isto é, adiciona ao final dela um iterável, passado como argumento.

```python
numbers = [1, 3, 5, 7, 9]

more_numbers = [11, 13, 15, 17, 19]

numbers.extend(more_numbers)

print(numbers)

#->> [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
```

### copy()

O método *copy()* simplesmente retorna uma cópia da lista. Não toma argumentos.

```python
numbers = [1, 3, 5, 7, 9]

numbers_copy = numbers.copy()

print(numbers_copy)

#->> [1, 3, 5, 7, 9]
```

## sorted()

A função *sorted()* retorna a lista ordenada, sem modificar a lista original. Toma um argumento adicional, especificando se o reverso (decrescente)
deve ser feito, ao ivés do *default* (crescente).

```python
numbers = [3, 1, 9, 7, 5]

numbers_sorted = sorted(numbers) 
print(numbers_sorted)

#-Alternativamente,

numbers_sorted = sorted(numbers, reverse=False)
print(numbers_sorted)

#-Pode-se fazer também,

numbers_sorted = sorted(numbers, reverse=True)
print(numbers_sorted)

#->> [1, 3, 5, 7, 9]
#->> [1, 3, 5, 7, 9]
#->> [9, 7, 5, 3, 1]
```

:::note sorted() x sort()
A diferença entre os dois são duas:

- *sorted()* é uma função, e *sort()* é um método (não se preocupe com a diferença agora).
- *sorted()* não modifica a lista original, e retorna uma lista nova ordenada, *sort()* modifica a lista original.
:::

## Descompactação de Listas

Caso saibamos quantos elementos uma lista contém, podemos descompactá-la. Caso não queiramos algum valor, podemos usar "_" para jogar o valor fora. Como em:

```python
numbers = [1, 2, 3]

_, x, y = numbers

print(x)
print(y)

#->> 2
#->> 3
```

## Compreensão de Listas

Uma funcionalidade extremamente útil em Python é a compreensão de listas. Podemos usar sentenças lógicas e estruturas de controle de fluxo para 
criar listas. Iremos utilizar essas compreensões em diversos cenários. A compreensão de listas segue um modelo:

```python
[operation for item in list]
```


Veja um exemplo:

```python
even_numbers = [x for x in range(20) if x % 2 == 0]

print(even_numbers)

squares = [x**2 for x in range(10)]

print(squares)

pairs = [(x, y)
         for x in range(3)
         for y in range(3)]

print(pairs)

#->> [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
#->> [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
#->> [(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]
```

## zip()

A função *zip()* nos permite combinar listas sem precisar utilizar listas 2D. É útil em diversos cenários.
Considere o exemplo abaixo:

```python
names = ["Jenny", "Karl", "Sam", "Grace"]
ages = [19, 21, 24, 22]

names_and_ages = zip(names, ages)

#-Precisamos converter de volta á uma lista para exibir o resultado:

names_and_ages = list(names_and_ages)
print(names_and_ages)

#->> [('Jenny', 19), ('Karl', 21), ('Sam', 24), ('Grace', 22)]
```

Os elementos na lista são **tuplas**, um tipo de dado em Python. Vamos falar mais sobre ele em seções posteriores.

## Conclusão 🎑

Bom, essa seção termina aqui. Caso tenha alguma dúvida que não conseguiu encontrar online, envie para raphaelsoaresbrasil@gmail.com.
Obrigado pela atenção, e bons estudos.