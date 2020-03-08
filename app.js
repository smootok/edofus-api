const express = require('express')
const morgan = require('morgan')

const encyclopediaRouter = require('./routes/encyclopedia.router')

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/v1/encyclopedia', encyclopediaRouter)

module.exports = app
