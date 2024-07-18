import express from 'express'
import { getFamilia, getMembro, getGastos, getSomaGastos, getTransacao, getTransacaoPorNome } from './database.js'
const app = express()
const port = 8080

app.listen(port, () => {
    console.log(`O app esta rodando em http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send('Está rodando')
})

app.get('/familia', async (req, res) => {
    const familia = await getFamilia()
    res.send(familia)
})

app.get('/familia/:id', async (req, res) => {
    const id = req.params.id
    const membro = await getMembro(id)
    res.send(membro)
})

app.get('/gastos', async (req, res) => {
    const gastos = await getGastos()
    res.send(gastos)
})

app.get('/gastos/soma', async (req, res) => {
    const soma = await getSomaGastos()
    res.send(soma)
})
app.get('/gastos/:id', async (req, res) => {
    const id = req.params.id
    const gastos = await getTransacao(id)
    res.send(gastos)
})

app.get('/gastos/familia/:id', async (req, res) => {
    const id = req.params.id
    const gastos = await getTransacaoPorNome(id)
    res.send(gastos)
})