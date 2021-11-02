const Database = require('../db/config')

module.exports = {
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

    await db.close()

    res.redirect( `/room/${ parseInt(roomId) }` )
  }
}