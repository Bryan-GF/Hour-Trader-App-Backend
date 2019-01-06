const db = require('../data/db.js');

module.exports = {
    userLogin
}


function userLogin(user) {
    return db('users')
    .where('username', '=', user.username)
}