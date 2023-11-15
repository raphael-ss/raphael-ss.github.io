---
sidebar_position: 1
slug: /docs/programacao-2/python-pandas
title: "Python - Pandas"
description: "Introdução À Pandas"
---

# Python - Pandas 🐼

Após os conteúdos até OOP, somos capazes de adentrar de fato na programação voltada para **análise de dados**.
A biblioteca *pandas* é uma ferramenta essencial para analistas e cientistas de dados. O importante sobre a biblioteca Pandas é um objeto chamado ***DataFrame***.

Você pode pensar em um *DataFrame* como um tipo de tabela, similar a uma planilha do Excel, mas muito mais poderoso. As linhas têm índices, que são um inteiro, e as colunas têm nome, que é uma string. Podemos performar operações em ambos separadamente. 

A biblioteca pandas tem diversas funções úteis para trabalhar com dados faltando, fazer operações com colunas e linhas, e transformar dados. Além disso, várias funções de SQL são homólogas à funções de pandas. 

Só é importante saber que, quanto mais você souber sobre Pandas, 
mais fácil e efetivo será seu trabalho como cientista de dados.

## *Series* e *Dataframes*

### *Series*

Uma *Series* é uma estrutura de dados unidimensional no Pandas. Ela é semelhante a uma matriz ou uma coluna em uma planilha. Cada elemento em uma *Series* é rotulado com um índice, que pode ser um número ou um rótulo descritivo.

Uma *Series* do Pandas é muito semelhante a um array unidimensional do NumPy, mas possui funcionalidades adicionais que permitem que os valores na *Series* sejam indexados usando rótulos. Um array do NumPy não tem essa flexibilidade. Esse sistema de rótulos é útil quando você está armazenando pedaços de dados que têm outros dados associados a eles. 

Digamos que você queira armazenar as idades de estudantes em um curso online para, eventualmente, calcular a idade média dos alunos. Se armazenadas em um array do NumPy, você só poderia acessar essas idades usando os índices internos do ndarray 0,1,2... Com um objeto *Series*, os índices dos valores são definidos como 0,1,2... por padrão, mas você pode personalizar os índices para serem outros valores, como nomes de estudantes, para que uma idade possa ser acessada usando um nome.

Uma *Series* armazena itens de um único tipo de dado e pode ser criada enviando um objeto iterável ou valor escalar, seja uma lista, um dicionário ou um ndarray como parâmetro para o construtor de Series do Pandas. Se um dicionário for fornecido, as chaves podem ser usadas como os índices.

Veja um exemplo:

```python
import numpy as np
import pandas as pd

ages = np.array([13,25,19])
series1 = pd.Series(ages)
print(series1)
'''
0  |  13
1  |  25
2  |  19
dtype: int64
'''
```

Para customizar o índice de uma *Series*, use o argumento `index` no construtor:

```python
ages = np.array([13,25,19])
series1 = pd.Series(ages,index=['Emma', 'Swetha', 'Serajh'])
print(series1)
'''
Emma    |  13
Swetha  |  25
Serajh  |  19
dtype: int64
'''
```

### *DataFrame*

Outro tipo importante de objeto na biblioteca Pandas é o DataFrame. Este objeto é semelhante a uma matriz, pois consiste em linhas e colunas. Tanto as linhas quanto as colunas podem ser indexadas com inteiros ou  strings. 

Um DataFrame pode conter muitos tipos diferentes de dados, mas dentro de uma coluna, todos os elementos devem ser do mesmo tipo de dado. 

Uma coluna de um DataFrame é essencialmente uma *Series*. Todas as colunas devem ter o mesmo número de elementos (linhas).

Existem diferentes maneiras de preencher um DataFrame, como com um arquivo CSV, uma **querie** de SQL, uma lista ou um dicionário. 

Veja um exemplo:

