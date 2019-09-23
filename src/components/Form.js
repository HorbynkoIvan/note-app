import React, {useState, useContext} from "react"
import {Form} from "react-bootstrap";

export const FormComponent = () => {
    const [value, setValue]=useState()
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Note name</Form.Label>
                <Form.Control type="text" placeholder="Enter note name"/>
            </Form.Group>
        </Form>
    )
}
