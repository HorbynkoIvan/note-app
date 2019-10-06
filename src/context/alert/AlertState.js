import React, { useReducer } from 'react';
import { SHOW_ALERT, HIDE_ALERT } from '../types';
import { AlertContext } from './alertContext';
import { alertReducer } from './alertReducer';

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, { visible: false });
  const show = (text, alertType) => {
    dispatch({
      type: SHOW_ALERT,
      payload: { text, alertType },
    });
  };
  const hide = () => dispatch({ HIDE_ALERT });
  return (
    <AlertContext.Provider value={{ show, hide, alertState: state }}>
      {children}
    </AlertContext.Provider>
  );
};
