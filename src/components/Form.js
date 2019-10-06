import React, { useState, useContext } from 'react';
import { Form } from 'react-bootstrap';
import { AlertContext } from '../context/alert/alertContext';

export const FormInputComponent = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim()) {
      alert.show('Note created!', 'success');
      setValue('');
    } else {
      alert.show('Please enter text!', 'danger');
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Note name</Form.Label>
        <Form.Control
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Enter note name"
        />
      </Form.Group>
    </Form>
  );
};
