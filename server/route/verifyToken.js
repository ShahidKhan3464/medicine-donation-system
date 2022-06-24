const jwt = require('jsonwebtoken')
const User = require('..//model/User')
const Ngo = require('..//model/Ngo')
require('dotenv/config')

module.exports = async (req, res, next) => {
    try {
        const verify = jwt.verify(req.headers.token, process.env.SECRET)
        const rootUser = await User.findOne({ _id: verify._id })
        const rootNgo = await Ngo.findOne({ _id: verify._id })
        req.verify = verify
        req.rootUser = rootUser
        req.rootNgo = rootNgo
        next()
    }
    catch (error) {
        res.status(500).send({ message: error && error.message })
    }
}