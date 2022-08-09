const express = require('express')
const adminRoute = express.Router()
const User = require('..//model/User')
const admin = require('..//Admin')

adminRoute.get('/admin', async (req, res) => {
    try {
        const createdAdmin = await User.create(admin)
        res.send(createdAdmin)
    }
    catch (error) {
        res.status(500).send({ message: error && error.message })
    }
})

module.exports = adminRoute