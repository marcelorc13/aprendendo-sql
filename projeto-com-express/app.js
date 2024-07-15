import express from 'express'
import { getFamilia } from './database.js'
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