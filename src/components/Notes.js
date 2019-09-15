import React from "react"
import {ListGroup} from "react-bootstrap";

export const Notes = ({notes}) => {
    return (
        <ListGroup>
            {notes.map((note)=>(
                <ListGroup.Item key={note.id}>{note.title}</ListGroup.Item>
            ))}
        </ListGroup>
    )
}
