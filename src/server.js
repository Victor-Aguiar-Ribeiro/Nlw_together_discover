const express = require ( 'express' )
const route = require ( './routes' )
const path = require ( 'path' )

const server = express()

server.set( 'view engine', 'ejs' )

server.set( 'views', path.join(__dirname, 'views'))

server.use( route )

server.use( express.static( 'public' ) )

server.listen ( 3000, () => console.log('🚀 Running on: http://localhost:3000') )