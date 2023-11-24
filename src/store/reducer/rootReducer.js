import { combineReducers } from 'redux';
import dataReducer from './questReducer';
import hitEndReducer from './hitEndReducer';

const rootReducer = combineReducers({
    data: dataReducer,
    hitEnd: hitEndReducer
});

export default rootReducer;