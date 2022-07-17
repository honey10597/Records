import store from '../store';
import actionTypes from '../actionTypes';

const { dispatch } = store;

export const saveRecordData = (data) => {
    dispatch({
        type: actionTypes.SAVE_RECORD,
        payload: data,
    })
}

export const clearRecordData = (data) => {
    dispatch({
        type: actionTypes.CLEAR_RECORD,
        payload: [],
    })
}