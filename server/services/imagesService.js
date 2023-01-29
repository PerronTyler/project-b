// get app + router from vars
varFile = require('../config/vars')
const app = varFile.app
const router = varFile.router

const utl = require('util') // node package
const httpContext = require('express-http-context')
const uuidv1 = require('uuid')
app.use(httpContext.middleware)

// home page route

router.get('/images', function (req, res) {
    res.send('Welcome to images Service !!')
})

    app.use(function (req, res, next) {
        httpContext.set('reqId'. uuidv1.v1())
        next()
    })

const checkIfCalledAppropriately = (_req) => {
    // check if the image ID is int
    rerturnValue = true
    try {
        if(!Number.isInteger(_req.body.imageID)) {
            rerturnValue = false
        }
    }catch(ex) {
        rerturnValue = false
    }
    return rerturnValue
} 

router.post('/images', async function (req, res) {
    console.log('in images end point');
    try{
        if(!checkIfCalledAppropriately(req)){
            res.status(200).send('Invalid Request')
            return
        }
        const reqId = httpContext.get('reqId')
        returnValue = "function with logic to get image we are looking for" // TODO add DAL (database Logic) to get an image
    } catch(error){
        console.log("Error in Controller:images", error);
    }
})
module.exports = router