let MongoClient = require('mongodb').MongoClient

let client 
let connection = null
let fetching 
// const dbserver = 'mongodb://testServer?readPreference=secondary'
module.exports.getDBConnection = async function getDBConnection() {
    if (connection) {
        return Promise.resolve(connection)
    }
    if (fetching) {
        return fetching
    }
    const dbserver = config.Environment.DBServer
    if(config.Environment.DBServername){
        dbserver = config.Environment.DBServers[config.Environment.DBServerName]
    }
    fetching = new Promise((resolve, reject) => {
        MongoClient.connect('mongodb://' + dbserver + '?readPreference=secondary', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, async function (error, clientVal) {
            if (error) {
                return reject(error)
            }
            client = clientVal
            connection = client.db(config.Environment.Database)
            resolve(connection)
        })
    })
    return fetching
}

module.exports.close = function close() {
    if(client){
        client.close()
    }
}