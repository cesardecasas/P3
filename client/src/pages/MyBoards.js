import React, { useEffect, useState } from "react"
import {__GetBoardsUser} from '../services/BoardServices'

const MyBoards = (props)=>{
    const [ boards,setBoards]=useState([])
    const loadBoards = async ()=>{
        try{
            const {id} = JSON.parse(localStorage.getItem('user'));
            const res = await __GetBoardsUser(id)
            setBoards(res);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        loadBoards();
    },[])


    return(
        <div>
            <h1>Boards</h1>
           {boards.map((item,index)=>
                ( <div className="card card-sm">
                        <div className="card-header">
                        {item.name}
                        </div>
                        <div className="card-body">

                        </div>
                   </div>
                )
           )}
        </div>
    )
}

export default MyBoards