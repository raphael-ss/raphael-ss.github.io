---
sidebar_position: 6
slug: /docs/programacao/sql-basico
title: "SQL - Básico"
description: "Introdução ao SQL"
---

# Introdução - SQL ⛁

Muitas organizações e empresas usam **SQL** (**S**tructured **Q**uery **L**anguage) para acessar seu banco de dados. Um **banco de dados** é um conjunto de dados armazenado num computador, geralmente em **tabelas**, com múltiplas colunas e linhas.

Planilhas como Microsoft Excel e Google Sheets conseguem te permitir manipular e organizar dados diretamente, com seleção, filtração, ordenação, etc.

Aplicando essas operações, você pode separar o subconjunto de dados que procura. SQL (pronunciado "S-Q-L" ou "*sequel*") te permite escrever "consultas", ou *queries*, que definem o subconjunto dos dados que você procura.

A diferença? Diferentemente de Excel ou Sheets, seu computador e SQL vão decidir **como** conseguir os dados: você só precisa focar em definir **quais** dados você precisa. Você pode salvar essas *queries*, refiná-las, compartilhá-las e usá-las em outro conjunto de dados.

É uma ótima forma de acessar dados, e relativamente simples, com uma sintaxe não muito "enigmático".

Como isso pode ser usado?

Veja alguns exemplos de utilização abaixo:

- Funil de utilização

Um exemplo básico mas interessante é o de **funil de utilização**. Pense num e-commerce. O fluxo de uso se dá por 3 etapas:

1. Navegação pela página e pelos itens à venda;
2. Clique num ícone para iniciar o processo de compra e ir à página de checkout;
3. Enviar informações de pagamento no checkout para completar a compra;

É natural que nem todos os visitantes do site vão chegar na etapa de checkout, e nem todos na etapa de checkout vão finalizar a compra. Isto é, a taxa de conversão nunca será 100%.

Esse tipo de processo é denominado *funil*. Sabendo disso, como podemos colocar nossas habilidades em SQL em prática para melhorar o site? 

Podemos usar uma *query* para combinar dados dos usuários que visitaram diferentes seções da página, dados dos usuários que visitaram a página de checkout e dados dos usuários que finalizaram a compra.

Assim, podemos concluir a porcentagem estimada de usuários que movem para a próxima etapa no funil.


- Churn Rate (Taxa de Cancelamento)

Para plataformas e páginas com serviços por assinatura, podemos utilizar SQL para coletar dados de cancelamentos e calcular a **taxa de cancelamento**, que se dá por

Taxa de Cancelamento = (cancelamentos/total de inscrições)

E podemos fazer isso para analisar a *churn rate* todos os meses, para testar mudanças e melhorar o serviço.

Bom, vamos começar.

## Manipulação das Tabelas

Já disse que os dados em bancos de dados relacionais são organizados em tabelas: mas como se parecem essas tabelas?

Veja um exemplo abaixo:

![Exemplo de Tabela SQL](/static/img/sql-table-example.png)

Podemos chamar as linhas de linhas, ou registros, ou *rows*, e as colunas de colunas, ou campos ou *columns* (que são os termos em inglês). Veja os comandos de manipulação que usaremos:

### CREATE TABLE 

A declaração **CREATE TABLE** cria uma nova tabela no banco de dados, com os nomes das colunas e os tipos de dados de cada coluna. Observe:

```sql
CREATE TABLE nome_da_tabela (
    coluna1 TIPO_DE_DADO,
    coluna2 TIPO_DE_DADO,
    coluna3 TIPO_DE_DADO
);
```
:::info TIPOS DE DADOS NO SQL
Os tipos de dados vão depender do RDBMS usado: nós vamos usar os padrões do SQLite em alguns artigos e os padrões do PostgreSQL em outros. Neste artigo, estamos usando os tipos do SQLite, que são:

- INTEGER (Inteiro)
- TEXT (String)
- REAL (Float)
- DATE (Data no padrão YYYY-MM-DD)

Saiba também que chamaremos os comandos de *cláusulas*. 
:::

Aplicando num exemplo: imagine que queremos criar uma tabela que armazena dados sobre estudantes de uma escola. Veja:

