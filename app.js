const express = require('express')
const morgan = require('morgan')

const itemRouter = require('./routes/item.router')

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/v1/items', itemRouter)

module.exports = app
