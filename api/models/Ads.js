'use strict'

import { json } from "body-parser"
const {getDatabase} = require('../schema/mongo')

const AdsModel = {
    get,
    insert
}

export default AdsModel

const collectionName = 'ads';

async function get () {
    const ads = {
            data: [
                {title: 'Hello, world (again)!'},
                {name: 'Hello, this is test [name]'}
        ]
    }
    try {
        const adsFromDb = database.collection(collectionName).find({}).toArray();
        return adsFromDb
    }
    catch (err){
        console.log(`\nErr ${err}\n`)
        return ads
    } 
}

async function insert () {
    // This is a test insert, TODO: mongoDb query for insertion
    const database = await getDatabase()
    const {insertId} = await database.collection(collectionName).insertOne(ad)
    return json.status(200).body({
            message: "success, ad stored successfully",
            data: insertId,
            status: true
        }
    )
}