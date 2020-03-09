const express = require('express')
const morgan = require('morgan')

const encyclopediaRouter = require('./routes/encyclopedia.router')

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use(express.static('public'))
app.use(express.json())

app.use('/api/v1/encyclopedia', encyclopediaRouter)

module.exports = app
