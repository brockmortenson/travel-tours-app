import axios from 'axios';

const initialState = {
    user: {},
    isLoggedIn: false
};

const REQUEST_USER_DATA = 'REQUEST_USER_DATA';
const LOGOUT = 'LOGOUT';

export const requestUserData = () => {
    let data = axios.get('/auth/session')
        .then(response => response.data)
        .catch(err => console.log(err));
        return {
            type: REQUEST_USER_DATA,
            payload: data
        };
}

export const logout = () => {
    axios.delete('/auth/logout')
        .then(response => response.data)
        .catch(err => console.log(err));

        return {
            type: LOGOUT
        };
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_USER_DATA + '_FULFILLED':
            return {
                user: action.payload,
                isLoggedIn: true
            };

        case LOGOUT:
            return initialState;
        
        default:
            return state;
    }
}