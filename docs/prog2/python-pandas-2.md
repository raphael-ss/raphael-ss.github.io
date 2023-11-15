---
sidebar_position: 2
slug: /docs/programacao-2/python-pandas-2
title: "Python - Pandas 2"
description: "Continuação de Pandas"
---

# Python - Pandas 🐼

Caso não tenha visto, foi postado um artigo de [introdução à Pandas](/docs/programacao-2/python-pandas.md), que contém um overview da biblioteca, razôes fortíssimas para usá-la, e manipulação de *Series*, um dos objetos centrais da biblioteca. 

Aqui, cobrirei a manipulação de *DataFrames*, assim como diversos métodos bastante úteis que facilitam o trabalho na rotina. 

## Manipulação de *DataFrames*

Dado o formato dtabular dos dados num DF, queremos ser capazes de manupular as colunas e as linhas para obter as informações necessárias, assim como para exibir os dados de uma forma mais clara.

### Selecionando Colunas

Podemos selecionar uma coluna de 2 formas: fazendo `df.name` ou `df['name']`. Para usar o 1°, o nome da coluna precisa ser compatível com o formato de variável que Python espera, sem espaços ou símbolos. 


```python
df = pd.DataFrame([
  ['January', 100, 100, 23, 100],
  ['February', 51, 45, 145, 45],
  ['March', 81, 96, 65, 96],
  ['April', 80, 80, 54, 180],
  ['May', 51, 54, 54, 154],
  ['June', 112, 109, 79, 129]],
  columns=['month', 'clinic_east',
           'clinic_north', 'clinic_south',
           'clinic_west']
)
clinic_north = df.clinic_north
clinic_north_and_south = df[['clinic_north', 'clinic_south']]
print(type(clinic_north))
print(type(clinic_north_and_south))

#-<class 'pandas.core.series.Series'>
#-<class 'pandas.core.frame.DataFrame'>
```

### Selecionando Linhas

Para selecionar linhas, ou registros, podemos usar o comando `iloc[]`. Observe, no contexto do exemplo anterior:

```python
#-...
march = df.iloc[2]
print(march)

'''
month           March
clinic_east        81
clinic_north       96
clinic_south       65
clinic_west        96
Name: 2, dtype: object
'''
#-Observe que, assim como selecionando colunas, o resultado também é uma Series
```

Podemos também selecionar fazendo *slicing*, assim como fazemos com listas, como `iloc[a:b]` (`b` não inclusivo):

```python
#-...
april_may_june = df.iloc[3:6]
print(april_may_june)

'''
   month  clinic_east  clinic_north  clinic_south  clinic_west
3  April           80            80            54          180
4    May           51            54            54          154
5   June          112           109            79          129
'''
#-Perceba que o resultado é um DF
```

Podemos selecionar colunas usando **lógica**. Isto é, selecionar conjuntos menores de dados que obedecem à uma condição pré-estabelecida. Esse tipo de seleção segue o padrão `df[df.column_name == column_value]`.

```python
#-...
january = df[df.month == 'January']
print(january)

'''
     month  clinic_east  clinic_north  clinic_south  clinic_west
0  January          100           100            23          100
'''
```

Para expressões lógicas mais complexas, podemos usar operadores lógicos:

1. `&`: `and`

2. `|`: `or`

Observe um exemplo:

```python
#-...
march_april = df[(df.month == 'March') | (df.month == 'April')]
print(march_april)

'''
   month  clinic_east  clinic_north  clinic_south  clinic_west
2  March           81            96            65           96
3  April           80            80            54          180
'''
```

Pode ser usado também o método `isin()` para selecionar os valores presentes em uma lista de valores possíveis. Observe:

```python
#-...
january_february_march = df[df.month.isin(['January', 'February', 'March','Bob'])]
print(january_february_march)

'''
      month  clinic_east  clinic_north  clinic_south  clinic_west
0   January          100           100            23          100
1  February           51            45           145           45
2     March           81            96            65           96
'''
#-Perceba que não existe o valor 'Bob' na coluna 'month', e ele simplesmente não é retornado;
```

### Fixando Índices

Quando selecionamos um conjunto de registros de um DF, eles mantém seu índices originais, o que dificulta o trabalho com o novo conjunto, assim como a utilização de `iloc`. 

Para isso, podemos 'setar' os índices novamente, a partir de 0, usando o método `reset_index()`, com os argumentos `drop` e `inplace`, que denotam se a nova coluna criada (index) deve ser removida e se a modificação deve ser feita no DF correspondente ou retornada num DF novo:

