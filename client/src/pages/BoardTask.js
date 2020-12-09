import React, { useEffect, useState } from 'react'
import {__GetSteps} from '../services/StepServices'
import {__GetTasks} from '../services/TaskServices'
import Column from '../components/Column'
import '@atlaskit/css-reset'
import { DragDropContext} from 'react-beautiful-dnd'

const BoardTask = ()=>{

    const [tasks, setTasks]=useState([])
    const [steps, setSteps]=useState([])
    const [inf, setInf]=useState(false)


    const getInf =async()=>{
        try {
            const columns = await __GetTasks(1)
            const description = await __GetSteps(1)
            setSteps(description)
            setTasks(columns)
            console.log('ready')
        } catch (error) {
            throw error 
        }
    }

    const  onDragEnd= result=>{

    }

    useEffect(()=>{
        getInf()
    },[inf])
   
    return(
        <div>
            <h1>hello</h1>
            <DragDropContext  onDragEnd>
                {tasks.map(task=>{
                    if(steps.tasks_id === tasks.id){
                        const column = tasks[task];
                        const taskss = steps;
                     return <Column column={column} title={task.name} tasks={taskss}/>
                     }
                 })}
            </DragDropContext>
        </div>
    )
}

export default BoardTask