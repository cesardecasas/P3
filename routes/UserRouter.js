const Router = require('express').Router()
const controller = require('../controllers/AuthController')
const { readToken, verifyJwt } = require('../middleware')

// auth
Router.post('/login', controller.Login)
Router.post('/register', controller.Register)
Router.get('/session', readToken, verifyJwt, controller.SessionStatus)
// auth



module.exports = Router