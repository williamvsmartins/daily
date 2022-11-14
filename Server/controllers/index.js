// Express imports
const express = require('express')
const router = express.Router()

//Handlers
const accountHandler = require('./account/accountHandler')
const authHandler = require('./auth/authHandler')
const raffleHandler = require('./raffle/raffleHandler')

// Routes in use
router.use('/bank', accountHandler)
router.use('/auth', authHandler)
router.use('/raffle', raffleHandler)
router.use('/', (_, res) => res.status(200).json({msg: 'Bem vindo à API de Sistema bancário', author: 'WilliamVSMartins', docs: 'https://github.com/WilliamVSMartins/Daily'}))
router.use('*', (_, res) => res.status(404).json({msg: 'Não tem nada para você por aqui 👀'}))

module.exports = router;