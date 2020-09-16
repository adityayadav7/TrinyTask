const express = require('express')
const router = express.Router()

const runSample= require('./controller/controller')

router.get('/ee',runSample);