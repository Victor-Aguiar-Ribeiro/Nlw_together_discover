const express = require('express')
const questionController = require('./controllers/QuestionController')
const roomController = require('./controllers/RoomController')

const router = express.Router()

router.get('/', (req, res) => {res.render( 'index', { page: 'enter-room' } )})
router.get('/new-room', (req, res) => {res.render( 'index', { page: 'new-room' } )})

router.get('/room/:room', roomController.open)
router.post( `/create-room`, roomController.createRoom )

// Formato que o form de dentro da modal tem que passar as informações
router.post( '/question/:room/:question/:action',  questionController.index)
router.post( '/question/create-question/:room', questionController.createQuestion)

module.exports = router;