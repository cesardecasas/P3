import ApiClient from './ApiClient'


  const  __CheckSession = async()=>{
    try {
      const res = await ApiClient.get('/users/refresh/session')
      return res.data
    } catch (error) {
      throw error
    }
  }

  export default __CheckSession


  export const __createUser=async(formData)=>{
    try {
      const res = await ApiClient.post('/users', formData)
      return res.data
    } catch (error) {
      throw error 
    }
  }

  