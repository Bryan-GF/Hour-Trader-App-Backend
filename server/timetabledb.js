const db = require('../data/db.js');

module.exports = {
    getTimes
}


function getTimes(id) {
    return db('timetable')
    .where('Sector_ID', '=', id)
}