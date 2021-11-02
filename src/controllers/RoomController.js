const Database = require('../db/config')

module.exports = {
  async createRoom( req, res ){
    const db = await Database()
    const password = req.body.password
    
    // Criar código da sala de forma randômica 
    let roomId = ''

    for( let i = 0; i < 6 ; i++ ){
      roomId += `${ Math.floor( Math.random() * 10 ) }`
    }

    // Aqui são passados o password digitado ao criar a sala, e a room ID gerada randomicamente para a tabela criada no DB
    await db.run( `INSERT INTO rooms (
      id,
      password
    ) VALUES (
      ${ parseInt( roomId ) },
      ${ password }
    )`)

    await db.close()

    res.redirect( `/room/${ parseInt(roomId) }` )
  }
}