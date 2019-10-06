import {SHOW_ALERT, HIDE_ALERT} from "../types";

const handler = {
    [SHOW_ALERT]: (state, {payload}) => ({...payload, visible: true}),
    [HIDE_ALERT]: (state) => ({...state, visible: false}),
    DEFAULT: state => state
}

export const alertReducer = (type, action) => {
    const handle = handler[type] || handler.DEFAULT;
    return handle(type, action)
}