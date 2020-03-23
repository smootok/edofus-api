const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })
const app = require('./app')

const DB = process.env.DATABASE_LOCAL

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'))

const port = process.env.PORT || 3000
app.listen(port)

if (process.env.NODE_ENV === 'prod') {
  const https = require('https')
  const fs = require('fs')

  const options = {
    cert: fs.readFileSync('/etc/letsencrypt/live/api.edofus.com/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/api.edofus.com/privkey.pem')
  }

  https.createServer(options, app).listen(443)
}
