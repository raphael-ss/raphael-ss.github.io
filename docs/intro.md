---
sidebar_position: 1
slug: /
---

# Data Science - Introdução

## Apresentações Iniciais 📜

Olá! caso tenha caído aqui de paraquedas, esse é um site de documentação e estudo de Ciência de Dados, Python e R, IA e Aprendizado de
Máquina, e Visão Computacional, feito pelo estudante de Ciência da Computação @raphael-ss.

Vamos incluir projetos básicos e intermediários, uso de bibliotecas, padrões de escrita e boas práticas, e, claro, os tópicos dentro da área.

Caso queira aprender Data Science, mas não sabe por onde começar, vamos caminhar juntos em etapas para descobrir as maravilhas desse campo.
Nessa seção, vamos falar sobre as instalações necessárias para os procedimentos e projetos, sobre as ferramentas que vamos usar e sobre o que
podemos fazer com isso.

Estamos utilizando o kernel Linux (especificamente Ubuntu) para desenvolvimento, projetos e instalações, por vários motivos. O principal sendo que, felizmente ou infelizmente, Linux é o melhor lidando com programação e computação em geral.

Caso não tenha esse kernel na sua máquina, basta fazer um dual boot. Não demora muito e não é trabalhoso, pode confiar. Para ver como, basta
[clicar aqui](https://tecnoblog.net/responde/como-fazer-um-dual-boot-com-windows-e-linux/).

Caso tenha alguma dúvida específica, sugestão ou correção que queira enviar, basta mandar para raphaelsoaresbrasil@gmail.com.
Bom, seguindo com as instalações.

## Instalações Necessárias ❗

### Anaconda 🐍

Iremos trabalhar com as ferramentas usadas na prática, seja em mercado de trabalho ou pesquisa, para que você se acostume ao longo do
processo a interagir com essas ferramentas, e tenha um gostinho de como é na prática.

Inicialmente, vamos instalar a distro de Python e gerenciador de pacotes **Anaconda**. Esse software engloba um gerenciador de pacotes e bibliotecas, como o *pip*, diversas IDE's para escolher, e a linguagem Python (versões desde Python 2.7 até Python 3.11), com múltiplas bibliotecas de Data Science
incluídas. 

Antes de tudo, vamos rodar alguns comandos para assegurar que seu pc está atualizado. Abra o terminal e siga as instruções:

```bash
$ sudo apt update
```
E também:

```bash
$ sudo apt upgrade
```

Você também pode checar se já tem Python instalado:
``` bash
$ python3 --version
```

Caso tenha, não há problema; estaremos usando o ambiente da Anaconda para desenvolver projetos, e isso não vai interferir na instalação.

:::danger Observação
É necessário que você tenha privilégio _sudo_, isto é, seja um administrador. 

Caso não seja, não vai ser capaz de fazer as instalações.
:::

Primeiro, vamos trocar para o diretório _tmp_, onde as instalações feitas somem após o computador for desligado.


Não vamos ter que reinstalar toda vez, só vamos instalar o *bash* do Anaconda nesse diretório, e só vamos utilizar uma vez.

```bash
$ cd /tmp
```

Agora, usaremos o _curl_ para buscar o arquivo de instalação. Verifique se tem curl instalado:

```bash
$ curl --version
```

Caso não possua, [clique aqui](https://linuxhint.com/install_curl_ubuntu/) para ver um tutorial de instalação.
Continuando:

```bash
$ curl https://repo.anaconda.com/archive/Anaconda3-2023.03-1-Linux-x86_64.sh --output anaconda.sh
```

:::danger Observação
Perceba que o curl está indo buscar o arquivo no endereço especificado. Se atente à um fato importante: procure instalar sempre a versão mais
atualizada do software. Isso trará menos problemas de início. Esse link é a versão mais atualizada para Linux até o momento atual. 

Recomendo que procure saber se existe uma versão nova antes de instalar. Para ser redirecionado para o índice de versões, 
[clique aqui](https://repo.anaconda.com/archive/).
:::

Agora, depois de concluído o processo, rode este comando para conferir se a instalação se deu corretamente:

```bash
$ sha256sum anaconda.sh
```

O *output* deverá ser a mesma série de caracteres especificada no índice de versões.

Agora, vamos rodar o script:

```bash
$ bash anaconda.sh
```

Você verá um contrato de termos de usuário. Se quiser, leia, e desça até o final. 
Você verá algo como:

```output
Do you approve the license terms? [yes|no]
```

Se você concordar, digite *yes* e seguiremos com a instalação.
Você verá um *output* perguntando onde você quer instalar. Caso queira especificar um local diferente do sugerido, escreva o caminho do diretório.
Caso não, aperte *Enter*. Sugiro que instale no local recomendado.

A instalação irá acontecer, é só esperar.

Depois de instalado, o programa vai te perguntar se quer inicializar o Anaconda. Digite *yes*.

Agora, saia do diretório /tmp e vá até o diretório de instalação, e rode o seguinte comando:

```bash
$ source ~/.bashrc
```
Isso te levará ao ambiente de programação base do Anaconda.
Digite o comando seguinte para verificar o que já está disponível:

```bash
$ conda list
```

Você verá uma lista com todos os pacotes disponíveis após a instalação do Anaconda.


Para ativar o **Anaconda Navigator**, ambiente de desenvolvimento, rode o comando dentro da pasta que você instalou:

```bash
$ anaconda-navigator
```
Você deverá ver algo assim:

![anaconda-navigator](/img/anaconda-navigator.png)

Pronto! Agora, essa instalação está completa. Vamos falar sobre como criar ambientes e gerenciá-los nas próximas seções.

