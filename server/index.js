require('dotenv').config()
const express = require('express')
const { json } = require('body-parser')
const massive = require('massive')
const hc = require('./controllers/houseController')

const app = express()
app.use(json())

massive(process.env.CONNECTION_STRING).then((db) => app.set('db', db))

app.get('/api/houses', hc.getHouses)
app.post('/api/houses', hc.addHouse)
app.delete('/api/houses/:id', hc.deleteHouse)

const port = 4000 || process.env.PORT
app.listen(port, () => console.log(`listening on port ${port}...`))
