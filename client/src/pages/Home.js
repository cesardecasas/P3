import React from "react"
import logo from '../helpers/PThreeLogo.png'
import '../styles/Home.css'

const Home = (props) => {
    try{
      
    } catch(error){
        console.log(error)
    }
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
                <a href=''><button>Create a New Board</button></a>
            </div>
        </div>
    )
}

export default Home



