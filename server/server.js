require('dotenv').config()
const express = require('express');
const server = express();
const cors = require('cors');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const userDB = require('./userdb.js')
const timeDB = require('./timetabledb.js')

server.use(express.json())
server.use(cors());

function generateToken(user) {
    const payload = {
      id: user.id,
      username: user.username,
      sector:  user.SECTOR_ID
    };
    const secret = process.env.SECRET;
    const options = {
      expiresIn: '20m',
    };
    return jwt.sign(payload, secret, options);
}

server.post('/api/user/login', (req,res) => {
    let userCred = req.body;
    userDB.userLogin(userCred)
    .then(user => {
        if(user && bcrypt.compareSync(userCred.password, user[0].password)) {
            const token = generateToken(user[0]);
            console.log(token)
            res.status(200).json(token)
        } else {
            res.status(401).json({message: 'Invalid login information'})
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.get('/api/timetable', (req, res) => {
    let sectorID = req.body;
    timeDB.getTimes(sectorID)
    .then(timetables => {
        res.status(200).json(timetables);
    })
    .catch(err => {
        res.status(401).json(err);
    })
})


module.exports = server;