const mongoose = require('mongoose')

const ngoSchema = mongoose.Schema({
    name: { type: String, uppercase: true, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    city: { type: String, required: true },
    isNgo: { type: Boolean, default: true },
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Ngo', ngoSchema)