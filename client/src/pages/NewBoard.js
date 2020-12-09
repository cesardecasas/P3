import React, { useState } from 'react'
import TextInput from '../components/TextInput'
import BoardServices from '../services/BoardServices.js';

const NewBoard = (props)=>{
    const [ boardName,setBoardName]=useState('')

    const handleChangeB =({target})=>{
        setBoardName(target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
           const res =  await BoardServices.create();
        }catch (error) {
            setFormError(true)
        }
    }

    return(
        <div>
            <div class="card">
                <div class="card-header">
                    New board
                </div>
                <div class="card-body">
                    <form className='form flex-col box' onSubmit={handleSubmit}>
                        <TextInput
                            placeholder='Board name'
                            type='text'
                            name='inputBoardName'
                            value={boardName}
                            onChange={handleChangeB}
                        />
                        <button className='button'>Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewBoard