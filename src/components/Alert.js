import React, { useContext } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { AlertContext } from '../context/alert/alertContext';

export const AlertComponent = () => {
  const { alertState, hide } = useContext(AlertContext);
  if (!alertState.visible) return null;
  const showAlert = () =>
    [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ].map((variant, idx) => {
      if (variant === alertState.alertType) {
        return (
          <Alert key={idx} variant={variant} onClose={hide} dismissible>
            <Alert.Heading>Attention!</Alert.Heading>
            <p>{alertState.text}</p>
          </Alert>
        );
      }
    });
  return showAlert();
};
