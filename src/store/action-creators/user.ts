import {UserAction, UsersActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UsersActionTypes.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setTimeout(()=>{
                dispatch({type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
            }, 1000)

        } catch (e) {
            dispatch({
                type: UsersActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибака при загруске пользователей!' })
        }
    }
}