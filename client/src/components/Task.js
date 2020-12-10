import React from 'react'
import styled from 'styled-components'
import {Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
border: 1px solid lightgrey;
border-radius:2px;
padding: 8px;
margin-bottom: 8px;`

const Task =(props)=>{

    return(
        <Draggable draggableId={JSON.stringify(props.task.id)} index={props.index}>
            {(provided)=>(
                <Container 
                innerRef={provided.innerRef} 
                {...provided.draggableProps}
                {...provided.dragHandleProps} 
                
                >{props.task.name}
                </Container>

            )}
        </Draggable>
    )
}

export default Task