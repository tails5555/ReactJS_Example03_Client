import {USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, LOGOUT_USER,
         USER_FROM_SERVER, USER_FROM_SERVER_SUCCESS, USER_FROM_SERVER_FAILURE, RESET_USER_FROM_SERVER
} from "../action/user_action";
const INITIAL_STATE = {
    current : {user : null, status : 'login', loading : false, error : null},
}

export default function(state=INITIAL_STATE, action) {
    let error;
    switch (action.type) {
        case USER_LOGIN :
            return {...state, current : { user: null, status: 'login', error: null, loading: true }};
        case USER_LOGIN_SUCCESS :
            return {...state, current : { user: action.payload, status: 'authenticated', error: null, loading: false}};
        case USER_LOGIN_FAILURE :
            error = action.payload.data || {message: action.payload.message};
            return {...state, current : { user: null, status: 'login', error: error, loading: false }};
        case LOGOUT_USER :
            return {...state, current : { user : null, status : 'login', error : null, loading : false}};

        case USER_FROM_SERVER :
            return {...state, current : { user: null, status: 'login', error: null, loading: true }};
        case USER_FROM_SERVER_SUCCESS :
            return {...state, current : { user: action.payload, status: 'authenticated', error: null, loading: false}};
        case USER_FROM_SERVER_FAILURE :
            error = action.payload.data || {message: action.payload.message};
            return {...state, current : { user: null, status: 'login', error: error, loading: false }};
        case RESET_USER_FROM_SERVER :
            return {...state, current : { user : null, status : 'login', error : null, loading : false}};

        default :
            return state;
    }
}