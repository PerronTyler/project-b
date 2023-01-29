const events = require('events')
const uuidv1 = require('uuid')
const em = new events.EventEmitter
// getting our router and app information and connections fomr config
const varFile = require('./vars')
const app = varFile.app
const httpContext = require('express-http-context')
const congig = require('./config.json')
const Environment = config.Environment
const http = require(Environment.node_protocol)
const hostname = Environment.hostname
const port = Environment.port

// enabling session cabapilities
var session = require('express-session')
const { appendFile } = require('fs')
const { config } = require('process')
app.use(session({secret: config.Session.secret}))

app.use(httpContext.middleware)

app.use(function (req, res, next) {
    httpContext.set("reqID", uuidv1.v1())
    next()
})

// set service end points

const routingFile = require('../routes/routes')
const { fstat } = require('fs')

// Set the root
app.get('/', (req, res) => {
    res.send('Welcome to project b services / backend')
})

app.listen(port, hostname, () => {
    console.log(`Server is running at httpp://${hostname}:${port}/`)
})