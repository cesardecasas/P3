import Jokes from './Axios'


export const GetJokes = async()=>{
    try {
        
        const res = await Jokes.get('/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single')
        console.log(res.data)
        return res.data  

    } catch (error) {
        throw error
    }
}