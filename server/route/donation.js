const express = require('express')
const donationRoute = express.Router()
const Donation = require('..//model/Donation')
const Ngo = require('..//model/Ngo')
const auth = require('./verifyToken')

donationRoute.get('/mine', auth, async (req, res) => {
    try {
        const donations = await Donation.find({ user: req.verify._id })
        // if (donations.length === 0) return res.status(404).send({ message: 'No Donations Found' })
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

donationRoute.get('/', auth, async (req, res) => {
    try {
        const donations = await Donation.find({ ngo: req.verify._id })
        // if (donations.length === 0) return res.status(404).send({ message: 'No Medicines Donated ' })
        res.send(donations)
    }
    catch (error) {
        res.status(500).send({ message: error && error.message })
    }
})

donationRoute.post('/', auth, async (req, res) => {
    try {
        const updateDonatedMedicine = await Donation.find({ $and: [{ user: req.rootUser._id }, { ngo: req.body.ngoId }] })
        if (updateDonatedMedicine.length !== 0) {
            const updateMedicine = updateDonatedMedicine[0].donatedMedicine
            updateMedicine.push(req.body.medicine)
            await Donation.findByIdAndUpdate(updateDonatedMedicine[0]._id, { donatedMedicine: updateMedicine })
            res.send({ message: 'Medicine donated successfully' })
            return
        }

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

module.exports = donationRoute