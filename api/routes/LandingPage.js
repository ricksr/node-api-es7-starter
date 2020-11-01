'use strict'

import Express from 'express'
import { expressUtils } from '../helpers'
import { LandingPageController } from '../controllers'

const LandingPageRouter = new Express.Router()
const { get } = LandingPageController

const { reqHandler, resHandler } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler

LandingPageRouter.use(extractHeaders)

LandingPageRouter.get('/', routeSanity, asyncWrapper(get))

LandingPageRouter.use(setHeaders)

export default LandingPageRouter
