import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
}).promise()

//Função para mostrar a tabela      
const [resultado] = await pool.query("SELECT * FROM familia;")


//Função para criar tabela
const criarTabela = async () => {
    const res = await pool.query(`
        CREATE TABLE familia(
        nome VARCHAR(20),
        sobrenome VARCHAR(40),
        data_de_nascimento DATE
        )
        ;`)

    return res;
}
//await criarTabela()

//Função para inserir valores na tabela
const inserirValores = async () => {
    const arr = {
        nome: 'Marcelo',
        sobrenome: 'Ramalho',
        data_de_nascimento: '2005-07-13'
    }

    const res = await pool.query(`
        INSERT INTO familia(nome, sobrenome, data_de_nascimento)
        VALUES(?, ?, ?)
        `, [arr.nome, arr.sobrenome, arr.data_de_nascimento])

    return res
}
//await inserirValores()

console.log(resultado)
