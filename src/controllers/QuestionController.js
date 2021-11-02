const Database = require('../db/config')

module.exports = {
  index( req, res ) {
    const roomId = req.params.room
    const questionId = req.params.question
    const action = req.params.action

    const password = req.body.password

    console.log(`Room id: ${roomId} ; Question id: ${questionId} ; Action: ${action} ; Password: ${password}`)
  },

  async createQuestion( req, res ) {
    const db = await Database()

    const text = req.body.question
    const roomId = req.params.room

    await db.run( `INSERT INTO questions (
      question,
      isChecked,
      roomId
    ) VALUES (
      "${ text }",
      0,
      ${ roomId }
    )` )

    res.redirect( `/room/${ roomId }` )

    await db.close()
  }
}