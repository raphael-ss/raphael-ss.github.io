---
sidebar_position: 3
slug: /docs/programacao/python-strings
title: "Python - Strings"
description: "Strings em Python"
---

# Python - Strings

`Strings` são **sequências de caracteres** (letras, números, símbolos e espaços) usadas para representar texto em linguagens de programação. Em Python, as *strings* são delimitadas por aspas simples (' ') ou aspas duplas (" "), o que permite ao interpretador identificar o início e o fim do texto.

As *strings* são imutáveis em Python, o que significa que, uma vez criadas, seus valores não podem ser alterados. No entanto, é possível criar novas strings a partir das originais, aplicando operações e métodos do tipo.

Uma discussão presente em aulas de programação é sobre como funcionam as *strings*, de um ponto de vista de mais baixo nível (menor abstração de conceitos).
Em linguagens como C, que não possuem um tipo *string* propriamente dito, podemos manipular vetores e matrizes de caracteres para trabalhar com *strings*.
Visto que um texto não possui tamanho definido, um valor nulo, conhecido como `\0` é usado para denotar o fim de *strings* em computação.

Felizmente, Python usa alocação de memória dinâmica e automática para todos os seus tipos, portanto não temos que nos preocupar com isso.

Na seção de [Python Básico](/docs/programacao/python-basic.md), vimos o básico de strings. Nessa seção, aprenderemos sobre strings de um ponto de
vista mais avançado. 

Trabalhar com strings em Python é muito importante, portanto se atente aos detalhes nesses tópicos.

## Caracteres de Escape 

Para sinalizar quebras de linha ou tabulações, ou escapar caracteres de uma *string*, usamos caracteres de escape. Os dois mais
utilizados são:

- `\n`:

Esse caractere sinaliza uma **quebra de linha**.

- `\t`:

Esse caractere sinaliza uma **tabulação**.

Para utilizar aspas duplas numa *string* denotada por aspas duplas, faça:

```python
txt = "He said \"I love apples\"."
print(txt) 

#->> He said "I love apples".
```

## Operador `in`

Uma funcionalidade bem útil e interessante em Python é que podemos tratar *strings* como listas de caracteres, e performar
fatiamento, selecionar caracteres a partir do índice, e utilizar o operador `in`.

Caso não lembre, o operador `in` denota se um item está contido numa lista. Similarmente, se usado com *strings*, ele retorna
`True` se a *substring* ou caractere está contido, e `False` se não está.

```python
txt = "I love apples."
print("apples" in txt)
print("z" in txt)

#->> True
#->> False
```

## Índices e *Slicing*

Como mencionei, podemos tratar *strings* como listas em Python. Podemos acessar um caractere pelo seu índice, e criar *substrings* a 
partir da *string* original. Basta fazer:

```python
txt = "To be or not to be, that is the question."
print(txt[0])
print(txt[13:18])

#->> T
#->> to be
```

Para um exemplo mais complicado, vamos fatiar uma *string* e trocar a ordem das frases nela:

```python
txt = "To be or not to be, that is the question."

first_half = txt[:18] #-"To be or not to be"
second_half = txt[20:-1] #-"that is the question"

#-Aqui, tornamos maiúscula a primeira letra da segunda metade, e tornamos a primeira metade toda minúscula;
second_half = second_half.capitalize()
first_half = first_half.lower()

#-Aqui, imprimimos o resultado, concatenando espaços e pontuação.
print(second_half + ": " + first_half + ".")

#->> That is the question: to be or not to be.
```

Para mais informações sobre índices e *slicing*, leia o [artigo sobre listas](/docs/programacao/python-lists.md).

## `len()`

Também podemos usar a função `len()` para descobrir o tamanho de uma *string*, como em listas.

Veja:

```python
txt = "Elementary, my dear Watson."

txt_size = len(txt)

print(txt_size)

#->> 27
```

## Concatenação e Formatação

Podemos concatenar *strings* de forma bem simples, com o operador `+`. Basta 'somar' uma *string* com a outra, e uma nova será criada. Veja:

```python
txt_1 = "Whatever you are"
txt_2 = "be a good one."

quote = txt_1 + ", " + txt_2
print(quote)

#->> Whatever you are, be a good one.
```

