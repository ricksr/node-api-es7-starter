'use strict'

import {
    ResponseBody
} from '../helpers'
import {
    LandingPageModel
} from '../models'

const LandingPageController = {
    get
}

export default LandingPageController

async function get(request, response, next) {
    const data = await LandingPageModel.get()
    const responseBody = new ResponseBody(200, 'LandingPage Check Successful', data)
    response.body = responseBody
    console.log(`
        data : ${data}
        responseBody : ${responseBody}
        response : ${response}
        request : ${request}
        next : ${next}  
    `)
    process.nextTick(next)
}
