import React, { useState } from 'react'
import TextInput from '../components/TextInput'
import '../styles/Login.css'
import {__LoginUser} from '../services/UserServices'

const LogIn = (props)=>{

    
    const [ email,setEmail]=useState('')
    const [ password,setPassword]=useState('')
    const [formError,setFormError]=useState(false)

    
    const handleChangeE =({target})=>{
        setEmail(target.value)
    }

    const handleChangeP =({target})=>{
        setPassword(target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userInf={email, password}
            let a =()=> props.history.push('/home')
          const loginData = await __LoginUser(userInf)
          console.log(loginData)
          props.toggleAuthenticated(true, loginData.user, () =>
            props.history.push('/feed')
          )
          return
        } catch (error) {
          setFormError(true)
        }
      }

    return (
    <div>
        <div className='signup'>
            <form className='form flex-col box' onSubmit={handleSubmit}>
                <h2>Log In</h2>

                {formError ? <p className='alert alert-danger'>Invalid credentials</p>:<p></p>}
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