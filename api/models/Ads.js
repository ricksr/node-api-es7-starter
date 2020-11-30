'use strict'

import { json } from "body-parser"

const AdsModel = {
    get,
    insert
}

export default AdsModel

async function get () {
    const ads = {
            data: [
                {title: 'Hello, world (again)!'},
                {name: 'Hello, this is test [name]'}
        ]
    }
    return ads
}

async function insert () {
    // This is a test insert, TODO: mongoDb query for insertion
    return json.status(200).body({
            message: "success, ad stored successfully",
            status: true
        }
    )
}