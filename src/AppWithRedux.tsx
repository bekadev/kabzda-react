import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {UserList} from "./components/ReduxComponents/UserList";
import {TodoList} from "./components/ReduxComponents/TodoList";




function AppWithRedux() {
    const dispatch = useDispatch();

    const cash = useSelector(state => state)
    console.log(cash)

    return (
        <>
            <UserList/>
            <hr/>
            <TodoList/>
        </>
    )
}

export default AppWithRedux;
