'use strict'

import Express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import Routes from './api/routes'


// Routes file path is inside "api/routes/index.js" , which exports "Routes"
// Routes exporting url-endpoints API's used in this app
// also the error-handling checks, if the route fails are also mentioned here
// every file uses express-utils with some custom exports using express-utils libs
// express-utils is present inside helpers under spi , path = "api/helpers/expressUtils.js"

import {
  SERVER_CONFIG
} from './config'

//   SERVER_CONFIG exporting these following stuffs : 
//   PORT,
//   BODY_LIMIT,
//   ALLOW_CORS_ORIGIN,
//   ALLOW_CORS_METHODS

import startServer from './startServer'

// startServer shows the mssg that " server has started on some ${PORT} " ,
// where PORT is  exported from the same SERVER_CONFIG

const {
  BODY_LIMIT,
  ALLOW_CORS_ORIGIN,
  ALLOW_CORS_METHODS
} = SERVER_CONFIG

// Destructuring the SERVER_CONFIG  
// values exported by it mentioned in line : 18 - 21
console.log(`
 Body_limit : ${BODY_LIMIT}
 ALLOW_CORS_ORIGIN : ${ALLOW_CORS_ORIGIN}
 ALLOW_CORS_METHODS : ${ALLOW_CORS_METHODS}`)
//  For local setup start-local.sh.sample files will help exporting the env specific things

const app = new Express()
const corsOptions = {
  origin: ALLOW_CORS_ORIGIN,
  methods: ALLOW_CORS_METHODS
}

// Middleware Initializations
app.use(cors(corsOptions))
app.use(bodyParser.json({
  limit: BODY_LIMIT
}))
app.use(bodyParser.urlencoded({
  limit: BODY_LIMIT,
  extended: true
}))
app.use(helmet())

// Initialize Routes
Routes.init(app)

// Start Server
startServer(app)

// For testing
module.export = app
