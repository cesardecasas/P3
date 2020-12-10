import React, { useEffect, useState } from 'react'
import {__GetBoards} from '../services/BoardServices'
import {Link} from 'react-router-dom'
import '../styles/MyBoard.css'

const MyBoards = (props)=>{

    const [boards,setBoards]=useState([])
    const [get, setGet]=useState(false)

    const getBoards =async()=>{
        try {
            const boards = await __GetBoards(props.currentUser.id)
            setBoards(boards)
        } catch (error) {
            throw error 
        }
    }

    useEffect(()=>{
        getBoards()
    },[get])

    return(
        <div>
            {boards ? <h1>My Boards</h1> : <h1>Create Your First Board!</h1>}
            {boards.map((board,index)=>{
                
                let location ={
                    pathname:'/board',
                    state:board
                }

                return board.Tasks.length >= 1 ?(   
                    <div class="card text-dark bg-info mb-3" style={{maxWidth: `18rem`}}>
                        <Link to={location} key={board.name}>
                            <h3 class="card-header">{board.name}</h3>
                        </Link>
                        <button className='delete'>delete</button>
                        <button className='delete'>update</button>
                        <div class="card-body">
                            <h5 class="card-title">Columns Name</h5>
                            {board.Tasks.map(task=><p className='card-text'>{task.name}</p>)}
                        </div>
                    </div>
                ):(
                    <div class="card text-dark bg-secondary mb-3" style={{maxWidth: `18rem`}}>
                        <h3 class="card-header">{board.name}</h3>
                        <div class="card-body">
                            <h5 class="card-title">Info card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MyBoards