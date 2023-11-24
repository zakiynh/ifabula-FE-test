import { combineReducers } from 'redux';
import questReducer from './questReducer';
import hitEndReducer from './hitEndReducer';

const rootReducer = combineReducers({
    quest: questReducer,
    hitEnd: hitEndReducer
});

export default rootReducer;