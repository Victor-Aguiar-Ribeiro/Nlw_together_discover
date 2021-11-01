module.exports = {
  createRoom( req, res ){
    let roomId = ''

    for( let i = 0; i < 6 ; i++ ){
      roomId += `${ Math.floor( Math.random() * 10 ) }`
    }

    console.log(roomId)

    res.redirect( `/room/${ parseInt(roomId) }` )
  }
}