const express = require('express')
const userRoute = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('./verifyToken')
const User = require('..//model/User')
require('dotenv/config')

userRoute.get('/', auth, async (req, res) => {
    try {
        const users = await User.find({ isAdmin: false })
        res.send(users)
    }
    catch (error) {
        res.status(500).send({ message: error && error.message })
    }
})

userRoute.post('/signup', async (req, res) => {
    try {
        const duplicateUser = await User.findOne({ email: req.body.email })
        if (duplicateUser == null) {
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(req.body.password, salt)

            const registerUser = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: hash,
                address: req.body.address
            })
            res.status(201).send({ message: 'Successfully created your account' })
            return
        }
        res.status(409).send({ message: 'Email already exist' })
    }
    catch (error) {
        res.status(500).send({ message: error && error.message })
    }
})

userRoute.post('/signin', async (req, res) => {
    try {
        email = req.body.email
        password = req.body.password

        const login_user = await User.findOne({ email: email })
        if (!login_user) return res.status(401).send({ message: 'Invalid password or email' })

        const valid_password = await bcrypt.compare(password, login_user.password)
        if (!valid_password) return res.status(401).send({ message: 'Invalid password or email' })

        const token = jwt.sign({ _id: login_user.id }, process.env.SECRET)
        res.send({ user: login_user.username, isAdmin: login_user.isAdmin, token: token })
    }
    catch (error) {
        res.status(500).send({ message: error && error.message })
    }
})

userRoute.get('/profile', auth, async (req, res) => {
    try {
        res.send(req.rootUser)
    }
    catch (error) {
        res.status(500).send({ message: error && error.message })
    }
})

userRoute.put('/profile', auth, async (req, res) => {
    try {
        const user = await User.findById(req.verify._id)
        if (user) {
            user.username = req.body.username || user.username
            user.email = req.body.email || user.email
            user.address = req.body.address || user.address
            if (req.body.password) user.password = await bcrypt.hash(req.body.password, 10)

            const updatedUser = await user.save()
            res.send({ message: 'Your Profile has been successfully updated' })
        }
    }
    catch (error) {
        res.status(500).send({ message: error && error.message })
    }
})

module.exports = userRoute