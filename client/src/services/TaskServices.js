import ApiClient from './ApiClient'

export const __GetTasks=async(boardId)=>{
    try {
        const res = await ApiClient.get(`/task/${boardId}`)
        return res.data
    } catch (error) {
        throw error 
    }
}