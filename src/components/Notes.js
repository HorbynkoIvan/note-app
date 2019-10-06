import React from "react"
import {ListGroup, CloseButton} from "react-bootstrap";

export const Notes = ({notes}) => {
    return (
        <ListGroup>
            {notes.map((note)=>(
                <ListGroup.Item key={note.id}>
                    {note.title}
                    <strong className='ml-2'>{new Date().toLocaleDateString()}</strong>
                    <CloseButton/>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
