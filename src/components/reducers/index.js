import { combineReducers } from 'redux';
import statusMsgReducer from './statusMsgReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    statusMsgReducer,
    authReducer,
    errorReducer
});
