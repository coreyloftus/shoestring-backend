const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const postsController = require('./controllers/postsController')
const usersController = require('./controllers/usersController')

require('dotenv').config()

const { PORT } = process.env

app.use(cors())
app.use(morgan('dev'))
app.use('/posts', postsController)
app.use('/users', usersController)

app.get('/posts', ( req, res ) => { res.redirect('/posts') })
app.get('/users', ( req, res ) => { res.redirect('/users') })

app.listen( PORT, () => { console.log(`listening on port ${PORT}`) })