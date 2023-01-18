import {combineReducers} from "redux";
import {useReducer} from "./useReducer";

export const rootReducer = combineReducers({
    user: useReducer
})

export type RootState = ReturnType<typeof rootReducer>