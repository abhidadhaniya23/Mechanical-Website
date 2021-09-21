const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// static Files
app.set('view engine', 'ejs')
app.use(express.static('public'))

// Routes
const course = require('./routes/course')

app.use('/', course)

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})