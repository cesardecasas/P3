import React, { useEffect, useState } from 'react'
import {__GetBoards, __DeleteBoard} from '../services/BoardServices'
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
    const CreateBoard = () => {
        props.history.push('/new-board')
    }
    const DeleteBoard = async (boardId) => {
        try {
            const deleteBoard = await __DeleteBoard(boardId)
            props.history.push('/myboards')
        }
        catch (error) {
            console.log(error)
        }
    }
    const UpdateBoard = () => {
        props.history.push('/update-board')
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
                let location2 = {
                    pathname: '/update-board',
                    state:board.id
                }

                return board.Tasks.length >= 1 ?(   
                        <div class="card text-dark bg-info mb-3" style={{maxWidth: `18rem`}}>
                        <Link to={location} key={board.name}>
                            <h3 class="card-header">{board.name}</h3>
                        </Link>
                        
                        <button className='delete' onClick = {()=> DeleteBoard(board.id)}>delete</button>
                        <button className='delete' onClick = {()=> UpdateBoard()} > update</button>
                        <div class="card-body">
                            <h5 class="card-title">Columns Name</h5>
                            {board.Tasks.map(task=><p className='card-text'>{task.name}</p>)}
                        </div>
                    </div>
                ):(
                    <div className="card text-dark bg-secondary mb-3" style={{maxWidth: `18rem`}}>
                        <Link to={location} key={board.name}>
                            <h3 className="card-header">{board.name}</h3>
                        </Link>
                        
                        <button className='delete' onClick = {()=> DeleteBoard(board.id)}>delete</button>
                        <Link to={location2} key={board.name}>
                            
            
                        <button className='delete' onClick = {()=> UpdateBoard(board.id)} > update</button>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">Columns Name</h5>
                            {board.Tasks.map(task=><p className='card-text'>{task.name}</p>)}
                        </div>
                    </div>
                )
            })}
                 <button className ='create' onClick = {()=> CreateBoard()}>create board</button>
        </div>
    )
}

export default MyBoards