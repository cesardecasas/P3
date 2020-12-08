import React from "react"
import logo from '../helpers/PThreeLogo.png'
import '../styles/Home.css'

const Home = (props) => {
    try{
        console.log(props)
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
                        Sticky Board!
                    </p>
                </div>
                <div className='intro-footer'>
                    <img className='image'  src={logo} />
                    <p><span>Welcome Back, {props.currentUser.name}</span></p>
                </div>
                
            </div>
        </div>
    )
}

export default Home



