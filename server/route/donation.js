const express = require('express')
const mongoose = require('mongoose')
const donationRoute = express.Router()
const Donation = require('..//model/Donation')
const Ngo = require('..//model/Ngo')
const auth = require('./verifyToken')

donationRoute.get('/mine', auth, async (req, res) => {
    try {
        const donations = await Donation.find({ user: req.verify._id })
        const ngos = await Ngo.find({ _id: { $in: donations.map(donation => donation.ngo) } })
        const donationWithNgo = donations.map(donation => {
            const ngo = ngos.find(ngo => ngo._id.toString() === donation.ngo.toString())
            return { ...donation._doc, ngo: ngo._doc }
        })
        res.send(donationWithNgo)
    }
    catch (error) {
        res.status(500).send({ message: error && error.message })
    }
})

donationRoute.get('/tome', auth, async (req, res) => {
    try {
        const donations = await Donation.find({ ngo: req.verify._id })
        // if (donations.length === 0) return res.status(404).send({ message: 'No Medicines Donated ' })
        res.send(donations)
    }
    catch (error) {
        res.status(500).send({ message: error && error.message })
    }
})

donationRoute.get('/', auth, async (req, res) => {
    try {
        const donations = await Donation.find()
        const notApproved = await Donation.find({ isApproved: false })
        res.send({ donations: donations.length, notApproved })
    }
    catch (error) {
        res.status(500).send({ message: error && error.message })
    }
})

donationRoute.post('/', auth, async (req, res) => {
    try {
        const donation = new Donation({
            donatedMedicine: req.body.medicine,
            donor: req.body.donor,
            ngo: req.body.ngoId,
            user: req.rootUser._id
        })

        await donation.save()
        res.send({ message: 'Medicine donated successfully' })
    }
    catch (error) {
        res.status(500).send({ message: error && error.message })
    }
})

donationRoute.put('/approve/:id', async (req, res) => {
    try {
        // const approveMedicine = await Donation.findById(req.params.id)
        // if (!approveMedicine) return res.status(404).send({ message: 'Donation not found' })
        // if (approveMedicine.user.toString() !== req.rootUser._id.toString()) return res.status(403).send({ message: 'Unauthorized' })
        // approveMedicine.isApproved = req.body.approve

        const approvedMedicine = await Donation.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    isApproved: true,
                }
            }
        )
        res.send({ message: 'Medicine approved successfully' })
    }
    catch (error) {
        res.status(500).send({ message: error && error.message })
    }
})

module.exports = donationRoute