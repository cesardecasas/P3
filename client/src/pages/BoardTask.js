import React, { useEffect, useState } from 'react'
import { __DeleteTask} from '../services/StepServices'
import {__GetTasks, __DeleteColumn} from '../services/TaskServices'
import '@atlaskit/css-reset'
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

    const removeTask =async(id)=>{
        try {
            const remove = await __DeleteTask(id)
            props.history.push('/myboards')
        } catch (error) {
            throw error
        }
    }

    const location = {
        pathname:"/create/task",
        state:props.location.state
    }

    const location2={
        pathname:'/add/task',
        state:tasks
    }

    const  onDragEnd= result=>{

    }

    useEffect(()=>{
        getInf()
    },[inf])


    return tasks ? (

        <div className='main'>
           <div className='board-name-container'>
                <h1 className='board-name'>{props.location.state.name}</h1>
           </div> 

            
                {props.location.state.Tasks[0] ? columns.map((columnId, index)=>{
                        console.log(`h`,columnId)
                        const column = tasks[columnId];
                        const taskss = column.Steps.map(taskId=>taskId);
                        console.log(column)
                     return(
                         <div className=' task-container container' key={index}>
                             <div className='name-container'>
                                    <h3 className='name'>{column.name}</h3>
                             </div>
                             <div className='board-crud-image-container'>
                                    <img src='https://www.netclipart.com/pp/m/75-756943_eraser-tool-pixelated-basketball.png' className='eraser' onClick={()=>DeleteColumn(column.id)} />
                                    <Link to={location2}>
                                        <img src='https://banner2.cleanpng.com/20180331/rve/kisspng-apple-pencil-pixel-art-pixel-art-5ac02c99308f97.1806420915225437691989.jpg' className='pencil' />
                                    </Link>
                             </div>
                             <div className="progress">
                                 {column.Steps.length < 6 ? (
                                     <div className="progress-bar" role="progressbar" style={{width: `${column.Steps.length}0%`}} aria-valuenow='20' aria-valuemin="0" aria-valuemax="100">{column.Steps.length}0%</div>
                                 ):(<div className="progress-bar bg-warning" role="progressbar" style={{width: `${column.Steps.length}0%`}} aria-valuenow='20' aria-valuemin="0" aria-valuemax="100">{column.Steps.length}0%</div>)
                                 
                                }

                                
                             </div>
                             <div className='tasklist'>
                                 {taskss.map((task,index2)=> 
                                    <div className='task' key={index2}>{task.name}: {task.description} 
                                    <button className="actions" onClick={()=>removeTask(task.id)}>X</button>
                                    </div>
                                 )}
                             </div>
                         </div>
                     )
                     

                 }):<p></p>}
            
            <div className='add-button-container'>
                <Link to={location} key={props.location.state.id}>
                    <button className='Add Add-button'>+</button>
                </Link>
            </div>
        </div>
    ) : <h1>Loading...</h1> 
}

export default BoardTask