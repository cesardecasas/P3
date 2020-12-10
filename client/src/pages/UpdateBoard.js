import React, { useState } from 'react'
import TextInput from '../components/TextInput'
import {__UpdateBoard} from '../services/BoardServices'
import '../styles/Boards.css'


const UpdateBoard = (props)=>{
    const [ boardName,setboardName]=useState('')
    const [formError,setFormError]=useState(false)

    const handleChangeB =({target})=>{
        setboardName(target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            if(!boardName){
                setFormError(true);
                return;
            }
            console.log(boardName)
            const id = props.location.state
            const res =  await __UpdateBoard({name:boardName}, id);
            props.history.push('/myboards');
          
        }catch (error) {
            setFormError(true);
        }
    }

    return(
        <div>
            <div class="card card-sm">
                <div class="card-header">
                   Update board
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
                        <button className='button mt-2'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateBoard