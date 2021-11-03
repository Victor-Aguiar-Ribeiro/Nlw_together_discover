﻿const Database = require('../db/config')

module.exports = {
  // Criar nova sala
  async createRoom( req, res ){
    const db = await Database()
    const password = req.body.password
    
    let roomId = ''
    let isRoom = true
    
    // Garantir que o roomId gerado seja unico no DB -> while ( existir um id igual no DB ) => gerar novo id
    while( isRoom ){
      // Criar código da sala de forma randômica 
      for( let i = 0; i < 6 ; i++ ){
        roomId += `${ Math.floor( Math.random() * 10 ) }`
      }

      // Verificar se o roomId já existe no DB
      const existId = await db.all( `SELECT id FROM rooms` )
      isRoom = existId.some( exist => exist === existId )

      if( !isRoom ){
        // Aqui são passados o password digitado ao criar a sala, e a room ID gerada randomicamente para a tabela `rooms` criada no DB
        await db.run( `INSERT INTO rooms (
          id,
          password
        ) VALUES (
          ${ parseInt( roomId ) },
          ${ password }
        )`)
      }
    }
    // Espera fechamento do DB
    await db.close()

    // Redireciona para a sala, passando tambem o roomId na URL -> routes.ts
    res.redirect( `/room/${ parseInt(roomId) }` )
  },

  async open( req, res ){
    const db = await Database()

    const roomId = req.params.room
    const id = await db.get( `SELECT id FROM questions` )
    const questions = await db.all( `SELECT * FROM questions WHERE roomId = ${ roomId } and isChecked = 0` )
    const questionsChecked = await db.all( `SELECT * FROM questions WHERE roomId = ${ roomId } and isChecked = 1` )

    res.render( "q_and_a", { 
      roomId: roomId,
      questions: questions,
      questionsChecked: questionsChecked,
      id: id
    } )

    await db.close()
  },

  async enterRoom ( req, res ){
    const db = await Database()

    const roomId = req.body.roomId
    const existId = await db.get( `SELECT id FROM rooms WHERE id = ${ roomId }` )

    // console.log( `existId: ${ existId } | roomId: ${ roomId }` )

    existId ? res.redirect( `/room/${ roomId }`) : res.redirect( '/' )

    await db.close()
  }
}