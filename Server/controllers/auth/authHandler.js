const express = require('express')
const router = express.Router()

const verifAccount = require('./verifAccount')
const verifUser = require('./verifUser')

//rotas em uso:
router.post('/', verifAccount.findByAccount)
router.post('/me', verifUser.findByUser)

module.exports = router