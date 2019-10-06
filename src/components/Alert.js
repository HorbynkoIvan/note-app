import React, {useState, useContext} from "react"
import {Alert, Button} from "react-bootstrap";
import {AlertContext} from '../context/alert/alertContext'

export const AlertComponent = () => {
    const {alert, hide} = useContext(AlertContext);
//debugger
    //const [show, setShow] = useState(true);
    if (!alert.visible) return null;
    return (
        <Alert variant="danger" onClose={hide} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
                {alert.text}
            </p>
        </Alert>
    );
    //return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}