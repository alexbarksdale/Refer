import { refergg } from '../../axios';

const setAuthToken = (token) => {
    if (token) {
        refergg.defaults.headers.common.Authorization = token;
    } else {
        delete refergg.defaults.headers.common.Authorization;
    }
};

export default setAuthToken;
