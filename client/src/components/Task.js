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
        <Draggable draggableId={props.task.tasks_id} index={props.index}>
            {(provided)=>(
                <Container {...provided.dragHandleProps} {...provided.draggableProps}
                innerRef={provided.innerRef}
                >{props.task.name}
                </Container>

            )}
        </Draggable>
    )
}

export default Task