Uma funcionalidade bastante útil que usaremos muito é a formatação de *strings*. Usamos para incluir valores de variáveis em
saídas, ou para criar *strings* com esses valores. Pode ser feita de algumas formas:

```python
name = "Albert Einstein"
age = 76
quote = "Life is like riding a bicycle, to keep your balance, you must keep moving"

#-Pode ser feito dessa forma:
print("{name} said the quote: {quote}. {name} passed away at the age of {age_of_death}."
      .format(name=name, quote=quote, age_of_death=age))

#-Ou dessa:
print(f"Quoting {name}: {quote}. {name} passed away at the age of {age}.")

#-Ou dessa:
print("{} said the quote: {}. {} passed away at the age of {}."
      .format(name, quote, name, age))

#->> Albert Einstein said the quote: Life is like riding a bicycle, to keep your balance, you must keep moving. Albert Einstein passed away at the age of 76.
#->> Quoting Albert Einstein: Life is like riding a bicycle, to keep your balance, you must keep moving. Albert Einstein passed away at the age of 76.
#->> Albert Einstein said the quote: Life is like riding a bicycle, to keep your balance, you must keep moving. Albert Einstein passed away at the age of 76.
```

:::info Método `format()` x `f` *string*
A diferença é simples: o método `format()` exige que as referências dentro dos colchetes sejam especificadas.
Isso significa que você pode usar nomes diferentes dos nomes das variáveis, e especificar depois qual referência é qual variável. 

Pode-se fazer `format()` dos dois jeitos apresentados, mas é notável que o primeiro é mais preferível, pois o segundo jeito
abre mais chance para erros, e é o menos legível dos 3 métodos apresentados.

Já a *fstring* tem que conter o nome das variáveis no colchete, se não um erro será lançado.

Nós vamos utilizar mais o segundo método, visto que as variáveis têm que ter nomes significativos (o problema com esse método seria um problema com a legibilidade dos nomes das variáveis), e o método tem uma aparência mais limpa.
:::

### Métodos de *Strings*

Assim como qualquer grande tipo de Python, *strings* possuem diversos métodos que nos possibilitam trabalhar melhor com elas. 

### `count()`

Podendo também ser usado com listas, o método `count()` toma 1 argumento, que é o caractere ou *substring* a ser contado na *string*, e retorna
o número de vezes que o argumento especificado aparece. Veja;

```python
txt = "Could you buy some apples? I want to make applepie."

print(txt.count("apples"))
print(txt.count("apple"))

#->> 1
#->> 2
```

### `capitalize()`, `title()`

O método `capitalize()` não toma argumentos, retorna a *string* com a primeira letra maiúscula, e o resto minúscula. Similarmente, o método `title()` não toma argumentos,
mas torna a *string* um título, ou seja, todos os primeiros caracteres são tornados maiúsculos. Veja:

```python
quote = "the best way to find out if you can trust somebody is to trust them."

print(quote.capitalize())

print(quote.title())

#->> The best way to find out if you can trust somebody is to trust them.
#->> The Best Way To Find Out If You Can Trust Somebody Is To Trust Them.
```

### `upper()`

O método `upper()` não toma argumentos, e retorna a *string* completamente em letras maiúsculas.

```python
quote = "the best way to find out if you can trust somebody is to trust them."

quote = quote.upper()

print(quote)

#->> THE BEST WAY TO FIND OUT IF YOU CAN TRUST SOMEBODY IS TO TRUST THEM.
```

### `lower()`

O método `lower()` não toma argumentos, e retorna a *string* completamente em letras minúsculas. Veja:

```python
quote = "The Best Way To Find Out If You Can Trust Somebody Is To Trust Them."

quote = quote.lower()

print(quote)

#->> the best way to find out if you can trust somebody is to trust them.
```

### `casefold()`

O método `casefold()` é similar ao método `lower()`: transforma toda a *string* em letras minúsculas: 

A diferença é que o `casefold()` é mais robusto em comparações de strings, garantindo que diferenças em caracteres acentuados ou especiais não afetem a comparação, tornando-o mais seguro para uso em contextos multilíngues ou em situações que requerem comparações insensíveis a maiúsculas e minúsculas precisas. 

Porém, ele é menos efetivo em rapidez e desempenho.

```python
quote = "The Best Way To Find Out If You Can Trust Somebody Is To Trust Them."

quote = quote.casefold()

print(quote)

#->> the best way to find out if you can trust somebody is to trust them.
```

