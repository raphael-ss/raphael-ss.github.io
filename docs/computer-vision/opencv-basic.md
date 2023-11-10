---
sidebar_position: 3
slug: /docs/computer-vision/cv-color-opencv-basico
title: "Visão Computacional - OpenCV Básico"
description: "Módulo OpenCV com Python"
---

# Visão Geral: OpenCV 📕📗📘

Existe uma biblioteca multiplataforma, que ttambém é módulo em Python, chamada OpenCV (Open Computer Vision). Foi inicialmente desenvolvida
pela Intel, e é uma biblioteca de livre uso, focada em visão computacional.

Está disponível não só em Python, mas em C++ e Java também.

Para instalar o módulo, use as instruções no [artigo de introdução](/docs/intro.md).
Para nossos exemplos, usaremos a imagem 'astronaut.jpg'.

## Lendo Imagens e Vídeos

Considere a imagem abaixo:

![Astronauta](/img/astronaut.jpg)

Considere que essa imagem 'astronaut.jpg' está no mesmo diretório do seu programa (você pode baixá-la e testar os exemplos).

Para ler a imagem, podemos fazer:

```python
#-Aqui importamos o módulo OpenCV
import cv2 as cv

#-Usamos a função 'imread()' do módulo para ler a imagem e 
#-atribuí-la à variável 'img';
img = cv.imread('astronaut.jpg')

#-Exibimos a imagem com a função 'imshow()';
#-O 1° parâmetro é o título da exibição e o segundo é a própria imagem;
cv.imshow('Astronauta', img)

#-Aqui, usamos a função 'waitKey' para manter a imagem na tela por tempo indef.
cv.waitKey(0)
```

Para capturar um vídeo, ou capturar a imagem da sua webcam, podemos fazer:

- **Webcam**:

```python
import cv2 as cv

#-O argumento '0' indica que deve capturar da webcam
#-Caso tenha mais de uma câmera, o argumento será 0 para a webcam, 1 para a 1° conectada e etc;
capture = cv.VideoCapture(0)
key = 0

#-Enquanto não apertar 'ESC'
while (key != 27):
    #-Capture a imagem e mostre-a
    isTrue, frame = capture.read()
    key = cv.waitKey(5)
    cv.imshow("Webcam", frame)

#-Destrua as janelas e processos após sair do while
cv.destroyAllWindows()
capture.release()
```

- **Videos**

```python
import cv2 as cv

#-Nesse caso, a única mudança é no argumento da função VideoCapture(), que deve
#-receber um caminho até o diretório do vídeo, assim como com imagens 
capture = cv.VideoCapture('')
key = 0

#-Enquanto não apertar 'ESC'
while (key != 27):
    #-Capture a imagem e mostre-a
    isTrue, frame = capture.read()
    key = cv.waitKey(5)
    cv.imshow("Webcam", frame)

#-Destrua as janelas e processos após sair do while
cv.destroyAllWindows()
capture.release()
```