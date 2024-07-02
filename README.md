# Aprendendo SQL
            
## Criando Banco de Dados
            
```sql
CREATE DATABASE nomeDB;
```
Cria o banco de dados de nome 'nomeDB'.
            
```sql
DROP DATABASE nomeDB;
```
Exclui o banco de dados.
            
```sql
USE nomeDB;
```
Define o banco de dados 'nomeDB' como o banco de dados padrão.
            
## Tabelas
            
```sql
CREATE TABLE nomeTabela;
```
Cria uma tabela chamada 'nomeTabela'.
            
```sql
SELECT * FROM nomeTabela;
```
Mostra a tabela inteira.
            
```sql
RENAME TABLE nomeTabela TO novoNomeTabela;
```
Renomeia a tabela de 'nomeTabela' para 'novoNomeTabela'.
            
```sql
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
            
```sql
ALTER TABLE nomeTabela
ADD coluna VARCHAR(30);
```
Cria uma nova coluna de nome 'coluna'.
            
```sql
ALTER TABLE nomeTabela
RENAME COLUMN coluna TO colunaNova;
```
Renomeia a coluna de 'coluna' para 'colunaNova'.
            
```sql
ALTER TABLE nomeTabela
MODIFY COLUMN colunaNova INT;
```
Muda o tipo de dado da coluna 'colunaNova' para `INT`.
            
```sql
ALTER TABLE nomeTabela
MODIFY COLUMN colunaNova INT
FIRST;
```
Move a coluna 'colunaNova' para a primeira posição na tabela.
            
```sql
ALTER TABLE nomeTabela
MODIFY COLUMN colunaNova INT
AFTER outraColuna;
```
Move a coluna 'colunaNova' para depois da coluna 'outraColuna'.
            
```sql
ALTER TABLE nomeTabela
DROP COLUMN colunaNova;
```
Exclui a coluna 'colunaNova'.
            
## Inserir Informações
            
```sql
INSERT INTO tabela
VALUES (x, y);
```
Insere os valores na tabela.
- `x` = valor da primeira coluna
- `y` = valor da segunda coluna