### `find()`, `rfind()`

Esses métodos tomam até 3 argumentos: o primeiro é um caractere ou *substring* para procurar, o segundo é um inteiro que denota a restrição do início, e um inteiro que denota a restrição do final. Ambos os últimos argumentos são opcionais. O método `find()` procura o primeiro argumento na *string* e retorna o **primeiro** índice no qual ele foi encontrado, e o método `rfind()` retorna o **último** índice onde foi encontrado. Veja:

```python
txt = "I made wasabi yesterday, it was delicious!"

char_index = txt.find("w")

#-Aqui, começamos a partir do índice 13 até o fim, para que o método nao encontre o 'was' de 'wasabi'.
was_index = txt.find("was", 13)

#-Alternativamente, podemos fazer com o método 'rfind()'
was_index_1 = txt.rfind("was")

print(char_index)
print(was_index)
print(was_index_1)

#->> 7
#->> 28
#->> 28
```

### `isdigit()`, `isdecimal()`

Esses métodos retornam `True` se todos os caracteres forem dígitos. A diferença é que o `isdigit()` também funciona com expoentes, e o `isdecimal()` só funciona com dígitos decimais.
Não tomam argumentos. Veja:

```python
#-Neste exemplo, trabalhamos com CPF como uma string. 
#-É uma decisão mais precavida, visto que strings são imutáveis.
cpf = "12365478910"

print(cpf.isdecimal())

#->> True
```

### `islower()`, `isupper()`

O método `islower()` retorna `True` se todos os caracteres forem minúsculos, e `False` em outro caso. Já o método `isupper()` retorna `True` se todos forem maiúsculos,
e `False` em outros casos. Ambos não tomam argumentos. Veja:

```python
upper_txt = "I WILL SURVIVE"

lwr_txt = "i will survive"

print(upper_txt.isupper())
print(upper_txt.islower())

print(lwr_txt.isupper())
print(lwr_txt.islower())

#->> True
#->> False
#->> False
#->> True
```

### `isspace()`

O método `isspace()` não toma argumentos e retorna `True` se os caracteres da *string* forem *whitespace*. Veja: 

```python
white_spc = "        \n"

print(white_spc.isspace())

#->> True
```

### `replace()`

O método `replace()` toma 3 argumentos: o 1° é o valor a ser procurado e substituído (obrigatório), o 2° é o valor para substituir (obrigatório), e o 3° é o n° de ocorrências
dde substituição (opcional, *Default* é todas as ocorrências). Veja:

```python
txt = "I have two sons, two daughters and two dogs."

print(txt.replace("two", "three"))

print(txt.replace("two", "three", 2))

#->> I have three sons, three daughters and three dogs.
#->> I have three sons, three daughters and two dogs.
```

### `strip()`

O método `strip()` remove dos lados extremos da *string* qualquer valor especificado como argumento. O *default* é *whitespace*. 

```python
spaced_str = "       Murder, she wrote.      "
dirty_str = ";;;;;Murder, she wrote.;;;;;"

clean_str = spaced_str.strip()

cleaner_str = dirty_str.strip(";")

print(clean_str)
print(cleaner_str)

#->> Murder, she wrote.
#->> Murder, she wrote.
```

### `split()`

O método `split()` separa uma *string* num identificador especificado como argumento, e retorna uma lista. O *default* é qualquer *whitespace*.

```python
txt = "I;love;dogs;and;cats"
words = txt.split(";")

print(words)

#->> ['I', 'love', 'dogs', 'and', 'cats']
```

### `join()`

O método `join()` toma como argumento um iterável (lista, tupla, etc.) e junta todos os itens numa *string*. Como isso é um método de *string*, a *string* separadora deve ser especificada.
Veja:

```python
names = ["John", "Karl", "Jane", "Bob", "Mary"]

names_str = ", ".join(names)

print(names_str)

#->> John, Karl, Jane, Bob, Mary
```

Existem outros métodos de *string*. Para mais informações, [acesse a documentação](https://docs.python.org/3/library/stdtypes.html#string-methods).

## Conclusão 🎑

Bom, essa seção termina aqui. Caso tenha alguma dúvida que não conseguiu encontrar online, envie para raphaelsoaresbrasil@gmail.com.
Obrigado pela atenção, e bons estudos.