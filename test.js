'use-strict'

import Express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = new Express()
var router = Express.Router()

// const startServer = require('./startServer')
import startServer from './startServer'

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/test1/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next router
  console.log('\n-------'+req.params.id+'\n')
  if (req.params.id === '0') next()
  // otherwise pass control to the next middleware function in this stack
  else res.send('message '+req.params.id+' this id rcvd')
}, function (req, res, next) {
  // render a regular page
  res.render('regular')
})

// handler for the /user/:id path, which renders a special page
router.get('/test2/:id', function (req, res, next) {
  console.log(req.params.id)
  res.render('special')
})

// mount the router on the app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use('/', router)

startServer(app)
module.export = app
