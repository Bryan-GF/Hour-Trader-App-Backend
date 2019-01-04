const db = require('../data/db.js');

module.exports = {
    getUsers,
    getCompanies,
    getBranches
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