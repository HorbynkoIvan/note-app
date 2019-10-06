import React, {useState, useContext} from "react"
import {Form} from "react-bootstrap";

export const FormInputComponent = () => {
    const [value, setValue] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Note name</Form.Label>
                <Form.Control type="text" onChange={e => setValue(e.target.value)} placeholder="Enter note name"/>
            </Form.Group>
        </Form>
    )
}
