require('dotenv').config()
const express = require('express');
const server = express();
const cors = require('cors');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

server.use(express.json())
server.use(cors());

module.exports = server;