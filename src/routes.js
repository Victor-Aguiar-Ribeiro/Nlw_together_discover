const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {res.render('index')})

router.get('/new-room', (req, res) => {res.render('new-room')})
router.get('/q_and_a', (req, res) => {res.render('q_and_a')})

module.exports = router;