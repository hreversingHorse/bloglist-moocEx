const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./controllers/blogs')

app.use(bodyParser.json())
app.use(cors())
app.use('/api/blogs', router)

module.exports = app