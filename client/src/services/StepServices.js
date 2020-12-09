import ApiClient from './ApiClient'

export const __GetSteps =async(taskId)=>{
    try {
        const res = await ApiClient.get(`/step/${taskId}`)
        return res.data
    } catch (error) {
        throw error 
    }
}