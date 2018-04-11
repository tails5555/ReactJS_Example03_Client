import axios from 'axios'

export const USER_LOAD_CHATTING_LIST = 'USER_LOAD_CHATTING_LIST';
export const USER_LOAD_CHATTING_LIST_SUCCESS = 'USER_LOAD_CHATTING_LIST_SUCCESS';
export const USER_LOAD_CHATTING_LIST_FAILURE = 'USER_LOAD_CHATTING_LIST_FAILURE';
export const RESET_USER_LOAD_CHATTING_LIST = 'RESET_USER_LOAD_CHATTING_LIST';

export function userLoadChattingList(){
    return{
        type : USER_LOAD_CHATTING_LIST
    }
}

export function userLoadChattingListSuccess(){
    return{
        type : USER_LOAD_CHATTING_LIST_SUCCESS
    }
}

export function userLoadChattingListFailure(){
    return{
        type : USER_LOAD_CHATTING_LIST_FAILURE
    }
}

export function resetUserLoadChattingList(){
    return{
        type : RESET_USER_LOAD_CHATTING_LIST
    }
}

