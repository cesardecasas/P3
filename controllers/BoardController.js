const {Board, Tasks} = require('../models')

const createBoard = async(req,res)=>{
    try {
        const user_id = req.params.user_id
        let boardBody = {
            user_id,
            ...req.body
        }
        const board = await Board.create(boardBody)
        res.send(board)
    } catch (error) {
        throw error
    }
}

const deleteBoard = async(req,res)=>{
    try {
        await Board.destroy({where:{id:req.params.board_id}})
        res.send({msg:`board with the id of ${req.params.board_id} deleted`})
    } catch (error) {
        throw error
    }
}

const updateBoard =async(req,res)=>{
    try {
        let boardId = parseInt(req.params.board_id)
        let updatedBoard = await Board.update(req.body,{
            where:{id:boardId},
            returning:true
        })
        res.send(updatedBoard)
    } catch (error) {
        throw error 
    }
}

const getBoard = async(req,res)=>{
    try {
        let boardId = parseInt(req.params.board_id)
        let board = await Board.findByPk(boardId)
        res.send(board)
    } catch (error) {
        throw error
    }
}

const getUserBoards = async(req,res)=>{
    try {
        let userId = parseInt(req.params.user_id)
        let board = await Board.findAll({
            where:{user_id:userId},
            include:[{model: Tasks}]
        })
        console.log(board)
        res.send(board)
    } catch (error) {
        throw error
    }
}

module.exports = {
    createBoard,
    deleteBoard,
    updateBoard,
    getBoard,
    getUserBoards

}