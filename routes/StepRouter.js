const Router = require('express').Router()
const controller = require('../controllers/StepController')

Router.get('/:task_id', controller.getSteps)
Router.post('/:task_id', controller.createStep)
Router.put('/:step_id', controller.updateStep)
Router.delete('/:step_id', controller.removeStep)

module.exports = Router