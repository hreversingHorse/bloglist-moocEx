const express       = require('express')
const bodyParser    = require('body-parser')
const cors          = require('cors')
const mongoose      = require('mongoose')
const config        = require('./utils/config')
const blogsRouter   = require('./controllers/blogs')
const usersRouter   = require('./controllers/users')
const loginRouter   = require('./controllers/login')
const app           = express()

mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true})
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB: ', error.message)
    })

app.use(bodyParser.json())
app.use(cors())
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

module.exports = app