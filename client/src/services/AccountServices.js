import ApiClient from './ApiClient'


export const __createAccount=async(tier, userId)=>{
    try {
        const res = await ApiClient.post(`/accounts/${userId}`,tier)
        return res.data
    } catch (error) {
        throw error
    }
}