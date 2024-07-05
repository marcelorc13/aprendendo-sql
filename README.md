# Aprendendo SQL
#### *com MySQL*
## Criando Banco de Dados
            
```postgres
CREATE DATABASE nomeDB;
```
Cria o banco de dados de nome 'nomeDB'.
            
```postgres
DROP DATABASE nomeDB;
```
Exclui o banco de dados.
            
```postgres
USE nomeDB;
```
Define o banco de dados 'nomeDB' como o banco de dados padrão.
            
## Tabelas
            
```postgres
CREATE TABLE nomeTabela;
```
Cria uma tabela chamada 'nomeTabela'.
            
```postgres
SELECT * FROM nomeTabela;
```
Mostra a tabela inteira.
            
```postgres
RENAME TABLE nomeTabela TO novoNomeTabela;
```
Renomeia a tabela de 'nomeTabela' para 'novoNomeTabela'.
            
```postgres
DROP TABLE novoNomeTabela;
```
Exclui a tabela 'novoNomeTabela'.
            
## Tipos de Dados em Tabelas
            
- `INT`
  - Número Inteiro
- `VARCHAR(x)`
  - Conjunto de caracteres
  - `x` = Número máximo de caracteres 
- `DECIMAL(x, y)`
  - Número Real
  - `x` = Número máximo de caracteres
  - `y` = Número de caracteres depois da vírgula
- `DATE`
  - Data
- `DATETIME`
  - Data e Hora
            
## Colunas
            
```postgres
ALTER TABLE nomeTabela
ADD coluna VARCHAR(30);
```
Cria uma nova coluna de nome 'coluna'.
            
```postgres
ALTER TABLE nomeTabela
RENAME COLUMN coluna TO colunaNova;
```
Renomeia a coluna de 'coluna' para 'colunaNova'.
            
```postgres
ALTER TABLE nomeTabela
MODIFY COLUMN colunaNova INT;
```
Muda o tipo de dado da coluna 'colunaNova' para `INT`.
            
```postgres
ALTER TABLE nomeTabela
MODIFY COLUMN colunaNova INT
FIRST;
```
Move a coluna 'colunaNova' para a primeira posição na tabela.
            
```postgres
ALTER TABLE nomeTabela
MODIFY COLUMN colunaNova INT
AFTER outraColuna;
```
Move a coluna 'colunaNova' para depois da coluna 'outraColuna'.
            
```postgres
ALTER TABLE nomeTabela
DROP COLUMN colunaNova;
```
Exclui a coluna 'colunaNova'.
            
## Inserir Informações
            
```postgres
INSERT INTO tabela
VALUES (x, y);
```
Insere os valores na tabela.
- `x` = valor da primeira coluna
- `y` = valor da segunda coluna

```postgres
INSERT INTO tabela (coluna1, coluna2)
VALUES(valor1, valor2);
```
Insere apenas os valores das colunas selcionadas entre parenteses, mantendo as outras colunas como valor 'null'