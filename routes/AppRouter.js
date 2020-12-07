const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const BoardRouter= require('./BoardRouter')
const TaskRouter = require('./TasksRouter')
const StepRouter = require('./StepRouter')

Router.use('/user', UserRouter)
Router.use('/board', BoardRouter)
Router.use('/task', TaskRouter)
Router.use('/step', StepRouter)


module.exports = Router