import React, { useEffect, useState } from 'react'

import TextInput from '../components/TextInput'
import {__createUser} from '../services/UserServices'
import {__createAccount} from '../services/AccountServices'


const SignUp =(props)=>{

    
    const [ email,setEmail]=useState('')
    const [ password_digest,setPassword]=useState('')
    const [user_id, setUser]=useState('')

    
    const handleChangeE =({target})=>{
        setEmail(target.value)
    }

    const handleChangeP =({target})=>{
        setPassword(target.value)
    }
    const formData= {email,password_digest}
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          const res = await __createUser(formData)
          setPassword('')
          setEmail('')
          setUser(res.id)
          await __createAccount(user_id)
        } catch (error) {
          console.log(error)
        }
      } 


    return (
        <div className='signup'>
            <form className='form flex-col box' onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                

                <p>Email</p>
                <TextInput
                    placeholder='Your Email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChangeE}
                />
                <p></p>
                <p>Password</p>
                <TextInput
                    placeholder='Your Password'
                    type='password'
                    name='password'
                    value={password_digest}
                    onChange={handleChangeP}
                    className='last'
                />
               
                <button className='button'>SignUp</button>
            </form>
        </div>
    )
}

export default SignUp