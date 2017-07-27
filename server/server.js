const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

// Test that my server is working
app.get('/api/data', (req, res) => {
	res.json({ data: ['a', 'b', 'c'] })
})

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
