---
sidebar_position: 10
slug: /docs/programacao/python-object-oriented-programming
title: "Python - OOP"
description: "Programação Orientada a Objetos em Python."
---

# Python - Programação Orientada à Objetos

Até agora, cobrimos diversas ferramentas úteis presentes em Python, e como utilizá-las. Porém, antes de continuar, devemos parar um pouco e pensar: 

> - "Como programadores fazem programas tão longos e complexos?"

Pense por exemplo num *videogame*, que contém inimigos, itens, armas, armaduras, e até o próprio jogador, e todas essas coisas interagindo entre si de diferentes formas e em diferentes
tempos. Naturalmente que os programadores não escrevem linhas de código para **cada** inimigo na tela, ou item, ou arma, e etc, toda vez que aparecem. 

Observe a seguinte tela do *Atari Breakout*, um jogo simples de arcade:

![Atari Breakout](/img/atari-breakout.jpg)

Tente identificar e categorizar os itens com base nessa imagem do jogo. 

Esses são:

- Os Retângulos;
- A Plataforma;
- A Bola;

E, diferenciando os itens numa mesma categoria, temos que o/a:

- Retângulo:
Tem uma cor;
Tem um tamanho;
Tem uma pontuação associada;
Tem uma resistẽncia (n° de impactos necessários para quebrar);
Tem uma posição;

- Plataforma:
Tem uma posição;
Tem uma velocidade; 
Tem uma largura;


- Bola:
Tem uma posição;
Tem uma velocidade;
Tem uma direção;
Tem um efeito (como multiplicação de pontos);

E também, pensando no que cada item de cada categoria pode **fazer**:

- Retângulos:
Podem ser acertados;
Podem desaparecer;

- Plataforma:
Pode ser movida;

- Bola:
Pode ser perdida;
Pode ser 'recarregada';

Pensando desse modo, podemos até perceber uma classe que não é visível:

- Jogador:
Pode morrer (quando terminam as bolas disponíveis);
Pode mover a plataforma;
Tem pontos;
Tem um n° de bolas disponíveis;

Portanto, os itens desse jogo foram modelados com seus próprios dados, e com suas próprias ações. 

Com isso, podemos finalmente fazer uma introdução formal à POO: Programação Orientada à Objetos é um conceito, uma teoria e uma abordagem fundamental em programação para organizar, estruturar e modularizar seu código. 

Com POO, ao invés de tratar dados separadamente como *floats*, *ints*, *bools* e etc, podemos criar e modelar objetos do mundo real, ao agrupá-los como **atributos** de uma classe, assim como atribuir ações, isto é, funções específicas para cada objeto, chamadas de **métodos**.

Os objetos são **instâncias de uma classe**, e podemos operar com eles para modelar quase tudo. Veja, por exemplo, um exemplo de uma classe de uma pessoa:

![Classe de Pessoa](/img/classe.png)

Observando esse esquema de classe, podemos inferir que os tipos dos dados dos atributos são: *str*, *str*, *int* e *float*, respectivamente (se a altura for medida em centímetros e sem casas decimais). Além disso, a classe poderia conter outros atributos, como "é maior de 18 anos", que pode ser um *bool*. 

Podemos pensar também num programa que gerencia uma escola. Poderíamos ter as classes Estudante, Professor, e muitas outras.

:::info Objetos x Classes
Assim como dito anteriormente, objetos são instâncias de uma classe. Mas o que isso significa?

Isso quer dizer que a classe tem o papel de definir a estrutura do objeto: é um esquema de quais atributos o objeto deve ter, e como funcionam seus métodos. E, o objeto é a instanciação da classe. 

Para entender melhor, pensemos numa analogia de um projeto de uma casa e a própria casa. Antes de construir a casa, é preciso projetá-la, e definir detalhes que serão usados para sua construção. E, com um projeto em mãos, é possível construir diversas casas com estruturas iguais, com interiores organizados de forma diferente.

Nessa analogia, a classe é o projeto, e a casa é o objeto, ou seja, uma instância da classe.
:::

