---
sidebar_position: 3
slug: /docs/fundamentos/analise-de-dados-visao-geral
title: "Análise de Dados - Visão Geral"
description: "Aprenda sobre a diferença entre diferentes tipos e métodos de análises."
---

# Visão Geral: Análise de Dados 🎯

Existem 5 tipos de análise de dados, ou melhor, **5 etapas** no processo de uma análise completa. A utilização de cada análise depende do contexto, das ferramentas e dos conhecimentos disponíveis.

Algumas se encaixam de certa forma numa especialização, enquanto umas são básicas, e portanto gerais para qualquer cientista de dados. Isso não significa que você não deva saber sobre todas elas: conhecimento não ocupa espaço.  

Veja quais são a seguir.

## Análise Descritiva (Descriptive Analysis)

Essa análise é geralmente a primeira a ser feita, logo quando terminamos de coletar e limpar os dados, ou quando os recebemos. 

Seu objetivo central é descobrir as **tendências centrais** das variáveis, a **distribuição** delas ao longo do conjunto de dados. Basicamente, obter uma perspectiva geral melhor baseada e definida do conjunto que estamos analisando.

As medidas que usamos nessa análise são:

1. **Medidas de Tendência Central**:
- Média 
- Mediana
- Moda

2. **Medidas de Distribuição**:
- Amplitude (Range)
- Amplitude Interquartil (IQR)
- Desvio Padrão
- Variância

Outra etapa essencial na análise descritiva é a plotagem de gráficos, ou seja, a **visualização**. Ela permite a notação de padrões implícitos nos dados, e possibilita um melhor entendimento do conjunto de dados em geral. 

:::danger Limites da Análise Descritiva
Nossas conclusões são limitadas somente ao conjunto de dados que analisamos: não somos capazes (ainda, nessa etapa) de estender nossas conclusões para outros escopos.
:::

## Análise Exploratória (Exploratory Analysis)

Em seguida, podemos fazer a análise exploratória, cujo objetivo principal é **descobrir relações entre variáveis** no nosso conjunto, como, por exemplo, se dias mais quentes levam a um maior consumo de sorvetes e picolés.

:::tip Correlação e Causalidade
Note que, não é por que uma variável está relacionada com outra, que essas estão numa relação de causa e efeito. Para mais informações, [veja o tópico mais detalhado em outra seção na página](/docs/data-science-foundations/data.md/).
:::

Variáveis relacionadas levam a *insights* importantes sobre os dados coletados. 

## Análise Inferencial (Inferential Analysis)

Essa análise nos possibilita **retirar conclusões sobre uma 'população' inteira, com base numa amostra dessa população**. **Testes A/B** são métodos de análise inferencial populares nos negócios para testar o desempenho de diferentes *features* e *designs* numa página *online*.

:::tip Requisitos
1. A amostra deve ser grande e inclusiva o suficiente para representar a população total. Em torno de 10% da população é um bom tamanho.

2. A amostra deve ser selecionada de forma randômica e representar a população total.

3. Só se pode testar uma hipótese por vez. Testar mais de uma variável por vez leva a uma conclusão indeterminada.
:::

## Análise Causal (Causal Analysis)

Para **determinar de fato a causa de um evento, usamos a análise causal**. Porém, essa deve ser feita com extremo cuidado para não retirar conclusões incorretas sobre a causa de um fator.

:::tip Requisitos
1. **Controle**: somente uma variável deve ser mudada por vez e o resto deve ser mantido controlado para não influenciar o resultado do experimento.

2. **Aleatoriedade**: deve-se escolher os sujeitos de análise de forma aleatória.

3. **Replicação**: o experimento deve ser feito diversas vezes e deve retornar o mesmo resultado todas as vezes.
:::

### Análise Causal com Dados Observacionais

Nos casos que precisamos saber a causa de um evento e a realização de experimentos é inviável, pode-se realizar a análise causal com dados observacionais.

Porém, isso requer técnicas avançadas e requisitos muito restritos e específicos. 

## Análise Preditiva (Predictive Analysis)

Esse método de análise tira vantagem de técnicas de aprendizado de máquina supervisionado (*supervisioned machine learning*) para **estimar a probabilidade de eventos futuros e prever possíveis eventos**.

Por exemplo, algoritmos de recomendação usam desse método.

:::tip "Entra lixo, sai lixo"
A qualidade da previsão dos modelos de aprendizado de máquina só serão boas e confiáveis se os dados alimentados ao modelo também forem.
:::

## Conclusão 🎑

Bom, essa seção termina aqui.
Caso tenha alguma dúvida que não conseguiu encontrar online, envie para raphaelsoaresbrasil@gmail.com.
Obrigado pela atenção, e bons estudos.































