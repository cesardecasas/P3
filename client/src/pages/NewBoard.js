import React, { useState } from 'react'
import TextInput from '../components/TextInput'
import {__CreateBoard} from '../services/BoardServices'
import '../styles/Boards.css'

const NewBoard = (props)=>{
    const [ boardName,setBoardName]=useState('')
    const [formError,setFormError]=useState(false)

    const handleChangeB =({target})=>{
        setBoardName(target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            if(!boardName){
                setFormError(true);
                return;
            }
            const {id} = JSON.parse(localStorage.getItem('user'));
            const res =  await __CreateBoard({name:boardName},id);
            props.history.push('/myboards');
          
        }catch (error) {
            setFormError(true);
        }
    }

    return(
        <div>
            <div class="card card-sm">
                <div class="card-header">
                    New board
                </div>
                <div class="card-body">
                    {formError ? <p className='alert alert-danger'>Board name required</p>:<p></p>}
                    <form className='form flex-col box' onSubmit={handleSubmit}>
                        <TextInput
                            placeholder='Board name'
                            type='text'
                            name='inputBoardName'
                            value={boardName}
                            onChange={handleChangeB}
                        />
                        <button className='button mt-2'>Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewBoard