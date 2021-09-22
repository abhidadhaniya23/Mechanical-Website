const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// static Files
app.set('view engine', 'ejs')
app.use(express.static('public'))

// Routes
const course = require('./routes/course')

app.use('/', course)

// if any page not found
app.use(async (req, res) => {
	res.status(404)
	res.render('404-not-found.ejs', {
		title: '404 Not Found'
	})
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})