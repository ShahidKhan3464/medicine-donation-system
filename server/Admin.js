const bcrypt = require('bcrypt')

admin = {
    username: 'admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10),
    address: 'Peshawar',
    isAdmin: true,
}

module.exports = admin