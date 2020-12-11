import React, { useState } from 'react'
import TextInput from '../components/TextInput'
import {__GetBoard} from '../services/BoardServices'
import '../styles/Boards.css'
import {Link} from 'react-router-dom'
import {__CreateTask} from '../services/StepServices'


const NewTask = (props)=>{
    const [name,setBoardName]=useState('')
    const [description,setDesc]=useState('')
    const [struggles, setStruggles]=useState('')
    const [formError,setFormError]=useState(false)
    const [again, setAgain]=useState(true)
    const [board,setBoard]=useState()

    const handleChangeB =({target})=>{
        setBoardName(target.value)
    }

    const handleChangeD =({target})=>{
        setDesc(target.value)
    }

    const Struggles =({target})=>{
        if(target.value === 'true'){
            setStruggles(true)
        }
        if(target.value === 'false'){
            setStruggles(false)
        }
        
       
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            if(!name){
                setFormError(true);
                return;
            }
            const formData ={
                name,description,struggles
            }
            const boardId= props.location.state[0].id
            const res =  await __CreateTask(boardId, formData);
            const nBoard = await __GetBoard(boardId)
            setBoard(nBoard)
            setBoardName('')
            setAgain(false)
            return
        }catch (error) {
            setFormError(true);
        }
    }

    const yes =()=>{
        setAgain(true)
    }

    const location = {
        pathname:'/myboards',
        state:board
    }

    return again ?(
        <div>
            <div className="card card-sm">
                <div className="card-header">
                    Task
                </div>
                <div className="card-body">
                    {formError ? <p className='alert alert-danger'>Board name required</p>:<p></p>}
                    <form className='form flex-col box' onSubmit={handleSubmit}>
                        <TextInput
                            placeholder='Task name'
                            type='text'
                            name='name'
                            value={name}
                            onChange={handleChangeB}
                        />
                        <TextInput
                            placeholder='Description'
                            type='text'
                            name='description'
                            value={description}
                            onChange={handleChangeD}
                        />
                        <label for="struggles" >Struggles?</label>
                        <select name="struggles" id="cars" onClick={Struggles}>
                            <option value={true} className='dropdown-item' >Yes</option>
                            <option value={false} className='dropdown-item' >No</option>
                        </select>
                            <button className='button mt-2'>Create</button>
                    </form>
                </div>
            </div>
        </div>
    ):(
        <div>
            <div className="card card-sm">
                <div className="card-header">
                    Create Another Column?
                </div>
                <div className="card-body">
                    <button onClick={()=>yes()}>Yes</button>
                    <Link to={location}>
                        <button>Another Time</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NewTask