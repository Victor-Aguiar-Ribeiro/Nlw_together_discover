module.exports = {
  createRoom( req, res ){
    let roomId = 12345

    res.redirect( `/room/${ roomId }` )
  }
}