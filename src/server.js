const express = require ( 'express' )
const router = require ( './routes' )
const path = require ( 'path' )

const server = express()

server.set( 'view engine', 'ejs' )

server.set( 'views', path.join(__dirname, 'views'))

server.use( router )

server.use( express.static( 'public' ) )

server.listen ( 3000, () => console.log('🚀 Running on: http://localhost:3000') )