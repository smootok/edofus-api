const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const AppError = require('./utils/app-error')
const globalErrorHandler = require('./controllers/error.controller')
const buildRouter = require('./routes/build.router')
const userRouter = require('./routes/user.router')
const equipmentRouter = require('./routes/equipment.router')
const weaponRouter = require('./routes/weapon.router')
const petRouter = require('./routes/pet.router')

const app = express()

if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'))
}

app.use(cors())

app.options('*', cors())

app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())

app.use('/api/v1/', buildRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/encyclopedia/equipment', equipmentRouter)
app.use('/api/v1/encyclopedia/weapons', weaponRouter)
app.use('/api/v1/encyclopedia/pets', petRouter)

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

app.use(globalErrorHandler)

module.exports = app
