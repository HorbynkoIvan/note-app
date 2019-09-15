import React, {useState} from "react"
import {Alert, Button} from "react-bootstrap";

export const AlertComponent = ({alert}) => {
    const [show, setShow] = useState(true);
    if (!alert) return null;
    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    {alert.text}
                </p>
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}