```python
#-...
df2 = df.loc[[1, 3, 5]]
print(df2)
df2.reset_index(inplace=True, drop=True)
print(df2)

'''
ANTES:
      month  clinic_east  clinic_north  clinic_south  clinic_west
1  February           51            45           145           45
3     April           80            80            54          180
5      June          112           109            79          129

DEPOIS:
      month  clinic_east  clinic_north  clinic_south  clinic_west
0  February           51            45           145           45
1     April           80            80            54          180
2      June          112           109            79          129
'''
```

### Modificando *DataFrames*

Podemos adicionar uma coluna para referência futura, facilitar cálculos ou para exportar os cálculos já feitos. Para isso, podemos selecionar uma coluna inexistente e passar uma lista ou iterável como valor:

```python
df = pd.DataFrame([
  [1, '3 inch screw', 0.5, 0.75],
  [2, '2 inch nail', 0.10, 0.25],
  [3, 'hammer', 3.00, 5.50],
  [4, 'screwdriver', 2.50, 3.00]
],
  columns=['Product ID', 'Description', 'Cost to Manufacture', 'Price']
)

df['Sold in Bulk?'] = ['Yes', 'Yes', 'No', 'No']
print(df)

'''
   Product ID   Description  Cost to Manufacture  Price Sold in Bulk?
0           1  3 inch screw                  0.5   0.75           Yes
1           2   2 inch nail                  0.1   0.25           Yes
2           3        hammer                  3.0   5.50            No
3           4   screwdriver                  2.5   3.00            No
'''
```

Podemos passar somente 1 valor também, o que define que esse valor dessa coluna seja o mesmo para qualquer linha:

```python
#-...
df['Is taxed?'] = 'Yes'
print(df)

'''
   Product ID   Description  Cost to Manufacture  Price Is taxed?
0           1  3 inch screw                  0.5   0.75       Yes
1           2   2 inch nail                  0.1   0.25       Yes
2           3        hammer                  3.0   5.50       Yes
3           4   screwdriver                  2.5   3.00       Yes
'''
```

Outra forma de adicionar colunas, uma forma particularmente útil, é fazendo operações com colunas anteriores. Veja uma forma de fazer isso:

```python
#-...
#-Aqui, para todos os valores do DF, subtraímos o custo do preço, para calcular a margem
df['Margin'] = df.Price - df['Cost to Manufacture']
print(df)

'''
   Product ID   Description  Cost to Manufacture  Price  Margin
0           1  3 inch screw                  0.5   0.75    0.25
1           2   2 inch nail                  0.1   0.25    0.15
2           3        hammer                  3.0   5.50    2.50
3           4   screwdriver                  2.5   3.00    0.50
'''
```

Frequentemente, as novas colunas que queremos criar demandam operações um pouco mais complexas do que multiplicação, subtração, soma, e etc. Por conta disso, podemos usar o método `apply()`, para aplicar uma função a todos os valores de uma coluna:

```python
df = pd.DataFrame([
  ['JOHN SMITH', 'john.smith@gmail.com'],
  ['Jane Doe', 'jdoe@yahoo.com'],
  ['joe schmo', 'joeschmo@hotmail.com']
],
columns=['Name', 'Email'])

df['Lowercase Name'] = df.Name.apply(str.lower)
print(df)

'''
         Name                 Email Lowercase Name
0  JOHN SMITH  john.smith@gmail.com     john smith
1    Jane Doe        jdoe@yahoo.com       jane doe
2   joe schmo  joeschmo@hotmail.com      joe schmo
'''
```

Podemos também aplicar uma função *lambda* à uma coluna com `apply()`. Visite o artigo anterior de Pandas para uma [revisão de funções *lambda*](/docs/programacao-2/python-pandas.md). Veja um exemplo:


```python
#-...
df['Last Name'] = df['Lowercase Name'].apply(lambda name: name.split()[-1])
print(df)

'''
         Name                 Email Lowercase Name Last Name
0  JOHN SMITH  john.smith@gmail.com     john smith     smith
1    Jane Doe        jdoe@yahoo.com       jane doe       doe
2   joe schmo  joeschmo@hotmail.com      joe schmo     schmo
'''
```

Podemos também aplicar uma função *lambda* às linhas, ou registros, para criar uma nova coluna:

