'use strict'

import { ResponseBody } from '../helpers'
import { AdsModel } from '../models'

const AdController = { get, insert }

export default AdsController

async function get(request, response, next) {
    try {
        const data = await AdsModel.get('data', '')
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

async function insert(request, response, next) {
    try {
        const data = await AdsModel.get('data', '')
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