```python
df = pd.DataFrame([
    ['John Smith','123 Main St',34],
    ['Jane Doe', '456 Maple Ave',28],
    ['Joe Schmo', '789 Broadway',51]
    ],
    columns=['name','address','age'])

'''
          name      |   address     |   age
0    | John Smith   | 123 Main St   |   34
1    | Jane Doe     | 456 Maple Ave |   28
2    | Joe Schmo    | 789 Broadway  |   51
'''
```

Os índices padrão das linhas são 0,1,2..., mas esses podem ser alterados. Por exemplo, eles podem ser definidos para serem os elementos de uma das colunas do DataFrame. Veja:

```python
df.set_index('name')

'''
   name      |   address     |  age
John Smith   | 123 Main St   |   34
Jane Doe     | 456 Maple Ave |   28
Joe Schmo    | 789 Broadway  |   51
'''
```

Em resumo, os DataFrames são úteis porque tornam muito mais fácil selecionar, manipular e resumir dados. Seu formato tabular (uma tabela com linhas e colunas) também torna mais fácil a rotulagem, facilita a leitura e torna mais fácil de importar e exportar dados de e para uma planilha. Compreender o poder dessas novas estruturas de dados é a chave para abrir muitas novas oportunidades na manipulação, exploração e análise de dados.

## Funções Lambda

Uma função *lambda* é essencialmente uma função de uma linha. Em alguns casos, declarar uma função formalmente não será necessário, como nos casos que usaremos uma função só uma vez.

Para isso, as funções *lambda* são eficientes nesses casos, tanto em termos de eficiência de execução quanto em tempo de *construção de software*.
Observe a sintaxe:

```python
function_name = lambda parameter: expression
```

No exemplo acima, `lambda` funciona como o `def` da declaração formal. 

Veja esse exemplo:

```python
add_two = lambda some_input: some_input + 2

print(add_two(10))
print(add_two(-2))

#->> 12
#->> 0
```

Para retornar diferentes saídas de acordo com diferentes entradas, podemos usar *if statements* nas funções *lambda*.

Veja um exemplo:

```python
check_if_A_grade = lambda grade: 'Got an A!' if grade >= 90 else 'Did not get an A...'

print(check_if_A_grade(85))
print(check_if_A_grade(95))
print(check_if_A_grade(68))

#->> Did not get an A...
#->> Got an A!
#->> Did not get an A...
```

O código significa: se a declaração (`grade >= 90`) for verdadeira, retorne `'Got an A!'`, e retorne `'Did not get an A...'` se não for.

:::note Funções Lambda
As funções *lambda* só funcionam se você estiver as fazendo em uma linha. Se precisar de mais, faça uma declaração normal com `def`.
:::


## Trabalhando com Pandas

