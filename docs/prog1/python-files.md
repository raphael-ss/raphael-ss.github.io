---
sidebar_position: 8
slug: /docs/programacao/python-files
title: "Python - Manipulação de Arquivos"
description: "Manipulação de Arquivos em Python."
---

# Python - Manipulação de Arquivos

Sabemos como importar outro arquivo Python, ou **módulo**, mas como manipulamos arquivos de outras extensões? 

Manipular arquivos se refere à capacidade de uma linguagem de ler, escrever, criar e editar arquivos já existentes, de diferentes
tipos, e interagir com o disco rígido da máquina onde o programa está sendo executado. Isso abre novas portas e capacidades para nossos programas,
visto que anterior à isso, só sabíamos ler e imprimir na entrada padrão (*Standard I/O*).

:::note Módulos
Nesse artigo, vamos trabalhar com 2 módulos: 

- [Módulo CSV](https://docs.python.org/3/library/csv.html) `csv`
- [Módulo JSON](https://docs.python.org/3/library/json.html) `json`

Para mais informações, acesse a documentação oficial linkada acima.
:::

## Arquivo como Objeto

Em Python, arquivos são tratados como objetos, com seus métodos exclusivos. Portanto, referenciando um arquivo, faça como vêm fazendo com os dados
em Python. Por conta disso, se você tentar imprimir um arquivo fazendo `print("file.txt")`, verá algo como:

```
<_io.TextIOWrapper name='file.txt' mode='r' encoding='UTF-8'>
```

De qualquer forma, não se preocupe com objetos agora. Isso se encaixa no artigo de OOP (*object-oriented programming*).

## Lendo Arquivos

:::note Arquivo de Exemplo
Nesse artigo, trabalharemos com alguns arquivos. 

- .txt : "text_file.txt"
- .csv : "csv_file.csv"
- .json : "json_file.json" 
:::

Para abrir um arquivo, usamos a função `open()`. Combinada com a declaração `with`, o computador e Python serão encarregados de fechar o arquivo por você.
Isso é melhor e mais bem visto por que não é raro esquecer de fechar um arquivo que foi aberto numa parte do programa.

A função `open()` toma 2 argumentos, e retorna um objeto (arquivo):

- 1° (obrigatório): o caminho e o nome do arquivo
- 2° (obrigatório): o modo de interação (leitura, escrita, etc.)

:::info Parâmetros de `open()`
Veja quais são os modos que a função `open()` aceita:

- `"r"`: Leitura (*read*) - modo *default*, somente leitura, erro se o arquivo não existir;
- `"a"`: Acrescentação (*append*) - acrescenta no final do arquivo, não exclui o conteúdo já existente no arquivo, cria o arquivo se este não existir;
- `"w"`: Escrita (*write*) - abre um arquivo para escrita, cria se não existir, sobrescreve se o arquivo tiver conteúdo;
- `"x"`: Criação (*create*) - cria um arquivo, erro se ele já existir;

Adicionalmente, podemos especificar na mesma *string* de 2° parâmetro como o conteúdo deve ser interpretado:

- `"t"`: Texto (*text*) - valor *default*, lê como texto;
- `"b"`: Binário (*binary*) - interpreta como binário (para imagens, etc);
:::

Veja a sintaxe apropriada:

```python
#-Aqui, usamos a palavra-chave 'as' para renomear o arquivo
with open("text_file.txt", "r") as text_file:
    pass
```

### `readlines()`, `readline()`

Esses métodos servem para ler o arquivo. São bem semelhantes, mas com uma diferença essencial: `readlines()` retorna uma lista de *strings*, com o conteúdo
de todas as linhas do arquivo (cada item da lista é uma linha). Já `readline()` retorna somente a *string* de uma única linha.

Veja:

- `readline()`

Toma 1 argumento:

- 1° (opcional): n° de bytes máximos a serem lidos na linha; 

```python
with open("text_file.txt", "rt") as text_file:
    print(text_file.readline())

#->> Hello! Nice to see you again.
```

E, 

- `readlines()`

Toma 1 argumento:

- 1° (opcional): n° máximo de bytes no total;

```python
with open("text_file.txt", "rt") as text_file:
    print(text_file.readlines())

#->> ['Hello! Nice to see you again.\n', 'By the way,\n', 'Kind of lonely in here.\n']
```

### `read()`

O método `read()` lê o arquivo todo e retorna uma única *string*, contendo todo o conteúdo do arquivo. Toma 1 argumento:

- 1° (opcional): n° de bytes máximos a serem lidos

Veja:

```python
with open("text_file.txt", "rt") as text_file:
    print(text_file.read())

#->> Hello! Nice to see you again.
#->> By the way,
#->> Kind of lonely in here.
```

## Escrevendo em Arquivos

Para escrever num arquivo, temos que usar o modo `"w"`, ou o modo `"a"`. Veja:

```python
with open("text_file.txt", "w") as text_file:
    #-Code
```

Ou,

```python
with open("text_file.txt", "a") as text_file:
    #-Code
```

### `write()`

Podemos usar o método `write()` para escrever num arquivo. Toma como argumento o que você quer escrever. Veja:

```python
with open("text_file.txt", "a") as text_file:
    text_file.write("But yeah, glad you came back.")
```

## Arquivos CSV

Vamos trabalhar bastante com arquivos `.csv`. CSV significa *Comma-Separated Values* (Valores Separados por Vírgula) e arquivos CSV são geralmente a forma
pela qual os dados de *software* de planilhas (como o Microsoft Excel ou o Google Sheets) são exportados para um formato portátil.

Veremos que não necessariamente são separados por vírgulas, mas podem ser separados por qualquer delimitador capaz de indicar o fim e o começo de
um item (por convenção, usaremos a vírgula ou o ponto e vírgula).

Veja um exemplo de uma planilha:

![Planilha de Usuários](/img/sheet.png)

Agora, observe como essa planilha ficaria no formato `.csv`:

```
Name,Username,Email
Roger Smith,rsmith,wigginsryan@yahoo.com
Michelle Beck,mlbeck,hcosta@hotmail.com
Ashley Barker,a_bark_x,a_bark_x@turner.com
Lynn Gonzales,goodmanjames,lynniegonz@hotmail.com
Jennifer Chase,chasej,jchase@ramirez.com
Charles Hoover,choover,choover89@yahoo.com
Adrian Evans,adevans,adevans98@yahoo.com
Susan Walter,susan82,swilliams@yahoo.com
Stephanie King,stephanieking,sking@morris-tyler.com
Erika Miller,jessica32,ejmiller79@yahoo.com
```

Note que a primeira linha do arquivo não representa nenhum valor; serve somente para indicar o título de cada coluna.

### `DictReader`

Para ler arquivos CSV, podemos usar o objeto `DictReader`. Veja um exemplo:

```python
#-Vamos usar o arquivo acima como exemplo. Chame-o de 'users.csv';
import csv
 
list_of_names = []
#-Faça desse modo quando abrir um arquivo CSV para leitura
with open('users.csv', newline='') as users_csv:
  user_reader = csv.DictReader(users_csv)
  for row in user_reader:
    list_of_names.append(row['Name'])
```

O código acima está essencialmente tranformando cada linha num dicionário, onde a chave de cada coluna é o título da própria coluna,
e podemos iterar por todas as linhas (*rows*) para ler e fazer operações.

:::info Lendo CSV 
Podemos ler diferentes tipos de arquivos CSV, isto é, com diferentes delimitadores. No exemplo acima, o delimitador foi `,`, porém existem outros como
`;`. Para ler qualquer arquivo, independente do delimitador, adicione o parâmetro `delimiter`, como no exemplo:

```python
import csv
 
list_of_names = []
with open('users.csv', newline='') as users_csv:
  user_reader = csv.DictReader(users_csv, delimiter=',')
  for row in user_reader:
    list_of_names.append(row['Name'])
```

Seguindo o exemplo acima, só substitua o delimitador pelo que estiver presente no seu arquivo.
:::






