const Database = require('../db/config')

module.exports = {
  async index( req, res ) {
    const db = await Database()

    const roomId = req.params.room
    const questionId = req.params.question
    const action = req.params.action
    const password = req.body.password

    // console.log(`Room id: ${roomId} ; Question id: ${questionId} ; Action: ${action} ; Password: ${password}`)

    // Verificação da senha
    const verifyRoom = await db.get( `SELECT * FROM rooms WHERE id = ${roomId}` )

    if( verifyRoom.password === password ) {
      if( action === 'trash' ) {
        await db.run( `DELETE FROM questions WHERE id = ${questionId}` )
      }else if( action === 'check' ) {
        await db.run( `UPDATE questions SET isChecked = 1 WHERE id = ${questionId}` )
      }
      res.redirect( `/room/${roomId}` )
    }else {
      console.log( `Error - invalid password`)
      
      res.redirect( `/room/${ roomId }` )
    }

    await db.close()
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