import React, { useEffect, useState } from "react"
import logo from '../helpers/PThreeLogo.png'
import '../styles/Home.css'
import {__GetRecentBoards, __DeleteBoard} from '../services/BoardServices'
import {Link} from 'react-router-dom'

import {GetJokes} from '../services/JokeServices'






const Home = (props) => {
   
    const [jokes, setJokes] =useState('')
    const [searched, setSearched]=useState(false)
    const [boards , setBoards]=useState([])

    const redirection = () => {
        props.history.push('/myboards')
    }

    const getJokes = async() => {
        try{
            const res = await GetJokes()
            setJokes(res.joke)
            console.log(res.joke)
        } catch(error){
            console.log(error)
        }
    }

    const getBoards = async() => {
        try{
            const res = await __GetRecentBoards(props.currentUser.id)
            console.log(boards)
            setBoards(res)
        } catch(error){
            console.log(error)
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



    useEffect(() => {
        getJokes()
        getBoards()
        
    },[searched])

    return(
        <div className='entire-container'>
            <div className='intro-container'>
                <div className='intro'>
                    <h2>
                        Let's Get It Done!
                    </h2>
                    <p>
                        <strong>Sticky Board!</strong>
                    </p>
                </div>
                <div className='intro-footer'>
                    <img className='image'  src={logo} />
                    <p><strong>Welcome Back, {props.currentUser.name}</strong></p>
                </div>
                <button onClick={()=> redirection()}>Lets Get Started</button>
            </div>
            <div className='joke-container'>
               
                   
                        <p className='joke-header'>
                           <strong> Here's a Quick Joke For You!</strong>
                        </p>
                    
                    
                        <p className='joke'>
                            <strong>{jokes}</strong>
                        </p>
                   
               
               
            </div>
            <div className='recent-boards'>
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
                                <button className='delete' onClick = {()=> UpdateBoard()} > update</button>
                                <div className="card-body">
                                    <h5 className="card-title">Columns Name</h5>
                                    {board.Tasks.map(task=><p className='card-text'>{task.name}</p>)}
                                </div>
                            </div>
                        )
                    })}

            </div>

        </div>
    )
}

export default Home



