---
sidebar_position: 12
slug: /docs/programacao/bash
title: "Bash - Básico"
description: "Aprenda a interagir com o terminal."
---

# Introdução - Bash **$**

Neste artigo, vamos introduzir **Bash** (*Bourne Again Shell*), um interpretador de comandos e linguagem de *script*.

Foi criado para sistemas operacionais **Unix** (como: Linux, macOS, Solaris), e funciona como uma 'ponte', onde se é capaz de interagir com o seu SO (sistema operacional) por meio de comandos simples. Um *shell* tranforma os comandos que você digita em ações executadas pelo SO, essencialmente.

Com Bash, podemos **automatizar tarefas, gerenciar arquivos e diretórios, e rodar**
**programas no terminal**. Nesse artigo, iremos manipular arquivos e diretórios no terminal.

Bash é uma linguagem de *scripting*, que é um tipo de linguagem de programação. Apesar de não ser versátil como linguagens de propósito geral como Python, saber Bash é bastante prático e útil para trabalhar com a linha de comando e automatizar processos repetitivos.

:::info Bash x Terminal
Qual é a diferença?

Bom, o terminal é o próprio programa que te permite interagir com o SO por meio de comandos de texto. 

O Bash é o interpretador dos comandos (*shell*) que você digita no terminal, que funciona dentro do próprio terminal. Existem outros *shells*, porém Bash é o mais usado, além de ser o *default* na maioria das distribuições do Linux, que é o SO que estamos usando.

Portanto, o Bash e o terminal são complementares.
:::

## Comandos Úteis

A seguir estão alguns comandos úteis para interagir com o terminal e manipular arquivos e diretórios. 

Abra o terminal na sua máquina e teste os comandos.

:::info Help
Para saber mais sobre algum comando, digite-o seguido da *flag* `--help`. Isso listará todas as *flags*  disponíveis e o funcionamento de todas elas. 
:::

### `pwd`

O comando `pwd` (*print working directory*) imprime todo o caminho do diretório que o usuário se encontra, desde o diretório raiz (*root*). Por exemplo, usando o comando assim que o terminal é iniciado:

```sh
$ pwd
```

Resulta em:

```sh
/home/raphael
```

Na minha máquina. Se eu mudar para o diretório de documentos, verei:

```sh
/home/raphael/Documentos
```

### `cd`

O comando `cd` (*change directory*) muda o diretório atual, te movendo para o diretório especificado. Veja um exemplo:

```sh
$ cd Documentos
```

Me levará para o diretório 'Documentos'. Para checar o diretório atual, use `pwd`.
Pode-se também especificar um acminho até o diretório desejado, como:

```sh
$ cd Documentos/dir1/dir1.1
```

Usando os diretórios dri1 e dir1.1 de exemplo. Podemos também ir para os diretórios superiores/parentais, fazendo:

```sh
$ cd ..
```

Usando esse comando e `pwd`, vemos:

```sh
/home/raphael/Documentos/dir1
```

Podemos fazer também:

```sh
$ cd ../..
```

E veremos:

```sh
/home/raphael
```

### `clear`

O comando `clear` simplesmente limpa a tela do terminal, para que não fique tão bagunçada e/ou confusa.

### `ls`

O comando `ls` (*list*) lista o conteúdo do diretório atual, incluindo todos os diretórios inferiores/filhos e arquivos.

Muitos comandos possuem *flags* que mudam o funcionamento do comando de acordo. Uma flag útil para o comando `ls` é a flag `-a` (*all*), que irá exibir todos os arquivos e diretórios dentro do diretório atual, mesmo os arquivos que começam com `.`, como o `.gitignore` (arquivo para organizar melhor o controle de versão, que indica quais diretórios devem ser ignorados e não mostrados no repositório).

Veja um exemplo do funcionamento:

```sh
$ ls -a
```

Você verá todos os diretórios e arquivos contidos, inclusive um `.` e um `..`, que são o diretório atual e o diretório superior/parental, respectivamente.

### `more`

Usando o comando `more`, você pode ver o conteúdo de um arquivo. Basta seguir o padrão:

```sh
$ more <nome_do_arquivo>
```

### `touch`

Com o comando `touch`, podemos criar novos arquivos. Basta especificar o nome e extensão do arquivo, como:

```sh
$ touch my_file.txt
```

### `echo`

Com `echo`, podemos imprimir texto no terminal, além de imprimir para um arquivo específico. Veja:

```sh
$ echo Bash is cool
```

Exibirá:

```
Bash is cool
```

Para imprimir num arquivo, faça de acordo com o padrão:

```sh
$ echo <content> >> <file>
```

Como por exemplo:

```sh
$ echo I love Bash >> my_file.txt
```

Fazendo `more`, obtemos:

```
I love Bash
```

### `mkdir`

O comando `mkdir` (*make directory*) cria um diretório com o nome especificado. Como em:

```sh
$ mkdir new_dir
```
Criará o diretório `new_dir`.

### `cp`

O comando `cp` (*copy*) copia um arquivo de um diretório para outro diretório. Caso o arquivo esteja no diretório atual, basta especificar o diretório de destino, como em:

```sh
$ cp <file> <source_directory> <destination_directory>
```

Pode-se também copiar diretórios inteiros usando a *flag* `-r` (*recursive*), entre o comando `cp` e os argumentos.

### `rm`

O comando `rm` (*remove*) remove um arquivo especificado. Pode-se usar também a *flag* `-r` (*recursive*) para remover diretórios inteiros.

:::danger Cuidado
Usando o comando `rm`, o arquivo ou diretório removido não podem ser encontrados na lixeira. Eles somem, isto é, são irrecuperáveis (até existem métodos para tentar obtê-los de volta, mas são muito trabalhosos).

Usando esse comando, pode-se deletar até o SO da máquina, portanto, use com atenção.

Uma *flag* que ajuda nesse sentido é a `-i`, que pede uma confirmação para deletar.
:::

### `find`

O comando `find` mostra toda a árvore de diretórios e arquivos do diretório atual. Pode-se também especificar o caminho de outro diretório, e a árvore desse diretório será especificada. 

Outro uso é com arquivos, onde o comando `find` mostra todo o caminho do diretório atual até o arquivo especificado. Veja os exemplos:

```sh
#-Mostra a árvore do diretório atual

$ find
```

```sh
#-Mostra a raiz do diretório 'dir1.1'

$ find dir1/dir1.1
```

```sh
#-Mostra até o caminho do arquivo especificado, procurando a partir do atual

$ find -name "nome_do_arquivo"
```

:::note Utilidade
Pode-se também procurar arquivos com uam extensão específica, usando o 'curinga' `*`, como em:

```sh
#-Mostra todos os arquivos com essa extensão

$ find -name "*.txt"
```
:::

### `rmdir`

O comando `rmdir` (*remove directory*) remove diretórios, se estiverem **vazios**. 

### `mv`

O comando `mv` (*move*) move um arquivo de um local para outro. Pode ser usado também para renomear um diretório/arquivo.

```sh
#-Para mover um arquivo/diretório para outro local

$ mv source destination

#-'source' -> caminho do arquivo ou diretório
#-'destination' -> o caminho do diretório de destino
```

E pode ser usado como:

```sh
#-Para renomear:

$ mv old_name new_name
```

## Conclusão 🎑

Bom, essa seção termina aqui. Caso tenha alguma dúvida que não conseguiu encontrar online, envie para raphaelsoaresbrasil@gmail.com.
Obrigado pela atenção, e bons estudos.
