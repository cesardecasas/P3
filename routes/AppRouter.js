const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const BoardRouter= require('./BoardRouter')
const TaskRouter = require('./TasksRouter')

Router.use('/user', UserRouter)
Router.use('/board', BoardRouter)
Router.use('/task', TaskRouter)


module.exports = Router