const express = require('express')
const ngoRoute = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Ngo = require('..//model/Ngo')
const auth = require('./verifyToken')
require('dotenv/config')

ngoRoute.get('/', auth, async (req, res) => {
    try {
        const ngos = await Ngo.find()
        res.send(ngos)
    }
    catch (error) {
        res.status(500).send({ message: error && error.message })
    }
})

ngoRoute.post('/addition', async (req, res) => {
    try {
        const duplicateNgo = await Ngo.findOne({ email: req.body.email })
        if (duplicateNgo == null) {
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(req.body.password, salt)

            const registerNgo = await Ngo.create({
                name: req.body.name,
                email: req.body.email,
                password: hash,
                phone: req.body.phone,
                city: req.body.city,
            })
            res.status(201).send({ message: 'Ngo successfully added' })
            return
        }
        res.status(409).send({ message: 'Ngo already exist' })
    }
    catch (error) {
        res.status(500).send({ message: error && error.message })
    }
})

ngoRoute.post('/signin', async (req, res) => {
    try {
        email = req.body.email
        password = req.body.password

        const login_ngo = await Ngo.findOne({ email: email })
        if (!login_ngo) return res.status(401).send({ message: 'Invalid password or email' })

        const valid_password = await bcrypt.compare(password, login_ngo.password)
        if (!valid_password) return res.status(401).send({ message: 'Invalid password or email' })

        const token = jwt.sign({ _id: login_ngo.id }, process.env.SECRET)
        res.send({ isNgo: login_ngo.isNgo, token: token })
    }
    catch (error) {
        res.status(500).send({ message: error && error.message })
    }
})

ngoRoute.get('/search', auth, async (req, res) => {
    try {
        const ngo = await Ngo.find({ city: req.query.location })
        if (ngo.length === 0) return res.status(404).send({ message: "No Ngo Found" })
        res.send(ngo)
    }
    catch (error) {
        res.status(500).send({ message: error && error.message })
    }
})

ngoRoute.get('/profile', auth, async (req, res) => {
    try {
        res.send(req.rootNgo)
    }
    catch (error) {
        res.status(500).send({ message: error && error.message })
    }
})

ngoRoute.put('/profile', auth, async (req, res) => {
    try {
        const ngo = await Ngo.findById(req.verify._id)
        if (ngo) {
            ngo.name = req.body.name || ngo.name
            ngo.email = req.body.email || ngo.email
            ngo.phone = req.body.phone || ngo.phone
            ngo.city = req.body.city || ngo.city
            if (req.body.password) ngo.password = await bcrypt.hash(req.body.password, 10)

            const updatedNgo = await ngo.save()
            res.send({ message: 'Your Profile has been successfully updated' })
        }
    }
    catch (error) {
        res.status(500).send({ message: error && error.message })
    }
})

module.exports = ngoRoute