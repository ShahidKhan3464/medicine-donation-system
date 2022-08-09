const mongoose = require('mongoose')

const donationSchema = new mongoose.Schema({
    donatedMedicine: {
        name: { type: String, required: true },
        type: { type: String, required: true },
        quantity: { type: Number, required: true },
        mfgDate: { type: Date, required: true },
        expDate: { type: Date, required: true },
    },

    donor: {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: Number, required: true },
        address: { type: String, required: true },
    },

    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ngo: { type: mongoose.Schema.Types.ObjectId, required: true },
    isApproved: { type: Boolean, default: false },
    isCollected: { type: Boolean, default: false },
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Donation', donationSchema)