import { SET_CURRENT_USER, USER_LOADING } from '../actions/types';

const isEmpty = require('is-empty');

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
};

const auth = (state = initialState, action) => {
    let test = {};
    switch (action.type) {
        case SET_CURRENT_USER:
            test = {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
            return test;
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};

export default auth;
