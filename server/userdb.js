const db = require('../data/db.js');

module.exports = {
    getUsers,
    getCompanies,
    getBranches,
    getUser
}


function getUsers() {
    return db('users')
}

function getCompanies() {
    return db('company')
}

function getBranches() {
    return db('branch')
}

function getUser(id) {
    return db('users')
    .where('id', '=', id)
}