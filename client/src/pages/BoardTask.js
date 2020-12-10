import React, { useEffect, useState } from 'react'
import {__GetSteps} from '../services/StepServices'
import {__GetTasks,__CreateColumn, __DeleteColumn} from '../services/TaskServices'
import Column from '../components/Column'
import '@atlaskit/css-reset'
import { DragDropContext} from 'react-beautiful-dnd'
import '../styles/Boards.css'
import {Link} from 'react-router-dom'

const BoardTask = (props)=>{

    const [tasks, setTasks]=useState([])
    const [columns, setColumns]= useState([])
    const [inf, setInf]=useState(false)


    const getInf =async()=>{
        try {
                
                const columns = await __GetTasks(props.location.state.id)
                setTasks(columns)
                for(let i=0;i<= tasks.length ; i++){
                    setColumns([i]) 
                }
                
           
        } catch (error) {
            throw error 
        }
    }

    const DeleteColumn =async(id)=>{
        try {

            const newColumn = await __DeleteColumn(id)
            props.history.push('/myboards')
        } catch (error) {
            throw error
        }
    }

    const location = {
        pathname:"/create/task",
        state:props.location.state
    }

    const  onDragEnd= result=>{

    }

    useEffect(()=>{
        getInf()
    },[inf])


    return tasks ? (
        <div className='main'>
            <h1>{props.location.state.name}</h1>
            <DragDropContext  >
                {props.location.state.Tasks[0] ? columns.map(columnId=>{
                    
                        const column = tasks[columnId];
                        const taskss = column.Steps.map(taskId=>taskId);
                     return <Column column={column} tasks={taskss} key={column.id} delete={DeleteColumn}/>
                     
                 }):<p></p>}
            </DragDropContext>
            <Link to={location} key={props.location.state.id}>
                <button className='Add'>+</button>
            </Link>
        </div>
    ) : <h1>Loading...</h1> 
}

export default BoardTask