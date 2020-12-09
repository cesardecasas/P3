import axios from 'axios';
import ApiClient from './ApiClient'

const service = {
   Tasks: `${ApiClient}/task`
  }

const TaskService = {
    
    get:async (boardId)=>{
        const res = await  axios.get(`${service.Tasks}/${boardId}`);
        return res;
    },
    delete:async (boardId)=>{
        const res = await  axios.delete(`${service.Boards}/${boardId}`);
        return res;
    },
    create: async (data)=>{
        const res = await  axios.post(service.Boards,data);
        return res;
    },
    update:async (boardId,data)=>{
        const res = await  axios.put(`${service.Boards}/${boardId}`,data);
        return res;
    },
};

export default BoardService;