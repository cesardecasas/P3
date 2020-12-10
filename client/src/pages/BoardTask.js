import React, { useEffect, useState } from 'react'
import {__GetSteps} from '../services/StepServices'
import {__GetTasks} from '../services/TaskServices'
import Column from '../components/Column'
import '@atlaskit/css-reset'
import { DragDropContext} from 'react-beautiful-dnd'

const BoardTask = ()=>{

    const [tasks, setTasks]=useState([])
    const [steps, setSteps]=useState([])
    const [columns, setColumns]= useState([])
    const [inf, setInf]=useState(false)


    const getInf =async()=>{
        try {
            const columns = await __GetTasks(1)
            const description = await __GetSteps(1)
            setSteps(description)
            setTasks(columns)
            setColumns([tasks.length])
        } catch (error) {
            throw error 
        }
    }

    const  onDragEnd= result=>{

    }

    useEffect(()=>{
        getInf()
    },[inf])
    console.log(tasks)
    return tasks && steps ? (
        <div>
            <h1>hello</h1>
            <DragDropContext  onDragEnd={onDragEnd}>
                {columns.map(columnId=>{
                    
                        const column = tasks[columnId];
                        console.log(column);
                        const taskss = column.Steps.map(taskId=>steps[taskId]);
                     return <Column column={column} tasks={taskss} key={column.id}/>
                     
                 })}
            </DragDropContext>
        </div>
    ) : <h1>Loading...</h1> 
}

export default BoardTask