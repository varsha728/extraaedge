import { useDispatch } from "react-redux"
import { BASE_URL, LOAD_USER_ENDPOINT } from "../helpers/url-endpoints"
import { SET_ERROR, SET_LOADED, SET_LOADING, SET_USERS } from "../redux/action-types/user-action-types"

const useLoadUsers = () => {
    const dispatch = useDispatch()
    const loadUsers = async () => {
        try {
           
            dispatch({
                type: SET_LOADING
            })
            const resp = await (await fetch(BASE_URL + LOAD_USER_ENDPOINT)).json()
            if (resp?.length) {
                
                dispatch({
                    type: SET_USERS,
                    payload: resp ?? []
                })
            } else {
                
                dispatch({
                    type: SET_ERROR,
                    payload: 'No users found'
                })
            }
            
        } catch (e) {
            
            dispatch({
                type: SET_ERROR
            })
        } finally {
            dispatch({
                type: SET_LOADED
            })
        }
    }
    return loadUsers
}

export default useLoadUsers