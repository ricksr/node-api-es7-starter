'use strict'

import { ResponseBody, expressUtils } from '../helpers'
import HealthRouter from './Health'
import VersionRouter from './Version'
import LandingPageRouter from './LandingPage'
import MemberRouter from './Members'
import AdsRouter from './Ads'

const { middleware, resHandler } = expressUtils
const { handleResponse } = resHandler

const Routes = [
  { path: '/health', router: HealthRouter },
  { path: '/version', router: VersionRouter },
  { path: '/', router: LandingPageRouter },
  // Testing Purpose - child coder
  { path: '/members', router: MemberRouter },
  { path: '/ads', router: AdsRouter }
]

Routes.init = (app) => {
  if (!app || !app.use) {
    console.error('[Error] Route Initialization Failed: app / app.use is undefined')
    return process.exit(1)
  }

  // Custom Routes
  Routes.forEach(route => app.use(route.path, route.router))

  // Final Route Pipeline
  app.use('*', (request, response, next) => {
    if (!request.isMatched) {
      const { method, originalUrl } = request
      const message = `Cannot ${method} ${originalUrl}`
      const error = new ResponseBody(404, message)
      response.body = error
    }

    return handleResponse(request, response, next)
  })

  // Route Error Handler
  app.use((error, request, response, next) => {
    if (!error) { return process.nextTick(next) }
    console.log(error)

    let { statusCode = 500, message } = error
    let responseBody

    if (error.constructor.name === 'ResponseBody') {
      responseBody = error
    } else {
      responseBody = new ResponseBody(statusCode, message, error)
    }

    response.body = responseBody
    return handleResponse(request, response, next)
  })
}

export default Routes
