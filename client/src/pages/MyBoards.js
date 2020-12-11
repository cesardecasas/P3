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
        <div className= 'title'>
            {boards ? <div className='board-header'><h1>My Boards</h1></div> : <div className='board-header'><h1>Create Your First Board!</h1></div>}
            <div className='crd-container'>
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
                           
                                <div className="card text-dark bg-info mb-3" style={{maxWidth: `18rem`}}>
                                <Link to={location} key={board.name}>
                                    <h3 class="card-header">{board.name}</h3>
                                </Link>
                                
                                <img href='https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=719046-847&recipeName=680' className='delete' onClick = {()=> DeleteBoard(board.id)} />
                                <img  src='https://image.flaticon.com/icons/png/512/124/124123.png' className='update' onClick = {()=> UpdateBoard()} />
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
                                    <div className='board-crud-image-container'>
                                         <img src='https://www.netclipart.com/pp/m/75-756943_eraser-tool-pixelated-basketball.png' className='eraser' onClick = {()=> DeleteBoard(board.id)} />
                                         <img src='https://banner2.cleanpng.com/20180331/rve/kisspng-apple-pencil-pixel-art-pixel-art-5ac02c99308f97.1806420915225437691989.jpg' className='pencil' onClick = {()=> UpdateBoard(board.id)} />
                                    </div>     
                                    <Link to={location2} key={board.name}>
                                        
                        
                                    </Link>
                                    <div className="card-body">
                                        <h5 className="card-title">Columns Name</h5>
                                        {board.Tasks.map(task=><p className='card-text'>{task.name}</p>)}
                                    </div>
                                </div>
                               
                        )
                    })}
                </div>
                 <button className ='create' onClick = {()=> CreateBoard()}>create board</button>
        </div>
    )
}

export default MyBoards