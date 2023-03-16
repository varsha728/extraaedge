import { SET_ERROR, SET_LOADED, SET_LOADING, SET_USERS } from "../action-types/user-action-types"

const initialUsersState = {
    loader: false,
    users: [],
    error: ''
}
export const userReducer = (state = initialUsersState, action) => { //state is the previous state, whereas action wil recieve type and paylaod
    switch(action.type) {
        case SET_LOADING: return { ...state, loader: true }
        case SET_LOADED: return { ...state, loader: false}
        case SET_USERS: return { ...state, loader: false, users: action?.payload ?? []}
        case SET_ERROR: return { ...state, error: action?.payload ?? 'Error in fetching users'}
        default : return state
    }
}