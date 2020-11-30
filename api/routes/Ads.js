'use strict'

import Express from 'express'
import { expressUtils } from '../helpers'
import { AdsController } from '../controllers'

const AdsRouter = new Express.Router()
const { get, insert } = AdsController

// middleware for req, res => express utils
const { reqHandler, resHandler } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler

AdsRouter.use(extractHeaders)

AdsRouter.get('/get-ads', routeSanity, asyncWrapper(get))
AdsRouter.post('/insert-ads', routeSanity, asyncWrapper(insert))

AdsRouter.use(setHeaders)

export default AdsRouter
