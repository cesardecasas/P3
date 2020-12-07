const Router = require('express').Router()
const controller = require('../controllers/TasksController')

Router.get('/:board_id', controller.getTasks)
Router.post('/:user_id/:board_id', controller.createTask)
Router.put('/:task_id', controller.updateTask)
Router.delete('/:task_id', controller.removeTask)


module.exports = Router