const bcrypt = require('bcrypt')

admin = {
    username: 'admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10),
    isAdmin: true
}

module.exports = admin