const express = require('express')
const app = express()
// const path = require('path')
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))
// app.use('/css', express.static('public/css'))
// app.use('/img', express.static('public/img'))

// Routes
const chapter = require('./routes/chapter')
const course = require('./routes/course')

// app.use('/chapter', chapter)
app.use('/', course)

// app.get('/', (req, res) => {
// 	res.render('index.ejs')
// })

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})