Caso queira jogar Atari Breakout, [clique aqui](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjH-re9sKaCAxUeNrkGHTM_A1wQFnoECBQQAQ&url=https%3A%2F%2Felgoog.im%2Fbreakout%2F&usg=AOvVaw1nrkit4CNSsT7e5YIEkcKg&opi=89978449).

## POO em Python

Python é uma das melhores linguagens para se trabalhar com POO, isso por que **tudo** em Python é um objeto. Isso mesmo: todos os tipos de dados e estruturas da linguagem, como *str*, *int*, *dict*, listas, e todo o resto. Perceba que nos artigos passados, todos possuem funções próprias, que só podem ser usadas no respectivo tipo, que são os métodos.

Cada objeto em Python é uma instância de uma classe definida na própria linguagem. Por exemplo, um número inteiro como 5 é uma instância da classe *int*, uma *string* como "Hello" é uma instância da classe *str*, e assim por diante. 

Os tipos de dados embutidos em Python são classes predefinidas que representam diferentes tipos de objetos. Você pode verificar o tipo de um objeto usando a função `type(obj)`.

## Classes e Objetos

Assim como discutido anteriormente, uma classe é um *template* para um tipo de dado definido pelo usuário (programador). Pode ser definida usando a palavra-chave `class`. Veja:

```python
class Horse:
    name = "Buck"
    color = "Brown"
```

### `__init__()`

O método `__init__()`, também chamado de *dunder method*, é um dos métodos especiais em Python e desempenha um papel fundamental na criação de objetos de uma classe. Ele é conhecido como o **construtor da classe** e é chamado automaticamente quando um novo objeto é instanciado a partir dessa classe.

Ele é usado para inicializar os atributos de um objeto quando ele é criado. Como já mencionado, ele é executado automaticamente no momento da criação do objeto e permite que você defina os valores iniciais dos atributos da classe.

Veja um exemplo:

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

```

O objetivo do construtor `__init__()` é garantir que os objetos da classe sejam criados com um estado inicial consistente. Isso significa que você pode ter certeza de que os atributos essenciais estão definidos corretamente sempre que um objeto é instanciado.

### Variáveis de Classe

Numa classe, podemos criar variáveis compartilhadas com todos os objetos da classe. Isto é, as variáveis de classe, podem ser acessadas por qualquer instância, assim como alterada e posteriomente acessada novamente com o novo valor. 

```python
class Example:
  class_variable = "I am a Class Variable!"
  
#-Também podemos instanciar uma classe fazendo assim:
x = Example()
y = Example()

print(x.class_variable) #I am a Class Variable!
print(y.class_variable) #I am a Class Variable!
```

### `__repr__()`:

O método `__repr__()` é outro método especial em Python que permite que você defina uma representação legível por humanos de um objeto. Este método é chamado quando você tenta exibir o objeto com `print()`. Só toma 1 parâmetro, `self`. 

Observe:

```python
class Employee:
  def __init__(self, name):
    self.name = name

  def __repr__(self):
    return f"Nome: {self.name}"

john = Employee('John')
print(john) # John
```

### Métodos de Classe

Assim como definido anteriormente, as classes podem possuim também funcções próprias, chamadas de métodos. É padrão e requisito que o 1° argumento de um método seja `self`, uma referência à si mesmo. Perceba que, na hora de usar o método, esse parâmetro é implícito, dado que é o próprio objeto no qual está sendo usado. 

Veja:

```python
class Dog:
    # Método
  def bark(self):
    print("Auf-Auf")

# Crie uma nova instância
charlie = Dog()

# Chame o método
charlie.bark()
#"Auf-Auf"
```

Observe outro exemplo mais longo:

```python
class Dog:
  def __init__(self, input_name, input_breed, input_age = 0, input_friendliness=True):
    # Atributos...
    self.friends = []

  # self é esse cachorro, ou objeto, em específico
  # e other_dog é o outro que será passado como argumento
  def become_friends(self, other_dog):
    if(other_dog.is_friendly):
      self.friends.append(other_dog)
      # o outro cachorro também adiciona este à sua lista de amigos
      other_dog.friends.append(self)
      print("{name} fez amizade com {other_name}!".format(name = self.name, other_name = other_dog.name))
    else:
      print("{other_name} não quis fazer amizade com {name}!".format(name = self.name, other_name = other_dog.name))

