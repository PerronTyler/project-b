try {
    // get vars
    const varFile = require('../config/vars')
    const app = varFile.app

    // images
    console.log("Adding Images End Point");
    const imagesEP = require('../services/imagesService')
    app.use('/', imagesEP)

    //   claims / service requests


}