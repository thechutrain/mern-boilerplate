const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 8080

app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)

// ==== Connecting to the Mongo DataBase ====
if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI)
} else {
	// local mongo url
	mongoose.connect('mongodb://localhost/mern-boilerplate')
}
// ==== ROUTES =====
// Test that my server is working
app.get('/api/data', (req, res) => {
	res.json({ data: ['a', 'b', 'c'] })
})

// ==== Starting Server =====
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
