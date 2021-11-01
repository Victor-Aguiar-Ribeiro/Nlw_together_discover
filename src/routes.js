const express = require('express')
const questionController = require('./controllers/QuestionController')

const router = express.Router()

router.get('/', (req, res) => {res.render('index')})

router.get('/new-room', (req, res) => {res.render('new-room')})
router.get('/q_and_a', (req, res) => {res.render('q_and_a')})

// Formato que o form de dentro da modal tem que passar as informações
router.post( '/q_and_a/:room/:question/:action',  questionController.index)

module.exports = router;