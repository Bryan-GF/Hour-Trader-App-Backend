require('dotenv').config()
const express = require('express');
const server = express();
const cors = require('cors');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const userDB = require('./userdb.js')

server.use(express.json())
server.use(cors());

function generateToken(user) {
    const payload = {
      id: user.id,
      username: user.username
    };
    const secret = process.env.SECRET;
    const options = {
      expiresIn: '20m',
    };
    return jwt.sign(payload, secret, options);
}

server.get('/users', (req,res) => {
    userDB.getUsers()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.get('/company', (req,res) => {
    userDB.getCompanies()
    .then(companies => {
        res.status(200).json(companies);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.get('/branch', (req,res) => {
    userDB.getBranches()
    .then(branches => {
        res.status(200).json(branches);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.post('/api/user/login', (req,res) => {
    let userCred = req.body;
    userDB.getUser(userCred)
    .then(user => {
        if(user && bcrypt.compareSync(userCred.password, user[0].password)) {
            const token = generateToken(user[0]);
            res.status(200).json(token)
        } else {
            res.status(401).json({message: 'Invalid login information'})
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })
})


module.exports = server;