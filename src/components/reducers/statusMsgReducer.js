import { SET_MESSAGE } from '../actions/types';

const statusmsg = (state = [], action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return { message: action.message, messageType: action.messageType };
        default:
            return state;
    }
};

export default statusmsg;
