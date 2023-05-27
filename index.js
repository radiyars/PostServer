const express = require('express')
const mongoose = require('mongoose')
const postRoutes = require('./routes/post-routes')

const PORT = 5000
// const URL = 'mongodb+srv://radiyars:radiyars@cluster0.bzgwtuj.mongodb.net/todo?retryWrites=true&w=majority'
const URL = 'mongodb://localhost:27017/PostServer'

const app = express()
app.use(express.json())
app.use(postRoutes)
app.use('/uploads', express.static('uploads'))


// const cors = require('cors');
// app.use(cors());



mongoose
	.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to MongoDB!'))
	.catch((err) => console.log(`DB connection error: ${err}`))

app.listen(PORT, (err) => {
	err ? console.log(err) : console.log(`Listening port ${PORT}...`)
})


