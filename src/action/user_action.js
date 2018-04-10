import axios from 'axios';
import JWTDecode from 'jwt-decode';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const LOGOUT_USER='LOGOUT_USER';

export const USER_FROM_SERVER='USER_FROM_SERVER';
export const USER_FROM_SERVER_SUCCESS='USER_FROM_SERVER_SUCCESS';
export const USER_FROM_SERVER_FAILURE='USER_FROM_SERVER_FAILURE';
export const RESET_USER_FROM_SERVER='RESET_USER_FROM_SERVER';

const ROOT_URL = 'http://localhost:8080/example03_2';

export function userLogin(loginForm){
    const request=axios({
        method : 'post',
        url : `${ROOT_URL}/guest/login`,
        data : loginForm
    });
    return{
        type : USER_LOGIN,
        payload : request
    };
}

export function loginUserSuccess(userToken){
    const user=JWTDecode(userToken);
    return{
        type : USER_LOGIN_SUCCESS,
        payload : user
    };
}

export function loginUserFailure(error){
    return{
        type : USER_LOGIN_FAILURE,
        payload : error
    };
}

export function logoutUser(){
    return{
        type : LOGOUT_USER
    }
}

export function userFromServer(tokenFromStorage){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/user/findByToken/${tokenFromStorage}`,
        headers : {
            'Authorization' : `Bearer ${tokenFromStorage}`
        }
    });
    return {
        type : USER_FROM_SERVER,
        payload : request
    };
}

export function userFromServerSuccess(userToken) {
    const user=JWTDecode(userToken.data);
    return {
        type : USER_FROM_SERVER_SUCCESS,
        payload : user
    };
}

export function userFromServerFailure(error){
    return{
        type : USER_FROM_SERVER_FAILURE,
        payload : error
    };
}

export function resetUserFromServer(){
    return{
        type : RESET_USER_FROM_SERVER
    }
}
