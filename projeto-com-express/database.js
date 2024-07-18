import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
}).promise()

export const getFamilia = async () => {
    const [familia] = await pool.query('SELECT * FROM familia;')
    return familia
}

export const getMembro = async (id) => {
    const [membro] = await pool.query(`
            SELECT *
            FROM familia
            WHERE id_familia = ?;
        `, id)
    return membro
}

export const getGastos = async () => {
    const [gastos] = await pool.query(`
        SELECT id_transacao, preco, motivo, data_transacao, gastos.id_familia, CONCAT(nome, ' ', sobrenome) AS nome_completo
        FROM gastos INNER JOIN familia
        ON gastos.id_familia = familia.id_familia;
        ;`

    )
    return gastos
}

export const getTransacao = async (id) => {
    const [transacao] = await pool.query(`
        SELECT * FROM gastos
        WHERE id_transacao = ?;
        `, id)
    return transacao
}

export const getTransacaoPorNome = async (id) => {
    const [transacao] = await pool.query(`
        SELECT * FROM gastos
        WHERE id_familia = ?;
        `, id)
    return transacao
}

export const getSomaGastos = async (id) => {
    const [soma] = await pool.query(`
        SELECT SUM(preco) as 'gasto total'
        FROM gastos;
        `, id)
    return soma
}


