import React, { useEffect, useState } from "react"
import logo from '../helpers/PThreeLogo.png'
import '../styles/Home.css'
import {GetJokes} from '../services/JokeServices'





const Home = (props) => {
   
    const [jokes, setJokes] =useState('')
    const [searched, setSearched]=useState(false)

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
    useEffect(() => {
        getJokes()
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

        </div>
    )
}

export default Home



