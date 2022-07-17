import actionTypes from "../actionTypes";

import { removeItem, setItem } from "../../utils/utils"

const initial_state = {
    allRecords: []
}

export default function (state = initial_state, action) {
    switch (action.type) {
        case actionTypes.SAVE_RECORD: {
            const data = action.payload;
            setItem(actionTypes.SAVE_RECORD, data)
            return { ...state, allRecords: data };
        }
        case actionTypes.CLEAR_RECORD: {
            removeItem(actionTypes.SAVE_RECORD)
            return { ...state, allRecords: [] };
        }
        default: {
            return { ...state }
        }
    }
}