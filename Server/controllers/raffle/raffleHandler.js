const express = require('express')
const router = express.Router()

//CRUD functions
const createRaffle = require('./createRaffle')

//Middleware functions
const adminAccess = require('../../middlewares/adminAccess')
const auth = require('../../middlewares/auth')

//Routes and Middlewares
router.post('/create', createRaffle)


module.exports = router