```sql
CREATE TABLE estudantes (
    matricula INTEGER,
    nome TEXT,
    idade INTEGER,
    data_de_inicio DATE,
    media REAL
);
```
Com esse comando nós criamos uma tabela simples que o nome dos estudantes, as idades, data de início na escola e a média geral das notas. Perceba que serão distintos uns dos outros com a categoria **matricula**.

:::note Padrões do SQL
Os comandos devem e declarações ser escritas em letras maiúsculas, e são terminados em ponto e vírgula (**;**).
:::

### Restrições das Colunas (Column Constraints)

Em muitos casos, será interessante determinar algumas restrições paara as colunas de nossas tabelas, para melhor organização, segurança e melhor adaptação e manipulabilidade.

Você pode ver as restrições como 'regras'. Veja quais são:

- **PRIMARY KEY**: pode ser usada para identificar cada instância da coluna, e não pode ter valor repetido, como uma 'chave';
- **UNIQUE**: colunas com essa restrição não podem ter valores repetidos;
- **NOT NULL**: colunas com essa restrição não podem ser nulas, isto é, vazias;
- **DEFAULT**: associa um valor *default* à coluna caso não tenha sido especificado;

:::info PRIMARY KEY x UNIQUE
A diferença entre essas restrições é que só se pode ter 1 coluna com a restrição **PRIMARY KEY** por tabela, enquanto podem existir diversas colunas com a restrição **UNIQUE** numa mesma tabela.
:::

### INSERT INTO

A declaração **INSERT INTO** é usada para adicionar novas LINHAS à uma tabela (é importante saber quais declarações servem para coluna e quais para linhas).

Pode-se ser escrita de duas formas:

- Inserir por **NOME**
- Inserir por **ORDEM**

Veja um exemplo:

```sql
-- Inserir em colunas por nome:
INSERT INTO nome_da_tabela
VALUES (valor1, valor2);

-- Inserir em colunas por ordem:
INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES (valor1, valor2);
```

:::note Padrões do SQL
Perceba que após a linha do **INSERT INTO**, não há ponto e vírgula. Não é um erro; é o padrão estético
que devemos seguir quando escrevemos em SQL.

O comando poderia ser dado dessa forma:

```sql
INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES (valor1, valor2);
```

Porém, para maior facilidade de leitura e interpretação, damos uma quebra de linha a cada cláusula.
Nesse caso, as cláusulas são **INSERT INTO** e **VALUES**.
:::

### ALTER TABLE

A cláusula **ALTER TABLE** é usada para modificar as COLUNAS de uma tabela. Combinada com a cláusula **ADD COLUMN**, podemos adicionar colunas novas na tabela.

```sql
ALTER TABLE nome_da_tabela
ADD nome_da_coluna TIPO_DE_DADO;
```

Usando o exemplo passado, podemos modificar nosso código para algo como:

```sql
CREATE TABLE estudantes (
    matricula INTEGER PRIMARY KEY,
    nome TEXT UNIQUE,
    idade INTEGER NOT NULL,
    data_de_inicio DATE NOT NULL,
    media REAL DEFAULT = 7
);

-- Adicionamos uma coluna de Série (6°, 7°, 8°...)
ALTER TABLE estudantes
ADD serie INTEGER NOT NULL;
```

### DELETE

A declaração **DELETE** combina a cláusula DELETE e WHERE, e deleta LINHAS de uma tabela.
A cláusula WHERE identifica quais registros serão apagados. Se essa cláusula for omitida, todos os
registros serão apagados.

```sql
DELETE FROM nome_da_tabela
WHERE coluna_x = valor_x;
```

Para apagar registros únicos e específicos, substitua o "valor_x" pela PRIMARY KEY do registro.

### UPDATE

A declaração **UPDATE** é usada para editar registros, ou seja, LINHAS, numa tabela. Inclui uma cláusula SET que indica a coluna a ser editada e uma cláusula WHERE para especificar quais registros.

```sql
UPDATE nome_da_tabela
SET coluna_1 = valor_1, coluna_2 = valor_2
WHERE coluna_x = valor_x;
```













