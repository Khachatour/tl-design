const express = require('express')
const controller = require('./portfolio')
const router = express.Router()

router.get('/portfolio', controller.portfolio)

module.exports = router