```

### `dir()`

A função `dir()`, sem nenhum argumento, retorna uma lista de todos os atributos no escopo atual.

Com uma classe como argumento, a função tenta retornar todos os métodos e atributos válidos.

```python
class Employee:
  def __init__(self, name):
    self.name = name

  def print_name(self):
    print("Hi, I'm " + self.name)


print(dir())
# ['Employee', '__builtins__', '__doc__', '__file__', '__name__', '__package__', 'new_employee']

print(dir(Employee))
# ['__doc__', '__init__', '__module__', 'print_name']
```

### `__main__`

O identificador `__main__` é usado em Python para determinar se um arquivo Python está sendo executado como um programa principal (ou seja, diretamente) ou se está sendo importado como um módulo em outro programa. 

Quando um arquivo Python é executado diretamente, ou seja, quando você o chama diretamente no terminal ou no ambiente de desenvolvimento, o Python define automaticamente a variável especial `__name__` como "`__main__`". Isso permite que você execute código específico apenas se o arquivo estiver sendo executado como um programa principal. Por exemplo:

```python
if __name__ == "__main__":
    # Este código será executado somente se este arquivo for o programa principal.
    # Você pode colocar aqui o código que deseja executar quando este arquivo é executado diretamente.

```

Isso é útil para criar scripts reutilizáveis que também podem ser importados como módulos em outros programas. Quando você importa um arquivo em Python, o `__name__` é definido como o nome do arquivo (sem o ".py"). No entanto, quando você o executa diretamente, o `__name__` é definido como "`__main__`". Portanto, você pode usar essa técnica para distinguir entre a execução direta e a importação de um arquivo Python.

## Heranças de Classes

A herança de classes é um conceito fundamental em POO. Com esse conceito, nos é permitido criar uma nova classe (chamada classe filha ou subclasse) com base em uma classe existente (chamada classe pai ou superclasse). A subclasse herda os atributos e métodos da superclasse, permitindo a reutilização de código e a criação de uma hierarquia de classes.

Podemos definir uma classe base como qualquer outra em Python:

```python
class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def make_sound(self):
        pass
```

Com a classe base em mãos, podemos definir uma classe derivada, ou subclasse, usando a herança. Podemos fazer isso indicando a classe pai, como:

```python
class Dog(Animal):
    def make_sound(self):
        return "Auf Auf!"
```

Nesse caso, a classe *Dog* herda os atributos da classe `name` e `age` da superclasse, assim como o método `make_sound()`. Perceba também que a subclasse pode substituir, ou sobrescreve, os métodos e atributos em sua própria implementação. 

Com isso, você pode criar objetos da subclasse *Dog*:

```python
my_dog = Dog("Fera", 3)
```

Caso não queira sobrescrever, mas estender o método da superclasse, use a função `super()`:

```python
class Dog(Animal):
    def make_sound(self):
        sound = super().make_sound()
        return f"{sound} and Woof Woof!"
```

### Vantagens e Desvantagens da Herança

:::tip Vantagens
Podemos citar algumas vantagens claras de usar essa técnica:

- **Reutilização de código**: A herança permite que você aproveite o código existente na superclasse, evitando duplicação.

- **Hierarquia de classes**: Você pode criar uma hierarquia de classes, onde classes mais específicas (subclasses) herdam de classes mais gerais (superclasses).

- **Polimorfismo**: As subclasses podem ter comportamento diferente (sobrescrito), mas ainda podem ser tratadas como objetos da superclasse, o que facilita o polimorfismo.
:::

:::danger Desvantagens
E, existem também desvantagens que devem ser entendidas:

- **Acoplamento**: Heranças profundas podem criar um alto grau de acoplamento entre classes, tornando o código mais difícil de manter.

- **Fragilidade**: Mudanças na superclasse podem afetar as subclasses, tornando o sistema frágil.
:::

## Conclusão 🎑

Bom, essa seção termina aqui. Caso tenha alguma dúvida que não conseguiu encontrar online, envie para raphaelsoaresbrasil@gmail.com.
Obrigado pela atenção, e bons estudos.
