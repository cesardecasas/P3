import React from 'react'
import styled from 'styled-components'
import Task from './Task'
import {Droppable} from 'react-beautiful-dnd'

const Container = styled.div`
margin: 8px;
border: 1px solid lightgrey;
border-radius:2px;
width: 400px;
background-color: rgba(255, 255, 255, 0.755);
`

const Title = styled.h3`
padding: 8px`

const TaskList = styled.div`
padding:8px`

const Button = styled.button`
width: 80px;
font-size: 14px;
border-radius: 0;
background-color: rgba(255, 255, 255, 0);
border: none;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0);
color: black;
`

const Column =(props)=>{
console.log(`column:`,props)
    return(
        
        <Container>
            <Title>{props.column.name}</Title>
            <Button onClick={()=>props.delete(props.column.id)}>delete</Button>
            <Droppable droppableId={JSON.stringify(props.column.id)}>
                {(provided)=>(
                <TaskList 
                innerRef={provided.innerRef()} 
                {...provided.droppableProps}>
                    {props.tasks.map((task, index)=>
                        <Task key={index} task={task} index={index}/>)}
                    {provided.placeholder}
                </TaskList>
                )}
            </Droppable>
        </Container>
    )
}


export default Column