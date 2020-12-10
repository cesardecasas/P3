
import ApiClient from './ApiClient'

export const __GetTasks=async(boardId)=>{
    try {
        const res = await ApiClient.get(`/task/${boardId}`)
        return res.data
    } catch (error) {
        throw error 
    }
}

export const  __CreateColumn=async(userId,boardId, formData)=>{
    try {
        const res = await ApiClient.post(`/task/${userId}/${boardId}`, formData)
        return res.data
    } catch (error) {
        throw error
    }
}