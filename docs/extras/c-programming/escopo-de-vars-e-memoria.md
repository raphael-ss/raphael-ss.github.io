---
sidebar_position: 1
slug: /docs/extras/programacao-em-c/escopo-de-variaveis-e-modelos-de-memoria
title: "Escopo de Variáveis e Modelos de Memória"
---

# Programação em C: Escopo de Variáveis e Modelo Básico de Memória

## Variáveis

Antes de definir os tipos de escopo de variáveis, precisamos definir o que é uma variável. Podemos pensar numa variável como um espaço reservado em memória,
que contém algum dado de algum tipo específico. 

Veja bem, a ação de declarar uma variável pode ser entendida como um pedido por um espaço em memória para armazenar valores ao longo da execução de um programa, sendo estes valores de um determinado tipo de dado.

Nessa definição, percebemos que uma variável possui 2 coisas: um valor armazenado, e uma posição em memória (que pode ser referenciada).

Em C, toda variável precisa ser declarada juntamente com uma especificação de seu tipo, isto é, a definição do tipo de dado da variável declarada.
Cada tipo possui um tamanho pré-definido a ser alocado em memória. Veja uma tabela:

![variables-in-C](/img/variables-in-C.png)

Com essa tabela, podemos ver o n° de bytes ocupados por cada tipo de C.

:::tip `sizeof`
Para verificar o tamanho de uma variável ou tipo, pode-se utilizar o operador `sizeof`.
:::

## Memória

É necessário, também, definir o que é memória. Num computador, a memória é organizada em células sequenciais com um n° determinado de bytes, cada
célula com um endereço, notado com a base hexadecimal. Veja um esquema:

