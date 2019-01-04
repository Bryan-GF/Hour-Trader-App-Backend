require('dotenv').config()
const express = require('express');
const server = express();
const cors = require('cors');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const userDB = require('./userdb.js')

server.use(express.json())
server.use(cors());

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


module.exports = server;