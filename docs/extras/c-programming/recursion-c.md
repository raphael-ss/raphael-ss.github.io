---
sidebar_position: 2
slug: /docs/extras/programacao-em-c/recursao
title: "Recursão"
---

# Recursão

A recursão, ou recursividade, é um conceito e técnica de programação onde uma função chama a si mesma ao longo de sua execução, para resolver um
problema. Traduzindo para termos não-técnicos, recursividade é essencialmente a ideia de repetir uma série de etapas até que um problema chegue num determinado estado, solucionado ou possível de solucionar. 

Podemos trabalhar com recursão da seguinte maneira:

- Condição de Parada/Término:

Definir na sua função uma condição de parada é **essencial** para o funcionamento do código. A função deveria parar quando o problema alcançar a etapa
de ser facilmente solucionado ou já estar solucionado.

:::danger Quebrando a Stack
Visto que resolver um problema de forma recursiva ocasiona um n° de chamadas de função muito grande, caso não for feito corretamente, como por exemplo não ter condição de parada definida corretamente, isso irá causar um erro, por conta da quebra do tamanho da Stack.
:::

- Quebrar o problema:

Para solucionar o problema, quebre-o em partes menores, que podem ser resolvidas facilmente, e construa seu código de forma que o problema (originalmente grande) seja resolvido com base na solução de pequenos problemas repetidamente. 

Existem problemas naturalmente recursivos no mundo, como, por exemplo, calcular o fatorial de um número. Veja o exemplo:

```c
#include <stdio.h>

int fatorial(int n) {
    // Base da Recursão
    if (n <= 1) {
        return 1;
    }
    else {
        // Recursão
        return n * fatorial(n - 1);
    }
}
int main() {
    int i = 5;
    printf("%d! = %d\n", i, fatorial(i));
    return 0;
}

// Aqui, estamos calculando o fatorial de 5 de forma recursiva.
```

Embora um recurso poderoso, a recursão deve ser usada com cuidado para que o código não entre em loops infinitos. 

## Conclusão 🎑

Bom, essa seção termina aqui.
Caso tenha alguma dúvida que não conseguiu encontrar online, envie para raphaelsoaresbrasil@gmail.com.
Obrigado pela atenção, e bons estudos.