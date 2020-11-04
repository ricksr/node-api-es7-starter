'use strict'

import Express from 'express'
import { expressUtils } from '../helpers'
import { MembersController } from '../controllers'

const MemberRouter = new Express.Router()
const { get } = MembersController

// middleware for req, res => express utils
const { reqHandler, resHandler } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler

MemberRouter.use(extractHeaders)

MemberRouter.get('/all-members', routeSanity, asyncWrapper(get))

MemberRouter.get('/member/:id', routeSanity, asyncWrapper(get))

MemberRouter.use(setHeaders)

export default MemberRouter
