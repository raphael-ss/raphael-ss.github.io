---
sidebar_position: 2
slug: /docs/computer-vision/cv-color-paces
title: "Visão Computacional - Color Spaces"
description: "Descrição dos Espaços de Cores"
---

# Color Spaces

Os espaços de cores, ou *color spaces*, são representações matemáticas em visualizações espaciais que nos permitem manipular e
descrever cores, por meio de números. Existem diversos parâmetros para se deteminar um espaço de cor, e vamos discutir sobre 3 deles.

1. **RGB**
2. **HSV**
3. **LAB**

:::tip Dica
Veja os valores representados nos *color spaces* como **tuplas**. É assim que iremos manipulá-los em Python, em projetos e exemplos de Visão Computacional.
Relembre que tuplas são como listas, mas imutáveis. 
:::

## RBG 

Provavelmente o mais popular da lista, **RGB** (red, green, blue) usa de 3 parâmetros para determinar uma cor. Basicamente, esse espaço separa
uma cor em **3 níveis de intensidade de Vermelho, Verde e Azul**, que variam de **0-255**. É o espaço decor mais utilizado pela simplicidade
e pela facilidade de representação em telas e dispotivos que emitem luz colorida. Portanto, é o espaço de cor no qual se representa cada
pixel da tela que você está lendo isso. Por exemplo:

![4CC063](/img/4CC063.png)

Essa cor é representada pela combinação (76, 192, 99) de vermelho, verde e azul, respectivamente. Você pode inferir que, como temos um valor desse para
cada pixel, temos um valor mínimo de representação de 3 bytes por pixel, ou ainda 24 bits, dando uma faixa de representação de 256 níveis de intensidade.

A razão de ser o espaço mínimo alocado por pixel é por que na prática, podemos representar informação adicional em cada pixel, como um parâmetro de trasparência, mas não vem ao caso.

O espaço de cor **RGB** é aditivo, ou seja, a representação da cor é a soma das intensidades. Por isso, quando uma das intensidades é 0, essa representa
a cor Preto. E, similarmente, quando todas são 255, isto é, todas as 3 intensidades estão no valor máximo, obtemos a cor Branca.

Veja um exemplo do espectro de RGB:

![rgb](/img/rgb.jpg)

Perceba que é um modelo de representação simples. Pode ser encontrado também como um cubo de 3 dimensões (lógico), onde cada dimensão ou eixo 
representa uma intensidade.

## HSV 

Esse modelo é mais interessante e eficiente na manipulação de cores. **HSV** é um acrônimo para (hue, saturation, value). Também pode
ser encontrado como HSB (hue, saturation, brightness). Vamos por partes:

**Hue** (matiz) representa uma cor, numa faixa de cores. Abrange todas as cores no espectro, do vermelho até o violeta, mais o magenta. Atinge
valores de 0-360, mas também pode ser normalizado para 0-100%.

**Saturation** (saturação) representa níveis de tons de cinza na cor. Quanto mais
alto, mais "pura" é a imagem, e quanto mais baixo, mais cinza será. Os valores de saturação variam entre 0-100%.

**Value** (valor ou brilho) representa o brilho da cor. Varia de 0-100%.

A mesma cor usada de exemplo anteriormente é representada pelos valores (132°, 60%, 75%). 

Veja essa representação do *color space* em 3D:

![hsv](/img/hsv.png)

:::tip Curiosidade
Note que o parâmetro **Hue** varia de 0-360. Isso tem a ver com sua faixa de representação, medida em graus (°). Por isso, a imagem
da representação espacial do espaço de cor é um cilindro.
:::