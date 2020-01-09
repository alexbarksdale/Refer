import { SET_MESSAGE } from './types';

export const setStatusMessage = (message, messageType) => ({
    type: SET_MESSAGE,
    message,
    messageType
});

export const todo = () => {};
