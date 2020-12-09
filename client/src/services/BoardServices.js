 import ApiClient from './ApiClient'

export const __GetBoards =async(boardId)=>{
    try {
        const res = await ApiClient.get(`/board/${boardId}`)
        return res.data
    } catch (error) {
        throw error 
    }
}


export const __CreateBoard = async (formData, userId) => {
    try {
      const res = await ApiClient.post(`/board/${userId}`, formData)
      return res.data
    } catch (error) {
      throw error
    }
}

export const __GetBoard = async (boardId) => {
  try {
    const res = await ApiClient.get(`/board/${boardId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __UpdateBoard = async (formData, boardId) => {
  try {
    const res = await ApiClient.put(`/board/${boardId}`, formData)
    return res.data
  } catch (error) {
    throw error
  }
}

// module.exports (
//     __GetBoards,
//     __CreateBoard,
//     __GetBoard,
//     __UpdateBoard        
// )