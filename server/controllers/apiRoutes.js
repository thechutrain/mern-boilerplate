const express = require('express')
const router = express.Router()

router.get('/api/lostitem', (req, res) => {
	res.json({ msg: 'This is for reading all the lost items' })
})

router.post('/api/new/lostitem', (req, res) => {
	res.json({ msg: 'This is for creating a new lostitem' })
})

router.put('/api/lostitem/:id', (req, res) => {
	res.json({
		msg: `your trying to UPDATE a lost item of id of: ${req.params.id}`
	})
})

router.delete('/api/lostitem/:id', (req, res) => {
	res.json({
		msg: `your trying to DELETE a lost item of id of: ${req.params.id}`
	})
})

module.exports = router