```python
df = pd.DataFrame([
    [10310,"Lauren Durham",19,43],
    [18656,"Grace Sellers",17,40],
    [61254,"Shirley Rasmussen",16,30],
    [16886,"Brian Rojas",18,47],
    [89010,"Samantha Mosley",11,38],
    [87246,"Louis Guzman",14,39],
    [20578,"Denise Mcclure",15,40],
], columns=["id","name","hourly_wage","hours_worked"])

total_earned = lambda row: (row['hourly_wage']*row['hours_worked']) if row['hours_worked'] <= 40 else (row['hourly_wage'] * 40) + (row['hours_worked'] - 40) * (row['hourly_wage'] * 1.50)

#-Especificando o argumento 'axis' como 1, aplicamos às linhas
df['total_earned'] = df.apply(total_earned, axis=1)
print(df)

'''
      id               name  hourly_wage  hours_worked  total_earned
0  10310      Lauren Durham           19            43         845.5
1  18656      Grace Sellers           17            40         680.0
2  61254  Shirley Rasmussen           16            30         480.0
3  16886        Brian Rojas           18            47         909.0
4  89010    Samantha Mosley           11            38         418.0
5  87246       Louis Guzman           14            39         546.0
6  20578     Denise Mcclure           15            40         600.0
'''
```

### Renomeando Colunas

Para renomear as colunas de DF's, pode-se redefinir o atributo `columns` diretamente:

```python
df = pd.DataFrame({
    'name': ['John', 'Jane', 'Sue', 'Fred'],
    'age': [23, 29, 21, 18]
})
df.columns = ['First Name', 'Age']
print(df)

'''
  First Name  Age
0       John   23
1       Jane   29
2        Sue   21
3       Fred   18
'''
```

Para evitar erros ao renomear as colunas, pode-se também usar o método `rename()`. Para isso, deve ser passado um dicionário com os pares `'old_column_name': 'new_column_name'`. Veja um exemplo:

```python
#-...
df.rename(columns={
    'name': 'First Name',
    'age': 'Age'},
    inplace=True)
print(df)

'''
  First Name  Age
0       John   23
1       Jane   29
2        Sue   21
3       Fred   18
'''
```

Desse modo, é possível renomear somente uma coluna específica, e ser mais especifico sobre quais quer renomear, o que evita erros que podem ser passados despercebidos.

## Agregando Valores

Uma estatística agregada é uma maneira de criar 1 número que descreve um grupo de outros. Alguns jeitos comuns de trabalhar com essas estatísticas é calcular a **média**, **mediana**, **desvio padrâo**, entre outros. Podemos captar esses valores com métodos como:

1. `mean()`: Média de todos os valores
2. `std()`: desvio padrâo
3. `median()`: mediana
4. `max()`: valor máximo na coluna
5. `min()`: valor mmínimo na coluna
6. `count()`: número de valores numa coluna
7. `nunique()`: número de valores únicos numa coluna
8. `unique()`: lista de valores únicos

Alguns desses métodos já foram introduzidos no artigo anteriror. Porém, a diferença aqui é: às vezes, podemos querer calcular esses valores em um conjunto seleto de dados. 

Para isso, podemos utilizar o método `groupby()`.

Utilizando esse método, a regra geral da sintaxe se parece algo como: `df.groupby('column1').column2.measurement()`, onde `column1` é a coluna pela qual queremos agrupar, `column2` é a coluna a qual queremos performar os a medição, e `measurement` é a medição que queremos aplicar. Veja um exemplo:

```python
orders = pd.DataFrame([
    [97916,"Douglas","Perez","DouglasPerez28@gmail.com","stilettos","fabric,brown",190],
    [67691,"Tiffany","O'neill","TiffanyO'neill51@gmail.com","wedges","leather","navy",294],
    [72818,"Susan","Rivas","Susan.Rivas@gmail.com","sandals","faux-leather","white",182],
    [28080,"Angela","Hopper","AngelaHopper62@outlook.com","stilettos","leather","red",96],
    [89958,"Thomas","Benjamin","TBenjamin1981@gmail.com","sandals","faux-leather","navy",157],
    [11853,"Jonathan","Park","JP1285@gmail.com","wedges","fabric","white",98],]
,columns=["id","first_name","last_name","email","shoe_type","shoe_material","shoe_color","price"])

pricey_shoes = orders.groupby('shoe_type').price.max()
print(pricey_shoes)

'''
shoe_type
sandals      182.0
stilettos     96.0
wedges       294.0
Name: price, dtype: float64
'''
```

No exemplo acima, obtivemos o valor máximo de preço para cada tipo de sapato. Uma boa prática é usar o método `reset_index` para transformar a *Series* retornada num DF indexado. 

Também e possível usar o `groupby()` com mais de uma coluna como argumento.

## Métodos de *DataFrames*