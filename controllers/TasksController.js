const {Tasks} =require('../models')

const createTask = async(req,res)=>{
    try {
        const userId = parseInt(req.params.user_id)
        const boardId = parseInt(req.params.board_id)
        let TaskBody = {
            userId,
            boardId,
            ...req.body
        }
        const task = await Tasks.create(TaskBody)
        res.send(task)
    } catch (error) {
        throw error
    }
}

const getTasks = async(req,res)=>{
    try {
        const boardId = parseInt(req.params.board_id)
        const tasks = await tasks.findAll({where:{board_id:boardId}})
        res.send(tasks)        
    } catch (error) {
        throw error
    }
}

const removeTask =async(req,res)=>{
    try {
        const taskId = parseInt(req.res.task_id)
        await Tasks.destroy({where:{id:taskId}})
        res.send({masg:`task with the id of ${taskId} was deleted`})
    } catch (error) {
        throw error
    }
}

const updateTask = async(req,res)=>{
    try {
        const taskid= parseInt(req.params.task_id)
        let updatedTask = await Tasks.update(req.body,{
            where:{id:taskid},
            returning:true
        })
        res.send(updatedTask)
    } catch (error) {
        throw error 
    }
}


module.exports = {
    createTask,
    getTasks,
    removeTask,
    updateTask
}