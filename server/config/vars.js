const express = require('express')
const app = express()
app.use(express.json())
const router = express.Router()

const ThisDate= new Date()
let requestID = ThisDate.getTime()




exports.app = app
exports.router = router
exports.requestID = requestID