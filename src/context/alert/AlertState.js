import React, {useReducer} from 'react';
import {HIDE_ALERT, SHOW_ALERT} from "../types";
import {AlertContext} from "./alertContext";
import {alertReducer} from "./alertReducer";

export const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, {visible: false});
    const show = (text, type = "Warning!") => {
        dispatch({SHOW_ALERT, payload: {text, type}})
    };
    const hide = () => dispatch({HIDE_ALERT});
    return (
        <AlertContext.Provider values={{show, hide, alert: state}}>
            {children}
        </AlertContext.Provider>
    )
}