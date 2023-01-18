import {combineReducers} from "redux";
import {useReducer} from "./useReducer";
import {todoReducer} from "./todoReducer";

export const rootReducer = combineReducers({
    user: useReducer,
    todo: todoReducer

})

export type RootState = ReturnType<typeof rootReducer>