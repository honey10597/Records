import { combineReducers } from 'redux';

import recordReducers from './recordReducers';

const appReducer = combineReducers({
    recordReducers,
});

export default appReducer;
