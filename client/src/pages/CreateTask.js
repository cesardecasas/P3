import React, { useState } from 'react'
import TextInput from '../components/TextInput'
import {__CreateColumn} from '../services/TaskServices'
import {__GetBoard} from '../services/BoardServices'
import '../styles/Boards.css'
import {Link} from 'react-router-dom'


const NewBoard = (props)=>{
    const [boardName,setBoardName]=useState('')
    const [formError,setFormError]=useState(false)
    const [again, setAgain]=useState(true)
    const [board,setBoard]=useState()

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
            const boardId= props.location.state.id
            const res =  await __CreateColumn(id, boardId, {name:boardName});
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
        pathname:'/board',
        state:board
    }

    return again ?(
        <div>
            <div className="card card-sm">
                <div className="card-header">
                    Column
                </div>
                <div className="card-body">
                    {formError ? <p className='alert alert-danger'>Board name required</p>:<p></p>}
                    <form className='form flex-col box' onSubmit={handleSubmit}>
                        <TextInput
                            placeholder='Column name'
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

export default NewBoard