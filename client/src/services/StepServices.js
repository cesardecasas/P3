import ApiClient from './ApiClient'

export const __GetSteps =async(taskId)=>{
    try {
        const res = await ApiClient.get(`/step/${taskId}`)
        return res.data
    } catch (error) {
        throw error 
    }
}

export const __CreateTask=async(taskId,formData)=>{
    try {
        const res = await ApiClient.post(`/step/${taskId}`,formData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __DeleteTask=async(taskId)=>{
    try {
        const res =await ApiClient.delete(`/step/${taskId}`)
        return res.data
    } catch (error) {
        throw error 
    }
}