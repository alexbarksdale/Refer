import jwtDecode from 'jwt-decode';
import { refergg } from '../../axios';
import setAuthToken from '../utils/setAuthToken';
import history from '../../history';

import {
    SET_CURRENT_USER,
    USER_LOADING,
    GET_ERRORS
} from './types';

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

export const registerUser = (userData) => dispatch => {
    refergg.post('/l', userData)
        .then(res => {
            history.push('/login');
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};

export const loginUser = userData => dispatch => {
    refergg.post('/user/login', userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwtDecode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};