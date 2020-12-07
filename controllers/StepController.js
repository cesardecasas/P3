const {Steps} =require('../models')


const createStep = async(req,res)=>{
    try {
        const task_id = parseInt(req.params.task_id)
        const taskBody = {
            task_id,
            ...req.body 
        }
        const step = await Steps.create(taskBody)
        res.send(createStep)
    } catch (error) {
        throw error 
    }
}

const updateStep = async(req,res)=>{
    try {
        const stepId = parseInt(req.params.step_id)
        const updatedStep = await Steps.update(req.body,{
            where:{id:stepId},
            returning:true
        })
        res.send(updatedStep)
    } catch (error) {
        throw error 
    }
}

const removeStep=async(req,res)=>{
    try {
        const stepId = parseInt(req.params.step_id)
        await Steps.destroy({where:{id:stepId}})
        res.send({msg:`step with the id of ${stepId} was destroyed`}) 
    } catch (error) {
        throw error 
    }
}

const getSteps =async(req,res)=>{
    try {
        const taskId = parseInt(req.params.task_id)
        const steps = await Steps.findAll({where:{task_id:taskId}})
        res.send(steps)
    } catch (error) {
        throw error 
    }
}

module.exports={
    getSteps,
    removeStep,
    updateStep,
    createStep
}