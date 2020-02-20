// MPesa SandBox Access Token Middleware

const axios = require('axios')

const oAuth = (req, res, next) => {
    const consumer_key = 'ROyZBYdHTEOkEeAxInrK5G279wfd7RoS'
    const consumer_secret = 'UYn801ohAHAFc1Y4'
    const auth = Buffer.from( consumer_key + ':' + consumer_secret)
    const url =  "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"

    try {
        const response = await axios ({
            method: 'Get',
            url,
            headers: {
                Authorization: 'Basic ' + auth
            }
        })

        req.token = response.data.access_token
        next()
    } catch (err) {
        if(err) console.error(err.message)
        res.status(500).send('Server Error')
    }
}

module.exports = oAuth