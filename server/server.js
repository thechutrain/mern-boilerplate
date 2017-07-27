const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT || 8080

app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
// Test that my server is working
app.get('/api/data', (req, res) => {
	res.json({ data: ['a', 'b', 'c'] })
})

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
