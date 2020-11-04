'use strict'

import { ResponseBody } from '../helpers'
import { MembersModel } from '../models'

const MembersController = { get }

export default MembersController

async function get(request, response, next) {
    try {
        const data = await MembersModel.get('data', '')
        // console.log('\n------controllers/Members.js---> ' + MembersModel+ '\n')
        const responseBody = new ResponseBody(200, 'Members data fetched', data)
        response.body = responseBody
        process.nextTick(next)
    }
    catch (err) {
        const ResponseBody = new ResponseBody(400, 'Member Fetch Failed', err)
        response.body(ResponseBody)
    }
}