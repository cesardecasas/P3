import React, { useEffect, useState } from 'react'
import TextInput from '../components/TextInput'
import '../styles/LogIn.css'

const LogIn = ()=>{

    
    const [ email,setEmail]=useState('')
    const [ password,setPassword]=useState('')


    
    const handleChangeE =({target})=>{
        setEmail(target.value)
    }

    const handleChangeP =({target})=>{
        setPassword(target.value)
    }
    return (<div>
        <div className='singup'>
            <form className='form flex-col box'>
                <h2>Log In</h2>
                

                <p>Email</p>
                <TextInput
                    placeholder='Your Email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChangeE}
                />
                
                <p>Password</p>
                <TextInput
                    placeholder='Your Password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChangeP}
                    className='last'
                />
                
                
                <button className='button'>SignIn</button>
            </form>
            
        </div>
        <footer className='filler'>
            <h5>thanks for choosing us!</h5>
            <cite>need any support? call: (123)-345-6789</cite>
        </footer>
        </div>
    )
}


export default LogIn