![memory-cells](/img/memory_layout.png)
[Fonte da Imagem](http://www.c-jump.com/bcc/c155c/MemAccess/MemAccess.html)

No esquema acima, cada célula contém 1 byte, portanto um inteiro (*int* de C) ocupa um total de 4 células. 

Existem diferentes tipos de memórias num computador, cada tipo com uma velocidade e capacidade diferente. Existem também memórias localizadas em diferentes
locais de um computador, como na CPU (registradores, memória cache). Observe o esquema abaixo:

![hierarquia de memoria](/img/hierarquia-de-memoria.png)

Neste esquema, podemos identificar:

- **Registradores**:

Memória temporária, de baixa capacidade e super-rápida usada pelo processador (CPU) no processamento de instruções.

- **Memória ROM/EPROM**:

Onde ficam armazenadas as instruções de inicialização do computador.

- **Memória Cache**:

Armazena partes da memória do computador, sendo diretamente endereçável pelo processador.

- **Memória Principal (RAM)**:

Memória principal do computador, também diretamente endereçável pelo processador.

- **Memória Secundária**:

Memória de armazenamento permanente (HD, SSD, etc).

Existem outros tipos de memória, porém esses são os mais importantes.

## Alocação de Memória em C

Programando em C, é importante entender a divisão da memória em algumas seções. Veja:

![memory alloc](/img/memory-allocation.png)

Vamos por partes:

- **Stack**:

Contém a pilha de execução: memória usada por funções (parâmetros, endereços de retorno, variáveis locais de funções) 
e alocada estaticamente pelo programador.

- **Heap**: 

Área da memória alocada dinâmicamente, a pedido do processo.

- **Static Data, Literals / BSS, DATA**: 

Armazena variáveis globais e estáticas.

- **Instructions/Text**:

Contém as instruções (código) do programa e suas constantes.

### Heap x Stack

A **Heap** é a área de memória utilizada para alocação dinâmica. Requer (em C) manutenção manual, isto é, o programador precisa desalocar a
memória alocada. É a memória global do programa, e é maior que a Stack (basicamente, do tamanho da memória RAM disponível da máquina).

:::danger *Memory Leak*
É imprescindível que o programador construa o programa para desalocar corretamente a memória nos devidos locais, isto é, é obrigação do desenvolvedor liberar o espaço de memória durante a execução do programa. 
Não fazer isso pode (e provavelmente vai) resultar num *memory leak*, ou vazamento de memória. Isso deixa o programa lento, e pode causar erro de execução.
:::

Já a **Stack** é funciona como uma 'pilha de funções'. É a área da memória que aloca as variáeis locais da função quando uma é chamada, e funciona 
automaticamente, ou seja, assim que ocorre o retorno de uma função, as variáveis locais e a memória que estava sendo utilizada pela função são destruídas e
desalocadas. 
Ao longo da execução de um programa, a Stack cresce e diminue de acordo com as chamadas de funções. Por exemplo: se chamarmos uma função que chama outra função, as duas serão empilhadas na Stack. Retornando da segunda, ela será desalocada, resultando em somente a primeira função empilhada na Stack. Assim que essa retornar, a Stack ficará vazia.

Veja esse esquema ilustrativo:

![stack](/img/stack.png)

:::caution Tamanho da Stack
A Stack é, geralmente, pequena em tamanho, apesar do seu tamanho variar com o SO. 
Por isso, é importante que sejamos cuidadosos na contrução dos programas, por que ultrapassar seu tamanho pode causar estouro da pilha,
resultando num erro.
:::

É importante conhecer ambas e saber a diferença entre as duas quando se precisar resolver problemas com ponteiros e vazamento de memória.

:::note Resumo - Stack x Heap
- Velocidade:
    - **Stack**: mais próxima do processador (mais rápida);
    - **Heap**: pode estar na memória principal e ser fragmentada;


- Escopo:
    - **Stack**: escopo local;
    - **Heap**: escopo global;

- Gerenciamento de Memória:
    - **Stack**: memória liberada automaticamente ao término da função;
    - **Heap**: memória deve ser explicitamente liberada pelo desenvolvedor;


- Limite de Tamanho:
    - **Stack**: definida pela linguagem e SO;
    - **Heap**: definida pela quantidade de memória disponível;
:::


## Escopo

Pensando num programa como um mapa, o escopo de uma variável é a região onde ela é válida, isto é, existe e é referenciável. O escopo nada
mais é do que um conjunto de regras que determinam o uso e a validade de variáveis nas diversas partes de um programa.

O escopo local é o escopo comum de uma variável normal, referenciável no bloco ou função onde foi declarada e dura enquanto o bloco durar.
Existem alguns escopos em C:

- Variável Global `int Global=0;`:

Referenciável em todo o programa. Existe enquanto o programa rodar.

- Variável Estática `static int GlobalStatic=0;`:

Referenciável no bloco/função que foi declarada. Existe durante todo o programa. 

- Variável Externa `extern int GlobalExtern=0;`:

Variável definida em outro arquivo. Referenciável em todo o programa. Existe enquanto o programa rodar.

- Variável Constante `const int Constant=3.14;`:

Pode ser global ou estática. Tem valor constante (*read-only*), similares ao `#define`.

Veja um exemplo de uso abaixo:

```c
#include <stdio.h>

int Global = 0;

void incrementa() {
    int local = 0;
    static int Global_static = 0;
    printf("Global: %d -- local: %d -- Global_static: %d\n", Global, local, Global_static);
    Global++;
    local++;
    Global_static++;
}

int main() {
    int i;
    for (i = 0; i < 5; i++) {
        printf("i: %d --", i);
        incrementa();
    }

return 0;
}
/*** No fim do programa, veremos:
i: 0 --Global: 0 -- local: 0 -- Global_static: 0
i: 1 --Global: 1 -- local: 0 -- Global_static: 1
i: 2 --Global: 2 -- local: 0 -- Global_static: 2
i: 3 --Global: 3 -- local: 0 -- Global_static: 3
i: 4 --Global: 4 -- local: 0 -- Global_static: 4
***/
```

:::info `#define` x `const` 
Enquanto o `const`, pareado com uma declaração normal de variável, impede o programa (ou o programador) de alterar o valor inicial, 
o `#define` toma 2 valores: um 'apelido' e um valor, e na compilação, simplesmente substitui todos os locais onde o 'apelido' é referenciado pelo valor
definido.

A diferença é principal é que o `#define` é uma diretiva de pré-processamento, e não toma aloca espaço em memória. Já a declaração de uma
variável constante com o `const` aloca espaço em memória.

A recomendação é usar o `#define`, por razões de manutenibilidade e mais fácil leitura e interpretação do código.
:::

## Conclusão 🎑

Bom, essa seção termina aqui.
Caso tenha alguma dúvida que não conseguiu encontrar online, envie para raphaelsoaresbrasil@gmail.com.
Obrigado pela atenção, e bons estudos.



  