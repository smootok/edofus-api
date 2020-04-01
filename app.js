const express = require('express')
const morgan = require('morgan')

const equipmentRouter = require('./routes/equipment.router')
const weaponsRouter = require('./routes/weapons.router')

const app = express()

if (process.env.NODE_ENV === 'dev') {
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

app.use('/api/v1/encyclopedia/equipment', equipmentRouter)
app.use('/api/v1/encyclopedia/weapons', weaponsRouter)

module.exports = app
