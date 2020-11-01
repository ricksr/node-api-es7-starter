'use strict'

import { SERVER_CONFIG } from './config'

const { PORT } = SERVER_CONFIG
// importing PORT from SERVER_CONFIG which is exporting PORT and some other value
// SERVER_CONFIG contains some process.env files

const startServer = async (app) => {
  try {
    await app.listen(PORT)
    console.log(`[Info] Server Started Successfully! Listening on Port: ${PORT}`)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default startServer
