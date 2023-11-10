---
sidebar_position: 3
slug: /docs/extras/programacao-em-c/separacao-de-arquivos-e-makefile
title: "Separação de Arquivos e Makefile"
---

# Separação de Arquivos e Makefile

Em projetos de construção de software de média/larga escala, é absolutamente inviável escrever todo o código em somente 1 arquivo. Por isso, e por várias outras razões, como manutenibilidade, melhor organização e divisão de tarefas, e segurança, a linguagem nos permite dividir o código em arquivos separados,
desempenhando funções diferentes.

## Bibliotecas

### Visão Geral de Bibliotecas

Uma biblioteca é, essencialmente, um conjunto de código que serve um propósito. Existem diferentes 'tipos' de bibliotecas, de diferentes linguagens.
Em C, existem bibliotecas muito comuns (e necessárias para tarefas rotineiras), como `stdio.h`, `stdlib.h`, `math.h`, e etc.

O conjunto de funções de uma biblioteca é descrito em um arquivo chamado *header-file*, ou cabeçalho. Esse arquivo possui extensão `.h`, e às vezes,
essa interface é conhecida como API (*application programming interface*).

Para ter acesso à uma biblioteca, precisamos acessá-la usando o pré-processador `include`, como em:

```c
#include <stdio.h>
#include <math.h>
```

É possível não só instalar bibliotecas feitas por terceiros, mas podemos criar novas bibliotecas. Existem diversas razões para criar bibliotecas.
Entre essas razões, estão a modularização do código, organização, reutilização, e disponibilização para terceiros.


### Criando Bibliotecas

Para criar uma biblioteca, precisamos de 2 arquivos: um arquivo `.h`, que contém a especificação tudo que será utilizado externamente (cabeçalhos de função, definição de estruturas, constantes, etc) e um arquivo `.c`, onde as funcionalidades especificadas no cabeçalho são de fato implementadas.

:::note Nota
Ambos os arquivos devem ter o mesmo nome, como por exemplo:
```
fisica.c
fisica.h
```
E, além disso, ambos os arquivos devem estar dentro do mesmo diretório do arquivo que possui a `main()`.
:::

Para incluir a biblioteca criada, fazemos:

```c
#include "exemplo.h"
```

:::info `<>` x `""`
Perceba que, ao incluir a biblioteca criada, não usamos `<>` como usamos com a `<stdio.h>`, mas sim as aspas. Isso por que, com as aspas, a busca pela biblioteca ocorre primeiro no diretório local, e depois no PATH, enquanto com `<>`, a busca só acontece no PATH.
:::

Veja um exemplo da criação de uma biblioteca:

```c title="calculadora.h"
#ifndef _CALCULADORA_H
#define _CALCULADORA_H

float soma(float a, float b);
float subtrai(float a, float b);
float multiplica(float a, float b);
float divide(float a, float b);

#endif
```

Observe o arquivo `.h`:

:::caution Problema: Recursividade
Pode acontecer um problema de recursividade na inclusão das bibliotecas. 

Imagine que você criou a biblioteca A e a biblioteca B, e incluiu ambas no arquivo da `main()`.
Fazer isso vai fazer com que as bibliotecas A e B fiquem se auto-incluindo, ou seja, um problema de recursividade.

Por isso, é necessário adicionar as cláusulas `#ifndef`, `#define` e `#endif`.

Isso fará com que a biblioteca seja incluida somente uma vez, evitando a recursividade.
:::

```c title="calculadora.c"
#include "calculadora.h"

float soma(float a, float b) {
    return a + b;
}
float subtrai(float a, float b) {
    return a - b;
}
float multiplica(float a, float b) {
    return a * b;
}
float divide(float a, float b) {
    if (b != 0)
    return a/b;
    return 0;
}
```

O arquivo `.c` inclui o `.h`, e implementa as funcionalidades de fato. Agora, podemos fazer um arquivo principal, que faz uso dessa biblioteca recém-criada:

```c title="principal.c"
#include "calculadora.h"
#include <stdio.h>

int main() {
    printf("Soma: %2.f\n", soma(1.1, 2.2));
    printf("Subtração: %2.f\n", subtrai(1.1, 2.2));
    printf("Multiplicação: %2.f\n", multiplica(1.1, 2.2));
    printf("Divisão: %2.f\n", divide(1.1, 2.2));
    return 0;
}
```

### Compilando Bibliotecas

Após terminar os arquivos, da biblioteca, é necessário compilá-los. Para fazer a compilação desses arquivos, faremos um processo chamado de 'linkedição',
onde basicamente estamos 'linkando' todos os arquivos do projeto.

Podemos fazer isso em 2 etapas:

- **Compilar os arquivos `.c`**:

`gcc -c principal.c calculadora.c`

Após esse comando, devem ser gerados arquivos `.o`, especificamente um para cada arquivo `.c`. Caso tenha mais de uma biblioteca, podemos usar o comando:

`gcc -c *.c`

Para compilar todos os arquivos `.c` e gerar um arquivo `.o` para cada um. 

- **Compilar o Projeto (Linkedição)**:

`gcc principal.o calculadora.o -o principal`

Ou, como anteriormente, se houver mais de uma:

`gcc *.o -o principal`

Também podemos fazer os dois passos de uma vez só, com o comando:

`gcc *.c -o principal`

Para mais informações sobre bibliotecas, veja o artigo sobre bibliotecas estáticas e dinâmicas.

## Makefile

O Makefile é, essencialmente, uma receita de compilação. Um arquivo Makefile contém uma série de instruções e diretivas para a compilação de um projeto, usando a ferramenta de automação de compilação `make`. Essa ferramenta usa o arquivo para instalar, desisntalar, remover, limpar e etc, um projeto.

O arquivo Makefile deve estar no diretório raiz do projeto. Veja o exemplo de um Makefile:

```makefile
all: geraos principal

principal: principal.o calculadora.o
gcc principal.o calculadora.o -o principal

geraos: principal.c calculadora.c
gcc -c principal.c calculadora.c

clean:
rm -rf *.o principal
```

Observe o exemplo. Primeiramente, são criadas as **macros**, que são `all`, `principal`, etc. Macros são palavras que representam regras.
Depois do `:`, são definidos os ingredientes da execução do macro. 

Por padrão, a primeira macro de um Makefile será executada quando realizamos o comando `make`. É um padrão criar uma macro chamada
`all` para representar o que deve ser chamado.

Também é comum criar uma macro chamada `clean` (limpar) para realizar uma limpeza no projeto e apagar arquivos quando necessário.

Para executar as regras de um Makefile, basta utilizar o comando `make <nome_do_macro>`. O *default* é o 1° macro, no caso, `all`.

Veja um exemplo de um Makefile adaptado:

```makefile
CC=gcc
CFLAGS=-lm
DEPS= principal.h calculadora.h
OBJ=principal.o calculadora.o

%.o: %.c $(DEPS)
    $(CC) -c -o $@ $< $(CFLAGS)

principal: $(OBJ)
    $(CC) -o $@ $^ $(CFLAGS)
    echo "Compilado!"

clean:
    rm -rf *.o principal
    
run:
    ./principal
```

## Conclusão 🎑

Bom, essa seção termina aqui.
Caso tenha alguma dúvida que não conseguiu encontrar online, envie para raphaelsoaresbrasil@gmail.com.
Obrigado pela atenção, e bons estudos.