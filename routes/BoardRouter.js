const Router =  require('express').Router()
const controller = require('../controllers/BoardController')

Router.post('/:user_id', controller.createBoard)
Router.delete('/:board_id', controller.deleteBoard)
Router.put('/:board_id', controller.updateBoard)
Router.get('/:board_id', controller.getBoard)
Router.get('/user/:user_id', controller.getUserBoards)
Router.get('/poops/:user_id', controller.getRecentBoards )


module.exports = Router