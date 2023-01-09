const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const userRoute = require('./route/user')
const adminRoute = require('./route/admin')
const ngoRoute = require('./route/ngo')
const donationRoute = require('./route/donation')
const port = 3001 || process.env.PORT
require('dotenv/config')

app.use(express.json())
app.use(cors())

// Api
app.use('/api/user', userRoute)
app.use('/api/user', adminRoute)
app.use('/api/ngo', ngoRoute)
app.use('/api/donation', donationRoute)

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT, () => console.log('Connected to DB'))
    } catch (err) {
        console.log(err)
    }
}

connectDatabase()

app.listen(port, () => console.log(`listening to the given port no ${port}`))