import React from 'react'
import styled from 'styled-components'
import Task from './Task'
import {Droppable} from 'react-beautiful-dnd'

const Container = styled.div`
margin: 8px;
border: 1px solid lightgrey;
border-radius:2px;
width: 400px;
background-color: rgba(255, 255, 255, 0.655);
`

const Title = styled.h3`
padding: 8px`

const TaskList = styled.div`
padding:8px`

const Column =(props)=>{

console.log(props)
    return(
        
        <Container>
            <Title>{props.column.name}</Title>
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