Daqui pra frente, vamos utilizar bastante os DataFrames da biblioteca, portanto é essencial entender o que são e como funcionam, assim como devemos entender 
como manipulá-los. Recomend fortemente que também leia uma introdução à Pandas na página da documentação oficial, um guia chamado [10 minutes to Pandas](https://pandas.pydata.org/docs/user_guide/10min.html).

## Criando uma *Series*

Podemos criar uma *Series* usando a função construtora `pd.Series()`, e podemos passar como argumento iteráveis e tipos escalares. Alguns exemplos são:

- **Listas**: passando listas como argumentos, os índices serão automaticamente definidos como uma sequência a partir de 0 (0, 1, 2, 3...);

- __*nd-arrays*__: passando *ndarrays* como argumentos, os índices serão automaticamente definidos como uma sequência a partir de 0 (0, 1, 2, 3...), assim como com uma lista;

- **Dicionários**: passando dicionários, os valores serão a coluna, e os índices serão as chaves dos respectivos valores;

- **range**: passando um objeto *range*, acontecerá o mesmo que com *ndarrays* ou listas.

Veja alguns exemplos práticos:

```python
import pandas as pd
import numpy as np

#-Com listas:
list_srs = pd.Series([1, 2, 3, 4, 5])

#-Com ndarrays:
array_srs = pd.Series(np.array([1, 2, 3, 4, 5]))

#-Com dicts:
dict_srs = pd.Series({'A':1, 'B':2, 'C':3, 'D':4, 'E':5})

#-Com range
range_srs = pd.Series(range(10, 5, -1))

print(f"{list_srs}\n{array_srs}\n{dict_srs}\n{range_srs}")
'''
0    1
1    2
2    3
3    4
4    5
dtype: int64
0    1
1    2
2    3
3    4
4    5
dtype: int64
A    1
B    2
C    3
D    4
E    5
dtype: int64
0    10
1     9
2     8
3     7
4     6
dtype: int64
'''
```

## Atributos da *Series*

Listaremos alguns atributos que podem ser úteis ao trabalhar com esse objeto. 

### `values`

Esse atributo retorna os valores da *Series* na forma de uma *ndarray*, o que pode ser bastante útil para realizar cálculos e operações nos dados.

```python
import pandas as pd
import numpy as np

dict_srs = pd.Series({'A':1, 'B':2, 'C':3, 'D':4, 'E':5})

dict_srs.values #-array([1, 2, 3, 4, 5])

#-Perceba que os índices são perdidos nessa operação;
```

### `index`

Esse atributo contém os índices ou rótulos associados aos valores da *Series*. Pode ser usado para identificar e selecionar um valor com base nesse índice.

```python
import pandas as pd
import numpy as np

dict_srs = pd.Series({'A':1, 'B':2, 'C':3, 'D':4, 'E':5})

dict_srs.index #-Index(['A', 'B', 'C', 'D', 'E'], dtype='object')
```

### `name`

É possível atribuir um nome a uma *Series* usando esse atributo, o que pode ser útil quando se está trabalhando com diversos objetos e manipulando dados de diferentes colunas. 

```python
import pandas as pd
import numpy as np

dict_srs = pd.Series({'A':1, 'B':2, 'C':3, 'D':4, 'E':5})

dict_srs.name = "Numbers"
dict_srs.name #-'Numbers'
```

### `dtype`

Podemos verificar o tipo de dado armazenado na *Series* acessando esse atributo.

```python
import pandas as pd
import numpy as np

dict_srs = pd.Series({'A':1, 'B':2, 'C':3, 'D':4, 'E':5})

dict_srs.dtype #-dtype('int64')
```

### `size`

Esse atributo retorna o n° de elementos no objeto *Series*.

```python
import pandas as pd
import numpy as np

dict_srs = pd.Series({'A':1, 'B':2, 'C':3, 'D':4, 'E':5})

dict_srs.size #-5
```

### `shape`

O atributo `shape`, embora mais usado com um DataFrame dado seu caráter multidimensional, pode ser usado com uma *Series*. Retorna uma tupla representando a forma da estrutura, ou seja, `(número de linhas,)`.

```python
import pandas as pd
import numpy as np

dict_srs = pd.Series({'A':1, 'B':2, 'C':3, 'D':4, 'E':5})

dict_srs.shape #-(5,)
```

## Métodos de *Series*

Existem diversos métodos úteis que podemos aplicar em objetos *Series* para facilitar nossa rotina e análises. Perceba que existem dezenas (talvez centenas) de métodos, e só cobrirei os mais usados. Para mais informações sobre *Series*, [visite a documentação](https://pandas.pydata.org/docs/reference/api/pandas.Series.html) .

### `head()` e `tail()`

São métodos usados para mostrar um número de registros numa *Series*. Ambos os métodos tomam somente 1 argumento, um inteiro especificando o número de registros a serem visualizados.

O método `head(n)` mostra os `n` registros a partir do 1° registro, ou seja, de cima da coluna, e o método `tail(n)` mostra os `n` registros a partir do último registro, ou seja, de baixo da coluna. 

```python
import pandas as pd
import numpy as np

srs = pd.Series([4, 1, 94, 37, 55, 21, 2, 5, 10, 55, 11, 44, 25, 21, 57, 32, 53])

print(srs.head(5))
print(srs.tail(5))
'''
0     4
1     1
2    94
3    37
4    55
dtype: int64
12    25
13    21
14    57
15    32
16    53
dtype: int64
'''
```

### `unique()` e `nunique()`

O método `unique()` retorna como uma *ndarray* os registros da *Series*, porém como valores únicos, isto é, só aparecendo uma vez. Se a coluna possui valores qualitativos ou categóricos, é útil utilizar esse método para observar quais são os valores na coluna. 

Já o método `nunique()` retorna o número de valores únicos na *Series*. 


```python
import pandas as pd
import numpy as np

srs = pd.Series([
    'A+', 'B-', 'O+',
    'O+', 'A-', 'A+', 
    'A-', 'AB+', 'B+', 
    'A+', 'O-', 'B-', 
    'O+', 'B+', 'AB-'])

print(srs.unique())
print(srs.nunique()) 
#-array(['A+', 'B-', 'O+', 'A-', 'AB+', 'B+', 'O-', 'AB-'], dtype=object)
#-8
```

### `count()`

Esse método retorna o número de valores não nulos da *Series*. 

```python
import pandas as pd
import numpy as np

srs = pd.Series([
    'A+', 'B-', 'O+',
    'O+', 'A-', 'A+', 
    'A-', 'AB+', 'B+', 
    'A+', 'O-', 'B-', 
    'O+', 'B+', 'AB-'])

srs.count() #-15
```

### `describe()`

O método `describe()` é bastante útil quando estamos trabalhando com estatística descritiva num conjunto desconhecido de dados. Esse método fornece estatísticas resumidas da coluna, e age de modo diferente dependendo do tipo de dado.

Com dados qualitativos ou categóricos, o método descreve a contagem de valores não nulos, o n° de valores únicos, a moda, e a frequência dela. 

Com dados quantitativos ou numéricos, o método descreve a contagem de valores não nulos, a média simples, o desvio padrão, o valor mínimo, os quartis, e o valor máximo. 

Veja:

```python
import pandas as pd
import numpy as np

categorical_srs = pd.Series([
    'A+', 'B-', 'O+',
    'O+', 'A-', 'A+', 
    'A-', 'AB+', 'B+', 
    'A+', 'O-', 'B-', 
    'O+', 'B+', 'AB-'])

numerical_srs = pd.Series(
    [4, 19, 94, 
     37, 55, 21, 
     21, 43, 10, 
     56, 11, 74, 
     25, 21, 57, 
     32, 53, 99])

print(f'{categorical_srs.describe()}\n')
print(f'{numerical_srs.describe()}')

'''
count     15
unique     8
top       A+
freq       3
dtype: object

count    18.000000
mean     40.666667
std      28.025199
min       4.000000
25%      21.000000
50%      34.500000
75%      55.750000
max      99.000000
dtype: float64
'''
```

### `isna()` e `notna()`

Esses métodos retornam uma *Series* de valores booleanos, substituindo os valores nulos por `True` e os não nulos por `False`, e substituindo os valores nulos por `False` e os não nulos por `True`, respectivamente.

```python
import pandas as pd
import numpy as np

srs = pd.Series([
    'A+', 'B-', 'O+',
    'O+', np.nan, 'A+', 
    'A-', 'AB+', 'B+', 
    'A+', 'O-', 'B-', 
    np.nan, 'B+', 'AB-'])

print(f'{srs.isna()}\n')
print(f'{srs.notna()}')
'''
0     False
1     False
2     False
3     False
4      True
5     False
6     False
7     False
8     False
9     False
10    False
11    False
12     True
13    False
14    False
dtype: bool

0      True
1      True
2      True
3      True
4     False
5      True
6      True
7      True
8      True
9      True
10     True
11     True
12    False
13     True
14     True
dtype: bool
'''
```

## Criando um *DataFrame*

Podemos criar um *DataFrame* usando a função construtora `pd.DataFrame()`, e deve ser passado como argumento uma estrutura de dados tabular, bidimensional, potencialmente heterogênea. Alguns exemplos são:

- __Listas__: dado que listas são bidimensional, contando os índices ordenados dos itens, passando uma lista como argumento, podemos transformá-la num DF. Podemos passar também uma lista de rótulos para nomear as colunas do DF. Caso esse argumento não seja passado, as colunas serâo rotuladas com índices crescentes, assim como os índices das linhas.

- __*nd-arrays*__: passando uma *ndarray* como argumento, os índices serão automaticamente definidos como uma sequência a partir de 0 (0, 1, 2, 3...), assim como com uma lista;

- **Dicionários**: passando dicionários, os valores serão a coluna, e os índices serão as chaves dos respectivos valores;

Veja alguns exemplos práticos:

```python
import numpy as np
import pandas as pd

my_list = [1,2,3,4,5,6]
my_dict = {'A':[1,2,3], 'B':[4,5,6]}
my_array = np.array([[1,2,3],
                     [4,5,6]])

print(pd.DataFrame(my_list, columns=["A"]))
print(pd.DataFrame(my_dict))
print(pd.DataFrame(my_array, columns=["A","B","C"]))

'''
Lista:
   A
0  1
1  2
2  3
3  4
4  5

Dict:
   A  B
0  1  4
1  2  5
2  3  6

Array:
   A  B  C
0  1  2  3
1  4  5  6
'''
```

## Input/Output (I/O)

Em muitos casos, os dados que queremos transformar num DF estão em outros locais, como arquivos em memória. Para isso, a biblioteca Pandas possui
diversas funçòes para entrada e saída de dados/

### `read_csv()`

Uma das funções mais úteis da biblioteca, na minha concepção, é a `read_csv()`. Essencialmente, a função lê um arquivo CSV (_Comma Separated Values_), 
e tranforma os dados lidos num DF. Como argumento, pode-se passar tanto o nome do arquivo no diretório local, ou uma URL válida para download.

```python
import pandas as pd

#-Existem vários outros argumentos, mas eles não vem o caso;
#-Nessa função, o argumento 'header' especifica a quantidade de linhas de header (labels das colunas)
#-E o 'names'especifica os rótulos, ou títulos, para as colunas
url_df = pd.read_csv('https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data', 
                header=None, names=['sepal_length', 'sepal_width', 'petal_length', 'petal_width', 'class'])

#-Nesse caso, exemplifiquei que é também possível escolher o delimitador. 
archive_df = pd.read_csv('Exemplo.csv', delimiter=';')

print(url_df.head(5))

'''
   sepal_length  sepal_width  petal_length  petal_width        class
0           5.1          3.5           1.4          0.2  Iris-setosa
1           4.9          3.0           1.4          0.2  Iris-setosa
2           4.7          3.2           1.3          0.2  Iris-setosa
3           4.6          3.1           1.5          0.2  Iris-setosa
4           5.0          3.6           1.4          0.2  Iris-setosa
'''
```

Existem diversos outros métodos para entrada e saída de dados, como `read_json()`, `df.to_csv()`, e muitos outros, mas o uso principal será
dado com leitura de CSV. Para mais informações, [visite a documentação](https://pandas.pydata.org/docs/reference/io.html).

## Funções Gerais

Algumas funções gerais são bastante útes para manipular as tabelas em pandas. 

### `pd.merge()`

A função `merge()` combina 2 DF's com base numa coluna em comum, que pode ser um índice ou outro valor que ambas possuem.

```python
import pandas as pd

df1 = pd.read_csv('dados_1.csv')

df2 = pd.read_csv('dados_2.csv')

merged_df = pd.merge(df1, df2, on='coluna_comum')
```

### `pd.concat()`

Essa função concatena dois DF's, nas linhas ou nas colunas. Retorna o DataFrame concatenado, e toma alguns argumentos, como: `axis`, que pode assumir o valor de `0` ou `1`, e denota
se a concatenação deve ser ao longo das linhas ou colunas, respectivamente. `ignore_index` com o valor de `True` faz com que os índices sejam reiniciados, e `False` mantém os índices originais.
E, por fim, a lista de DF's para concatenar. Note que, podem ser passados mais de 2 DF's. 

```python
import pandas as pd

df1 = pd.DataFrame({
    'A': ['A0', 'A1'],
    'B': ['B0', 'B1'],
    'C': ['C0', 'C1']})
df2 = pd.DataFrame({
    'A': ['A2', 'A3'],
    'B': ['B2', 'B3']})

result = pd.concat([df1, df2], axis=0, ignore_index=True)

'''
 	A 	B 	C
0 	A0 	B0 	C0
1 	A1 	B1 	C1
2 	A2 	B2 	NaN
3 	A3 	B3 	NaN
'''
```

### `pd.pivot_table()`

Essa função permite reorganizar o DataFrame, agregar os valores, lidar com duplicatas e também pode lidar com vários valores para a mesma combinação de índice e coluna. 


```python
import pandas as pd

df = pd.DataFrame({
    'Date': ['2023-01-01', '2023-01-01', '2023-01-02', '2023-01-02'],
    'City': ['A', 'B', 'A', 'B'],
    'Temperature': [25, 30, 22, 28],
    'Humidity': [40, 50, 35, 45]
})

pivot_table_df = pd.pivot_table(df, index='Date', columns='City', values=['Temperature', 'Humidity'], aggfunc='mean')

'''
 	       Humidity Temperature
City 	    A 	B 	A 	B
Date 				
2023-01-01 	40 	50 	25 	30
2023-01-02 	35 	45 	22 	28
'''
```

## Atributos de *DataFrames*

Aqui seguem alguns atributos que podem ser úteis ao trabalhar com DataFrames. 

### `values`

Esse atributo retorna os valores do DF na forma de uma *ndarray*, assim como nas *Series*.

```python
df = pd.DataFrame({
    'A': ['A0', 'A1'],
    'B': ['B0', 'B1'],
    'C': ['C0', 'C1']})

print(df.values)

'''
[['A0' 'B0' 'C0']
 ['A1' 'B1' 'C1']]
'''

#-Perceba que é retornada uma matriz, com 1 array por linha;
```

### `index`

Esse atributo contém os índices associados à cada linha do DF. Perceba que, no exemplo, temos um índice comum, denotado por `RangeIndex`.

```python
df = pd.DataFrame({
    'A': ['A0', 'A1'],
    'B': ['B0', 'B1'],
    'C': ['C0', 'C1']})

print(df.index)

#-RangeIndex(start=0, stop=2, step=1)
```

### `columns`

Retorna os nomes das colunas do DF.

```python
df = pd.DataFrame({
    'A': ['A0', 'A1'],
    'B': ['B0', 'B1'],
    'C': ['C0', 'C1']})

print(df.columns)


#-Index(['A', 'B', 'C'], dtype='object')
```

### `dtypes`

Podemos verificar os tipos de dados armazenado no DF acessando esse atributo, que retorna uma *Series* com os nomes das colunas e seus tipos.

```python
df = pd.DataFrame({
    'A': ['A0', 'A1'],
    'B': ['B0', 'B1'],
    'C': ['C0', 'C1']})

print(df.dtypes)

'''
A    object
B    object
C    object
dtype: object
'''
```

### `size`

Esse atributo retorna o n° de elementos no DF.

```python
df = pd.DataFrame({
    'A': ['A0', 'A1', 'A2'],
    'B': ['B0', 'B1', 'B2'],
    'C': ['C0', 'C1', 'C2'],
    'D': ['D0', 'D1', 'D2']})

print(df.size)

#-12
```

### `shape`

O atributo `shape` retorna uma tupla representando a forma da estrutura, ou seja, `(número de linhas, número de colunas)`.

```python
df = pd.DataFrame({
    'A': ['A0', 'A1'],
    'B': ['B0', 'B1'],
    'C': ['C0', 'C1']})

print(df.shape)

#-(2, 3)
```

Dado que esse artigo já está demasiado longo, irei listar os métodos e as manipulações de DataFrames num próximo artigo.

## Conclusão 🎑

Bom, essa seção termina aqui. Caso tenha alguma dúvida que não conseguiu encontrar online, envie para raphaelsoaresbrasil@gmail.com.
Obrigado pela atenção, e bons estudos.