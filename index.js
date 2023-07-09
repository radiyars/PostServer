const express = require('express')
const mongoose = require('mongoose')
const postRoutes = require('./routes/post-routes')
const path = require('path')

const PORT = 5000
// const URL = 'mongodb://localhost:27017/PostServer'
const URL = 'mongodb+srv://radiyars:radiyars@cluster0.bzgwtuj.mongodb.net/PostServer?retryWrites=true&w=majority'

const app = express()
app.use(express.json())
// app.use('/images', express.static())

const cors = require('cors');
app.use(cors());

app.use(postRoutes)
app.use('/public', express.static(path.join(__dirname, '/public')))
// app.use('/static', express.static(path.join(__dirname, '/public')))
// app.use('/public', express.static('public'))
// .vercel/output/static




mongoose
	.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to MongoDB!'))
	.catch((err) => console.log(`DB connection error: ${err}`))

app.listen(PORT, (err) => {
	err ? console.log(err) : console.log(`Listening port ${PORT}...`)
})


